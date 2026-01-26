// CategoryFilter component for filtering blog posts by category
'use client';

import { useState } from 'react';
import { BlogPost } from '@/data/blogs';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange?: (category: string | null) => void;
}

const CategoryFilter = ({ categories, onCategoryChange }: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
      <div className="space-y-2">
        <button
          className={`w-full text-left px-3 py-2 rounded-md text-sm ${
            selectedCategory === null
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`w-full text-left px-3 py-2 rounded-md text-sm ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;