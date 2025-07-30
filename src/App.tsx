import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import RestaurantsPage from './components/RestaurantsPage';
import OffersPage from './components/OffersPage';
import HelpPage from './components/HelpPage';
import ContactPage from './components/ContactPage';
import TrackOrderPage from './components/TrackOrderPage';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [currentPage, setCurrentPage] = useState('home');

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthModalOpen(false);
  };

  const handleSwitchAuthMode = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'restaurants':
      case 'top-rated':
      case 'near-me':
      case 'fast-delivery':
        return <RestaurantsPage />;
      case 'offers':
      case 'daily-deals':
      case 'coupons':
      case 'cashback':
        return <OffersPage />;
      case 'help':
      case 'faq':
        return <HelpPage />;
      case 'contact':
        return <ContactPage />;
      case 'track':
        return <TrackOrderPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header 
          onOpenAuth={handleOpenAuth} 
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
        
        <AuthModal
          isOpen={isAuthModalOpen}
          mode={authMode}
          onClose={handleCloseAuth}
          onSwitchMode={handleSwitchAuthMode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;