const fs = require('fs');
const iconv = require('iconv-lite');

// Read as raw buffer
const buffer = fs.readFileSync('src/data/blogs.ts');

// Decode as UTF-8 (correct encoding)
const decoded = iconv.decode(buffer, 'utf8');
const reencoded = iconv.encode(decoded, 'utf8');

// Write back
fs.writeFileSync('src/data/blogs.ts', reencoded);

console.log('File re-encoded properly as UTF-8');
