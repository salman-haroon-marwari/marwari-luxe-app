'use client';



export default function DateCalculatorPage() {
  const calculateDateDifference = () => {
    const startDate = new Date((document.getElementById('start-date') as HTMLInputElement).value);
    const endDate = new Date((document.getElementById('end-date') as HTMLInputElement).value);
    const resultElement = document.getElementById('difference-result');
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      if (resultElement) resultElement.textContent = 'Please select valid dates';
      return;
    }
    
    // Calculate difference in milliseconds
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Calculate years, months, weeks, days
    const years = Math.floor(daysDiff / 365);
    const remainingDays = daysDiff % 365;
    const months = Math.floor(remainingDays / 30);
    const weeks = Math.floor(remainingDays / 7);
    const days = remainingDays % 7;
    
    if (resultElement) {
      resultElement.innerHTML = `
        <div class="space-y-2">
          <div class="text-xl font-bold">${daysDiff} days</div>
          <div class="text-foreground/80">${years} years, ${months} months</div>
          <div class="text-foreground/80">${weeks} weeks, ${days} days</div>
        </div>
      `;
    }
  };

  const addDaysToDate = () => {
    const startDate = new Date((document.getElementById('add-start-date') as HTMLInputElement).value);
    const daysToAdd = parseInt((document.getElementById('days-to-add') as HTMLInputElement).value);
    const addResultElement = document.getElementById('add-result');
    
    if (isNaN(startDate.getTime()) || isNaN(daysToAdd)) {
      if (addResultElement) addResultElement.textContent = 'Please enter valid date and number of days';
      return;
    }
    
    // Add days to date
    const resultDate = new Date(startDate);
    resultDate.setDate(resultDate.getDate() + daysToAdd);
    
    if (addResultElement) {
      addResultElement.textContent = resultDate.toDateString();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Date Calculator</h1>
            <p className="text-xl text-foreground/70">
              Calculate date differences and plan future events with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date Difference Calculator */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/date-calculator.svg" 
                      alt="Date Difference" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Date Difference</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="start-date" className="block text-lg font-medium text-foreground mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="end-date" className="block text-lg font-medium text-foreground mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  />
                </div>
                
                <button 
                  onClick={calculateDateDifference}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Calculate Difference
                </button>
                
                <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 text-purple-600 dark:text-purple-400">Result</h3>
                  <div id="difference-result" className="text-center text-2xl font-bold text-purple-600 dark:text-purple-400 min-h-[6rem] flex items-center justify-center">
                    Select dates and click calculate
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add Days Calculator */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/date-calculator.svg" 
                      alt="Add Days" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Add Days</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="add-start-date" className="block text-lg font-medium text-foreground mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="add-start-date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="days-to-add" className="block text-lg font-medium text-foreground mb-2">
                    Days to Add
                  </label>
                  <input
                    type="number"
                    id="days-to-add"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    placeholder="Enter number of days"
                    defaultValue="30"
                  />
                </div>
                
                <button 
                  onClick={addDaysToDate}
                  className="w-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Calculate Future Date
                </button>
                
                <div className="bg-fuchsia-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 text-fuchsia-600 dark:text-fuchsia-400">Result</h3>
                  <div id="add-result" className="text-center text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 min-h-[3rem] flex items-center justify-center">
                    Enter date and days to add
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tips Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Date Calculation Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Business Planning</h3>
                <p className="text-foreground/80">Calculate project timelines, deadlines, and milestones with precision.</p>
              </div>
              <div className="bg-fuchsia-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">Event Planning</h3>
                <p className="text-foreground/80">Plan weddings, parties, and special occasions with accurate countdowns.</p>
              </div>
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Financial Planning</h3>
                <p className="text-foreground/80">Track investment periods, loan terms, and financial milestones.</p>
              </div>
              <div className="bg-fuchsia-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">Travel Planning</h3>
                <p className="text-foreground/80">Calculate trip durations and plan travel itineraries effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}