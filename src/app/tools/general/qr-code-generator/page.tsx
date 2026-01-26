'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function QRCodeGeneratorPage() {
  const generateQRCode = () => {
    const text = (document.getElementById('qr-text') as HTMLTextAreaElement).value;
    const size = (document.getElementById('qr-size') as HTMLInputElement).value;
    const qrResultElement = document.getElementById('qr-result');
    
    if (!text.trim()) {
      if (qrResultElement) qrResultElement.innerHTML = '<div class="text-center text-foreground/80">Please enter text or URL to generate QR code</div>';
      return;
    }
    
    // In a real app, we would use a library like qrcode.react
    // For this demo, we'll simulate QR code generation
    
    if (qrResultElement) {
      qrResultElement.innerHTML = `
        <div class="text-center">
          <div class="inline-block p-4 bg-white rounded-lg">
            <div class="w-${size} h-${size} bg-gray-800 flex items-center justify-center rounded">
              <div class="grid grid-cols-4 gap-1 w-32 h-32">
                ${Array.from({ length: 16 }).map((_, i) => 
                  `<div class="${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm"></div>`
                ).join('')}
              </div>
            </div>
          </div>
          <div class="mt-4 text-sm text-foreground/80 break-all p-2 bg-gray-50 dark:bg-gray-700 rounded">
            ${text.substring(0, 30)}${text.length > 30 ? '...' : ''}
          </div>
        </div>
      `;
    }
  };

  const downloadQRCode = () => {
    alert('In a real implementation, this would download the QR code as an image file.');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">QR Code Generator</h1>
            <p className="text-xl text-foreground/70">
              Create QR codes for URLs, text, or contact information.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/qr-code.svg" 
                        alt="QR Code Generator" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Create QR Code</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="qr-text" className="block text-lg font-medium text-foreground mb-2">
                      Text or URL
                    </label>
                    <textarea
                      id="qr-text"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="Enter text, URL, or contact information"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="qr-size" className="block text-lg font-medium text-foreground mb-2">
                      Size: <span id="size-value">200</span>px
                    </label>
                    <input
                      type="range"
                      id="qr-size"
                      min="100"
                      max="400"
                      defaultValue="200"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      onInput={(e) => {
                        const sizeValue = document.getElementById('size-value');
                        if (sizeValue) {
                          sizeValue.textContent = (e.target as HTMLInputElement).value;
                        }
                      }}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={generateQRCode}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    >
                      Generate QR Code
                    </button>
                    
                    <button 
                      onClick={downloadQRCode}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    >
                      Download
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 bg-indigo-50 dark:bg-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-3 text-indigo-600 dark:text-indigo-400">QR Code Uses:</h3>
                  <ul className="text-foreground/80 space-y-2 text-sm">
                    <li>• Share website URLs quickly with mobile users</li>
                    <li>• Create digital business cards with contact info</li>
                    <li>• Link to Wi-Fi networks for guests</li>
                    <li>• Display restaurant menus digitally</li>
                    <li>• Track inventory with product information</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/qr-code.svg" 
                          alt="Generated QR Code" 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Your QR Code</h3>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                    <div id="qr-result" className="min-h-[250px] flex items-center justify-center">
                      <div className="text-center text-foreground/80">
                        Generated QR code will appear here
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">QR Code Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Test your QR code after generation to ensure it works</li>
                      <li>• Keep QR codes simple with short URLs for better scanning</li>
                      <li>• Place QR codes in well-lit areas for easier scanning</li>
                      <li>• Include a call-to-action near QR codes to encourage scans</li>
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