'use client';

export default function SleepTrackerPage() {
  const calculateSleepScore = () => {
    // Get input values
    const bedtimeInput = document.getElementById('bedtime') as HTMLInputElement;
    const wakeupInput = document.getElementById('wakeup') as HTMLInputElement;
    const qualitySelect = document.getElementById('quality') as HTMLSelectElement;
    const disturbancesInput = document.getElementById('disturbances') as HTMLInputElement;
    
    if (!bedtimeInput || !wakeupInput || !qualitySelect || !disturbancesInput) return;
    
    const bedtime = bedtimeInput.value;
    const wakeup = wakeupInput.value;
    const quality = parseInt(qualitySelect.value);
    const disturbances = parseInt(disturbancesInput.value);
    
    if (!bedtime || !wakeup) {
      alert('Please enter bedtime and wake up time');
      return;
    }
    
    // Calculate sleep duration
    const bedTimeDate = new Date(`1970-01-01T${bedtime}`);
    let wakeTimeDate = new Date(`1970-01-01T${wakeup}`);
    
    // If wakeup time is earlier than bedtime, it means they slept past midnight
    if (wakeTimeDate < bedTimeDate) {
      wakeTimeDate.setDate(wakeTimeDate.getDate() + 1);
    }
    
    const diffMs = wakeTimeDate.getTime() - bedTimeDate.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    // Calculate sleep score (0-100)
    let score = 0;
    
    // Duration factor (7-9 hours is optimal)
    if (hours >= 7 && hours <= 9) {
      score += 40;
    } else if (hours >= 6 && hours <= 10) {
      score += 30;
    } else {
      score += 20;
    }
    
    // Quality factor
    score += quality * 15;
    
    // Disturbances factor (fewer is better)
    if (disturbances === 0) {
      score += 20;
    } else if (disturbances <= 2) {
      score += 15;
    } else if (disturbances <= 5) {
      score += 10;
    } else {
      score += 5;
    }
    
    // Display results
    const durationElement = document.querySelector('.sleep-duration');
    const scoreElement = document.querySelector('.sleep-score');
    const ratingElement = document.querySelector('.sleep-rating');
    const adviceElement = document.querySelector('.sleep-advice');
    
    if (durationElement && scoreElement && ratingElement && adviceElement) {
      durationElement.textContent = `${hours}h ${minutes}m`;
      
      scoreElement.textContent = score.toString();
      
      // Determine rating
      let rating = '';
      let ratingClass = '';
      let advice = '';
      
      if (score >= 80) {
        rating = 'Excellent';
        ratingClass = 'text-green-500';
        advice = 'Great job! Your sleep habits are excellent. Keep maintaining your routine.';
      } else if (score >= 60) {
        rating = 'Good';
        ratingClass = 'text-blue-500';
        advice = 'Your sleep quality is good, but there\'s room for improvement. Try to reduce disturbances.';
      } else if (score >= 40) {
        rating = 'Fair';
        ratingClass = 'text-yellow-500';
        advice = 'Your sleep could be better. Focus on consistent bedtimes and reducing disruptions.';
      } else {
        rating = 'Poor';
        ratingClass = 'text-red-500';
        advice = 'Your sleep needs attention. Try to establish a regular sleep schedule and create a better sleep environment.';
      }
      
      ratingElement.innerHTML = `<span class="${ratingClass} font-bold">${rating}</span>`;
      adviceElement.textContent = advice;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sleep Quality Tracker</h1>
            <p className="text-xl text-foreground/70">
              Track your sleep patterns and improve your rest quality.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/sleep.svg" 
                        alt="Sleep Quality Tracker" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Sleep Details</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="bedtime" className="block text-lg font-medium text-foreground mb-2">
                      Bedtime
                    </label>
                    <input
                      type="time"
                      id="bedtime"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="wakeup" className="block text-lg font-medium text-foreground mb-2">
                      Wake Up Time
                    </label>
                    <input
                      type="time"
                      id="wakeup"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quality" className="block text-lg font-medium text-foreground mb-2">
                      Sleep Quality
                    </label>
                    <select
                      id="quality"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">How well did you sleep?</option>
                      <option value="4">Very Good</option>
                      <option value="3">Good</option>
                      <option value="2">Fair</option>
                      <option value="1">Poor</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="disturbances" className="block text-lg font-medium text-foreground mb-2">
                      Disturbances
                    </label>
                    <input
                      type="number"
                      id="disturbances"
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Number of times disturbed"
                    />
                  </div>
                  
                  <button 
                    onClick={calculateSleepScore}
                    className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Calculate Sleep Score
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Your Sleep Analysis</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Duration</div>
                      <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 sleep-duration">--h --m</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                      <div className="text-sm text-foreground/70 mb-1">Score</div>
                      <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 sleep-score">--</div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 mb-6">
                    <div className="text-lg font-bold text-foreground mb-2">Rating</div>
                    <div className="text-2xl sleep-rating">Not Calculated</div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <div className="text-lg font-bold text-foreground mb-2">Recommendation</div>
                    <p className="text-foreground/80 sleep-advice">
                      Enter your sleep details to get personalized advice.
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