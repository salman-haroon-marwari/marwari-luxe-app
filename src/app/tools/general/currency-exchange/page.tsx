'use client';




export default function CurrencyExchangePage() {
  const convertCurrency = () => {
    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
    const fromCurrency = (document.getElementById('from-currency') as HTMLSelectElement).value;
    const toCurrency = (document.getElementById('to-currency') as HTMLSelectElement).value;
    const resultElement = document.getElementById('exchange-result');
    
    if (isNaN(amount)) {
      if (resultElement) resultElement.textContent = 'Please enter a valid amount';
      return;
    }
    
    // Mock exchange rates (in a real app, these would come from an API)
    const exchangeRates: Record<string, number> = {
      'USD': 1,
      'EUR': 0.93,
      'GBP': 0.79,
      'JPY': 153.24,
      'CAD': 1.36,
      'AUD': 1.52,
      'CHF': 0.91,
      'CNY': 7.24,
      'INR': 83.33,
      'MXN': 16.68,
      'BRL': 5.12,
      'SGD': 1.35,
      'HKD': 7.83,
      'KRW': 1351.27,
      'TRY': 32.23,
      'RUB': 92.55,
      'SEK': 10.78,
      'NZD': 1.67,
      'ZAR': 18.65,
      'AED': 3.67
    };
    
    // Convert to USD first, then to target currency
    const amountInUSD = amount / exchangeRates[fromCurrency];
    const result = amountInUSD * exchangeRates[toCurrency];
    
    if (resultElement) {
      resultElement.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    }
    
    // Update exchange rate info
    const rateElement = document.getElementById('exchange-rate');
    if (rateElement) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      rateElement.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Currency Exchange</h1>
            <p className="text-xl text-foreground/70">
              Check current exchange rates and convert between different currencies.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/currency-exchange.svg" 
                        alt="Currency Exchange" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Exchange Currency</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="amount" className="block text-lg font-medium text-foreground mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter amount"
                      defaultValue="100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="from-currency" className="block text-lg font-medium text-foreground mb-2">
                      From Currency
                    </label>
                    <select
                      id="from-currency"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="USD" selected>US Dollar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="GBP">British Pound (GBP)</option>
                      <option value="JPY">Japanese Yen (JPY)</option>
                      <option value="CAD">Canadian Dollar (CAD)</option>
                      <option value="AUD">Australian Dollar (AUD)</option>
                      <option value="CHF">Swiss Franc (CHF)</option>
                      <option value="CNY">Chinese Yuan (CNY)</option>
                      <option value="INR">Indian Rupee (INR)</option>
                      <option value="MXN">Mexican Peso (MXN)</option>
                      <option value="BRL">Brazilian Real (BRL)</option>
                      <option value="SGD">Singapore Dollar (SGD)</option>
                      <option value="HKD">Hong Kong Dollar (HKD)</option>
                      <option value="KRW">South Korean Won (KRW)</option>
                      <option value="TRY">Turkish Lira (TRY)</option>
                      <option value="RUB">Russian Ruble (RUB)</option>
                      <option value="SEK">Swedish Krona (SEK)</option>
                      <option value="NZD">New Zealand Dollar (NZD)</option>
                      <option value="ZAR">South African Rand (ZAR)</option>
                      <option value="AED">UAE Dirham (AED)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="to-currency" className="block text-lg font-medium text-foreground mb-2">
                      To Currency
                    </label>
                    <select
                      id="to-currency"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="USD">US Dollar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="GBP">British Pound (GBP)</option>
                      <option value="JPY">Japanese Yen (JPY)</option>
                      <option value="CAD">Canadian Dollar (CAD)</option>
                      <option value="AUD" selected>Australian Dollar (AUD)</option>
                      <option value="CHF">Swiss Franc (CHF)</option>
                      <option value="CNY">Chinese Yuan (CNY)</option>
                      <option value="INR">Indian Rupee (INR)</option>
                      <option value="MXN">Mexican Peso (MXN)</option>
                      <option value="BRL">Brazilian Real (BRL)</option>
                      <option value="SGD">Singapore Dollar (SGD)</option>
                      <option value="HKD">Hong Kong Dollar (HKD)</option>
                      <option value="KRW">South Korean Won (KRW)</option>
                      <option value="TRY">Turkish Lira (TRY)</option>
                      <option value="RUB">Russian Ruble (RUB)</option>
                      <option value="SEK">Swedish Krona (SEK)</option>
                      <option value="NZD">New Zealand Dollar (NZD)</option>
                      <option value="ZAR">South African Rand (ZAR)</option>
                      <option value="AED">UAE Dirham (AED)</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={convertCurrency}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Convert Currency
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/currency-exchange.svg" 
                          alt="Exchange Result" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Result</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <div id="exchange-result" className="text-2xl font-bold text-green-600 dark:text-green-400 min-h-[3rem] flex items-center justify-center">
                        Enter amount and select currencies
                      </div>
                      <div id="exchange-rate" className="text-lg text-foreground/80 mt-4">
                        Exchange rate will appear here
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Currency Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Exchange rates fluctuate constantly throughout the day</li>
                      <li>• Banks and exchange services charge additional fees</li>
                      <li>• Major currencies are more stable than exotic ones</li>
                      <li>• Consider timing your exchanges for favorable rates</li>
                    </ul>
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