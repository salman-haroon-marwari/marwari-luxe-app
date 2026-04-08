const fs = require('fs');
const iconv = require('iconv-lite');

// Read as raw buffer
const buffer = fs.readFileSync('src/data/blogs.ts');

// Try decoding as Windows-1252 (which often causes this issue) then re-encode as UTF-8
const decoded = iconv.decode(buffer, 'windows1252');
const reencoded = iconv.encode(decoded, 'utf8');

// Write back
fs.writeFileSync('src/data/blogs.ts', reencoded);

console.log('File re-encoded from Windows-1252 to UTF-8');
