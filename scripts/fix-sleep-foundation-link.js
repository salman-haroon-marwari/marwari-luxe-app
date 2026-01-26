const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Fix the Sleep Foundation link
// The current link looks like: "<a href='https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep' target='_blank' rel='noopener'>Link 2: https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep (Sleep Foundation)</a>"
// It should be: "<a href='https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 2: Sleep Foundation</a>"

const originalText = "<a href='https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep' target='_blank' rel='noopener'>Link 2: https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep (Sleep Foundation)</a>";

const newText = "<a href='https://www.sleepfoundation.org/sleep-hygiene/mouth-taping-for-sleep' style='color: blue; text-decoration: underline;' target='_blank' rel='noopener'>Link 2: Sleep Foundation</a>";

content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Sleep Foundation link has been fixed and made clickable!');