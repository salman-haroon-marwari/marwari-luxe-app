'use client';

import Navigation from '../../../../components/Navigation';

export default function MakeupShadeFinderPage() {
  const findShades = () => {
    // Get selected values
    const undertoneSelected = document.querySelector('input[name="undertone"]:checked') as HTMLInputElement;
    const depthSelected = document.querySelector('input[name="depth"]:checked') as HTMLInputElement;
    
    if (!undertoneSelected || !depthSelected) {
      alert('Please select both undertone and depth');
      return;
    }
    
    const undertone = undertoneSelected.value;
    const depth = depthSelected.value;
    
    // Generate shade recommendations based on selections
    let recommendedShades = [];
    
    // Logic for shade recommendations
    if (undertone === 'cool' && depth === 'fair') {
      recommendedShades = [
        { brand: 'Brand A', shade: '01C', match: 'Best Match' },
        { brand: 'Brand B', shade: '100C', match: 'Good Match' },
        { brand: 'Brand C', shade: 'N10', match: 'Close Match' }
      ];
    } else if (undertone === 'cool' && depth === 'light') {
      recommendedShades = [
        { brand: 'Brand A', shade: '02C', match: 'Best Match' },
        { brand: 'Brand B', shade: '110C', match: 'Good Match' },
        { brand: 'Brand C', shade: 'N20', match: 'Close Match' }
      ];
    } else if (undertone === 'warm' && depth === 'medium') {
      recommendedShades = [
        { brand: 'Brand A', shade: '04W', match: 'Best Match' },
        { brand: 'Brand B', shade: '130W', match: 'Good Match' },
        { brand: 'Brand C', shade: 'W30', match: 'Close Match' }
      ];
    } else if (undertone === 'neutral' && depth === 'tan') {
      recommendedShades = [
        { brand: 'Brand A', shade: '05N', match: 'Best Match' },
        { brand: 'Brand B', shade: '140N', match: 'Good Match' },
        { brand: 'Brand C', shade: 'N40', match: 'Close Match' }
      ];
    } else {
      // Default recommendations
      recommendedShades = [
        { brand: 'Brand A', shade: '03N', match: 'Best Match' },
        { brand: 'Brand B', shade: '120N', match: 'Good Match' },
        { brand: 'Brand C', shade: 'N25', match: 'Close Match' }
      ];
    }
    
    // Display results
    const shadeResults = document.querySelector('.shade-results');
    if (shadeResults) {
      shadeResults.innerHTML = '';
      
      recommendedShades.forEach((shade, index) => {
        const matchClass = shade.match === 'Best Match' ? 'bg-purple-500 text-white' : 
                          shade.match === 'Good Match' ? 'bg-purple-400 text-white' : 
                          'bg-purple-300 text-purple-800';
        
        const shadeElement = document.createElement('div');
        shadeElement.className = 'flex justify-between items-center p-3 bg-purple-50 dark:bg-gray-600 rounded-lg';
        shadeElement.innerHTML = `
          <span>${shade.brand} - Shade ${shade.shade}</span>
          <span class="text-sm ${matchClass} px-2 py-1 rounded">${shade.match}</span>
        `;
        shadeResults.appendChild(shadeElement);
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Makeup Shade Finder</h1>
            <p className="text-xl text-foreground/70">
              Find your perfect foundation and cosmetic shades with our virtual matcher.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/makeup-shade.svg" 
                        alt="Makeup Shade Finder" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Find Your Perfect Shade</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your skin's undertone?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="undertone" value="cool" className="mr-2 text-purple-500" />
                        <span>Cool (pink, red, or blue undertones)</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="undertone" value="warm" className="mr-2 text-purple-500" />
                        <span>Warm (yellow, golden, or peach undertones)</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="undertone" value="neutral" className="mr-2 text-purple-500" />
                        <span>Neutral (mix of cool and warm)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      What is your skin's depth?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="depth" value="fair" className="mr-2 text-purple-500" />
                        <span>Fair (lightest)</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="depth" value="light" className="mr-2 text-purple-500" />
                        <span>Light</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="depth" value="medium" className="mr-2 text-purple-500" />
                        <span>Medium</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="depth" value="tan" className="mr-2 text-purple-500" />
                        <span>Tan</span>
                      </label>
                      <label className="flex items-center p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="depth" value="deep" className="mr-2 text-purple-500" />
                        <span>Deep (darkest)</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={findShades}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Find My Shades
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/makeup-shade.svg" 
                          alt="Shade Results" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Recommended Shades</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-2 text-purple-600 dark:text-purple-400">Foundation Matches</h4>
                    <div className="space-y-3 mb-4 shade-results">
                      <div className="text-foreground/80">
                        Select your undertone and depth to see personalized shade recommendations.
                      </div>
                    </div>
                    <p className="text-foreground/80">
                      Test shades in natural light before purchasing for the best match.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Shade Matching Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Test foundation on your jawline, not your hand</li>
                      <li>• Shop for makeup in natural lighting</li>
                      <li>• Consider seasonal changes to your skin tone</li>
                      <li>• Don't match to your current foundation - it may be wrong</li>
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