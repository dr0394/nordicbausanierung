import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
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

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      <Hero onContactClick={() => setIsContactModalOpen(true)} />

      <ProblemSolution />

      <Services onContactClick={() => setIsContactModalOpen(true)} />

      <Advantages />

      <Process />

      <Portfolio />

    

      <Testimonials />

      <About />

      <Team />

      

      <FAQ />

      <Contact onContactClick={() => setIsContactModalOpen(true)} />

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
