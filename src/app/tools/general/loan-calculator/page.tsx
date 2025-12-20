'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function LoanCalculatorPage() {
  const calculateLoan = () => {
    const loanAmount = parseFloat((document.getElementById('loan-amount') as HTMLInputElement).value);
    const interestRate = parseFloat((document.getElementById('interest-rate') as HTMLInputElement).value);
    const loanTerm = parseFloat((document.getElementById('loan-term') as HTMLInputElement).value);
    const termUnit = (document.getElementById('term-unit') as HTMLSelectElement).value;
    
    const resultElement = document.getElementById('calculation-result');
    const monthlyPaymentElement = document.getElementById('monthly-payment');
    const totalPaymentElement = document.getElementById('total-payment');
    const totalInterestElement = document.getElementById('total-interest');
    
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      if (resultElement) resultElement.textContent = 'Please enter valid numbers for all fields';
      return;
    }
    
    // Convert term to months if needed
    let termInMonths = loanTerm;
    if (termUnit === 'years') {
      termInMonths = loanTerm * 12;
    }
    
    // Calculate monthly payment using the loan formula
    const monthlyRate = interestRate / 100 / 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, termInMonths);
    const denominator = Math.pow(1 + monthlyRate, termInMonths) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
    
    const totalPayment = monthlyPayment * termInMonths;
    const totalInterest = totalPayment - loanAmount;
    
    // Update results
    if (monthlyPaymentElement) monthlyPaymentElement.textContent = monthlyPayment.toFixed(2);
    if (totalPaymentElement) totalPaymentElement.textContent = totalPayment.toFixed(2);
    if (totalInterestElement) totalInterestElement.textContent = totalInterest.toFixed(2);
    
    // Generate amortization schedule (first 12 months)
    const scheduleBody = document.getElementById('amortization-body');
    if (scheduleBody) {
      scheduleBody.innerHTML = '';
      
      let balance = loanAmount;
      for (let month = 1; month <= Math.min(12, termInMonths); month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;
        
        if (balance < 0) balance = 0;
        
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 dark:border-gray-700';
        row.innerHTML = `
          <td class="py-2 px-4">${month}</td>
          <td class="py-2 px-4">${monthlyPayment.toFixed(2)}</td>
          <td class="py-2 px-4">${principalPayment.toFixed(2)}</td>
          <td class="py-2 px-4">${interestPayment.toFixed(2)}</td>
          <td class="py-2 px-4">${balance.toFixed(2)}</td>
        `;
        scheduleBody.appendChild(row);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Loan Calculator</h1>
            <p className="text-xl text-foreground/70">
              Calculate loan payments, interest rates, and amortization schedules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/loan-calculator.svg" 
                      alt="Loan Calculator" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Loan Details</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="loan-amount" className="block text-lg font-medium text-foreground mb-2">
                    Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    id="loan-amount"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    placeholder="Enter loan amount"
                    defaultValue="100000"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest-rate" className="block text-lg font-medium text-foreground mb-2">
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    id="interest-rate"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    placeholder="Enter interest rate"
                    defaultValue="5.5"
                  />
                </div>
                
                <div>
                  <label htmlFor="loan-term" className="block text-lg font-medium text-foreground mb-2">
                    Loan Term
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      id="loan-term"
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter term"
                      defaultValue="30"
                    />
                    <select
                      id="term-unit"
                      className="w-24 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  onClick={calculateLoan}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Calculate Loan
                </button>
              </div>
              
              <div className="mt-8 bg-orange-50 dark:bg-gray-700 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">Loan Tips:</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• A higher down payment reduces the loan amount and interest</li>
                  <li>• Shorter loan terms mean higher monthly payments but less total interest</li>
                  <li>• Compare rates from multiple lenders before choosing</li>
                  <li>• Consider paying extra toward principal to reduce interest</li>
                </ul>
              </div>
            </div>
            
            {/* Results Section */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/loan-calculator.svg" 
                        alt="Loan Results" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Loan Summary</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-sm text-foreground/80 mb-1">Monthly Payment</div>
                    <div id="monthly-payment" className="text-2xl font-bold text-orange-600 dark:text-orange-400">$0.00</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-sm text-foreground/80 mb-1">Total Payment</div>
                    <div id="total-payment" className="text-2xl font-bold text-orange-600 dark:text-orange-400">$0.00</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-sm text-foreground/80 mb-1">Total Interest</div>
                    <div id="total-interest" className="text-2xl font-bold text-orange-600 dark:text-orange-400">$0.00</div>
                  </div>
                </div>
                
                <div className="bg-orange-50 dark:bg-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">Payment Breakdown:</h3>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-600" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Principal (60%)</span>
                    <span>Interest (40%)</span>
                  </div>
                </div>
              </div>
              
              {/* Amortization Schedule */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Amortization Schedule (First 12 Months)</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="py-2 px-4 text-left">Month</th>
                        <th className="py-2 px-4 text-left">Payment</th>
                        <th className="py-2 px-4 text-left">Principal</th>
                        <th className="py-2 px-4 text-left">Interest</th>
                        <th className="py-2 px-4 text-left">Balance</th>
                      </tr>
                    </thead>
                    <tbody id="amortization-body">
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-foreground/80">
                          Calculate loan to see amortization schedule
                        </td>
                      </tr>
                    </tbody>
                  </table>
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