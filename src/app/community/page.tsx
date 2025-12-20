import Link from 'next/link';

export const metadata = {
  title: 'Community | Marwari Luxe',
  description: 'Join our community of wellness enthusiasts and connect with like-minded individuals.',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </nav>
          
          <article className="prose prose-lg max-w-none bg-white dark:bg-black/50 p-8 rounded-2xl shadow-lg">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Community</h1>
              <p className="text-foreground/70 text-lg">Connect with wellness enthusiasts and share your journey</p>
            </header>
            
            <div className="space-y-8">
              <section className="text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Welcome to the Marwari Luxe Community</h2>
                <p className="text-foreground/80 mb-6">
                  Our community is a space where wellness enthusiasts, beauty lovers, and health-conscious individuals 
                  come together to share experiences, learn from each other, and support one another on their journey 
                  to optimal well-being.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">What We Offer</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-foreground/5 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Discussion Forums</h3>
                    <p className="text-foreground/80">
                      Engage in meaningful conversations about health, wellness, and beauty topics with our community members.
                    </p>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Expert Articles</h3>
                    <p className="text-foreground/80">
                      Access exclusive content from wellness professionals and stay updated on the latest health trends.
                    </p>
                  </div>
                  
                  <div className="bg-foreground/5 p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Member Profiles</h3>
                    <p className="text-foreground/80">
                      Connect with like-minded individuals and build relationships within our wellness community.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Community Guidelines</h2>
                
                <div className="bg-foreground/5 p-6 rounded-xl">
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>Be respectful and kind to all community members</li>
                    <li>Share authentic experiences and constructive feedback</li>
                    <li>No spam, self-promotion, or commercial content</li>
                    <li>Respect privacy and do not share personal information</li>
                    <li>Report inappropriate content to moderators</li>
                    <li>Stay on topic and contribute meaningfully to discussions</li>
                  </ul>
                </div>
              </section>
              
              <section className="bg-primary/5 p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Join?</h2>
                <p className="text-foreground/80 mb-6">
                  Become part of our growing community of wellness enthusiasts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/signup" 
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Create Account
                  </Link>
                  <Link 
                    href="/login" 
                    className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Community Posts</h2>
                
                <div className="space-y-4">
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">My 30-Day Wellness Journey</h3>
                    <p className="text-foreground/80 mb-4">
                      "Starting my wellness journey with Marwari Luxe products has transformed my daily routine. Here's what I've learned..."
                    </p>
                    <div className="flex items-center text-sm text-foreground/60">
                      <span>Posted by Sarah M.</span>
                      <span className="mx-2">•</span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  
                  <div className="border border-foreground/10 rounded-xl p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2">Natural Skincare Tips for Winter</h3>
                    <p className="text-foreground/80 mb-4">
                      "Winter can be tough on your skin. Here are my favorite natural remedies to keep your skin glowing during the cold months..."
                    </p>
                    <div className="flex items-center text-sm text-foreground/60">
                      <span>Posted by James T.</span>
                      <span className="mx-2">•</span>
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}