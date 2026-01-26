'use client';



export default function HairCareAdvisorPage() {
  const getHairAdvice = () => {
    // Get selected values
    const hairTypeSelected = document.querySelector('input[name="hair-type"]:checked') as HTMLInputElement;
    const concernsSelected = document.querySelectorAll('input[name="concerns"]:checked');
    const goalsSelected = document.querySelector('input[name="goals"]:checked') as HTMLInputElement;
    
    if (!hairTypeSelected || concernsSelected.length === 0 || !goalsSelected) {
      alert('Please answer all questions');
      return;
    }
    
    const hairType = hairTypeSelected.value;
    const concerns = Array.from(concernsSelected).map(cb => (cb as HTMLInputElement).value);
    const goals = goalsSelected.value;
    
    // Generate advice based on selections
    let routine = [];
    let products = [];
    let tips = [];
    
    // Base routine
    routine.push('1. Use a sulfate-free shampoo');
    routine.push('2. Apply conditioner from mid-length to ends');
    routine.push('3. Use a wide-tooth comb when wet');
    
    // Customize based on hair type
    if (hairType === 'straight') {
      routine.push('4. Use lightweight products to avoid weighing hair down');
      products.push('Lightweight leave-in conditioner');
      products.push('Volumizing mousse');
    } else if (hairType === 'wavy') {
      routine.push('4. Enhance waves with curl-defining cream');
      products.push('Curl-enhancing cream');
      products.push('Sea salt spray');
    } else if (hairType === 'curly') {
      routine.push('4. Follow the LOC method (Liquid, Oil, Cream)');
      products.push('Leave-in conditioner');
      products.push('Curl cream');
    } else {
      routine.push('4. Use moisturizing products specifically for coily hair');
      products.push('Heavy butter cream');
      products.push('Oil-based sealant');
    }
    
    // Add concerns-specific advice
    if (concerns.includes('dry')) {
      routine.push('5. Deep condition weekly');
      tips.push('Use heat protectant before styling');
    }
    
    if (concerns.includes('frizzy')) {
      routine.push('5. Sleep on silk or satin pillowcases');
      tips.push('Avoid brushing when dry');
    }
    
    if (concerns.includes('damaged')) {
      routine.push('5. Trim regularly to prevent split ends');
      tips.push('Limit heat styling to 2-3 times per week');
    }
    
    if (concerns.includes('oily')) {
      routine.push('5. Wash every other day with clarifying shampoo');
      tips.push('Avoid heavy oils on the scalp');
    }
    
    // Add goals-specific advice
    if (goals === 'growth') {
      routine.push('6. Massage scalp regularly to stimulate blood flow');
      products.push('Scalp serum with biotin');
      tips.push('Take vitamins like biotin and vitamin D');
    } else if (goals === 'volume') {
      routine.push('6. Use root-lifting spray at the crown');
      products.push('Volumizing dry shampoo');
      tips.push('Blow-dry upside down for extra lift');
    } else {
      routine.push('6. Use UV protection when outdoors');
      products.push('Leave-in UV protectant');
      tips.push('Protect hair from chlorine when swimming');
    }
    
    // Display results
    const routineElement = document.querySelector('.hair-routine');
    const productsElement = document.querySelector('.recommended-products');
    const tipsElement = document.querySelector('.hair-tips');
    
    if (routineElement && productsElement && tipsElement) {
      // Clear existing content
      routineElement.innerHTML = '';
      productsElement.innerHTML = '';
      tipsElement.innerHTML = '';
      
      // Populate routine
      routine.forEach(step => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-start p-3 bg-violet-50 dark:bg-gray-600 rounded-lg mb-2';
        stepElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-violet-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
          <span>${step}</span>
        `;
        routineElement.appendChild(stepElement);
      });
      
      // Populate products
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'px-3 py-1 bg-violet-500 text-white rounded-full text-sm inline-block mr-2 mb-2';
        productElement.textContent = product;
        productsElement.appendChild(productElement);
      });
      
      // Populate tips
      tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.className = 'flex items-start p-3 bg-violet-50 dark:bg-gray-600 rounded-lg mb-2';
        tipElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-violet-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">!</div>
          <span>${tip}</span>
        `;
        tipsElement.appendChild(tipElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hair Care Advisor</h1>
            <p className="text-xl text-foreground/70">
              Get personalized hair care recommendations based on your hair type.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/haircare.svg" 
                        alt="Hair Care Advisor" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Get Your Hair Advice</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your hair type?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="hair-type" value="straight" className="mr-2 text-violet-500" />
                        <span>Straight</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="hair-type" value="wavy" className="mr-2 text-violet-500" />
                        <span>Wavy</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="hair-type" value="curly" className="mr-2 text-violet-500" />
                        <span>Curly</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="hair-type" value="coily" className="mr-2 text-violet-500" />
                        <span>Coily/Kinky</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What are your main hair concerns?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concerns" value="dry" className="mr-2 text-violet-500" />
                        <span>Dryness</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concerns" value="frizzy" className="mr-2 text-violet-500" />
                        <span>Frizz</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concerns" value="damaged" className="mr-2 text-violet-500" />
                        <span>Damage/Breakage</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concerns" value="oily" className="mr-2 text-violet-500" />
                        <span>Oily Scalp</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your main hair goal?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="goals" value="growth" className="mr-2 text-violet-500" />
                        <span>Hair Growth</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="goals" value="volume" className="mr-2 text-violet-500" />
                        <span>More Volume</span>
                      </label>
                      <label className="flex items-center p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="goals" value="health" className="mr-2 text-violet-500" />
                        <span>Overall Health</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={getHairAdvice}
                    className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Get My Hair Care Advice
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/haircare.svg" 
                          alt="Hair Advice" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Personalized Advice</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-violet-600 dark:text-violet-400">Recommended Routine</h4>
                    <div className="hair-routine mb-4">
                      <div className="text-foreground/80">
                        Answer the questions to receive your personalized hair care routine.
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 text-violet-600 dark:text-violet-400">Recommended Products</h4>
                    <div className="flex flex-wrap gap-2 mb-4 recommended-products">
                      <div className="text-foreground/80">
                        Your product recommendations will appear here.
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 text-violet-600 dark:text-violet-400">Pro Tips</h4>
                    <div className="hair-tips">
                      <div className="text-foreground/80">
                        Helpful tips for your hair type will appear here.
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Hair Care Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Trim your hair every 6-8 weeks to prevent split ends</li>
                      <li>• Use lukewarm water when washing to avoid stripping natural oils</li>
                      <li>• Protect hair from heat damage with thermal protectants</li>
                      <li>• Eat a balanced diet rich in vitamins and minerals for healthy hair</li>
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