/**
 * This script pings search engines to notify them about our sitemap.
 * Run it after deploying the site or making significant changes.
 */

const https = require('https');

const sitemap_url = encodeURIComponent('https://www.pulizieperricchi.it/sitemap.xml');
const search_engines = [
  `https://www.google.com/ping?sitemap=${sitemap_url}`,
  `https://www.bing.com/ping?sitemap=${sitemap_url}`,
  `https://webmaster.yandex.com/ping?sitemap=${sitemap_url}`
];

console.log('Submitting sitemap to search engines...');

// Function to ping each search engine
search_engines.forEach(url => {
  https.get(url, (res) => {
    console.log(`Pinged ${url.split('?')[0]}: Status ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Error pinging ${url.split('?')[0]}: ${e.message}`);
  });
});

console.log('Sitemap submission completed.');
