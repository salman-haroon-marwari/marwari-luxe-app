const fs = require('fs');
const path = require('path');

// Function to get all actual routes by scanning the file system
function getActualRoutes() {
  const routes = [];
  const appDir = path.join(__dirname, '..', 'src', 'app');
  
  // Function to recursively scan directories
  function scanDirectory(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Skip API routes and other special directories
          if (!['api', 'components', 'data', 'config'].includes(item)) {
            const routePath = basePath ? `${basePath}/${item}` : `/${item}`;
            
            // Check if this directory has a page.tsx file
            const pageFile = path.join(itemPath, 'page.tsx');
            if (fs.existsSync(pageFile)) {
              // Special case for root page
              if (routePath === '/page') {
                routes.push('/');
              } else {
                routes.push(routePath);
              }
            }
            
            // Recursively scan subdirectories
            scanDirectory(itemPath, routePath === '/' ? '' : routePath);
          }
        }
      });
    } catch (error) {
      console.log(`Error scanning directory ${dir}: ${error.message}`);
    }
  }
  
  scanDirectory(appDir);
  return [...new Set(routes)]; // Remove duplicates
}

// Get actual routes
const actualRoutes = getActualRoutes();

console.log('Checking for broken links...');
console.log(`Found ${actualRoutes.length} actual routes in the application.`);

let brokenLinks = 0;
let workingLinks = 0;

// Function to check if a page file exists
function checkPageExists(link) {
  // Convert link to file path
  let filePath;
  
  if (link === '/') {
    filePath = path.join(__dirname, '../src/app/page.tsx');
  } else {
    // Remove leading slash and convert to file path
    const cleanLink = link.substring(1);
    filePath = path.join(__dirname, '../src/app', cleanLink, 'page.tsx');
  }
  
  // Check if file exists
  return fs.existsSync(filePath);
}

// Check each route
actualRoutes.forEach((route, index) => {
  console.log(`Checking route ${index + 1}/${actualRoutes.length}: ${route}`);
  
  if (checkPageExists(route)) {
    console.log(`✓ ${route} - OK`);
    workingLinks++;
  } else {
    console.log(`✗ ${route} - BROKEN`);
    brokenLinks++;
  }
});

// Also check the sitemap to make sure it matches actual routes
console.log('\nChecking sitemap consistency...');
try {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const sitemapUrls = [];
    
    // Extract URLs from sitemap
    const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (urlMatches) {
      urlMatches.forEach(match => {
        const url = match.replace('<loc>', '').replace('</loc>', '');
        // Extract path from full URL
        try {
          const urlObj = new URL(url);
          sitemapUrls.push(urlObj.pathname);
        } catch (e) {
          // If it's not a valid URL, skip it
        }
      });
    }
    
    console.log(`Sitemap contains ${sitemapUrls.length} URLs`);
    
    // Check for URLs in sitemap that don't exist
    const missingUrls = sitemapUrls.filter(url => !actualRoutes.includes(url) && url !== '/');
    if (missingUrls.length > 0) {
      console.log('Warning: The following URLs are in sitemap but do not exist:');
      missingUrls.forEach(url => console.log(`  - ${url}`));
    } else {
      console.log('✓ All URLs in sitemap exist');
    }
    
    // Check for routes that are not in sitemap
    const missingRoutes = actualRoutes.filter(route => !sitemapUrls.includes(route));
    if (missingRoutes.length > 0) {
      console.log('Warning: The following routes exist but are not in sitemap:');
      missingRoutes.forEach(route => console.log(`  - ${route}`));
    } else {
      console.log('✓ All existing routes are in sitemap');
    }
  }
} catch (error) {
  console.log(`Error checking sitemap: ${error.message}`);
}

console.log('\nLink check complete!');
console.log(`Working links: ${workingLinks}`);
console.log(`Broken links: ${brokenLinks}`);

if (brokenLinks === 0) {
  console.log('Result: All internal links are working correctly.');
} else {
  console.log(`Result: Found ${brokenLinks} broken link(s).`);
  process.exit(1);
}