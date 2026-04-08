// -*- coding: utf-8 -*-
const fs = require('fs');

console.log("🔧 Deep cleaning corrupted characters from blogs.ts...\n");

// Read the file
let content = fs.readFileSync('src/data/blogs.ts', 'utf-8');

let totalReplacements = 0;

// Remove replacement character ()
const replacementChar = '';
const matches1 = content.match(new RegExp(replacementChar, 'g'));
const count1 = matches1 ? matches1.length : 0;
if (count1 > 0) {
    totalReplacements += count1;
    content = content.split(replacementChar).join('');
    console.log(`✓ Removed ${count1} replacement characters`);
}

// Remove plus-minus sign that's part of corrupted emoji
const plusMinus = '±';
const matches2 = content.match(new RegExp(plusMinus, 'g'));
const count2 = matches2 ? matches2.length : 0;
if (count2 > 0) {
    totalReplacements += count2;
    content = content.split(plusMinus).join('');
    console.log(`✓ Removed ${count2} plus-minus signs`);
}

// Clean up multiple spaces created by removal
content = content.replace(/  +/g, ' ');

// Write back
fs.writeFileSync('src/data/blogs.ts', content, 'utf-8');

console.log(`\n✅ Total corrupted characters removed: ${totalReplacements}`);
console.log('✨ Deep cleanup complete!');
