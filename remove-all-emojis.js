// -*- coding: utf-8 -*-
const fs = require('fs');

console.log("🔧 Removing all emojis from blogs.ts...\n");

// Read the file
let content = fs.readFileSync('src/data/blogs.ts', 'utf-8');

// Emoji regex pattern - matches all common emoji ranges
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F270}\u{238C}-\u{23FF}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F251}\u{1F30D}-\u{1F30F}\u{1F315}\u{1F31C}-\u{1F31E}\u{1F321}\u{1F324}-\u{1F32C}\u{1F336}\u{1F33D}-\u{1F33F}\u{1F341}-\u{1F342}\u{1F344}\u{1F346}-\u{1F34B}\u{1F34D}-\u{1F34F}\u{1F351}-\u{1F353}\u{1F355}-\u{1F35A}\u{1F35C}-\u{1F35E}\u{1F360}-\u{1F361}\u{1F363}-\u{1F36F}\u{1F371}-\u{1F373}\u{1F375}\u{1F377}-\u{1F378}\u{1F37A}-\u{1F37B}\u{1F37D}\u{1F37F}-\u{1F381}\u{1F383}-\u{1F385}\u{1F387}-\u{1F389}\u{1F38D}-\u{1F392}\u{1F396}-\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F39F}\u{1F3A0}-\u{1F3A4}\u{1F3A7}-\u{1F3AC}\u{1F3AE}-\u{1F3B0}\u{1F3B2}-\u{1F3B3}\u{1F3B5}-\u{1F3B7}\u{1F3B9}-\u{1F3BD}\u{1F3BF}-\u{1F3C1}\u{1F3C3}-\u{1F3C6}\u{1F3C8}-\u{1F3CA}\u{1F3CC}-\u{1F3D0}\u{1F3D3}-\u{1F3D5}\u{1F3D7}-\u{1F3DB}\u{1F3DD}-\u{1F3DF}\u{1F3E0}-\u{1F3E1}\u{1F3ED}-\u{1F3EF}\u{1F3F0}\u{1F3F4}\u{1F3F8}-\u{1F3FA}]/gu;

// Also remove variation selectors and zero-width joiners that are part of emoji sequences
const variationSelectors = /[\u{FE00}-\u{FE0F}]/gu;
const zeroWidthJoiner = /\u{200D}/gu;

let totalReplacements = 0;

// Remove emojis
const emojiMatches = content.match(emojiRegex);
const emojiCount = emojiMatches ? emojiMatches.length : 0;
if (emojiCount > 0) {
    totalReplacements += emojiCount;
    content = content.replace(emojiRegex, '');
    console.log(`✓ Removed ${emojiCount} emoji characters`);
}

// Remove variation selectors
const vsMatches = content.match(variationSelectors);
const vsCount = vsMatches ? vsMatches.length : 0;
if (vsCount > 0) {
    totalReplacements += vsCount;
    content = content.replace(variationSelectors, '');
    console.log(`✓ Removed ${vsCount} variation selectors`);
}

// Remove zero-width joiners
const zwjMatches = content.match(zeroWidthJoiner);
const zwjCount = zwjMatches ? zwjMatches.length : 0;
if (zwjCount > 0) {
    totalReplacements += zwjCount;
    content = content.replace(zeroWidthJoiner, '');
    console.log(`✓ Removed ${zwjCount} zero-width joiners`);
}

// Clean up any multiple spaces created by emoji removal
content = content.replace(/  +/g, ' ');

// Write back
fs.writeFileSync('src/data/blogs.ts', content, 'utf-8');

console.log(`\n✅ Total emojis removed: ${totalReplacements}`);
console.log('✨ All emojis have been removed from blogs.ts!');
