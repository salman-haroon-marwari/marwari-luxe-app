# -*- coding: utf-8 -*-
import re

print("🔧 Fixing emoji encoding in blogs.ts...\n")

# Read the file
with open('src/data/blogs.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Common UTF-8 mojibake patterns and their correct emoji replacements
FIXES = {
    # Separator lines
    'Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"': '──────',
    'Ã¢"â€"': '─',

    # Bullet points
    'Ã¢â€¢Â': '●',

    # Warning emoji with variations
    'Ã¢Å¡Âï¸ÂÂ': '⚠️',
    'Ã¢Å¡Âï¸Â': '⚠️',
    'Ã¢Å¡Â': '⚠️',

    # Cross mark
    'Ã¢Â': '❌',

    # Check mark
    'Ã¢Å"': '✅',

    # Light bulb
    'Ã°Å¸â€™Â¡': '💡',

    # Target
    'Ã°Å¸Å½Â¯': '🎯',

    # Star
    'Ã¢ËœÂ': '⭐',

    # Arrow right
    'Ã¢â€ºÂ': '→',

    # Pointing finger
    'Ã°Å¸â€˜Â‰': '👉',

    # Brain
    'Ã°Å¸Â§Ã ': '🧠',

    # Fire
    'Ã°Å¸â€Â¥': '🔥',

    # Seedling
    'Ã°Å¸Å\'Â±': '🌱',

    # Heart
    'Ã¢ÂÂ¤ï': '❤️',

    # Water droplet
    'Ã°Å¸â€™Â§': '💧',

    # Moon
    'Ã°Å¸ÅŒÂ™': '🌙',

    # Additional seedling variant
    'Ã°Å¸Å½Â±': '🌱',

    # Apple
    'Ã°Å¸ÂÂŽ': '🍎',

    # Pill
    'Ã°Å¸â€™ÂŠ': '💊',

    # Microscope
    'Ã°Å¸â€Â¬': '🔬',

    # DNA
    'Ã°Å¸Â§Ã¬': '🧬',

    # Thumbs up
    'Ã°Å¸â€˜Â': '👍',

    # Calendar
    'Ã°Å¸â€œÂ': '📅',

    # Trophy
    'Ã°Å¸ÂÂ': '🏆',

    # Additional cleanup for stray characters after emojis (in order)
    'ï¸ÂÂ': '',
    'ï¸Â': '',
    'ï¸': '',
    'Â': '',
    '': '',
    ' ¢': '',
    '¤': '',
}

total_replacements = 0

# Apply all fixes
for broken, correct in FIXES.items():
    # Escape special regex characters
    pattern = re.escape(broken)
    matches = re.findall(pattern, content)
    count = len(matches)

    if count > 0:
        total_replacements += count
        content = content.replace(broken, correct)
        print(f'✓ Fixed: "{broken}" → "{correct}" ({count} occurrences)')

# Write back
with open('src/data/blogs.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\n✅ Total replacements: {total_replacements}')
print('✨ Emoji fixing complete!')
