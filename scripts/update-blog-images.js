const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define image mappings
const imageReplacements = [
  // Lymphatic drainage images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/lymphatic_drainage_blog.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  // Dopamine detox images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/dopamine_detox_blog.jpg',
    new: 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  // Red light therapy images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/red_light_therapy_blog.jpg',
    new: 'https://images.unsplash.com/photo-1623358781181-7c1d4a2b0f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

// Perform replacements
imageReplacements.forEach(replacement => {
  const regex = new RegExp(replacement.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(regex, replacement.new);
});

// Write back to file
fs.writeFileSync(filePath, content);

console.log('Blog images updated successfully!');