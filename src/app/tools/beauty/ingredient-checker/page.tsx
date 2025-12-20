'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function IngredientCheckerPage() {
  const checkIngredients = () => {
    // Get input values
    const productName = (document.getElementById('product-name') as HTMLInputElement).value;
    const ingredients = (document.getElementById('ingredients') as HTMLTextAreaElement).value;
    
    if (!productName || !ingredients) {
      alert('Please enter both product name and ingredients');
      return;
    }
    
    // Split ingredients into array
    const ingredientList = ingredients.split(',').map(item => item.trim().toLowerCase());
    
    // Define concerning ingredients and their explanations
    const concerningIngredients = [
      {
        name: 'parabens',
        explanation: 'Preservatives that may disrupt hormone function',
        severity: 'moderate',
        alternatives: ['Phenoxyethanol', 'Potassium Sorbate']
      },
      {
        name: 'sulfates',
        explanation: 'Harsh cleansers that can strip natural oils',
        severity: 'moderate',
        alternatives: ['Decyl Glucoside', 'Cocamidopropyl Betaine']
      },
      {
        name: 'synthetic fragrances',
        explanation: 'Can cause allergic reactions and skin irritation',
        severity: 'high',
        alternatives: ['Essential oils', 'Natural fragrance blends']
      },
      {
        name: 'formaldehyde',
        explanation: 'Known carcinogen used as preservative',
        severity: 'high',
        alternatives: ['Phenoxyethanol', 'Caprylyl Glycol']
      },
      {
        name: 'hydroquinone',
        explanation: 'Skin bleaching agent with potential toxicity',
        severity: 'high',
        alternatives: ['Kojic Acid', 'Arbutin']
      },
      {
        name: 'mineral oil',
        explanation: 'May clog pores and prevent skin breathing',
        severity: 'low',
        alternatives: ['Jojoba Oil', 'Argan Oil']
      },
      {
        name: 'alcohol denat',
        explanation: 'Drying alcohol that can irritate sensitive skin',
        severity: 'moderate',
        alternatives: ['Fatty Alcohols (Cetyl Alcohol)', 'Behenyl Alcohol']
      }
    ];
    
    // Check for concerning ingredients
    const foundIngredients = concerningIngredients.filter(ingredient => 
      ingredientList.some(item => item.includes(ingredient.name))
    );
    
    // Display results
    const resultsElement = document.querySelector('.ingredient-results');
    const productNameElement = document.querySelector('.product-name-display');
    const concernsElement = document.querySelector('.ingredient-concerns');
    const safeMessageElement = document.querySelector('.safe-message');
    
    if (resultsElement && productNameElement && concernsElement && safeMessageElement) {
      resultsElement.classList.remove('hidden');
      productNameElement.textContent = productName;
      
      if (foundIngredients.length > 0) {
        safeMessageElement.classList.add('hidden');
        concernsElement.classList.remove('hidden');
        
        // Clear existing concerns
        concernsElement.innerHTML = '';
        
        // Add each concern
        foundIngredients.forEach(ingredient => {
          const severityClass = ingredient.severity === 'high' ? 'bg-red-100 text-red-800' : 
                              ingredient.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-blue-100 text-blue-800';
          
          const concernElement = document.createElement('div');
          concernElement.className = 'p-4 bg-white dark:bg-gray-600 rounded-lg mb-4';
          concernElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
              <h4 class="font-bold text-lg capitalize">${ingredient.name}</h4>
              <span class="px-2 py-1 rounded-full text-xs font-medium ${severityClass}">
                ${ingredient.severity.charAt(0).toUpperCase() + ingredient.severity.slice(1)} Risk
              </span>
            </div>
            <p class="text-foreground/80 mb-2">${ingredient.explanation}</p>
            <p class="text-sm"><span class="font-medium">Safer Alternatives:</span> ${ingredient.alternatives.join(', ')}</p>
          `;
          concernsElement.appendChild(concernElement);
        });
      } else {
        concernsElement.classList.add('hidden');
        safeMessageElement.classList.remove('hidden');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ingredient Checker</h1>
            <p className="text-xl text-foreground/70">
              Check product ingredients for allergens and harmful substances.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/ingredient-checker.svg" 
                        alt="Ingredient Checker" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Check Ingredients</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="product-name" className="block text-lg font-medium text-foreground mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="product-name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="e.g., Moisturizing Cream"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ingredients" className="block text-lg font-medium text-foreground mb-2">
                      Ingredients List
                    </label>
                    <textarea
                      id="ingredients"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter ingredients separated by commas, e.g., Water, Glycerin, Parabens, Fragrance"
                    ></textarea>
                  </div>
                  
                  <button 
                    onClick={checkIngredients}
                    className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Check Ingredients
                  </button>
                </div>
                
                <div className="mt-8 bg-orange-50 dark:bg-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">How to Use:</h3>
                  <ul className="text-foreground/80 space-y-2 text-sm">
                    <li>• Copy the ingredients list from your product packaging</li>
                    <li>• Enter each ingredient separated by commas</li>
                    <li>• Our checker identifies potentially harmful ingredients</li>
                    <li>• See safer alternatives for any concerning ingredients</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/ingredient-checker.svg" 
                          alt="Analysis Results" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Analysis Results</h3>
                  </div>
                  
                  <div className="ingredient-results hidden">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">
                        Analysis for: <span className="product-name-display">Product Name</span>
                      </h4>
                      
                      <div className="safe-message text-center py-4">
                        <div className="text-green-600 dark:text-green-400 font-bold mb-2">✓ All Clear!</div>
                        <p className="text-foreground/80">No concerning ingredients detected in this product.</p>
                      </div>
                      
                      <div className="ingredient-concerns">
                        <div className="text-foreground/80">
                          Concerning ingredients will appear here if found.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center py-8 ingredient-placeholder">
                    <p className="text-foreground/80">
                      Enter a product name and ingredients list to check for potentially harmful substances.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Ingredient Knowledge:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• <span className="font-medium">High Risk:</span> Ingredients with known health concerns</li>
                      <li>• <span className="font-medium">Moderate Risk:</span> Ingredients that may cause irritation</li>
                      <li>• <span className="font-medium">Low Risk:</span> Generally safe but may not align with preferences</li>
                      <li>• Always consult with a dermatologist for specific allergies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}