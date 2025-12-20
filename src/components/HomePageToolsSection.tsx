'use client';

import Link from 'next/link';

const HomePageToolsSection = () => {
  // Define the specific tools to display on the home page
  const tools = [
    {
      id: 'beauty-calendar',
      name: 'Beauty Calendar',
      description: 'Plan and track your beauty treatments and appointments.',
      category: 'Beauty',
      path: '/tools/beauty/beauty-calendar',
      icon: '/tool-icons/beauty-calendar.svg'
    },
    {
      id: 'date-calculator',
      name: 'Date Calculator',
      description: 'Calculate date differences and plan future events with ease.',
      category: 'General',
      path: '/tools/general/date-calculator',
      icon: '/tool-icons/date-calculator.svg'
    },
    {
      id: 'bmi-calculator',
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index to assess if your weight is healthy for your height.',
      category: 'Health',
      path: '/tools/health/bmi-calculator',
      icon: '/tool-icons/bmi.svg'
    },
    {
      id: 'blood-pressure',
      name: 'Blood Pressure Tracker',
      description: 'Monitor your blood pressure readings over time.',
      category: 'Health',
      path: '/tools/health/blood-pressure',
      icon: '/tool-icons/blood-pressure.svg'
    },
    {
      id: 'currency-exchange',
      name: 'Currency Exchange',
      description: 'Check current exchange rates and convert between different currencies.',
      category: 'General',
      path: '/tools/general/currency-exchange',
      icon: '/tool-icons/currency-exchange.svg'
    },
    {
      id: 'hair-care',
      name: 'Hair Care Advisor',
      description: 'Get personalized hair care recommendations based on your hair type.',
      category: 'Beauty',
      path: '/tools/beauty/hair-care',
      icon: '/tool-icons/haircare.svg'
    }
  ];

  // Define category colors
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health':
        return 'from-blue-500 to-indigo-600';
      case 'Beauty':
        return 'from-pink-500 to-rose-600';
      case 'General':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Tools</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our most-used tools to enhance your wellness and beauty journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <a 
              key={tool.id} 
              href={tool.path}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-slide-up block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`rounded-xl p-3 shadow-md bg-gradient-to-br ${getCategoryColor(tool.category)}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg w-10 h-10 flex items-center justify-center">
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
              <p className="text-foreground/70 mb-4">{tool.description}</p>
              <div className="inline-flex items-center text-primary font-medium hover:underline">
                Use Tool
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/tools" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 hover-lift focus-ring"
          >
            View All Tools
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageToolsSection;