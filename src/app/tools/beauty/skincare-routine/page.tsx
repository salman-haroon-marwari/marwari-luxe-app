'use client';

import Navigation from '../../../../components/Navigation';

export default function SkincareRoutineBuilderPage() {
  const buildRoutine = () => {
    // Get selected values
    const concernCheckboxes = document.querySelectorAll('input[name="concern"]:checked');
    const experienceSelected = document.querySelector('input[name="experience"]:checked') as HTMLInputElement;
    
    if (concernCheckboxes.length === 0 || !experienceSelected) {
      alert('Please select at least one concern and your experience level');
      return;
    }
    
    const concerns = Array.from(concernCheckboxes).map(cb => (cb as HTMLInputElement).value);
    const experience = experienceSelected.value;
    
    // Generate routine based on selections
    let morningRoutine = [];
    let eveningRoutine = [];
    
    // Base routine
    morningRoutine.push({ step: 1, product: 'Gentle Cleanser' });
    morningRoutine.push({ step: 2, product: 'Moisturizer with SPF' });
    
    eveningRoutine.push({ step: 1, product: 'Gentle Cleanser' });
    eveningRoutine.push({ step: 3, product: 'Night Moisturizer' });
    
    // Add treatment based on concerns
    if (concerns.includes('acne')) {
      if (experience === 'beginner') {
        eveningRoutine.splice(1, 0, { step: 2, product: 'Salicylic Acid Treatment (2-3 times/week)' });
      } else {
        eveningRoutine.splice(1, 0, { step: 2, product: 'Retinol Treatment (2-3 times/week)' });
      }
    }
    
    if (concerns.includes('aging')) {
      if (experience === 'beginner') {
        morningRoutine.splice(1, 0, { step: 2, product: 'Vitamin C Serum' });
        eveningRoutine.splice(1, 0, { step: 2, product: 'Retinol Treatment (2-3 times/week)' });
      } else {
        morningRoutine.splice(1, 0, { step: 2, product: 'Vitamin C Serum' });
        eveningRoutine.splice(1, 0, { step: 2, product: 'Retinol Treatment (nightly)' });
      }
    }
    
    if (concerns.includes('dryness')) {
      morningRoutine.push({ step: 3, product: 'Hydrating Serum' });
      eveningRoutine.splice(1, 0, { step: 2, product: 'Hydrating Serum' });
    }
    
    if (concerns.includes('dark-spots')) {
      if (experience === 'beginner') {
        morningRoutine.splice(1, 0, { step: 2, product: 'Niacinamide Serum' });
        eveningRoutine.splice(1, 0, { step: 2, product: 'Alpha Arbutin Treatment (2-3 times/week)' });
      } else {
        morningRoutine.splice(1, 0, { step: 2, product: 'Vitamin C Serum' });
        eveningRoutine.splice(1, 0, { step: 2, product: 'Kojic Acid Treatment (2-3 times/week)' });
      }
    }
    
    // Sort routines by step
    morningRoutine.sort((a, b) => a.step - b.step);
    eveningRoutine.sort((a, b) => a.step - b.step);
    
    // Display results
    const morningRoutineElement = document.querySelector('.morning-routine');
    const eveningRoutineElement = document.querySelector('.evening-routine');
    
    if (morningRoutineElement && eveningRoutineElement) {
      // Clear existing content
      morningRoutineElement.innerHTML = '';
      eveningRoutineElement.innerHTML = '';
      
      // Populate morning routine
      morningRoutine.forEach(item => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-center p-3 bg-emerald-50 dark:bg-gray-600 rounded-lg';
        stepElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3">${item.step}</div>
          <span>${item.product}</span>
        `;
        morningRoutineElement.appendChild(stepElement);
      });
      
      // Populate evening routine
      eveningRoutine.forEach(item => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-center p-3 bg-emerald-50 dark:bg-gray-600 rounded-lg';
        stepElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3">${item.step}</div>
          <span>${item.product}</span>
        `;
        eveningRoutineElement.appendChild(stepElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skincare Routine Builder</h1>
            <p className="text-xl text-foreground/70">
              Create a customized skincare routine based on your specific needs.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/skincare-routine.svg" 
                        alt="Skincare Routine Builder" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Build Your Routine</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your primary skin concern?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concern" value="acne" className="mr-2 text-emerald-500" />
                        <span>Acne and breakouts</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concern" value="aging" className="mr-2 text-emerald-500" />
                        <span>Signs of aging</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concern" value="dryness" className="mr-2 text-emerald-500" />
                        <span>Dryness and dehydration</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concern" value="sensitivity" className="mr-2 text-emerald-500" />
                        <span>Sensitive or reactive skin</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="checkbox" name="concern" value="dark-spots" className="mr-2 text-emerald-500" />
                        <span>Dark spots or uneven tone</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your current skincare experience?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="experience" value="beginner" className="mr-2 text-emerald-500" />
                        <span>Beginner - New to skincare</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="experience" value="intermediate" className="mr-2 text-emerald-500" />
                        <span>Intermediate - Some experience</span>
                      </label>
                      <label className="flex items-center p-3 bg-emerald-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="experience" value="advanced" className="mr-2 text-emerald-500" />
                        <span>Advanced - Skincare enthusiast</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={buildRoutine}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Build My Routine
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/skincare-routine.svg" 
                          alt="Routine" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Custom Routine</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-2 text-emerald-600 dark:text-emerald-400">Morning Routine</h4>
                    <div className="space-y-3 mb-4 text-left morning-routine">
                      <div className="text-foreground/80">
                        Select your concerns and experience level to build your personalized routine.
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2 text-emerald-600 dark:text-emerald-400 mt-6">Evening Routine</h4>
                    <div className="space-y-3 mb-4 text-left evening-routine">
                      <div className="text-foreground/80">
                        Your evening routine will appear here after building your routine.
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Routine Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Introduce one new product at a time</li>
                      <li>• Patch test new products before full application</li>
                      <li>• Be patient - results take 6-8 weeks</li>
                      <li>• Consistency is more important than quantity</li>
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