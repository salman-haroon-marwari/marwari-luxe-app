// Fix remaining emojis in blogs.ts - Using Unicode escape codes
const fs = require('fs');

console.log("🔧 Fixing remaining emojis...\n");

let content = fs.readFileSync('src/data/blogs.ts', 'utf-8');

// Use Unicode code points instead of emoji literals
const fixes = {
    '\u2500': '\u2500',  // BOX DRAWINGS LIGHT HORIZONTAL (─)
    '\u25CF': '\u25CF',  // BLACK CIRCLE (●)
    '\u26A0\uFE0F': '\u26A0\uFE0F',  // WARNING SIGN + VARIATION SELECTOR (⚠️)
    '\u274C': '\u274C',  // CROSS MARK (❌)
    '\u2705': '\u2705',  // WHITE HEAVY CHECK MARK (✅)
    '\uD83D\uDCA1': '\uD83D\uDCA1',  // LIGHT BULB (💡)
    '\uD83C\uDFAF': '\uD83C\uDFAF',  // DIRECT TARGET (🎯)
    '\u2B50': '\u2B50',  // WHITE MEDIUM STAR (⭐)
    '\u2192': '\u2192',  // RIGHTWARDS ARROW (→)
    '\uD83D\uDC49': '\uD83D\uDC49',  // WHITE LEFT POINTING BACKHAND INDEX (👉)
    '\uD83E\uDDE0': '\uD83E\uDDE0',  // BRAIN (🧠)
    '\uD83D\uDD25': '\uD83D\uDD25',  // FIRE (🔥)
    '\uD83C\uDF31': '\uD83C\uDF31',  // SEEDLING (🌱)
    '\u2764\uFE0F': '\u2764\uFE0F',  // HEART + VARIATION SELECTOR (❤️)
    '\uD83D\uDCA7': '\uD83D\uDCA7',  // DROPLET (💧)
    '\uD83C\uDF19': '\uD83C\uDF19',  // CRESCENT MOON (🌙)
    '\uD83C\uDF4E': '\uD83C\uDF4E',  // RED APPLE (🍎)
    '\uD83D\uDC8A': '\uD83D\uDC8A',  // PILL (💊)
    '\uD83D\uDD2C': '\uD83D\uDD2C',  // MICROSCOPE (🔬)
    '\uD83E\uDDEC': '\uD83E\uDDEC',  // DNA DOUBLE HELIX (🧬)
    '\uD83D\uDC4D': '\uD83D\uDC4D',  // THUMBS UP SIGN (👍)
    '\uD83D\uDCC5': '\uD83D\uDCC5',  // CALENDAR (📅)
    '\uD83C\uDFC6': '\uD83C\uDFC6',  // TROPHY (🏆)
};

let totalReplacements = 0;

Object.keys(fixes).forEach(key => {
    const value = fixes[key];
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    const count = matches ? matches.length : 0;
    if (count > 0) {
        totalReplacements += count;
        content = content.split(key).join(value);
        console.log(`✓ Normalized: ${key.charCodeAt(0).toString(16)} (${count} occurrences)`);
    }
});

// Remove Unicode replacement character
const replacementChar = '\uFFFD';
const regex = new RegExp(replacementChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
const matches = content.match(regex);
const count = matches ? matches.length : 0;
if (count > 0) {
    totalReplacements += count;
    content = content.split(replacementChar).join('');
    console.log(`✓ Removed replacement characters: ${count} occurrences`);
}

fs.writeFileSync('src/data/blogs.ts', content, 'utf-8');

console.log(`\n✅ Total replacements: ${totalReplacements}`);
console.log('✨ Emoji normalization complete!');
