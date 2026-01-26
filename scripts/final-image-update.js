const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the final remaining Cloudinary image
const oldImageUrl = 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1762860508/blogb-6_sz2n1w.png';
const newImageUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

const regex = new RegExp(oldImageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
const count = (content.match(regex) || []).length;

if (count > 0) {
  console.log(`Updating ${count} instances of: ${oldImageUrl}`);
  content = content.replace(regex, newImageUrl);
  console.log(`Replaced with: ${newImageUrl}`);
  
  // Write back to file
  fs.writeFileSync(filePath, content);
  console.log('Final image updated successfully!');
} else {
  console.log('No remaining Cloudinary images found.');
}