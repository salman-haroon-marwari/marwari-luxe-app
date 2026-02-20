const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const blogsPath = path.join(__dirname, '..', 'src', 'data', 'blogs.ts');
let blogsContent = fs.readFileSync(blogsPath, 'utf8');

// Function to update blog content to follow standardized structure
function standardizeBlogContent(content) {
  // Remove H1 tags from content since title is handled separately
  let updatedContent = content.replace(/<h1[^>]*>.*?<\/h1>/gi, '');
  
  // Remove any existing date/read time displays
  updatedContent = updatedContent.replace(/<div[^>]*class="[^"]*date[^"]*"[^>]*>.*?<\/div>/gi, '');
  
  // Ensure consistent spacing
  updatedContent = updatedContent.replace(/<br\/?>/g, '<br/>');
  updatedContent = updatedContent.replace(/\n{3,}/g, '\n\n');
  
  return updatedContent;
}

// Find all blog posts and update their content
const blogRegex = /(\s*{\s*id:\s*"[^"]+",\s*title:\s*"[^"]+",[^}]*content:\s*`)([^`]*)(`[^}]*})/g;

let updatedBlogsContent = blogsContent.replace(blogRegex, (match, prefix, content, suffix) => {
  const updatedContent = standardizeBlogContent(content);
  return prefix + updatedContent + suffix;
});

// Write the updated content back to the file
fs.writeFileSync(blogsPath, updatedBlogsContent);

console.log('All blog posts have been updated to follow the standardized structure!');