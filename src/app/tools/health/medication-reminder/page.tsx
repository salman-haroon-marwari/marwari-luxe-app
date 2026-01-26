'use client';

export default function MedicationReminderPage() {
  const addMedication = () => {
    // Get input values
    const nameInput = document.getElementById('med-name') as HTMLInputElement;
    const dosageInput = document.getElementById('dosage') as HTMLInputElement;
    const frequencyInput = document.getElementById('frequency') as HTMLInputElement;
    const timeInput = document.getElementById('time') as HTMLInputElement;
    
    if (!nameInput || !dosageInput || !frequencyInput || !timeInput) return;
    
    const name = nameInput.value;
    const dosage = dosageInput.value;
    const frequency = frequencyInput.value;
    const time = timeInput.value;
    
    if (!name || !dosage || !frequency || !time) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create medication entry
    const medList = document.querySelector('.med-list');
    if (medList) {
      // Check if this is the first medication (placeholder exists)
      const placeholder = medList.querySelector('.placeholder');
      if (placeholder) {
        placeholder.remove();
      }
      
      const medEntry = document.createElement('div');
      medEntry.className = 'bg-white dark:bg-gray-700 rounded-xl p-4 shadow';
      medEntry.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-bold text-lg text-foreground">${name}</h3>
            <p class="text-foreground/80">${dosage} • ${frequency}</p>
            <p class="text-foreground/60 text-sm">Next dose: ${time}</p>
          </div>
          <button 
            onclick="this.closest('.med-entry').remove()" 
            class="text-red-500 hover:text-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <div class="mt-3 flex space-x-2">
          <button class="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg text-sm hover:from-teal-600 hover:to-cyan-700 transition-all">
            Taken
          </button>
          <button class="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-foreground rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-all">
            Remind Later
          </button>
        </div>
      `;
      medEntry.classList.add('med-entry');
      medList.appendChild(medEntry);
      
      // Clear form
      nameInput.value = '';
      dosageInput.value = '';
      frequencyInput.value = '';
      timeInput.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Medication Reminder</h1>
            <p className="text-xl text-foreground/70">
              Set reminders for your medications and track adherence.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/medication.svg" 
                        alt="Medication Reminder" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Add Medication</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="med-name" className="block text-lg font-medium text-foreground mb-2">
                      Medication Name
                    </label>
                    <input
                      type="text"
                      id="med-name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="e.g., Aspirin"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dosage" className="block text-lg font-medium text-foreground mb-2">
                      Dosage
                    </label>
                    <input
                      type="text"
                      id="dosage"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                      placeholder="e.g., 100mg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="frequency" className="block text-lg font-medium text-foreground mb-2">
                      Frequency
                    </label>
                    <select
                      id="frequency"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    >
                      <option value="">Select frequency</option>
                      <option value="Once daily">Once daily</option>
                      <option value="Twice daily">Twice daily</option>
                      <option value="Three times daily">Three times daily</option>
                      <option value="Four times daily">Four times daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="As needed">As needed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-lg font-medium text-foreground mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    />
                  </div>
                  
                  <button 
                    onClick={addMedication}
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Add Medication
                  </button>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3 mr-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                      <img 
                        src="/tool-icons/medication.svg" 
                        alt="Medications" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Your Medications</h2>
                </div>
                
                <div className="med-list space-y-3">
                  <div className="placeholder text-center py-8 text-foreground/50">
                    <div className="inline-block mb-4">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-3">
                        <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
                          <img 
                            src="/tool-icons/medication.svg" 
                            alt="Medication Reminder" 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <p>No medications added yet</p>
                    <p className="text-sm mt-2">Add your medications to get started</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Medication Tips</h3>
                  <ul className="text-foreground/80 space-y-1 text-sm">
                    <li>• Take medications at the same time each day</li>
                    <li>• Use a pill organizer for weekly medications</li>
                    <li>• Set phone alarms as reminders</li>
                    <li>• Keep a medication journal</li>
                    <li>• Refill prescriptions before they run out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}