'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function UnitConverterPage() {
  const convertUnits = () => {
    const inputValue = parseFloat((document.getElementById('input-value') as HTMLInputElement).value);
    const fromUnit = (document.getElementById('from-unit') as HTMLSelectElement).value;
    const toUnit = (document.getElementById('to-unit') as HTMLSelectElement).value;
    const resultElement = document.getElementById('conversion-result');
    
    if (isNaN(inputValue)) {
      if (resultElement) resultElement.textContent = 'Please enter a valid number';
      return;
    }
    
    let result = 0;
    
    // Length conversions (meters as base unit)
    const lengthFactors = {
      'millimeters': 0.001,
      'centimeters': 0.01,
      'meters': 1,
      'kilometers': 1000,
      'inches': 0.0254,
      'feet': 0.3048,
      'yards': 0.9144,
      'miles': 1609.344
    };
    
    // Weight conversions (grams as base unit)
    const weightFactors = {
      'milligrams': 0.001,
      'grams': 1,
      'kilograms': 1000,
      'ounces': 28.3495,
      'pounds': 453.592,
      'stones': 6350.29
    };
    
    // Volume conversions (liters as base unit)
    const volumeFactors = {
      'milliliters': 0.001,
      'liters': 1,
      'cubic-meters': 1000,
      'teaspoons': 0.00492892,
      'tablespoons': 0.0147868,
      'fluid-ounces': 0.0295735,
      'cups': 0.24,
      'pints': 0.473176,
      'quarts': 0.946353,
      'gallons': 3.78541
    };
    
    // Temperature conversions
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      result = (inputValue * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      result = (inputValue - 32) * 5/9;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      result = inputValue + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      result = inputValue - 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      result = (inputValue - 273.15) * 9/5 + 32;
    } else {
      // Handle other units
      let factorFrom = 1;
      let factorTo = 1;
      
      if (fromUnit in lengthFactors && toUnit in lengthFactors) {
        factorFrom = lengthFactors[fromUnit as keyof typeof lengthFactors];
        factorTo = lengthFactors[toUnit as keyof typeof lengthFactors];
      } else if (fromUnit in weightFactors && toUnit in weightFactors) {
        factorFrom = weightFactors[fromUnit as keyof typeof weightFactors];
        factorTo = weightFactors[toUnit as keyof typeof weightFactors];
      } else if (fromUnit in volumeFactors && toUnit in volumeFactors) {
        factorFrom = volumeFactors[fromUnit as keyof typeof volumeFactors];
        factorTo = volumeFactors[toUnit as keyof typeof volumeFactors];
      }
      
      result = inputValue * factorFrom / factorTo;
    }
    
    if (resultElement) {
      resultElement.textContent = `${inputValue} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Unit Converter</h1>
            <p className="text-xl text-foreground/70">
              Convert between different measurement units quickly and accurately.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/unit-converter.svg" 
                        alt="Unit Converter" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Convert Units</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="input-value" className="block text-lg font-medium text-foreground mb-2">
                      Value to Convert
                    </label>
                    <input
                      type="number"
                      id="input-value"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter a number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="from-unit" className="block text-lg font-medium text-foreground mb-2">
                      From Unit
                    </label>
                    <select
                      id="from-unit"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <optgroup label="Length">
                        <option value="millimeters">Millimeters</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="meters" selected>Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="inches">Inches</option>
                        <option value="feet">Feet</option>
                        <option value="yards">Yards</option>
                        <option value="miles">Miles</option>
                      </optgroup>
                      <optgroup label="Weight">
                        <option value="milligrams">Milligrams</option>
                        <option value="grams">Grams</option>
                        <option value="kilograms">Kilograms</option>
                        <option value="ounces">Ounces</option>
                        <option value="pounds">Pounds</option>
                        <option value="stones">Stones</option>
                      </optgroup>
                      <optgroup label="Volume">
                        <option value="milliliters">Milliliters</option>
                        <option value="liters">Liters</option>
                        <option value="cubic-meters">Cubic Meters</option>
                        <option value="teaspoons">Teaspoons</option>
                        <option value="tablespoons">Tablespoons</option>
                        <option value="fluid-ounces">Fluid Ounces</option>
                        <option value="cups">Cups</option>
                        <option value="pints">Pints</option>
                        <option value="quarts">Quarts</option>
                        <option value="gallons">Gallons</option>
                      </optgroup>
                      <optgroup label="Temperature">
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                      </optgroup>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="to-unit" className="block text-lg font-medium text-foreground mb-2">
                      To Unit
                    </label>
                    <select
                      id="to-unit"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <optgroup label="Length">
                        <option value="millimeters">Millimeters</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="meters">Meters</option>
                        <option value="kilometers" selected>Kilometers</option>
                        <option value="inches">Inches</option>
                        <option value="feet">Feet</option>
                        <option value="yards">Yards</option>
                        <option value="miles">Miles</option>
                      </optgroup>
                      <optgroup label="Weight">
                        <option value="milligrams">Milligrams</option>
                        <option value="grams">Grams</option>
                        <option value="kilograms">Kilograms</option>
                        <option value="ounces">Ounces</option>
                        <option value="pounds">Pounds</option>
                        <option value="stones">Stones</option>
                      </optgroup>
                      <optgroup label="Volume">
                        <option value="milliliters">Milliliters</option>
                        <option value="liters">Liters</option>
                        <option value="cubic-meters">Cubic Meters</option>
                        <option value="teaspoons">Teaspoons</option>
                        <option value="tablespoons">Tablespoons</option>
                        <option value="fluid-ounces">Fluid Ounces</option>
                        <option value="cups">Cups</option>
                        <option value="pints">Pints</option>
                        <option value="quarts">Quarts</option>
                        <option value="gallons">Gallons</option>
                      </optgroup>
                      <optgroup label="Temperature">
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit" selected>Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                      </optgroup>
                    </select>
                  </div>
                  
                  <button 
                    onClick={convertUnits}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Convert
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/unit-converter.svg" 
                          alt="Conversion Result" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Result</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                    <div className="text-center">
                      <div id="conversion-result" className="text-2xl font-bold text-blue-600 dark:text-blue-400 min-h-[3rem] flex items-center justify-center">
                        Enter values and click convert
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Conversion Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• For temperature, use the dedicated converters</li>
                      <li>• Scientific notation is used for very large/small numbers</li>
                      <li>• Results are rounded to 4 decimal places</li>
                      <li>• All conversions use standard international units</li>
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