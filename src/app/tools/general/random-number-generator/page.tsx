'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function RandomNumberGeneratorPage() {
  const generateRandomNumber = () => {
    const min = parseInt((document.getElementById('min-value') as HTMLInputElement).value);
    const max = parseInt((document.getElementById('max-value') as HTMLInputElement).value);
    const count = parseInt((document.getElementById('count') as HTMLInputElement).value);
    const allowDuplicates = (document.getElementById('allow-duplicates') as HTMLInputElement).checked;
    const resultElement = document.getElementById('random-results');
    
    if (isNaN(min) || isNaN(max) || isNaN(count)) {
      if (resultElement) resultElement.textContent = 'Please enter valid numbers for all fields';
      return;
    }
    
    if (min >= max) {
      if (resultElement) resultElement.textContent = 'Minimum value must be less than maximum value';
      return;
    }
    
    if (count <= 0) {
      if (resultElement) resultElement.textContent = 'Count must be greater than zero';
      return;
    }
    
    const numbers = [];
    
    if (allowDuplicates) {
      // Generate numbers with duplicates allowed
      for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);
      }
    } else {
      // Generate unique numbers
      const range = max - min + 1;
      if (count > range) {
        if (resultElement) resultElement.textContent = `Cannot generate ${count} unique numbers in range ${min}-${max}`;
        return;
      }
      
      const availableNumbers = [];
      for (let i = min; i <= max; i++) {
        availableNumbers.push(i);
      }
      
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        numbers.push(availableNumbers[randomIndex]);
        availableNumbers.splice(randomIndex, 1);
      }
    }
    
    if (resultElement) {
      resultElement.innerHTML = `
        <div class="text-center">
          <div class="text-3xl font-bold text-lime-600 dark:text-lime-400 mb-4">${numbers.join(', ')}</div>
          <div class="text-foreground/80">Generated ${count} random number${count !== 1 ? 's' : ''} between ${min} and ${max}</div>
          <div class="text-sm text-foreground/70 mt-2">${allowDuplicates ? 'Duplicates allowed' : 'Unique numbers only'}</div>
        </div>
      `;
    }
  };

  const copyNumbers = () => {
    const resultElement = document.getElementById('random-results');
    if (resultElement && resultElement.textContent) {
      // Extract just the numbers from the HTML content
      const numbersText = resultElement.textContent.split('\n')[0];
      navigator.clipboard.writeText(numbersText)
        .then(() => {
          const copyButton = document.getElementById('copy-button');
          if (copyButton) {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
              copyButton.textContent = 'Copy Numbers';
            }, 2000);
          }
        })
        .catch(err => {
          console.error('Failed to copy numbers: ', err);
        });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Random Number Generator</h1>
            <p className="text-xl text-foreground/70">
              Generate random numbers within specified ranges for various uses.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/random-number.svg" 
                        alt="Random Number Generator" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Generate Numbers</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="min-value" className="block text-lg font-medium text-foreground mb-2">
                      Minimum Value
                    </label>
                    <input
                      type="number"
                      id="min-value"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter minimum value"
                      defaultValue="1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="max-value" className="block text-lg font-medium text-foreground mb-2">
                      Maximum Value
                    </label>
                    <input
                      type="number"
                      id="max-value"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter maximum value"
                      defaultValue="100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="count" className="block text-lg font-medium text-foreground mb-2">
                      How Many Numbers?
                    </label>
                    <input
                      type="number"
                      id="count"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter count"
                      defaultValue="5"
                    />
                  </div>
                  
                  <div className="flex items-center p-3 bg-lime-50 dark:bg-gray-700 rounded-lg">
                    <input 
                      type="checkbox" 
                      id="allow-duplicates" 
                      className="mr-2 text-lime-500" 
                      defaultChecked 
                    />
                    <label htmlFor="allow-duplicates" className="text-foreground">
                      Allow duplicate numbers
                    </label>
                  </div>
                  
                  <button 
                    onClick={generateRandomNumber}
                    className="w-full px-6 py-3 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold rounded-lg hover:from-lime-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Generate Random Numbers
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-lime-100 to-green-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-xl p-3 mr-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                          <img 
                            src="/tool-icons/random-number.svg" 
                            alt="Generated Numbers" 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Your Numbers</h3>
                    </div>
                    
                    <button 
                      id="copy-button"
                      onClick={copyNumbers}
                      className="px-4 py-2 bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-lg hover:from-lime-600 hover:to-green-700 transition-all duration-300"
                    >
                      Copy Numbers
                    </button>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                    <div id="random-results" className="min-h-[200px] flex items-center justify-center">
                      <div className="text-center text-foreground/80">
                        <div className="inline-block p-3 bg-lime-100 dark:bg-lime-900 rounded-full mb-4">
                          <svg className="w-8 h-8 text-lime-600 dark:text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <p>Generated numbers will appear here</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Random Number Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Use for contests, giveaways, and lotteries</li>
                      <li>• Generate unique IDs or reference numbers</li>
                      <li>• Create random samples for research</li>
                      <li>• Use in games and educational activities</li>
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