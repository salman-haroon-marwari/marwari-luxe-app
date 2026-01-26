'use client';

import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function HealthToolTemplate({ 
  title, 
  description, 
  toolName 
}: { 
  title: string; 
  description: string; 
  toolName: string;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-xl text-foreground/70">
              {description}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="text-center py-12">
              <div className="inline-block p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center mx-auto">
                  <span className="text-4xl">🛠️</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                We're working hard to bring you the {toolName}. This tool will help you track and improve your health metrics.
              </p>
              <div className="mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                  Notify Me When Ready
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}