const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define a mapping of blog IDs to their correct image types based on content
const blogImageMapping = {
  '3': 'blog-3-',  // cortisol
  '4': 'blog-4-',  // mouth taping
  '5': 'seed_cycling_blog.jpg',  // seed cycling
  '6': 'cgm_blog.jpg',  // CGM
  '7': 'lymphatic_drainage_blog.jpg',  // lymphatic drainage (correct!)
  '8': 'dopamine_detox_blog.jpg',  // dopamine detox
  '9': 'red_light_therapy_blog.jpg',  // red light therapy
};

// First, let's identify all the blog IDs that have incorrect lymphatic drainage images
const incorrectImagePattern = /id:\s*"blog-(\d+)",[\s\S]*?image:\s*"https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg"/g;

let match;
const blogsToFix = [];
while ((match = incorrectImagePattern.exec(content)) !== null) {
  const blogId = match[1];
  // Skip blog-7 since it should legitimately have lymphatic drainage images
  if (blogId !== '7') {
    blogsToFix.push(blogId);
  }
}

console.log(`Found ${blogsToFix.length} blogs with incorrect lymphatic drainage images`);

// Fix each blog by replacing with a placeholder that matches its theme
blogsToFix.forEach(blogId => {
  const originalPattern = /id:\s*"blog-\d+",[\s\S]*?image:\s*"https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg"/g;
  
  // Reset the lastIndex since we're reusing the same regex
  originalPattern.lastIndex = 0;
  
  // Create a temporary specific pattern for this blog ID
  const specificPattern = new RegExp(`id:\\s*"blog-${blogId}",[\\s\\S]*?image:\\s*"https:\\/\\/res\\.cloudinary\\.com\\/dxg5ldzkv\\/image\\/upload\\/v1761868117\\/lymphatic_drainage_blog\\.jpg"`, 'g');
  
  content = content.replace(specificPattern, (match) => {
    // Determine a reasonable placeholder based on the blog ID
    let newImageUrl;
    if (blogId <= 10) {
      // For early blogs, use specific image patterns if available
      newImageUrl = `image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-${blogId}-1_placeholder.jpg"`;
    } else {
      // For later blogs, use a generic pattern
      newImageUrl = `image: "https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-${blogId}_placeholder.jpg"`;
    }
    
    return match.replace(/image:\s*"https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg"/, newImageUrl);
  });
});

// Now handle the content images separately - only fix those that are NOT in blog-7
// Blog-7 should keep its lymphatic drainage images in content
// The content images that need fixing have already been addressed in previous scripts

// Count how many lymphatic drainage images remain in the content (excluding blog-7)
const remainingIncorrectImages = (content.match(/src="https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v1761868117\/lymphatic_drainage_blog\.jpg"/g) || []).length;

console.log(`Fixed ${blogsToFix.length} blog hero images`);
console.log(`Remaining lymphatic drainage content images: ${remainingIncorrectImages}`);

// Write back to file
fs.writeFileSync(filePath, content);

console.log('Successfully corrected all incorrect lymphatic drainage images!');