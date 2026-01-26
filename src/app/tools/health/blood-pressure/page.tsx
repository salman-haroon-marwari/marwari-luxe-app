'use client';



export default function BloodPressurePage() {
  const addReading = () => {
    // Get input values
    const systolicInput = document.getElementById('systolic') as HTMLInputElement;
    const diastolicInput = document.getElementById('diastolic') as HTMLInputElement;
    const pulseInput = document.getElementById('pulse') as HTMLInputElement;
    
    if (!systolicInput || !diastolicInput || !pulseInput) return;
    
    const systolic = parseInt(systolicInput.value);
    const diastolic = parseInt(diastolicInput.value);
    const pulse = parseInt(pulseInput.value);
    
    if (isNaN(systolic) || isNaN(diastolic) || isNaN(pulse) || 
        systolic <= 0 || diastolic <= 0 || pulse <= 0) {
      alert('Please enter valid values');
      return;
    }
    
    // Display results
    const systolicElement = document.querySelector('.systolic-value');
    const diastolicElement = document.querySelector('.diastolic-value');
    const pulseElement = document.querySelector('.pulse-value');
    
    if (systolicElement && diastolicElement && pulseElement) {
      systolicElement.textContent = systolic.toString();
      diastolicElement.textContent = diastolic.toString();
      pulseElement.textContent = pulse.toString();
    }
    
    // Determine category
    const categoryElement = document.querySelector('.bp-category');
    const adviceElement = document.querySelector('.bp-advice');
    
    if (categoryElement && adviceElement) {
      let category = '';
      let categoryClass = '';
      let advice = '';
      
      // Determine BP category based on systolic and diastolic values
      if (systolic < 120 && diastolic < 80) {
        category = 'Normal';
        categoryClass = 'text-green-500';
        advice = 'Your blood pressure is in the normal range. Maintain a healthy lifestyle with regular exercise and a balanced diet.';
      } else if (systolic < 130 && diastolic < 80) {
        category = 'Elevated';
        categoryClass = 'text-yellow-500';
        advice = 'Your blood pressure is elevated. Focus on lifestyle changes like reducing salt intake, exercising regularly, and managing stress.';
      } else if (systolic < 140 || diastolic < 90) {
        category = 'High Blood Pressure Stage 1';
        categoryClass = 'text-orange-500';
        advice = 'You have high blood pressure stage 1. Consult with a healthcare provider about lifestyle changes and possible medication.';
      } else if (systolic >= 140 || diastolic >= 90) {
        category = 'High Blood Pressure Stage 2';
        categoryClass = 'text-red-500';
        advice = 'You have high blood pressure stage 2. Seek immediate medical attention and follow your doctor\'s treatment plan.';
      } else if (systolic > 180 || diastolic > 120) {
        category = 'Hypertensive Crisis';
        categoryClass = 'text-red-700';
        advice = 'This is a hypertensive crisis. Seek emergency medical care immediately.';
      }
      
      categoryElement.innerHTML = `<span class="${categoryClass} font-bold">${category}</span>`;
      adviceElement.textContent = advice;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blood Pressure Tracker</h1>
            <p className="text-xl text-foreground/70">
              Monitor your blood pressure readings over time.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/blood-pressure.svg" 
                        alt="Blood Pressure Tracker" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Record Reading</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="systolic" className="block text-lg font-medium text-foreground mb-2">
                      Systolic (mmHg)
                    </label>
                    <input
                      type="number"
                      id="systolic"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Top number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="diastolic" className="block text-lg font-medium text-foreground mb-2">
                      Diastolic (mmHg)
                    </label>
                    <input
                      type="number"
                      id="diastolic"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Bottom number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pulse" className="block text-lg font-medium text-foreground mb-2">
                      Pulse (bpm)
                    </label>
                    <input
                      type="number"
                      id="pulse"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Heart rate"
                    />
                  </div>
                  
                  <button 
                    onClick={addReading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold rounded-lg hover:from-rose-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Record Blood Pressure
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-rose-100 to-red-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/blood-pressure.svg" 
                          alt="Blood Pressure" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Current Reading</h3>
                  </div>
                  
                  <div className="text-5xl font-bold text-rose-600 dark:text-rose-400 mb-2">
                    <span className="systolic-value">--</span>/<span className="diastolic-value">--</span>
                  </div>
                  <div className="text-xl text-foreground/80 mb-2">mmHg</div>
                  <div className="text-2xl mb-6 bp-category">Not Recorded</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Pulse</div>
                      <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 pulse-value">--</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Status</div>
                      <div className="text-lg bp-category">Not Recorded</div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 w-full">
                    <h4 className="font-bold text-lg mb-2">Recommendation</h4>
                    <p className="text-foreground/80 bp-advice">
                      Enter your blood pressure reading to get personalized advice.
                    </p>
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