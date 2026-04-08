# -*- coding: utf-8 -*-
"""
Comprehensive Emoji Fix Tool for Marwari-Luxe App
Fixes all UTF-8 mojibake (encoding corruption) in blogs.ts file
"""
import re

print("🔧 Comprehensive Emoji Fix for blogs.ts...\n")

try:
    with open('src/data/blogs.ts', 'r', encoding='utf-8') as f:
        content = f.read()
except FileNotFoundError:
    print("❌ Error: src/data/blogs.ts not found!")
    exit(1)

FIXES = {
    'Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"Ã¢"â€"': '──────',
    'Ã¢"â€"': '─',
    'Ã¢â€¢Â': '●',
    'Ã¢Å¡Âï¸ÂÂ': '⚠️',
    'Ã¢Å¡Âï¸Â': '⚠️',
    'Ã¢Å¡Â': '⚠️',
    'Ã¢Â': '❌',
    'Ã¢Å"': '✅',
    'Ã°Å¸â€™Â¡': '💡',
    'Ã°Å¸Å½Â¯': '🎯',
    'Ã¢ËœÂ': '⭐',
    'Ã¢â€ºÂ': '→',
    'Ã°Å¸â€˜Â‰': '👉',
    'Ã°Å¸Â§Ã ': '🧠',
    'Ã°Å¸â€Â¥': '🔥',
    'Ã°Å¸Å\'Â±': '🌱',
    'Ã¢ÂÂ¤ï': '❤️',
    'Ã°Å¸â€™Â§': '💧',
    'Ã°Å¸ÅŒÂ™': '🌙',
    'Ã°Å¸Å½Â±': '🌱',
    'Ã°Å¸ÂÂŽ': '🍎',
    'Ã°Å¸â€™ÂŠ': '💊',
    'Ã°Å¸â€Â¬': '🔬',
    'Ã°Å¸Â§Ã¬': '🧬',
    'Ã°Å¸â€˜Â': '👍',
    'Ã°Å¸â€œÂ': '📅',
    'Ã°Å¸ÂÂ': '🏆',
    'ï¸ÂÂ': '',
    'ï¸Â': '',
    'ï¸': '',
    'Â': '',
    '': '',
    ' ¢': '',
    '¤': '',
}

total_replacements = 0
fixes_applied = []

print("=" * 60)
print("Starting comprehensive emoji fix...")
print("=" * 60 + "\n")

for broken, correct in FIXES.items():
    pattern = re.escape(broken)
    matches = re.findall(pattern, content)
    count = len(matches)

    if count > 0:
        total_replacements += count
        content = content.replace(broken, correct)
        fixes_applied.append((broken, correct, count))
        print(f'✓ Fixed: "{broken}" → "{correct}" ({count} occurrences)')

print("\n" + "=" * 60)

if total_replacements > 0:
    with open('src/data/blogs.ts', 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n✅ Total replacements: {total_replacements}")
    print(f"✨ Fixed {len(fixes_applied)} emoji patterns!")
else:
    print("\n✅ No emoji fixes needed - file is already clean!")

print("\n📊 Summary:")
print(f"   - Patterns checked: {len(FIXES)}")
print(f"   - Patterns fixed: {len(fixes_applied)}")
print(f"   - Total replacements: {total_replacements}")
print("\n✨ Emoji fixing complete!")
