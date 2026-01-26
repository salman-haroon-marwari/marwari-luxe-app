import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-16 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}