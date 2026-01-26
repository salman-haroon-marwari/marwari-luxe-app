'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function PasswordGeneratorPage() {
  const generatePassword = () => {
    const length = parseInt((document.getElementById('password-length') as HTMLInputElement).value);
    const includeUppercase = (document.getElementById('include-uppercase') as HTMLInputElement).checked;
    const includeLowercase = (document.getElementById('include-lowercase') as HTMLInputElement).checked;
    const includeNumbers = (document.getElementById('include-numbers') as HTMLInputElement).checked;
    const includeSymbols = (document.getElementById('include-symbols') as HTMLInputElement).checked;
    const passwordElement = document.getElementById('generated-password');
    
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      if (passwordElement) passwordElement.textContent = 'Please select at least one character type';
      return;
    }
    
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    if (passwordElement) {
      passwordElement.textContent = password;
    }
  };

  const copyPassword = () => {
    const passwordElement = document.getElementById('generated-password');
    if (passwordElement && passwordElement.textContent) {
      navigator.clipboard.writeText(passwordElement.textContent)
        .then(() => {
          const copyButton = document.getElementById('copy-button');
          if (copyButton) {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
              copyButton.textContent = 'Copy Password';
            }, 2000);
          }
        })
        .catch(err => {
          console.error('Failed to copy password: ', err);
        });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Password Generator</h1>
            <p className="text-xl text-foreground/70">
              Generate secure passwords to protect your online accounts.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/password-generator.svg" 
                        alt="Password Generator" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Generate Password</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="password-length" className="block text-lg font-medium text-foreground mb-2">
                      Password Length: <span id="length-value">12</span> characters
                    </label>
                    <input
                      type="range"
                      id="password-length"
                      min="6"
                      max="50"
                      defaultValue="12"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      onInput={(e) => {
                        const lengthValue = document.getElementById('length-value');
                        if (lengthValue) {
                          lengthValue.textContent = (e.target as HTMLInputElement).value;
                        }
                      }}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center p-3 bg-red-50 dark:bg-gray-700 rounded-lg">
                      <input 
                        type="checkbox" 
                        id="include-uppercase" 
                        className="mr-2 text-red-500" 
                        defaultChecked 
                      />
                      <span>Include Uppercase Letters (A-Z)</span>
                    </label>
                    
                    <label className="flex items-center p-3 bg-red-50 dark:bg-gray-700 rounded-lg">
                      <input 
                        type="checkbox" 
                        id="include-lowercase" 
                        className="mr-2 text-red-500" 
                        defaultChecked 
                      />
                      <span>Include Lowercase Letters (a-z)</span>
                    </label>
                    
                    <label className="flex items-center p-3 bg-red-50 dark:bg-gray-700 rounded-lg">
                      <input 
                        type="checkbox" 
                        id="include-numbers" 
                        className="mr-2 text-red-500" 
                        defaultChecked 
                      />
                      <span>Include Numbers (0-9)</span>
                    </label>
                    
                    <label className="flex items-center p-3 bg-red-50 dark:bg-gray-700 rounded-lg">
                      <input 
                        type="checkbox" 
                        id="include-symbols" 
                        className="mr-2 text-red-500" 
                        defaultChecked 
                      />
                      <span>Include Symbols (!@#$%^&*)</span>
                    </label>
                  </div>
                  
                  <button 
                    onClick={generatePassword}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Generate Password
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-red-100 to-rose-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/password-generator.svg" 
                          alt="Generated Password" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your Password</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <div id="generated-password" className="text-xl font-mono break-all text-red-600 dark:text-red-400 min-h-[3rem] flex items-center justify-center p-2 bg-gray-50 dark:bg-gray-600 rounded">
                        Click generate to create a password
                      </div>
                    </div>
                    
                    <button 
                      id="copy-button"
                      onClick={copyPassword}
                      className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300"
                    >
                      Copy Password
                    </button>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">Password Security Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Use unique passwords for each account</li>
                      <li>• Enable two-factor authentication when available</li>
                      <li>• Change passwords regularly (every 3-6 months)</li>
                      <li>• Store passwords securely in a password manager</li>
                      <li>• Avoid using personal information in passwords</li>
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