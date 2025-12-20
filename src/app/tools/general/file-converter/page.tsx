'use client';



export default function FileConverterPage() {
  const convertFile = () => {
    const inputFile = (document.getElementById('input-file') as HTMLInputElement).files?.[0];
    const fromFormat = (document.getElementById('from-format') as HTMLSelectElement).value;
    const toFormat = (document.getElementById('to-format') as HTMLSelectElement).value;
    const resultElement = document.getElementById('conversion-result');
    
    if (!inputFile) {
      if (resultElement) resultElement.textContent = 'Please select a file to convert';
      return;
    }
    
    // In a real app, this would involve actual file conversion
    // For this demo, we'll simulate the process
    
    if (resultElement) {
      resultElement.innerHTML = `
        <div class="text-center">
          <div class="inline-block p-4 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <svg class="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Conversion Successful!</h3>
          <p class="text-foreground/80 mb-4">Your file has been converted from ${fromFormat} to ${toFormat}</p>
          <button class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
            Download Converted File
          </button>
        </div>
      `;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">File Converter</h1>
            <p className="text-xl text-foreground/70">
              Convert between different file formats quickly and easily.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/file-converter.svg" 
                        alt="File Converter" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Convert Files</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="input-file" className="block text-lg font-medium text-foreground mb-2">
                      Select File
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Any file type (MAX. 10MB)</p>
                        </div>
                        <input id="input-file" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="from-format" className="block text-lg font-medium text-foreground mb-2">
                      From Format
                    </label>
                    <select
                      id="from-format"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="pdf">PDF Document (.pdf)</option>
                      <option value="docx">Word Document (.docx)</option>
                      <option value="xlsx">Excel Spreadsheet (.xlsx)</option>
                      <option value="pptx">PowerPoint Presentation (.pptx)</option>
                      <option value="jpg">JPEG Image (.jpg)</option>
                      <option value="png">PNG Image (.png)</option>
                      <option value="gif">GIF Image (.gif)</option>
                      <option value="mp4">MP4 Video (.mp4)</option>
                      <option value="mp3">MP3 Audio (.mp3)</option>
                      <option value="txt">Text File (.txt)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="to-format" className="block text-lg font-medium text-foreground mb-2">
                      To Format
                    </label>
                    <select
                      id="to-format"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="pdf">PDF Document (.pdf)</option>
                      <option value="docx">Word Document (.docx)</option>
                      <option value="xlsx">Excel Spreadsheet (.xlsx)</option>
                      <option value="pptx">PowerPoint Presentation (.pptx)</option>
                      <option value="jpg">JPEG Image (.jpg)</option>
                      <option value="png" selected>PNG Image (.png)</option>
                      <option value="gif">GIF Image (.gif)</option>
                      <option value="mp4">MP4 Video (.mp4)</option>
                      <option value="mp3">MP3 Audio (.mp3)</option>
                      <option value="txt">Text File (.txt)</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={convertFile}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Convert File
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 w-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-3 mr-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                        <img 
                          src="/tool-icons/file-converter.svg" 
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
                        <div className="inline-block p-3 bg-pink-100 dark:bg-pink-900 rounded-full mb-4">
                          <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                        </div>
                        <p>Select a file and choose conversion options</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white dark:bg-gray-700 rounded-xl p-5 text-left">
                    <h4 className="font-bold text-lg mb-2">File Conversion Tips:</h4>
                    <ul className="text-foreground/80 space-y-2 text-sm">
                      <li>• Quality may vary depending on the conversion type</li>
                      <li>• Large files may take longer to convert</li>
                      <li>• Some formats have size limitations</li>
                      <li>• Converted files are deleted after 24 hours</li>
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