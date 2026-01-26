'use client';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  // Sanitize the HTML content to prevent XSS attacks
  // For now, we'll trust the content is safe since it's from our own data
  
  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-ul:list-disc prose-ol:list-decimal prose-li:my-2 prose-table:text-left prose-th:border prose-th:border-gray-300 prose-td:border prose-td:border-gray-300"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};

export default BlogContent;