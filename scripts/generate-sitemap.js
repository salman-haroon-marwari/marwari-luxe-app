const fs = require('fs');
const path = require('path');

// Read the existing sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Remove placeholder URLs for products and blogs
// Remove all individual product URLs
// Convert all www URLs to non-www
sitemapContent = sitemapContent.replace(/https:\/\/www\.marwariluxe\.com/g, 'https://marwariluxe.com');

// Remove placeholder URLs for products and blogs
// Remove all individual product URLs
sitemapContent = sitemapContent.replace(/\s*<url>[\s\S]*?<loc>https:\/\/marwariluxe\.com\/products\/[^<]+<\/loc>[\s\S]*?<\/url>/g, '');

// Remove all individual blog URLs
// Remove all individual blog URLs
sitemapContent = sitemapContent.replace(/\s*<url>[\s\S]*?<loc>https:\/\/marwariluxe\.com\/blogs\/[^<]+<\/loc>[\s\S]*?<\/url>/g, '');

// Write the updated sitemap
fs.writeFileSync(sitemapPath, sitemapContent);

console.log('Sitemap updated successfully!');
console.log('Removed placeholder URLs for products and blogs.');