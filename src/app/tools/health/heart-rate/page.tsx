'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function HeartRatePage() {
  const calculateHeartRateZones = () => {
    // Get input values
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const restingInput = document.getElementById('resting') as HTMLInputElement;
    
    if (!ageInput || !restingInput) return;
    
    const age = parseInt(ageInput.value);
    const restingHR = parseInt(restingInput.value);
    
    if (isNaN(age) || isNaN(restingHR) || age <= 0 || restingHR <= 0) {
      alert('Please enter valid values');
      return;
    }
    
    // Calculate maximum heart rate (220 - age)
    const maxHR = 220 - age;
    
    // Calculate heart rate zones
    const zones = {
      warmUp: { min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.6) },
      fatBurn: { min: Math.round(maxHR * 0.6), max: Math.round(maxHR * 0.7) },
      cardio: { min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.8) },
      peak: { min: Math.round(maxHR * 0.8), max: Math.round(maxHR * 0.95) },
      max: maxHR
    };
    
    // Display results
    const maxHRElement = document.querySelector('.max-hr');
    const restingHRElement = document.querySelector('.resting-hr');
    
    if (maxHRElement && restingHRElement) {
      maxHRElement.textContent = maxHR.toString();
      restingHRElement.textContent = restingHR.toString();
    }
    
    // Update zone displays
    const warmUpElement = document.querySelector('.warmup-zone');
    const fatBurnElement = document.querySelector('.fatburn-zone');
    const cardioElement = document.querySelector('.cardio-zone');
    const peakElement = document.querySelector('.peak-zone');
    
    if (warmUpElement && fatBurnElement && cardioElement && peakElement) {
      warmUpElement.textContent = `${zones.warmUp.min} - ${zones.warmUp.max}`;
      fatBurnElement.textContent = `${zones.fatBurn.min} - ${zones.fatBurn.max}`;
      cardioElement.textContent = `${zones.cardio.min} - ${zones.cardio.max}`;
      peakElement.textContent = `${zones.peak.min} - ${zones.peak.max}`;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Heart Rate Monitor</h1>
            <p className="text-xl text-foreground/70">
              Track your heart rate and monitor cardiovascular health.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/heart.svg" 
                        alt="Heart Rate Monitor" 
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
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter your age"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="resting" className="block text-lg font-medium text-foreground mb-2">
                      Resting Heart Rate (bpm)
                    </label>
                    <input
                      type="number"
                      id="resting"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Resting HR in bpm"
                    />
                  </div>
                  
                  <button 
                    onClick={calculateHeartRateZones}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Calculate Heart Rate Zones
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/heart.svg" 
                          alt="Heart Rate" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Heart Rate</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                      <div className="text-sm text-foreground/70">Max HR</div>
                      <div className="text-2xl font-bold text-red-600 max-hr">--</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-3">
                      <div className="text-sm text-foreground/70">Resting HR</div>
                      <div className="text-2xl font-bold text-red-600 resting-hr">--</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4 w-full">
                    <h4 className="font-bold text-lg mb-2">Training Zones</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-3">
                        <span className="font-medium">Warm Up (50-60%)</span>
                        <span className="font-bold warmup-zone">-- bpm</span>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-3">
                        <span className="font-medium">Fat Burn (60-70%)</span>
                        <span className="font-bold fatburn-zone">-- bpm</span>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-3">
                        <span className="font-medium">Cardio (70-80%)</span>
                        <span className="font-bold cardio-zone">-- bpm</span>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-3">
                        <span className="font-medium">Peak (80-95%)</span>
                        <span className="font-bold peak-zone">-- bpm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-left bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">Heart Rate Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Measure resting HR in the morning before getting up</li>
                      <li>• Stay in your target zone for 20-30 minutes for effective workouts</li>
                      <li>• Gradually increase intensity to reach higher zones</li>
                      <li>• Allow recovery time between intense sessions</li>
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