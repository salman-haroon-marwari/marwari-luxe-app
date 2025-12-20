'use client';

import Link from 'next/link';

const HomeMixedToolsSection = () => {
  // Define tools manually based on folder structure
  const tools = [
    // Health tools
    {
      id: 'bmi-calculator',
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index to understand your weight category and health status.',
      category: 'Health',
      path: '/tools/health/bmi-calculator'
    },
    {
      id: 'sleep-tracker',
      name: 'Sleep Tracker',
      description: 'Monitor your sleep patterns and receive personalized recommendations for better rest.',
      category: 'Health',
      path: '/tools/health/sleep-tracker'
    },
    // Beauty tools
    {
      id: 'skin-analyzer',
      name: 'Skin Analyzer',
      description: 'Analyze your skin type and receive personalized skincare recommendations.',
      category: 'Beauty',
      path: '/tools/beauty/skin-analyzer'
    },
    {
      id: 'makeup-shade-finder',
      name: 'Makeup Shade Finder',
      description: 'Find your perfect foundation shade with our virtual color matching tool.',
      category: 'Beauty',
      path: '/tools/beauty/makeup-shade-finder'
    },
    // General tools
    {
      id: 'unit-converter',
      name: 'Unit Converter',
      description: 'Convert between different units of measurement quickly and accurately.',
      category: 'General',
      path: '/tools/general/unit-converter'
    },
    {
      id: 'currency-exchange',
      name: 'Currency Exchange',
      description: 'Get real-time currency exchange rates and convert between world currencies.',
      category: 'General',
      path: '/tools/general/currency-exchange'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Tools</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our most popular tools across health, beauty, and general wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={tool.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tool.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tool.name}</h3>
              <p className="text-foreground/70 mb-4">{tool.description}</p>
              <Link 
                href={tool.path}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Use Tool
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
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

export default HomeMixedToolsSection;