const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Remove stray FAQ item at line 17539
console.log('Removing stray FAQ item...');
console.log('Line 17538:', lines[17538]);
console.log('Line 17539:', lines[17539]);
console.log('Line 17540:', lines[17540]);

lines.splice(17539, 1); // Remove 1 line

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed! File now has', lines.length, 'lines');
console.log('New line 17539:', lines[17539]);
