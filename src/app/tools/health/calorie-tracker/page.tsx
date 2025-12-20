'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function CalorieTrackerPage() {
  const calculateCalories = () => {
    // Get input values
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const genderSelect = document.getElementById('gender') as HTMLSelectElement;
    const activitySelect = document.getElementById('activity') as HTMLSelectElement;
    
    if (!ageInput || !heightInput || !weightInput || !genderSelect || !activitySelect) return;
    
    const age = parseInt(ageInput.value);
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
    const gender = genderSelect.value;
    const activityLevel = parseFloat(activitySelect.value);
    
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
      alert('Please enter valid values');
      return;
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityLevel;
    
    // Display results
    const bmrElement = document.querySelector('.bmr-result');
    const tdeeElement = document.querySelector('.tdee-result');
    
    if (bmrElement && tdeeElement) {
      bmrElement.textContent = Math.round(bmr).toString();
      tdeeElement.textContent = Math.round(tdee).toString();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Calorie Tracker</h1>
            <p className="text-xl text-foreground/70">
              Track your daily calorie intake and monitor your nutritional goals.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/calorie.svg" 
                        alt="Calorie Tracker" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Your Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="age" className="block text-lg font-medium text-foreground mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter your age"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="height" className="block text-lg font-medium text-foreground mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter your height"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weight" className="block text-lg font-medium text-foreground mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter your weight"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-lg font-medium text-foreground mb-2">
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="activity" className="block text-lg font-medium text-foreground mb-2">
                      Activity Level
                    </label>
                    <select
                      id="activity"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select your activity level</option>
                      <option value="1.2">Sedentary (little or no exercise)</option>
                      <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                      <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                      <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                      <option value="1.9">Extra active (very hard exercise & physical job)</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={calculateCalories}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Calculate Calories
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Your Results</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-5 shadow">
                      <h4 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">Basal Metabolic Rate</h4>
                      <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-1 bmr-result">--</div>
                      <div className="text-foreground/80">calories/day</div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-5 shadow">
                      <h4 className="font-bold text-lg mb-2 text-amber-600 dark:text-amber-400">Total Daily Energy Expenditure</h4>
                      <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-1 tdee-result">--</div>
                      <div className="text-foreground/80">calories/day</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-left bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">What these numbers mean:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• <span className="font-medium">BMR</span> is the number of calories your body needs at rest</li>
                      <li>• <span className="font-medium">TDEE</span> is your BMR multiplied by your activity level</li>
                      <li>• To maintain weight, consume approximately your TDEE in calories</li>
                      <li>• To lose weight, consume fewer calories than your TDEE</li>
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