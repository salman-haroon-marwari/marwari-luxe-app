const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Fix the flaxseed study link
// The current link looks like: '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8308335/" target="_blank" rel="noopener">A 2021 study on flaxseed lignans and estrogen metabolism – published in Nutrients journal</a>'
// It should be: '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8308335/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">A 2021 study on flaxseed lignans and estrogen metabolism – published in Nutrients journal</a>'

const originalText = '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8308335/" target="_blank" rel="noopener">A 2021 study on flaxseed lignans and estrogen metabolism – published in Nutrients journal</a>';

const newText = '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8308335/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">A 2021 study on flaxseed lignans and estrogen metabolism – published in Nutrients journal</a>';

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Flaxseed study link has been fixed and made clickable with blue styling!');