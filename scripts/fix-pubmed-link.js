const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Fix the malformed PubMed link
// The current link looks like: "Link 1: https://pubmed.ncbi.nlm.nih.gov/36740201/ (PubMed – Sleep Medicine Reviews)</a>"
// It should be: "<a href='https://pubmed.ncbi.nlm.nih.gov/36740201/' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 1: PubMed – Sleep Medicine Reviews</a>"

const originalText = "Link 1: https://pubmed.ncbi.nlm.nih.gov/36740201/ (PubMed – Sleep Medicine Reviews)</a>";

const newText = "<a href='https://pubmed.ncbi.nlm.nih.gov/36740201/' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 1: PubMed – Sleep Medicine Reviews</a>";

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('PubMed link has been fixed and made clickable!');