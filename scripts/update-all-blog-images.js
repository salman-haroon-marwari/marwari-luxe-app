const fs = require('fs');
const path = require('path');

// Read the blogs.ts file
const filePath = path.join(__dirname, '../src/data/blogs.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define comprehensive image mappings for all blog types
const imageReplacements = [
  // Weight Loss/Wegovy images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-2_d5ou2o.jpg',
    new: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-3_opfzn9.jpg',
    new: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193458/blog-1-4_ytbb8b.jpg',
    new: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769193459/blog-1-1_zvzuzd.jpg',
    new: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  
  // Cold Plunge images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769194665/blog-2-2_z6mnph.jpg',
    new: 'https://images.unsplash.com/photo-1598133893779-7a0d7da03b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769194665/blog-2-1_ih8jnk.jpg',
    new: 'https://images.unsplash.com/photo-1598133893779-7a0d7da03b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  
  // Cortisol/Face images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769201361/blog-3-2_ck1hoe.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769201365/blog-3-3_xzg1kg.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769201362/blog-3-5_rph2eo.jpg',
    new: 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769201362/blog-3-4_oa1xwf.jpg',
    new: 'https://images.unsplash.com/photo-1551712709-a6dd6531c1cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  
  // Mouth Taping images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-1_t19bbt.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204466/blog-4-2_ttgelw.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1769204468/blog-4-4_wlepip.jpg',
    new: 'https://images.unsplash.com/photo-1591088398333-2fb1fa5e13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  
  // Seed Cycling images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/seed_cycling_blog.jpg',
    new: 'https://images.unsplash.com/photo-1592417817039-4929c16b3d49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  
  // CGM images
  {
    old: 'https://res.cloudinary.com/dxg5ldzkv/image/upload/v1761868117/cgm_blog.jpg',
    new: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

// Perform replacements
imageReplacements.forEach(replacement => {
  const regex = new RegExp(replacement.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const count = (content.match(regex) || []).length;
  if (count > 0) {
    console.log(`Updating ${count} instances of: ${replacement.old}`);
    content = content.replace(regex, replacement.new);
  }
});

// Write back to file
fs.writeFileSync(filePath, content);

console.log('All blog images updated successfully!');