// sitemap-builder.js
const { Sitemap } = require('react-router-sitemap');
const fs = require('fs');

function generateSitemap() {
  return new Sitemap(require('./src/App').default)
    .build('https://flexipaysystems.com')
    .save('./public/sitemap.xml');
}

generateSitemap();
