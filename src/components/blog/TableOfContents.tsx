'use client';

import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  items: { id: string; title: string; level: string }[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-20% 0% -80% 0%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-8">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-blue-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Table of Contents</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Contents 1
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Contents 2
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Contents 3
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Contents 4
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Contents 5
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: Math.ceil(items.length / 5) }, (_, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {Array.from({ length: 5 }, (_, colIndex) => {
                      const itemIndex = rowIndex * 5 + colIndex;
                      const item = items[itemIndex];
                      
                      if (!item) {
                        return (
                          <td key={colIndex} className="px-2 py-1 whitespace-wrap text-[10px] text-gray-700">
                            &nbsp;
                          </td>
                        );
                      }
                      
                      return (
                        <td key={colIndex} className="px-2 py-1 whitespace-wrap text-[10px] text-gray-700">
                          <a
                            href={`#${item.id}`}
                            className={`block ${
                              activeId === item.id
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600 hover:text-blue-600'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(item.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, '', `#${item.id}`);
                              }
                            }}
                          >
                            • {item.title}
                          </a>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;