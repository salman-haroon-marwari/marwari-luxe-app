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

// Regex to match URLs with missing domains
const missingDomainRegex = /(url:\s*'https?:\/\/)\.(marwariluxe\.com[^\']*)/g;

// Regex to match canonical URLs with missing domains
const missingCanonicalDomainRegex = /(canonical:\s*'https?:\/\/)\.(marwariluxe\.com[^\']*)/g;

let updatedFiles = 0;

// Process each file
tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file contains URLs with missing domains
    if (missingDomainRegex.test(content) || missingCanonicalDomainRegex.test(content)) {
      // Reset regex state
      missingDomainRegex.lastIndex = 0;
      
      // Fix URLs with missing domains
      let updatedContent = content.replace(missingDomainRegex, '$1$2');
      
      // Fix canonical URLs with missing domains
      updatedContent = updatedContent.replace(missingCanonicalDomainRegex, '$1$2');
      
      // Write updated content back to file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      
      console.log(`Fixed missing domains in: ${filePath}`);
      updatedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed missing domains in ${updatedFiles} files`);