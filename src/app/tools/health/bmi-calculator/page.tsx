'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import { useState } from 'react';

// Client component starts here
export default function BMICalculatorPage() {
  const [bmiResult, setBmiResult] = useState<string>('--');
  const [bmiCategory, setBmiCategory] = useState<string>('Not Calculated');
  const [bmiCategoryClass, setBmiCategoryClass] = useState<string>('text-blue-600 dark:text-blue-400');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  
  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);
    
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
      alert('Please enter valid height and weight values');
      return;
    }
    
    // Convert height from cm to meters
    const heightInMeters = heightValue / 100;
    
    // Calculate BMI
    const bmi = weightValue / (heightInMeters * heightInMeters);
    
    setBmiResult(bmi.toFixed(1));
    
    // Determine category
    let category = '';
    let categoryClass = '';
    if (bmi < 18.5) {
      category = 'Underweight';
      categoryClass = 'text-blue-500';
    } else if (bmi < 25) {
      category = 'Normal weight';
      categoryClass = 'text-green-500';
    } else if (bmi < 30) {
      category = 'Overweight';
      categoryClass = 'text-yellow-500';
    } else {
      category = 'Obesity';
      categoryClass = 'text-red-500';
    }
    
    setBmiCategory(category);
    setBmiCategoryClass(`${categoryClass} font-bold`);
  };
  
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };
  
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateBMI();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">BMI Calculator</h1>
            <p className="text-xl text-foreground/70">
              Calculate your Body Mass Index to assess if your weight is healthy for your height.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/bmi.svg" 
                        alt="BMI Calculator" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Enter Your Details</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="height" className="block text-lg font-medium text-foreground mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      value={height}
                      onChange={handleHeightChange}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
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
                      value={weight}
                      onChange={handleWeightChange}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter your weight"
                    />
                  </div>
                  
                  <button 
                    onClick={calculateBMI}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Calculate BMI
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Your Result</h3>
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{bmiResult}</div>
                  <div className="text-xl text-foreground/80">BMI Score</div>
                  <div className="mt-4 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg">
                    <p className="text-foreground font-medium">Category: <span className={bmiCategoryClass}>{bmiCategory}</span></p>
                  </div>
                </div>
                
                <div className="mt-8 w-full">
                  <h4 className="text-xl font-bold text-foreground mb-4">BMI Categories</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Underweight</span>
                      <span className="font-medium">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Normal weight</span>
                      <span className="font-medium">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overweight</span>
                      <span className="font-medium">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Obesity</span>
                      <span className="font-medium">&ge; 30</span>
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