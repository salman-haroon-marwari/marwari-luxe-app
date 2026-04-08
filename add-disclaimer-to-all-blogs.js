// -*- coding: utf-8 -*-
const fs = require('fs');

console.log("🔧 Adding Disclaimer to all blogs without it...\n");

// Read the file
let content = fs.readFileSync('src/data/blogs.ts', 'utf-8');

// Standard disclaimer text (to add in content)
const disclaimerHTML = `

<!-- DISCLAIMER -->
<section id="disclaimer" style="margin-top: 40px;">
<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6;">
<p style="margin: 0; font-size: 0.9em; color: #6c757d; line-height: 1.7;">
<strong>Disclaimer:</strong> This article is for informational purposes only and should not be considered medical advice. Always consult with a healthcare professional before making any changes to your health routine.
</p>
</div>
</section>`;

let addedCount = 0;
let totalBlogs = 0;

// Find all blog posts by looking for content: ` pattern
// We need to add disclaimer before the closing backtick of content field
const contentPattern = /content:\s*`([\s\S]*?)`\s*,\s*\n\s*faq:/g;

content = content.replace(contentPattern, (match, contentText) => {
    totalBlogs++;
    
    // Check if this content already has a disclaimer
    if (contentText.includes('DISCLAIMER') || contentText.includes('Disclaimer:') || contentText.includes('disclaimer')) {
        return match; // Already has disclaimer, skip
    }
    
    // Add disclaimer before the closing backtick
    addedCount++;
    return `content: \`${contentText}${disclaimerHTML}\`,\n    faq:`;
});

// Write back
fs.writeFileSync('src/data/blogs.ts', content, 'utf-8');

console.log(`\n📊 Total blogs checked: ${totalBlogs}`);
console.log(`✅ Disclaimers added to: ${addedCount} blogs`);
console.log(`ℹ️  Blogs that already had disclaimers: ${totalBlogs - addedCount}`);
console.log('\n✨ All blogs now have disclaimers!');
