const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Create a mapping of what each blog's images should be based on content
// Blog-4 (mouth taping) should have mouth taping related images, not lymphatic drainage
// Looking at the pattern from the attached changes, I need to fix the incorrect image assignments

// First, let's fix the incorrect image in blog-4 (mouth taping section)
// The image at line 2671 should be a mouth taping image, not lymphatic drainage
content = content.replace(
  /src='https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg' alt='mouth taping for sleep safe technique 2025'/g,
  "src='https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-1_t19bbt.jpg' alt='mouth taping for sleep safe technique 2025'"
);

// Second image in blog-4 (line 2791) 
content = content.replace(
  /src='https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg' alt='nasal breathing vs mouth breathing sleep benefits 2025'/g,
  "src='https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204468/blog-4-4_wlepip.jpg' alt='nasal breathing vs mouth breathing sleep benefits 2025'"
);

// Third image in blog-4 (line 2844) - this is a placeholder that should be replaced
content = content.replace(
  /src='https:\/\/placehold\.co\/1600x900\/eee\/333\?text=Before\+After\+Sleep\+Score\+Comparison' alt='mouth taping before and after sleep improvement'/g,
  "src='https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-2_ttgelw.jpg' alt='mouth taping before and after sleep improvement'"
);

// Also fix the hero image for blog-4 if it exists
// Find the blog-4 entry and fix its image property
content = content.replace(
  /id: "blog-4",[\s\S]*?image: "https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v\d+\/[^"]*"/g,
  (match) => {
    // Replace the image URL within the matched blog-4 entry
    return match.replace(
      /image: "https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v\d+\/[^"]*"/,
      'image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-1_t19bbt.jpg"'
    );
  }
);

console.log('Fixed blog-4 (mouth taping) images to use correct URLs');

// Fix other blogs that may have incorrect image assignments
// Look for any lymphatic drainage images in non-lymphatic blogs and fix them
content = content.replace(
  /(<section id="[^"]*mouth[^"]*">[\s\S]*?)src="https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg"([^>]*>[\s\S]*?<\/section>)/g,
  (match, before, after) => {
    // Replace with mouth taping images instead
    return before + 'src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-1_t19bbt.jpg"' + after;
  }
);

// Write back to file
fs.writeFileSync(filePath, content);

console.log('Fixed all incorrect blog images!');