'use client';

export default function SkinAnalyzerPage() {
  const analyzeSkinType = () => {
    // Get all radio button groups
    const q1Selected = document.querySelector('input[name="q1"]:checked') as HTMLInputElement;
    const q2Selected = document.querySelector('input[name="q2"]:checked') as HTMLInputElement;
    
    if (!q1Selected || !q2Selected) {
      alert('Please answer all questions');
      return;
    }
    
    const q1Value = q1Selected.value;
    const q2Value = q2Selected.value;
    
    // Determine skin type based on answers
    let skinType = '';
    let skinDescription = '';
    let recommendations = '';
    
    // Logic to determine skin type
    if (q1Value === 'tight' && q2Value === 'rarely') {
      skinType = 'Dry Skin';
      skinDescription = 'Your skin lacks oil and may feel tight or flaky.';
      recommendations = 'Use hydrating cleansers, rich moisturizers, and avoid harsh products.';
    } else if (q1Value === 'comfortable' && q2Value === 'rarely') {
      skinType = 'Normal Skin';
      skinDescription = 'Your skin is well-balanced with few imperfections.';
      recommendations = 'Maintain your routine with gentle cleansers and lightweight moisturizers.';
    } else if (q1Value === 'shiny' && (q2Value === 'weekly' || q2Value === 'daily')) {
      skinType = 'Oily Skin';
      skinDescription = 'Your skin produces excess oil, especially in the T-zone.';
      recommendations = 'Use foaming cleansers, oil-free moisturizers, and salicylic acid products.';
    } else if (q1Value === 'combination' && q2Value === 'weekly') {
      skinType = 'Combination Skin';
      skinDescription = 'Your T-zone is oily while cheeks are normal or dry.';
      recommendations = 'Use different products for different areas - gentle cleanser with targeted treatments.';
    } else {
      // Default case for mixed answers
      skinType = 'Combination Skin';
      skinDescription = 'Your skin has both oily and dry areas.';
      recommendations = 'Use gentle, balancing products and adjust routine by area.';
    }
    
    // Display results
    const skinTypeElement = document.querySelector('.skin-type-result');
    const skinDescriptionElement = document.querySelector('.skin-description');
    const recommendationsElement = document.querySelector('.recommendations');
    
    if (skinTypeElement && skinDescriptionElement && recommendationsElement) {
      skinTypeElement.textContent = skinType;
      skinDescriptionElement.textContent = skinDescription;
      recommendationsElement.textContent = recommendations;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skin Type Analyzer</h1>
            <p className="text-xl text-foreground/70">
              Determine your skin type and get personalized product recommendations.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/skin-type.svg" 
                        alt="Skin Type Analyzer" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Analyze Your Skin</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      How would you describe your skin's appearance shortly after cleansing?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q1" value="tight" className="mr-2 text-pink-500" />
                        <span>Tight and dry</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q1" value="normal" className="mr-2 text-pink-500" />
                        <span>Comfortable and smooth</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q1" value="oily" className="mr-2 text-pink-500" />
                        <span>Shiny, especially in the T-zone</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q1" value="combination" className="mr-2 text-pink-500" />
                        <span>Oily in some areas, dry in others</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-foreground mb-2">
                      How often do you experience breakouts?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q2" value="rarely" className="mr-2 text-pink-500" />
                        <span>Rarely or never</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q2" value="monthly" className="mr-2 text-pink-500" />
                        <span>Occasionally, mostly around my period</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q2" value="weekly" className="mr-2 text-pink-500" />
                        <span>Weekly, mainly in the T-zone</span>
                      </label>
                      <label className="flex items-center p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                        <input type="radio" name="q2" value="daily" className="mr-2 text-pink-500" />
                        <span>Daily, all over my face</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={analyzeSkinType}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Analyze My Skin Type
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/skin-type.svg" 
                          alt="Results" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Results</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-2 text-pink-600 dark:text-pink-400">Skin Type</h4>
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4 skin-type-result">Not Analyzed</div>
                    <p className="text-foreground/80 skin-description">
                      Complete the questionnaire to discover your skin type and get personalized recommendations.
                    </p>
                    <div className="mt-4 text-left">
                      <h5 className="font-bold text-foreground mb-2">Recommendations:</h5>
                      <p className="text-foreground/80 recommendations">
                        Answer the questions above to receive personalized skincare advice.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Skin Type Guide:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• <span className="font-medium">Normal:</span> Balanced, few imperfections</li>
                      <li>• <span className="font-medium">Dry:</span> Flaky, tight feeling</li>
                      <li>• <span className="font-medium">Oily:</span> Shiny, enlarged pores</li>
                      <li>• <span className="font-medium">Combination:</span> Oily T-zone, dry cheeks</li>
                      <li>• <span className="font-medium">Sensitive:</span> Redness, irritation easily</li>
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