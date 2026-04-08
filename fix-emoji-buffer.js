const fs = require('fs');

// Read as buffer to preserve exact bytes
const buffer = fs.readFileSync('src/data/blogs.ts');

// The broken emoji sequence as it appears in the file (UTF-8 misinterpreted)
// This is what âš ️ actually is in the file
const brokenSequences = [
  // Warning emoji variations
  { from: Buffer.from('âš ', 'utf8'), to: Buffer.from('⚠️', 'utf8') },
  { from: Buffer.from('âš ️', 'utf8'), to: Buffer.from('⚠️', 'utf8') },
  
  // Cross mark
  { from: Buffer.from('âŒ', 'utf8'), to: Buffer.from('❌', 'utf8') },
  
  // Check mark  
  { from: Buffer.from('âœ"', 'utf8'), to: Buffer.from('✅', 'utf8') },
];

let modifiedBuffer = buffer;
let totalReplacements = 0;

brokenSequences.forEach(({ from, to }) => {
  let found = true;
  while (found) {
    const index = modifiedBuffer.indexOf(from);
    if (index !== -1) {
      totalReplacements++;
      // Replace the bytes
      const before = modifiedBuffer.slice(0, index);
      const after = modifiedBuffer.slice(index + from.length);
      modifiedBuffer = Buffer.concat([before, to, after]);
      console.log(`Fixed 1x at position ${index}`);
    } else {
      found = false;
    }
  }
});

if (totalReplacements > 0) {
  fs.writeFileSync('src/data/blogs.ts', modifiedBuffer);
  console.log(`\n Fixed ${totalReplacements} emoji(s)!`);
} else {
  console.log('No broken emojis found.');
}
