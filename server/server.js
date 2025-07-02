const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const query = req.query.q || 'aesthetic wallpaper';

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(`https://www.google.com/imghp`, { waitUntil: 'networkidle2' });

    await page.type('input[name="q"]', query);
    await page.keyboard.press('Enter');
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await new Promise(res => setTimeout(res, 1000));
    }

    const imageLinks = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .map(img => img.src || img.getAttribute('data-src'))
        .filter(src => src && src.startsWith('http') && !src.includes('gstatic'))
        .slice(0, 10);
    });

    await browser.close();

    if (!imageLinks.length) {
      return res.status(404).json({ error: 'No images found' });
    }

    res.json({ images: imageLinks });
  } catch (err) {
    console.error('❌ Scraping error:', err.message);
    if (browser) await browser.close();
    res.status(500).json({ error: 'Failed to scrape Google Images' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Scraper running at http://localhost:${PORT}`);
});
