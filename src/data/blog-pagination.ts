// Blog pagination utility to improve performance with large blog datasets
import { blogPosts } from './blogs';
import type { BlogPost } from './blogs';

// Pagination configuration
const DEFAULT_PAGE_SIZE = 12;

// Get paginated blog posts
export const getPaginatedBlogs = (
  page: number = 1,
  pageSize: number = DEFAULT_PAGE_SIZE,
  category?: string
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
} => {
  // Filter by category if provided
  let filteredPosts = category
    ? blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    : [...blogPosts];

  // Calculate pagination values
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  
  // Ensure page is within valid range
  const validPage = Math.max(1, Math.min(page, totalPages));
  
  // Calculate start and end indices
  const startIndex = (validPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  // Get posts for current page
  const posts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: validPage,
    totalPosts
  };
};

// Get blog post by ID
export const getBlogById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Get blog posts by category
export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Get unique categories
export const getBlogCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
};

// Get recent blog posts
export const getRecentBlogs = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Search blog posts
export const searchBlogs = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};