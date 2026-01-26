const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define the mapping from Unsplash back to original Cloudinary URLs
const imageReversions = [
  // Lymphatic drainage images
  {
    unsplash: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/lymphatic_drainage_blog.jpg'
  },
  
  // Dopamine detox images
  {
    unsplash: 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/dopamine_detox_blog.jpg'
  },
  
  // Red light therapy images
  {
    unsplash: 'https://images.unsplash.com/photo-1623358781181-7c1d4a2b0f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/red_light_therapy_blog.jpg'
  },
  
  // Weight loss images
  {
    unsplash: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-2_d5ou2o.jpg'
  },
  {
    unsplash: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-3_opfzn9.jpg'
  },
  {
    unsplash: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-4_ytbb8b.jpg'
  },
  
  // Cold plunge images
  {
    unsplash: 'https://images.unsplash.com/photo-1598133893779-7a0d7da03b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769194665/blog-2-2_z6mnph.jpg'
  },
  
  // Cortisol images
  {
    unsplash: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769201361/blog-3-2_ck1hoe.jpg'
  },
  
  // Mouth taping images
  {
    unsplash: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-1_t19bbt.jpg'
  },
  
  // Seed cycling images
  {
    unsplash: 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/seed_cycling_blog.jpg'
  },
  
  // CGM images
  {
    unsplash: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    cloudinary: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/cgm_blog.jpg'
  }
];

// Perform reversions
imageReversions.forEach(reversion => {
  const regex = new RegExp(reversion.unsplash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const count = (content.match(regex) || []).length;
  if (count > 0) {
    console.log(`Reverting ${count} instances of: ${reversion.unsplash}`);
    console.log(`Back to: ${reversion.cloudinary}`);
    content = content.replace(regex, reversion.cloudinary);
  }
});

// Write back to file
fs.writeFileSync(filePath, content);

console.log('All images have been reverted to original Cloudinary URLs!');