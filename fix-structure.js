const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Fix structure: remove stray FAQ and add shareButtons opening brace
console.log('Fixing slugging blog structure...');
console.log('Line 17537:', lines[17537]);
console.log('Line 17538:', lines[17538]);
console.log('Line 17539:', lines[17539]);

// Remove line 17539 (stray FAQ)
lines.splice(17539, 1);

// Insert shareButtons opening brace after the comma
lines.splice(17539, 0, '    shareButtons: {');

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed! File now has', lines.length, 'lines');
console.log('New line 17539:', lines[17539]);
console.log('New line 17540:', lines[17540]);
