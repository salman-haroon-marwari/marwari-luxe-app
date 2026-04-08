const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'blogs.ts');

// Read the current file
let content = fs.readFileSync(filePath, 'utf8');

// The remaining content for the glass skin article
const remainingContent = `
<br/><br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- COMPLETE 7-STEP ROUTINE -->
<!-- ═══════════════════════════════════════════════════════════ -->

<section id="7-step-routine">
  <h2 style="font-size: 1.6em; color: #2c3e50; margin-bottom: 20px;">
    <strong>The Complete 7-Step Korean Skincare Routine</strong>
  </h2>
  
  <figure style="margin: 20px 0;">
    <img 
      src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1771880990/7-step-korean-skincare-routine-products.jpg" 
      alt="Seven Korean skincare products arranged in order of application" 
      loading="lazy"
      style="width: 100%; border-radius: 10px;"
    />
  </figure>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    This is what you've been waiting for—the exact 7-step routine that creates glass skin. Each step serves a specific purpose, and together they create a synergistic effect that transforms your complexion.
  </p>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <h3 style="font-size: 1.3em; color: #2c3e50; margin-bottom: 15px;">
      <strong>Morning Routine (7 Steps - 10 Minutes)</strong>
    </h3>
    <ol style="padding-left: 20px; line-height: 1.8;">
      <li style="margin-bottom: 10px;">Water-Based Cleanser</li>
      <li style="margin-bottom: 10px;">Toner</li>
      <li style="margin-bottom: 10px;">Essence</li>
      <li style="margin-bottom: 10px;">Serum/Ampoule</li>
      <li style="margin-bottom: 10px;">Moisturizer</li>
      <li style="margin-bottom: 10px;">Eye Cream</li>
      <li style="margin-bottom: 10px;">SPF (Non-negotiable!)</li>
    </ol>
  </div>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <h3 style="font-size: 1.3em; color: #2c3e50; margin-bottom: 15px;">
      <strong>Evening Routine (7 Steps - 15 Minutes)</strong>
    </h3>
    <ol style="padding-left: 20px; line-height: 1.8;">
      <li style="margin-bottom: 10px;">Oil-Based Cleanser</li>
      <li style="margin-bottom: 10px;">Water-Based Cleanser</li>
      <li style="margin-bottom: 10px;">Exfoliator (2-3x weekly only)</li>
      <li style="margin-bottom: 10px;">Toner</li>
      <li style="margin-bottom: 10px;">Essence</li>
      <li style="margin-bottom: 10px;">Serum/Ampoule</li>
      <li style="margin-bottom: 10px;">Night Moisturizer/Sleeping Mask</li>
    </ol>
  </div>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    Yes, it looks like a lot. But once you get into the rhythm, this entire routine takes 10 minutes morning and 15 at night. And the results? Absolutely worth it.
  </p>
</section>

<br/><br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- STEP 1: OIL CLEANSER -->
<!-- ═══════════════════════════════════════════════════════════ -->

<section id="step-1-oil-cleanser">
  <h2 style="font-size: 1.6em; color: #2c3e50; margin-bottom: 20px;">
    <strong>Step 1: Oil-Based Cleanser (Evening Only)</strong>
  </h2>
  
  <figure style="margin: 20px 0;">
    <img 
      src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1771880991/oil-cleanser-double-cleansing-method.jpg" 
      alt="Woman massaging oil cleanser on face for double cleansing" 
      loading="lazy"
      style="width: 100%; border-radius: 10px;"
    />
  </figure>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    **Double cleansing** is the cornerstone of Korean skincare. The first step uses an oil-based cleanser to dissolve oil-based impurities: sunscreen, makeup, excess sebum, and pollution particles.
  </p>
  
  <h3 style="font-size: 1.3em; color: #2c3e50; margin: 25px 0 15px 0;">
    <strong>Why Oil Cleansing Works</strong>
  </h3>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    Oil attracts oil. Water-based cleansers alone can't effectively remove waterproof sunscreen or long-wear makeup. An oil cleanser breaks down these oil-based products without stripping your skin's natural moisture barrier.
  </p>
  
  <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 0; line-height: 1.7;">
      <strong>💡 Pro Technique:</strong> Apply to DRY face with DRY hands. Massage for 60 seconds to fully dissolve impurities. Then add water to emulsify—it will turn milky. Rinse thoroughly.
    </p>
  </div>
  
  <h3 style="font-size: 1.3em; color: #2c3e50; margin: 25px 0 15px 0;">
    <strong>Best Oil Cleansers by Budget</strong>
  </h3>
  
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li style="margin-bottom: 10px;"><strong>Drugstore ($10-15):</strong> Banila Co Clean It Zero Original, Heimish All Clean Balm</li>
    <li style="margin-bottom: 10px;"><strong>Mid-Range ($20-30):</strong> DHC Deep Cleansing Oil, Kose Softymo Speedy Cleansing Oil</li>
    <li style="margin-bottom: 10px;"><strong>Luxury ($40+):</strong> Sulwhasoo Gentle Cleansing Oil, Shu Uemura Anti/Oxi+</li>
  </ul>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    <strong>Key Ingredients to Look For:</strong> Jojoba oil, grapeseed oil, vitamin E. <strong>Avoid:</strong> Mineral oil, synthetic fragrances if you have sensitive skin.
  </p>
</section>

<br/><br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- STEP 2: WATER-BASED CLEANSER -->
<!-- ═══════════════════════════════════════════════════════════ -->

<section id="step-2-water-cleanser">
  <h2 style="font-size: 1.6em; color: #2c3e50; margin-bottom: 20px;">
    <strong>Step 2: Water-Based Cleanser (Morning & Evening)</strong>
  </h2>
  
  <figure style="margin: 20px 0;">
    <img 
      src="https://res.cloudinary.com/dxg5ldzkv/image/upload/v1771880992/water-based-cleanser-gentle-foam.jpg" 
      alt="Gentle foam water-based cleanser on hands" 
      loading="lazy"
      style="width: 100%; border-radius: 10px;"
    />
  </figure>
  
  <p style="line-height: 1.8; font-size: 1.05em; color: #2c3e50;">
    After oil cleansing, the second cleanse removes water-based impurities: sweat, dirt, and any residue from your oil cleanser. This leaves skin perfectly clean but never tight or stripped.
  </p>
  
  <h3 style="font-size: 1.3em; color: #2c3e50; margin: 25px 0 15px 0;">
    <strong>Choosing Your Cleanser</strong>
  </h3>
  
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li style="margin-bottom: 10px;"><strong>Oily/Acne-Prone:</strong> Gel or foaming cleansers with salicylic acid</li>
    <li style="margin-bottom: 10px;"><strong>Dry/Sensitive:</strong> Cream or milky cleansers, non-foaming</li>
    <li style="margin-bottom: 10px;"><strong>Combination:</strong> Gentle foaming gel formulas</li>
    <li style="margin-bottom: 10px;"><strong>Normal:</strong> Any gentle pH-balanced cleanser</li>
  </ul>
  
  <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
    <p style="margin: 0; line-height: 1.7;">
      <strong>⚠️ Critical:</strong> Your cleanser should have a pH between 5.0-6.0. Anything higher disrupts your skin barrier and causes dehydration. Check labels!
    </p>
  </div>
  
  <h3 style="font-size: 1.3em; color: #2c3e50; margin: 25px 0 15px 0;">
    <strong>Top Picks</strong>
  </h3>
  
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li style="margin-bottom: 10px;"><strong>Drugstore:</strong> COSRX Low pH Good Morning Gel, CeraVe Hydrating Facial Cleanser</li>
    <li style="margin-bottom: 10px;"><strong>Mid-Range:</strong> Krave Beauty Matcha Hemp Hydrating Cleanser, La Roche-Posay Toleriane</li>
    <li style="margin-bottom: 10px;"><strong>Luxury:</strong> Fresh Soy Face Cleanser, Tatcha The Rice Wash</li>
  </ul>
</section>

<br/><br/>

<!-- Additional sections continue similarly with detailed content for steps 3-7, product recommendations, common mistakes, FAQ, and conclusion -->
`;

// Find the placeholder comment and replace it
content = content.replace('<!-- Continue with remaining sections... -->', remainingContent.trim());

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('✓ Glass skin article Part 1 added successfully!');
