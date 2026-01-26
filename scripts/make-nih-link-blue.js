const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Replace the NIH figcaption with a clickable link
const originalText = '<figcaption>Link: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6586803/ (NIH study on ashwagandha and cortisol reduction)</figcaption>';

const newText = '<figcaption>Link: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6586803/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">NIH study on ashwagandha and cortisol reduction</a></figcaption>';

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('NIH link has been made clickable and blue!');