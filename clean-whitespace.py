# Clean trailing whitespace from Python file
with open('fix-all-emojis-comprehensive.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('fix-all-emojis-comprehensive-clean.py', 'w', encoding='utf-8') as f:
    for line in lines:
        f.write(line.rstrip() + '\n')

print("✅ File cleaned!")
