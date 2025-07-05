const functions = require('firebase-functions');
const cons = require('cors')({origin: true});

const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');

const scrapeMetatags = (text) => {
  const urls = Array.from(getUrls(text))
  const requests = urls.map(async url => {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const getMetatag = (name) =>
      $(`meta[name=${name}]`).attr('content'),
    
    return {
      url, 
      title: $('title').first().text(),
      favicon: $('link[rel="shortcut icon"]').attr('href'),
      description: $('meta[name=description]').attr('content'),
    }
  }
  );

  return Promise.all(requests);
}