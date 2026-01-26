'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h3 className="text-lg font-bold text-gray-900 px-6 py-4 bg-gray-50">Frequently Asked Questions</h3>
      
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;