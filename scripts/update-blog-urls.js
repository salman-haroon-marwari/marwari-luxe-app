const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const blogsFilePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(blogsFilePath, 'utf8');

// Replace all www URLs with non-www URLs
const updatedContent = content.replace(/https:\/\/www\.marwariluxe\.com/g, 'https://marwariluxe.com');

// Write updated content back to file
fs.writeFileSync(blogsFilePath, updatedContent, 'utf8');

console.log('Updated all www URLs in blogs.ts to non-www URLs');