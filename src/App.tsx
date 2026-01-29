import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Team from './components/Team';
import Certificates from './components/Certificates';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import CTASection from './components/CTASection';
import ImageUpload from './components/ImageUpload';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/upload') {
      setCurrentPage('upload');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation
        onContactClick={() => setIsContactModalOpen(true)}
        onUploadClick={() => navigateTo('upload')}
        onHomeClick={() => navigateTo('home')}
      />

      {currentPage === 'upload' ? (
        <ImageUpload />
      ) : (
        <>
          <Hero onContactClick={() => setIsContactModalOpen(true)} />

          <ProblemSolution />

          <Services onContactClick={() => setIsContactModalOpen(true)} />

          <Advantages />

          <Process />

          <Portfolio />

          <Testimonials />

          <About />

          <Team />

          <Certificates />

          <FAQ />

          <Contact onContactClick={() => setIsContactModalOpen(true)} />
        </>
      )}

      <Footer />

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
