import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Marwari Luxe',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <div className="text-9xl font-bold text-primary mb-6">404</div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Page Not Found</h1>
              <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or didn't exist in the first place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 hover-lift focus-ring text-center"
                >
                  Return Home
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift focus-ring text-center"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}