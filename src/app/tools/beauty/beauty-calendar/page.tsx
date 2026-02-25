'use client';

import Navigation from '../../../../components/Navigation';
import { useState } from 'react';

export default function BeautyCalendarPage() {
  const [treatment, setTreatment] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [appointments, setAppointments] = useState<Array<{id: number, treatment: string, date: string, time: string, notes: string}>>([]);
  const [confirmation, setConfirmation] = useState<string>('');
  
  const scheduleTreatment = () => {
    if (!treatment || !date || !time) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newAppointment = {
      id: Date.now(),
      treatment,
      date,
      time,
      notes
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setConfirmation(`Appointment Scheduled! Your ${treatment} is scheduled for ${date} at ${time}.`);
    
    // Clear form
    setTreatment('');
    setDate('');
    setTime('');
    setNotes('');
    
    // Clear confirmation after 5 seconds
    setTimeout(() => {
      setConfirmation('');
    }, 5000);
  };
  
  const handleTreatmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTreatment(e.target.value);
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };
  
  const cancelAppointment = (id: number) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      scheduleTreatment();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Beauty Calendar</h1>
            <p className="text-xl text-foreground/70">
              Plan and track your beauty treatments and appointments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scheduling Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/beauty-calendar.svg" 
                      alt="Beauty Calendar" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Schedule Treatment</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="treatment" className="block text-lg font-medium text-foreground mb-2">
                    Treatment Type
                  </label>
                  <select
                    id="treatment"
                    value={treatment}
                    onChange={handleTreatmentChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  >
                    <option value="">Select a treatment</option>
                    <option value="Facial">Facial</option>
                    <option value="Massage">Massage</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Waxing">Waxing</option>
                    <option value="Eyebrow Shaping">Eyebrow Shaping</option>
                    <option value="Eyelash Extensions">Eyelash Extensions</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-lg font-medium text-foreground mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-lg font-medium text-foreground mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={handleTimeChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-lg font-medium text-foreground mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={handleNotesChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                    placeholder="Any special requests or reminders..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={scheduleTreatment}
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Schedule Appointment
                </button>
              </div>
              
              <div className="mt-4">
                {confirmation && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 animate-fade-in">
                    <p className="font-bold">Appointment Scheduled!</p>
                    <p>{confirmation}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Upcoming Appointments */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-3 mr-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center">
                    <img 
                      src="/tool-icons/beauty-calendar.svg" 
                      alt="Upcoming Appointments" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Upcoming Appointments</h2>
              </div>
              
              <div className="space-y-3">
                {appointments.length === 0 ? (
                  <div className="text-center py-8 text-foreground/70">
                    <p>No appointments scheduled yet.</p>
                    <p className="mt-2">Schedule your first beauty treatment!</p>
                  </div>
                ) : (
                  appointments.map(appointment => (
                    <div key={appointment.id} className="flex justify-between items-center p-4 bg-indigo-50 dark:bg-gray-600 rounded-lg mb-2 animate-fade-in">
                      <div>
                        <h4 className="font-bold text-indigo-600 dark:text-indigo-400">{appointment.treatment}</h4>
                        <p className="text-sm text-foreground/80">{appointment.date} at {appointment.time}</p>
                        {appointment.notes && (
                          <p className="text-sm text-foreground/70 mt-1">{appointment.notes}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => cancelAppointment(appointment.id)}
                        className="text-red-500 hover:text-red-700 font-medium px-3 py-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-8 bg-indigo-50 dark:bg-gray-700 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-3 text-indigo-600 dark:text-indigo-400">Beauty Calendar Tips</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>• Book regular facials every 4-6 weeks for optimal skin health</li>
                  <li>• Schedule haircuts every 6-8 weeks to maintain your style</li>
                  <li>• Plan waxing appointments based on your hair growth cycle</li>
                  <li>• Book popular time slots in advance to secure your preferred dates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}