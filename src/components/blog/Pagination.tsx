// Pagination component for blog listings
'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  basePath?: string;
}

const Pagination = ({ currentPage, totalPages, onPageChange, basePath = '/blog' }: PaginationProps) => {
  const getPageLink = (pageNum: number) => {
    return pageNum === 1 ? basePath : `${basePath}/page/${pageNum}`;
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show current page in middle with 2 on each side
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-1" aria-label="Pagination">
        <Link
          href={getPageLink(currentPage > 1 ? currentPage - 1 : 1)}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </Link>

        {pageNumbers[0] > 1 && (
          <>
            <Link href={getPageLink(1)} className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </Link>
            {pageNumbers[0] > 2 && <span className="px-3 py-2 text-sm text-gray-400">...</span>}
          </>
        )}

        {pageNumbers.map((num) => (
          <Link
            key={num}
            href={getPageLink(num)}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              num === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {num}
          </Link>
        ))}

        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <span className="px-3 py-2 text-sm text-gray-400">...</span>
            )}
            <Link href={getPageLink(totalPages)} className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              {totalPages}
            </Link>
          </>
        )}

        <Link
          href={getPageLink(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;