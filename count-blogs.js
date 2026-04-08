const fs = require('fs');
const content = fs.readFileSync('./src/data/blogs.ts', 'utf8');

// Find all blog post objects by looking for id: "xxx" at the start of a blog object
const blogPattern = /{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*title:/g;
const matches = content.match(blogPattern);
console.log('Total blog posts found:', matches ? matches.length : 0);

// Extract all blog IDs
if (matches) {
  const ids = matches.map(m => m.match(/id:\s*"([^"]+)"/)[1]);
  console.log('\nBlog Post IDs:');
  ids.forEach((id, index) => {
    console.log(`${index + 1}. ${id}`);
  });
}
