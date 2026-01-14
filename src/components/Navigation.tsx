import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#about' },
    { label: 'Referenzen', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2c3e50] shadow-lg' : 'bg-[#2c3e50]/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center space-x-3">
              <img
                src="https://i.imgur.com/LPgaXte.png"
                alt="Nordic Vision Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
              <div className="hidden md:block">
               
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 text-sm font-normal text-white/90 hover:text-[#d4af7a] transition-colors rounded-lg hover:bg-white/10"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onContactClick}
              className="border border-white/60 text-white px-6 py-2 text-sm hover:bg-white/10 hover:border-white transition-all duration-300"
              style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
            >
              Kostenloses Angebot
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#34495e] border-t border-white/20 shadow-lg">
          <div className="container-custom py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-white/90 hover:bg-white/10 hover:text-[#d4af7a] rounded-lg transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+4917632986532"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#2c3e50]/50 rounded-lg text-white border border-white/20"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-normal">+49 176 32986532</span>
              </a>
              <button
                onClick={onContactClick}
                className="w-full border border-white/60 text-white px-6 py-3 text-sm hover:bg-white/10 hover:border-white transition-all duration-300"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                Kostenloses Angebot
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
