'use client';

export default function StepCounterPage() {
  const setGoal = () => {
    const goalInput = document.getElementById('goal') as HTMLInputElement;
    const goalDisplay = document.querySelector('.goal-display');
    
    if (goalInput && goalDisplay) {
      const goal = parseInt(goalInput.value);
      if (!isNaN(goal) && goal > 0) {
        goalDisplay.textContent = goal.toLocaleString();
        updateProgress(0, goal);
      } else {
        alert('Please enter a valid goal');
      }
    }
  };

  const addSteps = (amount: number) => {
    const currentElement = document.querySelector('.current-steps');
    const goalElement = document.querySelector('.goal-display');
    
    if (currentElement && goalElement) {
      const current = parseInt(currentElement.textContent?.replace(/,/g, '') || '0');
      const goal = parseInt(goalElement.textContent?.replace(/,/g, '') || '10000');
      const newAmount = current + amount;
      
      currentElement.textContent = newAmount.toLocaleString();
      updateProgress(newAmount, goal);
    }
  };

  const updateProgress = (current: number, goal: number) => {
    const percentage = Math.min(100, Math.round((current / goal) * 100));
    const progressBar = document.querySelector('.progress-bar-fill') as HTMLElement;
    const progressText = document.querySelector('.progress-text') as HTMLElement;
    const distanceElement = document.querySelector('.distance-display');
    const caloriesElement = document.querySelector('.calories-display');
    
    if (progressBar && progressText) {
      progressBar.style.width = `${percentage}%`;
      progressText.textContent = `${percentage}%`;
    }
    
    // Estimate distance (assuming 0.8m per step)
    const distance = (current * 0.8 / 1000).toFixed(2); // km
    if (distanceElement) {
      distanceElement.textContent = distance;
    }
    
    // Estimate calories (assuming 0.04 calories per step)
    const calories = Math.round(current * 0.04);
    if (caloriesElement) {
      caloriesElement.textContent = calories.toString();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Step Counter</h1>
            <p className="text-xl text-foreground/70">
              Count your daily steps and set activity goals.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/steps.svg" 
                        alt="Step Counter" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Track Your Steps</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Set Daily Goal</h3>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        id="goal"
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Daily step goal"
                        defaultValue="10000"
                      />
                      <button 
                        onClick={setGoal}
                        className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all font-medium"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Add Steps</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <button 
                        onClick={() => addSteps(100)}
                        className="py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all font-medium"
                      >
                        100
                      </button>
                      <button 
                        onClick={() => addSteps(500)}
                        className="py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all font-medium"
                      >
                        500
                      </button>
                      <button 
                        onClick={() => addSteps(1000)}
                        className="py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all font-medium"
                      >
                        1000
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Custom Steps</h3>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        id="custom-steps"
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Number of steps"
                      />
                      <button 
                        onClick={() => {
                          const customInput = document.getElementById('custom-steps') as HTMLInputElement;
                          if (customInput) {
                            const steps = parseInt(customInput.value);
                            if (!isNaN(steps) && steps > 0) {
                              addSteps(steps);
                              customInput.value = '';
                            } else {
                              alert('Please enter a valid number of steps');
                            }
                          }
                        }}
                        className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all font-medium"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const currentElement = document.querySelector('.current-steps');
                      const goalElement = document.querySelector('.goal-display');
                      if (currentElement && goalElement) {
                        currentElement.textContent = '0';
                        const goal = parseInt(goalElement.textContent?.replace(/,/g, '') || '10000');
                        updateProgress(0, goal);
                      }
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-rose-700 transition-all"
                  >
                    Reset Daily Steps
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Today's Progress</h3>
                  
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 current-steps">0</div>
                        <div className="text-foreground/80">steps</div>
                        <div className="text-sm text-foreground/60 mt-1">of <span className="goal-display">10,000</span> steps</div>
                      </div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#e5e7eb" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        strokeDasharray="283" 
                        strokeDashoffset="283" 
                        className="progress-bar-fill"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 progress-text">0%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Distance</div>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="distance-display">0.00</span> km
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Calories</div>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="calories-display">0</span> cal
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-left bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">Activity Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Take the stairs instead of elevators</li>
                      <li>• Park farther away from your destination</li>
                      <li>• Walk during phone calls or meetings</li>
                      <li>• Aim for 10,000 steps daily for good health</li>
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