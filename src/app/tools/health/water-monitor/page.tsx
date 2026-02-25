'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import { useState } from 'react';

export default function WaterMonitorPage() {
  const [currentWater, setCurrentWater] = useState<number>(0);
  const [goalWater, setGoalWater] = useState<number>(2000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [goalInput, setGoalInput] = useState<string>('2000');
  
  const addWater = (amount: number) => {
    setCurrentWater(prev => prev + amount);
  };

  const setGoal = () => {
    const goal = parseFloat(goalInput);
    
    if (!isNaN(goal) && goal > 0) {
      setGoalWater(goal);
    } else {
      alert('Please enter a valid goal amount');
    }
  };
  
  const handleCustomAmount = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      addWater(amount);
      setCustomAmount('');
    } else {
      alert('Please enter a valid amount');
    }
  };
  
  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalInput(e.target.value);
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };
  
  const handleGoalKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setGoal();
    }
  };
  
  const handleCustomAmountKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCustomAmount();
    }
  };
  
  const resetIntake = () => {
    setCurrentWater(0);
  };
  
  const percentage = Math.min(100, Math.round((currentWater / goalWater) * 100));
  const progressColor = percentage < 30 ? 'bg-red-500' : percentage < 70 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Water Intake Monitor</h1>
            <p className="text-xl text-foreground/70">
              Monitor your daily water consumption and stay hydrated.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/water.svg" 
                        alt="Water Intake Monitor" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Track Your Water</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Quick Add</h3>
                    <div className="grid grid-cols-4 gap-3">
                      <button 
                        onClick={() => addWater(100)}
                        className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        100ml
                      </button>
                      <button 
                        onClick={() => addWater(250)}
                        className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        250ml
                      </button>
                      <button 
                        onClick={() => addWater(500)}
                        className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        500ml
                      </button>
                      <button 
                        onClick={() => addWater(1000)}
                        className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        1L
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Set Goal</h3>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        id="goal"
                        value={goalInput}
                        onChange={handleGoalChange}
                        onKeyPress={handleGoalKeyPress}
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Daily goal in ml"
                      />
                      <button 
                        onClick={setGoal}
                        className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Custom Amount</h3>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        id="custom-amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        onKeyPress={handleCustomAmountKeyPress}
                        className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Amount in ml"
                      />
                      <button 
                        onClick={handleCustomAmount}
                        className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-medium"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={resetIntake}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-rose-700 transition-all"
                  >
                    Reset Daily Intake
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Today's Progress</h3>
                  
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{currentWater.toFixed(2)}</div>
                        <div className="text-foreground/80">ml</div>
                        <div className="text-sm text-foreground/60 mt-1">of <span>{goalWater}</span> ml</div>
                      </div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#e5e7eb" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#0ea5e9" 
                        strokeWidth="8" 
                        strokeLinecap="round" 
                        strokeDasharray="283" 
                        strokeDashoffset="283" 
                        className="progress-bar-fill"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                  
                  <div className="mt-4 text-left bg-white dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-2">Hydration Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Drink water before you feel thirsty</li>
                      <li>• Carry a reusable water bottle</li>
                      <li>• Infuse water with fruits for flavor</li>
                      <li>• Set reminders to drink water regularly</li>
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