const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Revert blog-1 images to original
content = content.replace(
  'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193459/blog-1-1_zvzuzd.jpg',
  'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-2_d5ou2o.jpg'
);

// Also need to fix the alt text to match
content = content.replace(
  'alt="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193459/blog-1-1_zvzuzd.jpg"',
  'alt="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-2_d5ou2o.jpg"'
);

// Check if there are any other discrepancies and revert them
// Revert all other blog images back to original Cloudinary URLs
const revertMappings = [
  // Blog-1
  { current: 'blog-1-1_zvzuzd.jpg', original: 'blog-1-2_d5ou2o.jpg' },
  
  // Other mappings if needed
];

// Apply all revert mappings
revertMappings.forEach(mapping => {
  const currentRegex = new RegExp(mapping.current.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(currentRegex, mapping.original);
});

console.log('Reverted blog-1 image back to original URL');

// Write back to file
fs.writeFileSync(filePath, content);

console.log('Blog images reverted to original state!');