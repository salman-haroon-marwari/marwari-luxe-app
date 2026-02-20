// Blog Detail Page at /blog/[slug]
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import { allAuthors } from '@/data/authors';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import TableOfContents from '@/components/blog/TableOfContents';
import StandardizedBlogContent from '@/components/blog/StandardizedBlogContent';
import FAQAccordion from '@/components/blog/FAQAccordion';
import AuthorBox from '@/components/blog/AuthorBox';
import ShareButtons from '@/components/blog/ShareButtons';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Breadcrumb from '@/components/blog/Breadcrumb';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  
  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.urlSlug === slug);
  
  if (!blogPost) {
    notFound(); // This triggers the 404 page
  }

  // Find the author for this post
  const author = allAuthors.find(a => a.name === blogPost.author) || allAuthors[0];

  // Parse the HTML content from the blog post
  const blogContent = blogPost.content;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationWrapper />
      <main className="flex-grow pt-16 md:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb 
            crumbs={[
            { title: 'Home', href: '/' },
            { title: 'Blogs', href: '/blogs' },
            { title: blogPost.title }
            ]} 
          />
        </div>


        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Blog Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
              <span>{blogPost.date}</span>
              <span>{blogPost.readTime}</span>
            </div>
            
            {/* Featured Image */}
            {blogPost.image && (
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Blog Content */}
          <section className="mb-12">
            <StandardizedBlogContent 
              content={blogContent} 
              title=""
              date=""
              readTime=""
            />
          </section>

          {/* Share Buttons - Centered */}
          <section className="mb-12 flex justify-center">
            <div className="w-full max-w-2xl">
              <ShareButtons 
                url={`https://marwariluxe.com/blogs/${blogPost.urlSlug}`}
                title={blogPost.title}
                description={blogPost.metaDescription}
              />
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-12">
            <FAQAccordion faqs={blogPost.faq} />
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">{blogPost.conclusion}</p>
          </section>

          {/* Author Box */}
          <section className="mb-12">
            <AuthorBox author={author} />
          </section>

          {/* Related Posts */}
          <section>
            <RelatedPosts 
              currentPostId={blogPost.id} 
              posts={blogPosts} 
            />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;