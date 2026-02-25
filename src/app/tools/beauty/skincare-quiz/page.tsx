'use client';

import Navigation from '../../../../components/Navigation';

export default function SkincareQuizPage() {
  const takeQuiz = () => {
    // Get all checked checkboxes
    const answers = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (answers.length === 0) {
      alert('Please answer at least one question');
      return;
    }
    
    // Count answers for each category
    let hydration = 0;
    let antiAging = 0;
    let brightening = 0;
    let acne = 0;
    let sensitivity = 0;
    
    answers.forEach(answer => {
      const value = (answer as HTMLInputElement).value;
      switch(value) {
        case 'hydration':
          hydration++;
          break;
        case 'anti-aging':
          antiAging++;
          break;
        case 'brightening':
          brightening++;
          break;
        case 'acne':
          acne++;
          break;
        case 'sensitivity':
          sensitivity++;
          break;
      }
    });
    
    // Determine primary concern
    const concerns = [
      { name: 'Hydration', score: hydration, products: ['Hyaluronic Acid Serum', 'Rich Moisturizer', 'Hydrating Mist'] },
      { name: 'Anti-Aging', score: antiAging, products: ['Retinol Serum', 'Vitamin C Serum', 'Peptide Cream'] },
      { name: 'Brightening', score: brightening, products: ['Vitamin C Serum', 'Niacinamide', 'Exfoliating Scrub'] },
      { name: 'Acne', score: acne, products: ['Salicylic Acid Treatment', 'Benzoyl Peroxide', 'Clay Mask'] },
      { name: 'Sensitivity', score: sensitivity, products: ['Gentle Cleanser', 'Barrier Repair Cream', 'Calming Serum'] }
    ];
    
    // Sort by score to get top 2 concerns
    concerns.sort((a, b) => b.score - a.score);
    const topConcern = concerns[0];
    const secondConcern = concerns[1];
    
    // Display results
    const resultsElement = document.querySelector('.quiz-results');
    const concernElement = document.querySelector('.primary-concern');
    const productsElement = document.querySelector('.recommended-products');
    const routineElement = document.querySelector('.skincare-routine');
    
    if (resultsElement && concernElement && productsElement && routineElement) {
      resultsElement.classList.remove('hidden');
      
      concernElement.textContent = topConcern.name;
      
      // Clear existing products
      productsElement.innerHTML = '';
      
      // Add recommended products
      topConcern.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'px-3 py-1 bg-green-500 text-white rounded-full text-sm inline-block mr-2 mb-2';
        productElement.textContent = product;
        productsElement.appendChild(productElement);
      });
      
      // Generate routine based on top concerns
      routineElement.innerHTML = '';
      
      const routineSteps = [
        { step: 1, product: 'Gentle Cleanser' },
        { step: 2, product: topConcern.products[0] },
        { step: 3, product: secondConcern.products[0] },
        { step: 4, product: 'Moisturizer' },
        { step: 5, product: 'SPF (Morning Only)' }
      ];
      
      routineSteps.forEach(item => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-center p-3 bg-green-50 dark:bg-gray-600 rounded-lg mb-2';
        stepElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">${item.step}</div>
          <span>${item.product}</span>
        `;
        routineElement.appendChild(stepElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skincare Quiz</h1>
            <p className="text-xl text-foreground/70">
              Take our quiz to discover the best skincare products for your concerns.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/skincare-quiz.svg" 
                        alt="Skincare Quiz" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Discover Your Needs</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What are your main skincare concerns? (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="hydration" className="mr-2 text-green-500" />
                        <span>Dryness/Dehydration</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="anti-aging" className="mr-2 text-green-500" />
                        <span>Fine Lines/Wrinkles</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="brightening" className="mr-2 text-green-500" />
                        <span>Dullness/Dark Spots</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="acne" className="mr-2 text-green-500" />
                        <span>Breakouts/Congestion</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="sensitivity" className="mr-2 text-green-500" />
                        <span>Redness/Sensitivity</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="hydration" className="mr-2 text-green-500" />
                        <span>Tightness/Flakiness</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="anti-aging" className="mr-2 text-green-500" />
                        <span>Loss of Firmness</span>
                      </label>
                      <label className="flex items-center p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" value="brightening" className="mr-2 text-green-500" />
                        <span>Uneven Skin Tone</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={takeQuiz}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Get My Results
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/skincare-quiz.svg" 
                          alt="Quiz Results" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Personalized Results</h3>
                  </div>
                  
                  <div className="quiz-results hidden">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Primary Concern</h4>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4 primary-concern">
                        Hydration
                      </p>
                      
                      <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Recommended Products</h4>
                      <div className="flex flex-wrap gap-2 mb-4 recommended-products">
                        <div className="text-foreground/80">
                          Take the quiz to see product recommendations.
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Sample Routine</h4>
                      <div className="skincare-routine">
                        <div className="text-foreground/80">
                          Your personalized routine will appear here.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center py-8 quiz-placeholder">
                    <p className="text-foreground/80">
                      Answer the questions to discover your personalized skincare recommendations.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Skincare Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Introduce new products one at a time to monitor reactions</li>
                      <li>• Always patch test new products before full application</li>
                      <li>• Consistency is key - give products 6-8 weeks to show results</li>
                      <li>• Listen to your skin and adjust your routine as needed</li>
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