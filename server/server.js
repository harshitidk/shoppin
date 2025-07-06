const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(function(req, res, next) {
  console.log("middleware");
  next();
});

// Route
app.get("/profile/:username", function(req, res) {
  res.send(`hello world ${req.params.username}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
