const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Define the exact original text (with proper line endings)
const originalText = `    image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-1-1_placeholder.jpg"
    // Note: This should be changed to appropriate lymphatic drainage image,`;

// Define the replacement text
const newText = '    image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/lymphatic_drainage_blog.jpg",';

// Perform the replacement
content = content.replace(originalText, newText);

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('Fixed blog-7 hero image!');