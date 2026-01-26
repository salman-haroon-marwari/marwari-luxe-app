const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function getAllTsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    
    if (stat && stat.isDirectory()) {
      results = [...results, ...getAllTsFiles(file)];
    } else if (path.extname(file) === '.tsx') {
      results.push(file);
    }
  });
  
  return results;
}

// Get all .tsx files in the src/app directory
const tsxFiles = getAllTsFiles(path.join(__dirname, '../src/app'));

console.log(`Found ${tsxFiles.length} .tsx files to check`);

// Regex to match canonical URLs with www
const canonicalRegex = /(canonical:\s*'https:\/\/)www(\.marwariluxe\.com[^']*)/g;

// Regex to match OpenGraph URLs with www
const ogUrlRegex = /(url:\s*'https:\/\/)www(\.marwariluxe\.com[^']*)/g;

// Regex to match image URLs with www
const imageUrlRegex = /(https:\/\/www\.marwariluxe\.com\/og-image\.jpg)/g;

let updatedFiles = 0;

// Process each file
tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file contains www canonical URLs
    if (canonicalRegex.test(content) || ogUrlRegex.test(content)) {
      // Reset regex state
      canonicalRegex.lastIndex = 0;
      
      // Replace www with non-www for canonical URLs
      let updatedContent = content.replace(canonicalRegex, '$1$2');
      
      // Replace www with non-www for OpenGraph URLs
      updatedContent = updatedContent.replace(ogUrlRegex, '$1$2');
      
      // Replace www with non-www for image URLs
      updatedContent = updatedContent.replace(imageUrlRegex, '$1$2');
      
      // Write updated content back to file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      
      console.log(`Updated: ${filePath}`);
      updatedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Updated ${updatedFiles} files with non-www canonical URLs`);