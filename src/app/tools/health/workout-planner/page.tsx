'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function WorkoutPlannerPage() {
  const generatePlan = () => {
    // Get input values
    const goalSelect = document.getElementById('goal') as HTMLSelectElement;
    const fitnessSelect = document.getElementById('fitness-level') as HTMLSelectElement;
    const daysSelect = document.getElementById('days-per-week') as HTMLSelectElement;
    const equipmentSelect = document.getElementById('equipment') as HTMLSelectElement;
    
    if (!goalSelect || !fitnessSelect || !daysSelect || !equipmentSelect) return;
    
    const goal = goalSelect.value;
    const fitnessLevel = fitnessSelect.value;
    const daysPerWeek = daysSelect.value;
    const equipment = equipmentSelect.value;
    
    if (!goal || !fitnessLevel || !daysPerWeek || !equipment) {
      alert('Please select all options');
      return;
    }
    
    // Generate workout plan based on inputs
    const planContainer = document.querySelector('.workout-plan');
    if (planContainer) {
      let planHTML = '';
      
      // Header
      planHTML += `
        <div class="bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl p-5 mb-6">
          <h3 class="text-2xl font-bold mb-2">Your Personalized Workout Plan</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div>
              <div class="font-medium">Goal</div>
              <div>${goal}</div>
            </div>
            <div>
              <div class="font-medium">Fitness Level</div>
              <div>${fitnessLevel}</div>
            </div>
            <div>
              <div class="font-medium">Days/Week</div>
              <div>${daysPerWeek}</div>
            </div>
            <div>
              <div class="font-medium">Equipment</div>
              <div>${equipment}</div>
            </div>
          </div>
        </div>
      `;
      
      // Workout days
      const days = parseInt(daysPerWeek);
      for (let i = 1; i <= days; i++) {
        planHTML += `
          <div class="bg-white dark:bg-gray-700 rounded-xl p-5 mb-5 shadow">
            <h4 class="font-bold text-lg text-amber-600 dark:text-amber-400 mb-3">Day ${i}: Full Body Workout</h4>
            <div class="space-y-3">
        `;
        
        // Different exercises based on fitness level
        let exercises = [];
        if (fitnessLevel === 'Beginner') {
          exercises = [
            { name: 'Bodyweight Squats', sets: 3, reps: '10-12' },
            { name: 'Push-ups (knee or wall)', sets: 3, reps: '5-10' },
            { name: 'Plank', sets: 3, reps: '15-30 seconds' },
            { name: 'Glute Bridges', sets: 3, reps: '12-15' },
            { name: 'Mountain Climbers', sets: 3, reps: '20 seconds' }
          ];
        } else if (fitnessLevel === 'Intermediate') {
          exercises = [
            { name: 'Goblet Squats', sets: 4, reps: '10-12' },
            { name: 'Push-ups', sets: 4, reps: '8-15' },
            { name: 'Plank with Shoulder Taps', sets: 3, reps: '30 seconds' },
            { name: 'Lunges', sets: 3, reps: '10 each leg' },
            { name: 'Burpees', sets: 3, reps: '8-10' }
          ];
        } else {
          exercises = [
            { name: 'Jump Squats', sets: 4, reps: '12-15' },
            { name: 'Diamond Push-ups', sets: 4, reps: '10-15' },
            { name: 'Side Planks', sets: 3, reps: '45 seconds each' },
            { name: 'Jump Lunges', sets: 4, reps: '12 each leg' },
            { name: 'Mountain Climber Burpees', sets: 3, reps: '12-15' }
          ];
        }
        
        exercises.forEach((exercise: { name: string; sets: number; reps: string; }) => {
          planHTML += `
            <div class="flex justify-between items-center p-3 bg-amber-50 dark:bg-gray-600 rounded-lg">
              <div>
                <div class="font-medium">${exercise.name}</div>
                <div class="text-sm text-foreground/70">${exercise.sets} sets × ${exercise.reps}</div>
              </div>
              <button class="px-3 py-1 bg-amber-500 text-white rounded-lg text-sm hover:bg-amber-600 transition-all">
                Done
              </button>
            </div>
          `;
        });
        
        planHTML += `
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div class="flex justify-between">
                <span>Warm-up: 5-10 minutes light cardio</span>
                <span>Cool-down: 5-10 minutes stretching</span>
              </div>
            </div>
          </div>
        `;
      }
      
      // Tips section
      planHTML += `
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
          <h4 class="font-bold text-lg mb-3">Workout Tips</h4>
          <ul class="text-foreground/80 space-y-2 text-sm">
            <li>• Start with lighter weights to focus on form</li>
            <li>• Rest for 30-60 seconds between sets</li>
            <li>• Stay hydrated throughout your workout</li>
            <li>• Listen to your body and rest when needed</li>
            <li>• Gradually increase intensity as you progress</li>
          </ul>
        </div>
      `;
      
      planContainer.innerHTML = planHTML;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Workout Planner</h1>
            <p className="text-xl text-foreground/70">
              Create personalized workout plans and track your progress.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/workout.svg" 
                        alt="Workout Planner" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Create Your Plan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="goal" className="block text-lg font-medium text-foreground mb-2">
                      Fitness Goal
                    </label>
                    <select
                      id="goal"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select your goal</option>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Endurance">Endurance</option>
                      <option value="General Fitness">General Fitness</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="fitness-level" className="block text-lg font-medium text-foreground mb-2">
                      Fitness Level
                    </label>
                    <select
                      id="fitness-level"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select your fitness level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="days-per-week" className="block text-lg font-medium text-foreground mb-2">
                      Days Per Week
                    </label>
                    <select
                      id="days-per-week"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select days per week</option>
                      <option value="1">1 Day</option>
                      <option value="2">2 Days</option>
                      <option value="3">3 Days</option>
                      <option value="4">4 Days</option>
                      <option value="5">5 Days</option>
                      <option value="6">6 Days</option>
                      <option value="7">7 Days</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="equipment" className="block text-lg font-medium text-foreground mb-2">
                      Equipment Available
                    </label>
                    <select
                      id="equipment"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select equipment</option>
                      <option value="None (Bodyweight only)">None (Bodyweight only)</option>
                      <option value="Basic (Dumbbells, Resistance bands)">Basic (Dumbbells, Resistance bands)</option>
                      <option value="Full Gym">Full Gym</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={generatePlan}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Generate Workout Plan
                  </button>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/workout.svg" 
                        alt="Workout Plan" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Your Workout Plan</h2>
                </div>
                
                <div className="workout-plan">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 text-center h-full flex items-center justify-center">
                    <div>
                      <div className="inline-block mb-4">
                        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-3">
                          <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
                            <img 
                              src="/tool-icons/workout.svg" 
                              alt="Workout" 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Personalized Plan Awaits</h3>
                      <p className="text-foreground/70">
                        Fill out the form to generate your customized workout plan
                      </p>
                    </div>
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