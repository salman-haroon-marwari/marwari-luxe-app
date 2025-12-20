'use client';

import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';

export default function TextFormatterPage() {
  const formatText = (formatType: string) => {
    const inputText = (document.getElementById('input-text') as HTMLTextAreaElement).value;
    const outputElement = document.getElementById('formatted-output');
    
    if (!inputText.trim()) {
      if (outputElement) outputElement.textContent = 'Please enter text to format';
      return;
    }
    
    let formattedText = inputText;
    
    switch (formatType) {
      case 'uppercase':
        formattedText = inputText.toUpperCase();
        break;
      case 'lowercase':
        formattedText = inputText.toLowerCase();
        break;
      case 'titlecase':
        formattedText = inputText.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        break;
      case 'sentencecase':
        formattedText = inputText.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => 
          c.toUpperCase()
        );
        break;
      case 'reverse':
        formattedText = inputText.split('').reverse().join('');
        break;
      case 'alternating':
        formattedText = inputText.split('').map((char, index) => 
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        break;
      case 'remove-spaces':
        formattedText = inputText.replace(/\s+/g, '');
        break;
      case 'add-line-breaks':
        formattedText = inputText.replace(/([.!?])/g, '$1\n');
        break;
      default:
        formattedText = inputText;
    }
    
    if (outputElement) {
      outputElement.textContent = formattedText;
    }
  };

  const copyFormattedText = () => {
    const outputElement = document.getElementById('formatted-output');
    if (outputElement && outputElement.textContent) {
      navigator.clipboard.writeText(outputElement.textContent)
        .then(() => {
          const copyButton = document.getElementById('copy-button');
          if (copyButton) {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
              copyButton.textContent = 'Copy Formatted Text';
            }, 2000);
          }
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  const clearText = () => {
    (document.getElementById('input-text') as HTMLTextAreaElement).value = '';
    const outputElement = document.getElementById('formatted-output');
    if (outputElement) outputElement.textContent = 'Formatted text will appear here';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Text Formatter</h1>
            <p className="text-xl text-foreground/70">
              Format and manipulate text with various transformation tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/text-formatter.svg" 
                      alt="Text Formatter" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Input Text</h2>
              </div>
              
              <div className="mb-6">
                <textarea
                  id="input-text"
                  rows={10}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  placeholder="Enter text to format..."
                ></textarea>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => formatText('uppercase')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  UPPER CASE
                </button>
                <button 
                  onClick={() => formatText('lowercase')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  lower case
                </button>
                <button 
                  onClick={() => formatText('titlecase')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  Title Case
                </button>
                <button 
                  onClick={() => formatText('sentencecase')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  Sentence case
                </button>
                <button 
                  onClick={() => formatText('reverse')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  Reverse
                </button>
                <button 
                  onClick={() => formatText('alternating')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  AlTeRnAtInG
                </button>
                <button 
                  onClick={() => formatText('remove-spaces')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  Remove Spaces
                </button>
                <button 
                  onClick={() => formatText('add-line-breaks')}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300"
                >
                  Add Line Breaks
                </button>
              </div>
              
              <div className="mt-4">
                <button 
                  onClick={clearText}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Clear Text
                </button>
              </div>
            </div>
            
            {/* Output Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/text-formatter.svg" 
                        alt="Formatted Text" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Formatted Text</h2>
                </div>
                
                <button 
                  id="copy-button"
                  onClick={copyFormattedText}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300"
                >
                  Copy Formatted Text
                </button>
              </div>
              
              <div className="mb-6">
                <pre 
                  id="formatted-output"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-foreground min-h-[300px] whitespace-pre-wrap break-words font-sans"
                >
                  Formatted text will appear here
                </pre>
              </div>
              
              <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-3 text-amber-600 dark:text-amber-400">Text Formatting Tips:</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• <span className="font-medium">UPPER CASE:</span> Converts all letters to uppercase</li>
                  <li>• <span className="font-medium">lower case:</span> Converts all letters to lowercase</li>
                  <li>• <span className="font-medium">Title Case:</span> Capitalizes the first letter of each word</li>
                  <li>• <span className="font-medium">Sentence case:</span> Capitalizes the first letter of each sentence</li>
                  <li>• <span className="font-medium">Reverse:</span> Reverses the entire text string</li>
                  <li>• <span className="font-medium">AlTeRnAtInG:</span> Alternates between uppercase and lowercase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}