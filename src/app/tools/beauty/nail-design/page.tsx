'use client';

import Navigation from '../../../../components/Navigation';

export default function NailDesignStudioPage() {
  const generateDesign = () => {
    // Get selected values
    const shapeSelected = document.querySelector('input[name="shape"]:checked') as HTMLInputElement;
    const styleSelected = document.querySelector('input[name="style"]:checked') as HTMLInputElement;
    const colorSelected = document.querySelector('input[name="color"]:checked') as HTMLInputElement;
    
    if (!shapeSelected || !styleSelected || !colorSelected) {
      alert('Please select all options');
      return;
    }
    
    const shape = shapeSelected.value;
    const style = styleSelected.value;
    const color = colorSelected.value;
    
    // Generate design description based on selections
    let designDescription = '';
    let designTips = [];
    let recommendedProducts = [];
    
    // Create design description
    designDescription = `A ${style} nail design with ${color} polish on ${shape} shaped nails.`;
    
    // Add style-specific details
    if (style === 'classic') {
      designDescription += ' This timeless look features a clean, polished appearance perfect for any occasion.';
      designTips.push('Apply a base coat to protect your nails');
      designTips.push('Use thin coats of polish for a smooth finish');
      recommendedProducts.push('High-shine top coat');
      recommendedProducts.push('Quality base coat');
    } else if (style === 'french') {
      designDescription += ' This elegant style features a natural pink or nude base with white tips.';
      designTips.push('Use a fine brush or stencil for clean white tips');
      designTips.push('Practice the crescent shape at the tip');
      recommendedProducts.push('French manicure kit');
      recommendedProducts.push('Precision nail art brush');
    } else if (style === 'ombre') {
      designDescription += ' This trendy look features a gradient effect from one color to another.';
      designTips.push('Use a makeup sponge for smooth color blending');
      designTips.push('Apply in thin layers for best ombre effect');
      recommendedProducts.push('Nail art sponge');
      recommendedProducts.push('Complementary color polishes');
    } else {
      designDescription += ' This creative design incorporates fun elements like glitter, stickers, or hand-painted art.';
      designTips.push('Use a steady hand or nail art tools for precision');
      designTips.push('Seal artwork with a good top coat');
      recommendedProducts.push('Nail art pens');
      recommendedProducts.push('Glitter polish or stickers');
    }
    
    // Add shape-specific tips
    if (shape === 'square') {
      designTips.push('Square shapes are great for showcasing bold designs');
    } else if (shape === 'round') {
      designTips.push('Round shapes give a softer, more natural look');
    } else if (shape === 'oval') {
      designTips.push('Oval shapes are universally flattering and elegant');
    } else {
      designTips.push('Stiletto shapes are dramatic and perfect for artistic designs');
    }
    
    // Add color-specific tips
    if (color === 'red') {
      designTips.push('Red polish looks best with neutral or complementary tones');
      recommendedProducts.push('Red pigment-rich polish');
    } else if (color === 'nude') {
      designTips.push('Choose a nude shade that matches your skin tone');
      recommendedProducts.push('Sheer or opaque nude polish');
    } else if (color === 'dark') {
      designTips.push('Dark colors may require multiple coats for full opacity');
      recommendedProducts.push('Dark pigment-rich polish');
    } else {
      designTips.push('Light colors pair well with intricate designs');
      recommendedProducts.push('Pastel or bright polish');
    }
    
    // Display results
    const designDescriptionElement = document.querySelector('.design-description');
    const designTipsElement = document.querySelector('.design-tips');
    const recommendedProductsElement = document.querySelector('.recommended-products');
    
    if (designDescriptionElement && designTipsElement && recommendedProductsElement) {
      // Update design description
      designDescriptionElement.textContent = designDescription;
      
      // Clear existing content
      designTipsElement.innerHTML = '';
      recommendedProductsElement.innerHTML = '';
      
      // Populate tips
      designTips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.className = 'flex items-start p-3 bg-yellow-50 dark:bg-gray-600 rounded-lg mb-2';
        tipElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
          <span>${tip}</span>
        `;
        designTipsElement.appendChild(tipElement);
      });
      
      // Populate products
      recommendedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'px-3 py-1 bg-yellow-500 text-white rounded-full text-sm inline-block mr-2 mb-2';
        productElement.textContent = product;
        recommendedProductsElement.appendChild(productElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nail Design Studio</h1>
            <p className="text-xl text-foreground/70">
              Design and visualize nail art ideas with our virtual studio.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/nail-care.svg" 
                        alt="Nail Design Studio" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Create Your Design</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      Nail Shape
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="shape" value="square" className="mr-2 text-yellow-500" />
                        <span>Square</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="shape" value="round" className="mr-2 text-yellow-500" />
                        <span>Round</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="shape" value="oval" className="mr-2 text-yellow-500" />
                        <span>Oval</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="shape" value="stiletto" className="mr-2 text-yellow-500" />
                        <span>Stiletto</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      Design Style
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="style" value="classic" className="mr-2 text-yellow-500" />
                        <span>Classic Solid</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="style" value="french" className="mr-2 text-yellow-500" />
                        <span>French Manicure</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="style" value="ombre" className="mr-2 text-yellow-500" />
                        <span>Ombre Effect</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="style" value="artistic" className="mr-2 text-yellow-500" />
                        <span>Artistic/Decorative</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      Color Scheme
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="color" value="red" className="mr-2 text-yellow-500" />
                        <span>Classic Red</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="color" value="nude" className="mr-2 text-yellow-500" />
                        <span>Nude/Taupe</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="color" value="dark" className="mr-2 text-yellow-500" />
                        <span>Dark/Mysterious</span>
                      </label>
                      <label className="flex items-center p-3 bg-yellow-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="color" value="bright" className="mr-2 text-yellow-500" />
                        <span>Bright/Pastel</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={generateDesign}
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Generate My Design
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/nail-care.svg" 
                          alt="Nail Design" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Design Concept</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Design Description</h4>
                    <p className="text-foreground/80 mb-4 design-description">
                      Select your preferences to generate a personalized nail design concept.
                    </p>
                    
                    <h4 className="font-bold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Application Tips</h4>
                    <div className="design-tips mb-4">
                      <div className="text-foreground/80">
                        Helpful tips for your design will appear here.
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Recommended Products</h4>
                    <div className="flex flex-wrap gap-2 mb-4 recommended-products">
                      <div className="text-foreground/80">
                        Product recommendations will appear here.
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Nail Care Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Always start with clean, dry nails</li>
                      <li>• Apply a base coat to prevent staining</li>
                      <li>• Seal with a quality top coat for longevity</li>
                      <li>• Moisturize cuticles regularly for healthy nail growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}