'use client';

import { tools } from '../data/tools';
import Link from 'next/link';
import { getToolUrl } from '../utils/toolUtils';

const HealthToolsSection = () => {
  // Filter tools by Health category
  const healthTools = tools.filter(tool => tool.category === 'Health');

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Health Tools</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Empower your wellness journey with our specialized health tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthTools.map((tool, index) => (
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
                href={getToolUrl(tool.id, tool.name, tool.category)} 
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
            View All Health Tools
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthToolsSection;