// CategoryBadge component for displaying blog categories
'use client';

interface CategoryBadgeProps {
  category: string;
  onClick?: () => void;
}

const CategoryBadge = ({ category, onClick }: CategoryBadgeProps) => {
  const categoryColors: Record<string, string> = {
    'Health & Wellness': 'bg-green-100 text-green-800',
    'Beauty & Skincare': 'bg-pink-100 text-pink-800',
    'Mental Health': 'bg-purple-100 text-purple-800',
    'Nutrition': 'bg-yellow-100 text-yellow-800',
    'Fitness': 'bg-blue-100 text-blue-800',
    'Health Problems': 'bg-red-100 text-red-800',
    'default': 'bg-gray-100 text-gray-800'
  };

  const bgColor = categoryColors[category] || categoryColors['default'];

  return (
    <span 
      className={`${bgColor} px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-90 transition-opacity ${onClick ? 'hover:underline' : ''}`}
      onClick={onClick}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;