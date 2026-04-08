const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Remove duplicate FAQ array (lines 17539-17546)
console.log('Removing duplicate FAQ array...');
console.log('Line 17538:', lines[17538]);
console.log('Line 17539:', lines[17539]);
console.log('Line 17546:', lines[17546]);

lines.splice(17539, 8); // Remove 8 lines (17539-17546)

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed! File now has', lines.length, 'lines');
