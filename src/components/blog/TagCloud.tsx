// TagCloud component for displaying blog tags
'use client';

interface TagCloudProps {
  tags: string[];
  onTagClick?: (tag: string) => void;
}

const TagCloud = ({ tags, onTagClick }: TagCloudProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors ${onTagClick ? 'hover:underline' : ''}`}
            onClick={() => onTagClick && onTagClick(tag)}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;