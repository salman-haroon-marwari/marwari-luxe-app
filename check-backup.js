const fs = require('fs');
const content = fs.readFileSync('./blogs-backup.ts', 'utf8');
const blogPattern = /{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*title:/g;
const matches = content.match(blogPattern);
console.log('Total blogs in backup (commit 1ba805e):', matches ? matches.length : 0);

if (matches) {
  const ids = matches.map(m => m.match(/id:\s*"([^"]+)"/)[1]);
  console.log('\nBlog IDs from backup:');
  ids.forEach((id, index) => {
    console.log(`${index + 1}. ${id}`);
  });
}
