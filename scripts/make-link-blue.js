const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Replace the figcaption with a clickable link
const originalText = '<figcaption>Link: https://med.stanford.edu/news/all-news/2023/07/cortisol-stress-hormone.html (Stanford Medicine – authoritative medical research institution)</figcaption>';

const newText = '<figcaption>Link: <a href="https://med.stanford.edu/news/all-news/2023/07/cortisol-stress-hormone.html" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Stanford Medicine – authoritative medical research institution</a></figcaption>';

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Link has been made clickable and blue!');