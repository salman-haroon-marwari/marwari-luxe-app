const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Remove duplicate lines 17539-17560 (0-indexed: 17538-17559)
console.log('Removing duplicate slugging introduction...');
console.log('Line 17538:', lines[17538]);
console.log('Line 17559:', lines[17559]);

lines.splice(17538, 22); // Remove 22 lines starting from line 17539

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed! File now has', lines.length, 'lines');
