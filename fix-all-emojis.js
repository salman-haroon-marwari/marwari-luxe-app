// -*- coding: utf-8 -*-
const fs = require('fs');

console.log("🔧 Fixing emoji encoding in blogs.ts...\n");

// Read the file
let content = fs.readFileSync('src/data/blogs.ts', 'utf-8');

// Common UTF-8 mojibake patterns and their correct emoji replacements
const fixes = {
    // Separator lines
    'Ã¢"â‚¬Ã¢"â‚¬Ã¢"â‚¬Ã¢"â‚¬Ã¢"â‚¬Ã¢"â‚¬': '──────',
    'Ã¢"â‚¬': '─',

    // Bullet points
    'Ã¢â€¢Â': '●',

    // Warning emoji with variations
    'Ã¢Å¡Âï¸ÂÂ': '⚠️',
    'Ã¢Å¡Âï¸Â': '⚠️',
    'Ã¢Å¡Â': '⚠️',

    // Cross mark
    'Ã¢Â': '❌',

    // Check mark
    'Ã¢Å"': '✅',

    // Light bulb
    'Ã°Å¸â€™Â¡': '💡',

    // Target
    'Ã°Å¸Å½Â¯': '🎯',

    // Star
    'Ã¢ËœÂ': '⭐',

    // Arrow right
    'Ã¢â€ºÂ': '→',

    // Pointing finger
    'Ã°Å¸â€˜Â‰': '👉',

    // Brain
    'Ã°Å¸Â§Ã ': '🧠',

    // Fire
    'Ã°Å¸â€Â¥': '🔥',

    // Seedling
    'Ã°Å¸Å\'Â±': '🌱',

    // Heart
    'Ã¢ÂÂ¤ï': '❤️',

    // Water droplet
    'Ã°Å¸â€™Â§': '💧',

    // Moon
    'Ã°Å¸ÅŒÂ™': '🌙',

    // Additional seedling variant
    'Ã°Å¸Å½Â±': '🌱',

    // Apple
    'Ã°Å¸ÂÂŽ': '🍎',

    // Pill
    'Ã°Å¸â€™ÂŠ': '💊',

    // Microscope
    'Ã°Å¸â€Â¬': '🔬',

    // DNA
    'Ã°Å¸Â§Ã¬': '🧬',

    // Thumbs up
    'Ã°Å¸â€˜Â': '👍',

    // Calendar
    'Ã°Å¸â€œÂ': '📅',

    // Trophy
    'Ã°Å¸ÂÂ': '🏆',

    // Additional cleanup for stray characters after emojis (in order)
    'ï¸ÂÂ': '',
    'ï¸Â': '',
    'ï¸': '',
    'Â': '',
    '': '',
    ' ¢': '',
    '¤': '',
};

let totalReplacements = 0;

// Apply all fixes
Object.keys(fixes).forEach(broken => {
    const correct = fixes[broken];
    const regex = new RegExp(broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    const count = matches ? matches.length : 0;
    if (count > 0) {
        totalReplacements += count;
        content = content.split(broken).join(correct);
        console.log(`✓ Fixed: "${broken}" → "${correct}" (${count} occurrences)`);
    }
});

// Write back
fs.writeFileSync('src/data/blogs.ts', content, 'utf-8');

console.log(`\n✅ Total replacements: ${totalReplacements}`);
console.log('✨ Emoji fixing complete!');
