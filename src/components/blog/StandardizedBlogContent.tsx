'use client';

import { useEffect } from 'react';

interface StandardizedBlogContentProps {
  content: string;
  title: string;
  date: string;
  readTime: string;
}

const StandardizedBlogContent = ({ content, title, date, readTime }: StandardizedBlogContentProps) => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Process the content to ensure it follows the standardized structure
  const processContent = () => {
    // Remove any existing title, date, and read time from content since we're adding them separately
    let processedContent = content;
      
    // Remove any existing H1 tags from content since title is handled separately
    processedContent = processedContent.replace(/<h1[^>]*>.*?<\/h1>/gi, '');
      
    // Remove any existing date/read time displays
    processedContent = processedContent.replace(/<div[^>]*class="[^"]*date[^"]*"[^>]*>.*?<\/div>/gi, '');
      
    // Enhance table styling by wrapping content in styled boxes
    processedContent = processedContent.replace(
      /<table([^>]*)>(.*?)<\/table>/gs,
      '<div class="table-container"><table$1>$2</table></div>'
    );
      
    return processedContent;
  };

  return (
    <article className="max-w-[90vw] md:max-w-4xl mx-auto px-4 py-8">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h1>

      {/* Date and Read Time */}
      <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8 pb-4 border-b border-gray-200">
        <span className="font-medium">{date}</span>
        <span className="font-medium">{readTime}</span>
      </div>

      {/* Blog Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: processContent() }}
      />

      {/* Custom Styles for Blog Content */}
      <style jsx>{`
        :global(.prose) {
          color: #374151;
          line-height: 1.75;
          font-size: clamp(0.875rem, 2.5vw, 1rem);
        }
        
        :global(.prose h2) {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          margin: 1.5em 0 1em 0;
          color: #111827;
        }
        
        :global(.prose h3) {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          font-weight: 600;
          margin: 1.25em 0 0.75em 0;
          color: #1f2937;
        }
        
        :global(.prose p) {
          margin: 1em 0;
        }
        
        :global(.prose ul) {
          list-style-type: disc;
          margin: 1em 0;
          padding-left: 1.5em;
        }
        
        :global(.prose li) {
          margin-bottom: 0.5em;
        }
        
        :global(.prose table) {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
        }
        
        :global(.prose th) {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 0.75em 1em;
          text-align: left;
          font-weight: 600;
        }
        
        :global(.prose td) {
          border: 1px solid #e5e7eb;
          padding: 0.75em 1em;
        }
        
        :global(.prose figure) {
          margin: 2em 0;
          text-align: center;
        }
        
        :global(.prose figcaption) {
          font-size: 0.875em;
          color: #6b7280;
          margin-top: 0.5em;
        }
        
        :global(.prose a) {
          color: #2563eb;
          text-decoration: underline;
        }
        
        :global(.prose a:hover) {
          color: #1d4ed8;
        }
        
        :global(.table-container) {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 1rem;
          margin: 1.5rem 0;
          overflow-x: auto;
          box-shadow: inset 0 0 0 1px rgba(229, 231, 235, 0.5);
        }
      `}</style>
    </article>
  );
};

export default StandardizedBlogContent;