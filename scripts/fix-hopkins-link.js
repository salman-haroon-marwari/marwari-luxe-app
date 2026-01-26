const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Fix the Johns Hopkins link
// The current link looks like: "<a href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing' target='_blank' rel='noopener'>Link 3: https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing (Johns Hopkins)</a>"
// It should be: "<a href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 3: Johns Hopkins</a>"

const originalText = "<a href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing' target='_blank' rel='noopener'>Link 3: https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing (Johns Hopkins)</a>";

const newText = "<a href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-risks-of-mouth-breathing' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 3: Johns Hopkins</a>";

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Johns Hopkins link has been fixed and made clickable!');