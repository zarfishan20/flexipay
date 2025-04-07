const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap'); // Updated import

// Create a writable stream for the sitemap.xml file
const sitemapStream = new SitemapStream({ hostname: 'https://flexipaysystems.com' });

const links = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/services', changefreq: 'weekly', priority: 0.7 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/quote', changefreq: 'weekly', priority: 0.7 },
  // Add more URLs as needed
];

// Pipe the sitemapStream to the output file
streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), data);
});

// Adding URLs to the sitemap
links.forEach(link => {
  sitemapStream.write(link);
});

// End the stream after writing all the links
sitemapStream.end();
