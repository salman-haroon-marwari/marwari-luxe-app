const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Replace the Mayo Clinic figcaption with a clickable link
const originalText = '<figcaption>Link: https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress/art-20046037 (Mayo Clinic – world-renowned medical institution)</figcaption>';

const newText = '<figcaption>Link: <a href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress/art-20046037" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Mayo Clinic – world-renowned medical institution</a></figcaption>';

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Mayo Clinic link has been made clickable and blue!');