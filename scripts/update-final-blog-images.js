const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Generic pattern to match Cloudinary blog images
const cloudinaryPattern = /https:\/\/res\.cloudinary\.com\/dxg5ldzkv\/image\/upload\/v\d+\/[^"\s]+_blog\.jpg/g;

// Find all Cloudinary blog images
const cloudinaryMatches = content.match(cloudinaryPattern) || [];

// Remove duplicates and create mapping to appropriate Unsplash images
const uniqueCloudinaryUrls = [...new Set(cloudinaryMatches)];

console.log(`Found ${uniqueCloudinaryUrls.length} unique Cloudinary blog images to update:`);

uniqueCloudinaryUrls.forEach((url, index) => {
  console.log(`${index + 1}. ${url}`);
  
  // Map to appropriate Unsplash images based on blog type
  let unsplashUrl;
  
  if (url.includes('hiit')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('vitamin_d') || url.includes('vitamin-d')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1611593571343-6dc308310c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('gut') || url.includes('microbiome')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('collagen')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1623358781181-7c1d4a2b0f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('keto')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1498837134229-19e3ea33502b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('adaptogens')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('skin')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('inflammation')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('probiotics')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('autoimmune')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('beauty_sleep')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('fats')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1498837134229-19e3ea33502b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('detox')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('magnesium')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('insulin')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('breathwork')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('immune')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('dry_brushing')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('hpa') || url.includes('stress')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('antioxidants')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('blue_light')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else if (url.includes('forest')) {
    unsplashUrl = 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  } else {
    // Default fallback for any remaining images
    unsplashUrl = 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  }
  
  // Replace all instances of this Cloudinary URL
  const regex = new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const count = (content.match(regex) || []).length;
  if (count > 0) {
    console.log(`  -> Replacing ${count} instances with: ${unsplashUrl}`);
    content = content.replace(regex, unsplashUrl);
  }
});

// Write back to file
fs.writeFileSync(filePath, content);

console.log('\nAll Cloudinary blog images have been updated with relevant Unsplash images!');