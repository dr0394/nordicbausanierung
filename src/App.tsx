import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import CTASection from './components/CTASection';
import ImageUpload from './components/ImageUpload';
import Impressum from './components/Impressum';
import Privacy from './components/Privacy';
import AGB from './components/AGB';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoading, setShowLoading] = useState(() => {
    return sessionStorage.getItem('nv_loaded') !== 'true';
  });

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/upload') {
      setCurrentPage('upload');
    } else if (path === '/impressum') {
      setCurrentPage('impressum');
    } else if (path === '/datenschutz') {
      setCurrentPage('datenschutz');
    } else if (path === '/agb') {
      setCurrentPage('agb');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  const showNavigation = !['impressum', 'datenschutz', 'agb'].includes(currentPage);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('nv_loaded', 'true');
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {showLoading && currentPage === 'home' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {showNavigation && (
        <Navigation
          onContactClick={() => setIsContactModalOpen(true)}
          onUploadClick={() => navigateTo('upload')}
          onHomeClick={() => navigateTo('home')}
        />
      )}

      {currentPage === 'upload' ? (
        <ImageUpload />
      ) : currentPage === 'impressum' ? (
        <Impressum onBack={() => navigateTo('home')} />
      ) : currentPage === 'datenschutz' ? (
        <Privacy onBack={() => navigateTo('home')} />
      ) : currentPage === 'agb' ? (
        <AGB onBack={() => navigateTo('home')} />
      ) : (
        <>
          <Hero onContactClick={() => setIsContactModalOpen(true)} />

          <ProblemSolution />

          <Services onContactClick={() => setIsContactModalOpen(true)} />

          <Advantages />

          <Process />

          <Portfolio />

          <About />

          <Team />

          <FAQ />

          <Contact onContactClick={() => setIsContactModalOpen(true)} />

          <Footer />
        </>
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <WhatsAppButton />

      <CookieBanner />
    </div>
  );
}

export default App;
