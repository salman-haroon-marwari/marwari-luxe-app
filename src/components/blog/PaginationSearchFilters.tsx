'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

interface PaginationSearchFiltersProps {
  categories: string[];
}

const PaginationSearchFilters = ({ categories }: PaginationSearchFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Navigate to search results page
    window.location.href = `/blog/search?q=${encodeURIComponent(query)}`;
  };

  const handleCategoryChange = (category: string | null) => {
    if (category) {
      window.location.href = `/blog/category/${encodeURIComponent(category)}`;
    } else {
      window.location.href = '/blog';
    }
  };

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3">
        <SearchBar 
          initialValue={searchQuery}
          onSearch={handleSearch} 
        />
      </div>
      <div>
        <CategoryFilter 
          categories={categories}
          onCategoryChange={handleCategoryChange} 
        />
      </div>
    </div>
  );
};

export default PaginationSearchFilters;