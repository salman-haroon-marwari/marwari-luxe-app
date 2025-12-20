'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function VirtualMakeupTryOnPage() {
  const tryOnMakeup = () => {
    // Get selected values
    const faceShapeSelected = document.querySelector('input[name="face-shape"]:checked') as HTMLInputElement;
    const eyeColorSelected = document.querySelector('input[name="eye-color"]:checked') as HTMLInputElement;
    const occasionSelected = document.querySelector('input[name="occasion"]:checked') as HTMLInputElement;
    
    if (!faceShapeSelected || !eyeColorSelected || !occasionSelected) {
      alert('Please select all options');
      return;
    }
    
    const faceShape = faceShapeSelected.value;
    const eyeColor = eyeColorSelected.value;
    const occasion = occasionSelected.value;
    
    // Generate makeup recommendations based on selections
    let eyeLook = '';
    let lipColor = '';
    let cheekColor = '';
    let tips = [];
    
    // Eye makeup recommendations
    if (eyeColor === 'brown') {
      eyeLook = 'Warm browns and golds';
    } else if (eyeColor === 'blue') {
      eyeLook = 'Cool purples and silvers';
    } else if (eyeColor === 'green') {
      eyeLook = 'Earth tones and corals';
    } else {
      eyeLook = 'Classic neutrals';
    }
    
    // Lip color recommendations
    if (occasion === 'casual') {
      lipColor = 'Natural nude or soft pink';
    } else if (occasion === 'work') {
      lipColor = 'Muted rose or berry';
    } else if (occasion === 'party') {
      lipColor = 'Bold red or deep berry';
    } else {
      lipColor = 'Classic nude';
    }
    
    // Cheek color recommendations
    if (faceShape === 'round') {
      cheekColor = 'Soft peach with defined contouring';
    } else if (faceShape === 'oval') {
      cheekColor = 'Rosy pink applied to apples';
    } else if (faceShape === 'square') {
      cheekColor = 'Warm coral with soft blending';
    } else {
      cheekColor = 'Natural flush color';
    }
    
    // Tips based on face shape
    if (faceShape === 'round') {
      tips.push('Use contouring to create definition along the jawline');
      tips.push('Apply highlighter on the center of the forehead and chin');
    } else if (faceShape === 'oval') {
      tips.push('Focus on enhancing your natural bone structure');
      tips.push('Apply blush to the apples of your cheeks');
    } else if (faceShape === 'square') {
      tips.push('Softening the angles with rounded blush placement');
      tips.push('Use highlighter on the center of the forehead and chin');
    } else {
      tips.push('Enhance your features with balanced application');
      tips.push('Blend all products well for a natural finish');
    }
    
    // Display results
    const eyeLookElement = document.querySelector('.eye-look');
    const lipColorElement = document.querySelector('.lip-color');
    const cheekColorElement = document.querySelector('.cheek-color');
    const tipsElement = document.querySelector('.makeup-tips');
    
    if (eyeLookElement && lipColorElement && cheekColorElement && tipsElement) {
      eyeLookElement.textContent = eyeLook;
      lipColorElement.textContent = lipColor;
      cheekColorElement.textContent = cheekColor;
      
      // Clear existing tips
      tipsElement.innerHTML = '';
      
      // Populate tips
      tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.className = 'flex items-start p-3 bg-rose-50 dark:bg-gray-600 rounded-lg mb-2';
        tipElement.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</div>
          <span>${tip}</span>
        `;
        tipsElement.appendChild(tipElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Virtual Makeup Try-On</h1>
            <p className="text-xl text-foreground/70">
              Try different makeup looks virtually before purchasing products.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/makeup-try-on.svg" 
                        alt="Virtual Makeup Try-On" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Try On Looks</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your face shape?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="face-shape" value="oval" className="mr-2 text-rose-500" />
                        <span>Oval</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="face-shape" value="round" className="mr-2 text-rose-500" />
                        <span>Round</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="face-shape" value="square" className="mr-2 text-rose-500" />
                        <span>Square</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="face-shape" value="heart" className="mr-2 text-rose-500" />
                        <span>Heart-shaped</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your eye color?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="eye-color" value="brown" className="mr-2 text-rose-500" />
                        <span>Brown</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="eye-color" value="blue" className="mr-2 text-rose-500" />
                        <span>Blue</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="eye-color" value="green" className="mr-2 text-rose-500" />
                        <span>Green</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="eye-color" value="hazel" className="mr-2 text-rose-500" />
                        <span>Hazel</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is the occasion?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="occasion" value="casual" className="mr-2 text-rose-500" />
                        <span>Casual Day Out</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="occasion" value="work" className="mr-2 text-rose-500" />
                        <span>Work/Professional</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="occasion" value="party" className="mr-2 text-rose-500" />
                        <span>Party/Night Out</span>
                      </label>
                      <label className="flex items-center p-3 bg-rose-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="occasion" value="special" className="mr-2 text-rose-500" />
                        <span>Special Event</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={tryOnMakeup}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Try This Look
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/makeup-try-on.svg" 
                          alt="Makeup Look" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Virtual Look</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 text-rose-600 dark:text-rose-400">Recommended Look</h4>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Eye Look:</h5>
                        <p className="text-foreground/80 eye-look">
                          Select your preferences to generate a personalized eye look.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Lip Color:</h5>
                        <p className="text-foreground/80 lip-color">
                          Your recommended lip color will appear here.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-1">Cheek Color:</h5>
                        <p className="text-foreground/80 cheek-color">
                          Your recommended cheek color will appear here.
                        </p>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3 text-rose-600 dark:text-rose-400">Application Tips</h4>
                    <div className="makeup-tips">
                      <div className="text-foreground/80">
                        Helpful tips for your makeup look will appear here.
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Makeup Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Prep your skin with primer for longer-lasting makeup</li>
                      <li>• Blend eyeshadow well to avoid harsh lines</li>
                      <li>• Set your look with setting spray for all-day wear</li>
                      <li>• Clean your brushes regularly for hygienic application</li>
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