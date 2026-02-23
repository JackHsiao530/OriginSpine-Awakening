import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CorporatePage } from './pages/CorporatePage';
import { ProfessionalPage } from './pages/ProfessionalPage';
import { ContactPage } from './pages/ContactPage';
import { PAGES, PageType } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PAGES.HOME);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case PAGES.HOME: return <HomePage onNavigate={setCurrentPage} />;
      case PAGES.ABOUT: return <AboutPage />;
      case PAGES.CORPORATE: return <CorporatePage onNavigate={setCurrentPage} />;
      case PAGES.PROFESSIONAL: return <ProfessionalPage onNavigate={setCurrentPage} />;
      case PAGES.CONTACT: return <ContactPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="antialiased selection:bg-[#C5A059] selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-0 scale-90 origin-right md:bottom-10 md:right-10 md:scale-100 md:origin-center p-3 bg-[#1A2B48] text-white rounded-none border border-[#1A2B48] shadow-2xl transition-all duration-500 z-50 hover:bg-[#C5A059] hover:border-[#C5A059] ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
