// CategoryFilter component for filtering blog posts by category
'use client';

import { BlogPost } from '@/data/blogs';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange?: (category: string | null) => void;
  blogPosts?: any[];
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange, blogPosts = [] }: CategoryFilterProps) => {
  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    'Beauty & Cosmetics': '💄',
    'Health & Fitness': '💪',
    'Health & Wellness': '🌿',
  };

  const handleCategoryClick = (category: string | null) => {
    console.log('🔵 Category button CLICKED:', category);
    console.log('🔵 Current selectedCategory:', selectedCategory);
    
    // If clicking the already selected category, deselect it (show all)
    const newCategory = selectedCategory === category ? null : category;
    
    console.log('🔵 New category will be:', newCategory);
    console.log('🔵 Calling onCategoryChange with:', newCategory);
    
    if (onCategoryChange) {
      onCategoryChange(newCategory);
      console.log('✅ onCategoryChange called successfully');
    } else {
      console.error('❌ onCategoryChange is not defined!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by Category</h3>
      <div className="space-y-2">
        {/* All Categories Button */}
        <div 
          className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            selectedCategory === null
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
              : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200 bg-white'
          }`}
          onClick={() => {
            console.log('🔴 ALL CATEGORIES CLICKED');
            onCategoryChange?.(null);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onCategoryChange?.(null);
            }
          }}
        >
          <span className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span>📑</span>
              <span>All Categories</span>
            </span>
            <span className="text-xs opacity-75">({blogPosts.length})</span>
          </span>
        </div>
        
        {/* Category Buttons */}
        {categories.map((category) => {
          // Count blogs in this category
          const categoryCount = blogPosts.filter(post => post.category === category).length;
          const icon = categoryIcons[category] || '📄';
          
          return (
            <div
              key={category}
              className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700 border border-gray-200 bg-white'
              }`}
              onClick={() => {
                console.log('🟡 Category clicked:', category);
                const newCategory = selectedCategory === category ? null : category;
                console.log('🟡 Setting category to:', newCategory);
                onCategoryChange?.(newCategory);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const newCategory = selectedCategory === category ? null : category;
                  onCategoryChange?.(newCategory);
                }
              }}
            >
              <span className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span>{category}</span>
                </span>
                <span className="text-xs opacity-75">({categoryCount})</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;