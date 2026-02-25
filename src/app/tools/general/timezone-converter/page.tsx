'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function TimeZoneConverterPage() {
  const convertTimeZone = () => {
    const dateTime = (document.getElementById('datetime') as HTMLInputElement).value;
    const fromTimezone = (document.getElementById('from-timezone') as HTMLSelectElement).value;
    const toTimezone = (document.getElementById('to-timezone') as HTMLSelectElement).value;
    const resultElement = document.getElementById('conversion-result');
    
    if (!dateTime) {
      if (resultElement) resultElement.textContent = 'Please select a date and time';
      return;
    }
    
    // Parse the input datetime
    const date = new Date(dateTime);
    
    // In a real app, we would use a library like moment-timezone
    // For this demo, we'll simulate timezone conversion with fixed offsets
    
    // Timezone offsets in hours (simplified for demo)
    const timezoneOffsets: Record<string, number> = {
      'UTC': 0,
      'GMT': 0,
      'EST': -5,
      'PST': -8,
      'CST': -6,
      'MST': -7,
      'IST': 5.5,
      'CET': 1,
      'JST': 9,
      'AEST': 10,
      'BST': 1,
      'MSK': 3,
      'HST': -10,
      'AST': -4,
      'NST': -3.5,
      'AKST': -9,
      'HKT': 8,
      'SGT': 8,
      'CST-China': 8,
      'KST': 9
    };
    
    // Calculate time difference
    const offsetDifference = timezoneOffsets[toTimezone] - timezoneOffsets[fromTimezone];
    
    // Apply offset difference
    const convertedDate = new Date(date.getTime() + offsetDifference * 60 * 60 * 1000);
    
    if (resultElement) {
      resultElement.innerHTML = `
        <div class="space-y-4">
          <div class="text-center">
            <div class="text-lg font-medium text-foreground/80">${fromTimezone}</div>
            <div class="text-2xl font-bold">${date.toLocaleString()}</div>
          </div>
          <div class="text-center">
            <div class="inline-block p-2 bg-teal-100 dark:bg-teal-900 rounded-full">
              <svg class="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
          <div class="text-center">
            <div class="text-lg font-medium text-foreground/80">${toTimezone}</div>
            <div class="text-2xl font-bold text-teal-600 dark:text-teal-400">${convertedDate.toLocaleString()}</div>
          </div>
          <div class="text-center text-sm text-foreground/80 mt-4">
            Time difference: ${offsetDifference > 0 ? '+' : ''}${offsetDifference} hours
          </div>
        </div>
      `;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Time Zone Converter</h1>
            <p className="text-xl text-foreground/70">
              Convert time between different time zones around the world.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/timezone-converter.svg" 
                        alt="Time Zone Converter" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Convert Time Zones</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="datetime" className="block text-lg font-medium text-foreground mb-2">
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="datetime"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="from-timezone" className="block text-lg font-medium text-foreground mb-2">
                      From Time Zone
                    </label>
                    <select
                      id="from-timezone"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="CST">CST (Central Standard Time)</option>
                      <option value="MST">MST (Mountain Standard Time)</option>
                      <option value="IST">IST (India Standard Time)</option>
                      <option value="CET">CET (Central European Time)</option>
                      <option value="JST">JST (Japan Standard Time)</option>
                      <option value="AEST">AEST (Australian Eastern Standard Time)</option>
                      <option value="BST">BST (British Summer Time)</option>
                      <option value="MSK">MSK (Moscow Time)</option>
                      <option value="HST">HST (Hawaii Standard Time)</option>
                      <option value="AST">AST (Atlantic Standard Time)</option>
                      <option value="NST">NST (Newfoundland Standard Time)</option>
                      <option value="AKST">AKST (Alaska Standard Time)</option>
                      <option value="HKT">HKT (Hong Kong Time)</option>
                      <option value="SGT">SGT (Singapore Time)</option>
                      <option value="CST-China">CST (China Standard Time)</option>
                      <option value="KST">KST (Korea Standard Time)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="to-timezone" className="block text-lg font-medium text-foreground mb-2">
                      To Time Zone
                    </label>
                    <select
                      id="to-timezone"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="CST">CST (Central Standard Time)</option>
                      <option value="MST">MST (Mountain Standard Time)</option>
                      <option value="IST">IST (India Standard Time)</option>
                      <option value="CET">CET (Central European Time)</option>
                      <option value="JST">JST (Japan Standard Time)</option>
                      <option value="AEST">AEST (Australian Eastern Standard Time)</option>
                      <option value="BST">BST (British Summer Time)</option>
                      <option value="MSK">MSK (Moscow Time)</option>
                      <option value="HST">HST (Hawaii Standard Time)</option>
                      <option value="AST">AST (Atlantic Standard Time)</option>
                      <option value="NST">NST (Newfoundland Standard Time)</option>
                      <option value="AKST">AKST (Alaska Standard Time)</option>
                      <option value="HKT">HKT (Hong Kong Time)</option>
                      <option value="SGT">SGT (Singapore Time)</option>
                      <option value="CST-China">CST (China Standard Time)</option>
                      <option value="KST">KST (Korea Standard Time)</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={convertTimeZone}
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Convert Time Zone
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/timezone-converter.svg" 
                          alt="Conversion Result" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Result</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                    <div id="conversion-result" className="min-h-[250px] flex items-center justify-center">
                      <div className="text-center text-foreground/80">
                        <div className="inline-block p-3 bg-teal-100 dark:bg-teal-900 rounded-full mb-4">
                          <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <p>Enter date, time, and select time zones</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Time Zone Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Daylight saving time affects some time zones seasonally</li>
                      <li>• UTC is the standard reference for time zone conversions</li>
                      <li>• Some regions observe half-hour or quarter-hour offsets</li>
                      <li>• Always confirm meeting times when scheduling across time zones</li>
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