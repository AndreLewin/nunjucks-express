const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = 3000;

// Set up Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  express: app
});

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up a simple route
app.get('/', (req, res) => {
  res.render('child.njk', { variable: 123 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});