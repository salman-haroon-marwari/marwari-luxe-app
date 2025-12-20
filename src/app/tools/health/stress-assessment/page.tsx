'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function StressAssessmentPage() {
  const calculateStressLevel = () => {
    // Get all radio button groups
    const questions = [
      'q1', 'q2', 'q3', 'q4', 'q5', 
      'q6', 'q7', 'q8', 'q9', 'q10'
    ];
    
    let totalScore = 0;
    let answeredAll = true;
    
    questions.forEach(question => {
      const selected = document.querySelector(`input[name="${question}"]:checked`) as HTMLInputElement;
      if (selected) {
        totalScore += parseInt(selected.value);
      } else {
        answeredAll = false;
      }
    });
    
    if (!answeredAll) {
      alert('Please answer all questions');
      return;
    }
    
    // Display results
    const scoreElement = document.querySelector('.stress-score');
    const levelElement = document.querySelector('.stress-level');
    const adviceElement = document.querySelector('.stress-advice');
    
    if (scoreElement && levelElement && adviceElement) {
      scoreElement.textContent = totalScore.toString();
      
      // Determine stress level
      let level = '';
      let levelClass = '';
      let advice = '';
      
      if (totalScore <= 10) {
        level = 'Low Stress';
        levelClass = 'text-green-500';
        advice = 'You\'re experiencing low stress levels. Continue practicing healthy coping strategies and maintain your current routines.';
      } else if (totalScore <= 20) {
        level = 'Moderate Stress';
        levelClass = 'text-yellow-500';
        advice = 'You\'re experiencing moderate stress. Try relaxation techniques like deep breathing, meditation, or taking short breaks during your day.';
      } else if (totalScore <= 30) {
        level = 'High Stress';
        levelClass = 'text-orange-500';
        advice = 'You\'re experiencing high stress. Consider speaking with a counselor or therapist. Practice stress management techniques and prioritize self-care.';
      } else {
        level = 'Very High Stress';
        levelClass = 'text-red-500';
        advice = 'You\'re experiencing very high stress levels. It\'s important to seek professional help. Reach out to a mental health professional or your healthcare provider.';
      }
      
      levelElement.innerHTML = `<span class="${levelClass} font-bold">${level}</span>`;
      adviceElement.textContent = advice;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Stress Level Assessment</h1>
            <p className="text-xl text-foreground/70">
              Assess your stress levels and receive coping recommendations.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/stress.svg" 
                        alt="Stress Level Assessment" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Assessment Questions</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">1. How often do you feel overwhelmed?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q1" value="1" className="mr-2 text-purple-500" />
                        <span>Never</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q1" value="2" className="mr-2 text-purple-500" />
                        <span>Rarely</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q1" value="3" className="mr-2 text-purple-500" />
                        <span>Sometimes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q1" value="4" className="mr-2 text-purple-500" />
                        <span>Often</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q1" value="5" className="mr-2 text-purple-500" />
                        <span>Always</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">2. How well do you sleep?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q2" value="1" className="mr-2 text-purple-500" />
                        <span>Very Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q2" value="2" className="mr-2 text-purple-500" />
                        <span>Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q2" value="3" className="mr-2 text-purple-500" />
                        <span>Fair</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q2" value="4" className="mr-2 text-purple-500" />
                        <span>Poorly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q2" value="5" className="mr-2 text-purple-500" />
                        <span>Very Poorly</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">3. How irritable do you feel?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q3" value="1" className="mr-2 text-purple-500" />
                        <span>Not at all</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q3" value="2" className="mr-2 text-purple-500" />
                        <span>A little</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q3" value="3" className="mr-2 text-purple-500" />
                        <span>Moderately</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q3" value="4" className="mr-2 text-purple-500" />
                        <span>Quite a bit</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q3" value="5" className="mr-2 text-purple-500" />
                        <span>Extremely</span>
                      </label>
                    </div>
                  </div>
                  
                  <button 
                    onClick={calculateStressLevel}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Calculate Stress Level
                  </button>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">4. How well do you concentrate?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q4" value="1" className="mr-2 text-purple-500" />
                        <span>Very Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q4" value="2" className="mr-2 text-purple-500" />
                        <span>Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q4" value="3" className="mr-2 text-purple-500" />
                        <span>Fair</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q4" value="4" className="mr-2 text-purple-500" />
                        <span>Poorly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q4" value="5" className="mr-2 text-purple-500" />
                        <span>Very Poorly</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">5. How relaxed do you feel?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q5" value="5" className="mr-2 text-purple-500" />
                        <span>Not at all</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q5" value="4" className="mr-2 text-purple-500" />
                        <span>A little</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q5" value="3" className="mr-2 text-purple-500" />
                        <span>Moderately</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q5" value="2" className="mr-2 text-purple-500" />
                        <span>Quite a bit</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q5" value="1" className="mr-2 text-purple-500" />
                        <span>Extremely</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">6. How often do you feel tired?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q6" value="1" className="mr-2 text-purple-500" />
                        <span>Never</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q6" value="2" className="mr-2 text-purple-500" />
                        <span>Rarely</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q6" value="3" className="mr-2 text-purple-500" />
                        <span>Sometimes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q6" value="4" className="mr-2 text-purple-500" />
                        <span>Often</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q6" value="5" className="mr-2 text-purple-500" />
                        <span>Always</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">7. How well do you cope with challenges?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q7" value="1" className="mr-2 text-purple-500" />
                        <span>Very Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q7" value="2" className="mr-2 text-purple-500" />
                        <span>Well</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q7" value="3" className="mr-2 text-purple-500" />
                        <span>Fair</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q7" value="4" className="mr-2 text-purple-500" />
                        <span>Poorly</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q7" value="5" className="mr-2 text-purple-500" />
                        <span>Very Poorly</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">8. How satisfied are you with life?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q8" value="1" className="mr-2 text-purple-500" />
                        <span>Very Satisfied</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q8" value="2" className="mr-2 text-purple-500" />
                        <span>Satisfied</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q8" value="3" className="mr-2 text-purple-500" />
                        <span>Neutral</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q8" value="4" className="mr-2 text-purple-500" />
                        <span>Dissatisfied</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q8" value="5" className="mr-2 text-purple-500" />
                        <span>Very Dissatisfied</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">9. How often do you feel anxious?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q9" value="1" className="mr-2 text-purple-500" />
                        <span>Never</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q9" value="2" className="mr-2 text-purple-500" />
                        <span>Rarely</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q9" value="3" className="mr-2 text-purple-500" />
                        <span>Sometimes</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q9" value="4" className="mr-2 text-purple-500" />
                        <span>Often</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q9" value="5" className="mr-2 text-purple-500" />
                        <span>Always</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">10. How much control do you feel over your life?</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="q10" value="1" className="mr-2 text-purple-500" />
                        <span>Complete Control</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q10" value="2" className="mr-2 text-purple-500" />
                        <span>Significant Control</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q10" value="3" className="mr-2 text-purple-500" />
                        <span>Moderate Control</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q10" value="4" className="mr-2 text-purple-500" />
                        <span>Limited Control</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="q10" value="5" className="mr-2 text-purple-500" />
                        <span>No Control</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Stress Assessment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-5">
                  <div className="text-sm text-foreground/70 mb-1">Stress Score</div>
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 stress-score">--</div>
                  <div className="text-foreground/80">(0-50 scale)</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-5">
                  <div className="text-sm text-foreground/70 mb-1">Stress Level</div>
                  <div className="text-2xl stress-level">Not Assessed</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                <h4 className="font-bold text-lg mb-2">Recommendation</h4>
                <p className="text-foreground/80 stress-advice">
                  Complete the assessment to get personalized stress management advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}