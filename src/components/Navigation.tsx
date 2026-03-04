import { useState, useEffect } from 'react';
import { Menu, X, Phone, Upload } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
  onUploadClick?: () => void;
  onHomeClick?: () => void;
}

const Navigation = ({ onContactClick, onUploadClick, onHomeClick }: NavigationProps) => {
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
        isScrolled ? 'bg-[#f9fafb] shadow-lg' : 'bg-[#f9fafb]/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onHomeClick) {
                  onHomeClick();
                } else {
                  scrollToSection('#hero');
                }
              }}
              className="flex items-center space-x-3"
            >
              <img
                src="https://kvfgqhuyudwuqqypopgl.supabase.co/storage/v1/object/public/gallery-images/renovierung/1772639630205-j6ri29.png"
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
                className="px-4 py-2 text-sm font-normal text-gray-900 hover:text-[#d4af7a] transition-colors rounded-lg hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {onUploadClick && (
              <button
                onClick={onUploadClick}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-[#d4af7a] transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </button>
            )}
            <button
              onClick={onContactClick}
              className="border border-gray-300 text-gray-900 px-6 py-2 text-sm hover:bg-gray-100 hover:border-[#d4af7a] transition-all duration-300"
            >
              Kostenloses Angebot
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f9fafb] border-t border-gray-200 shadow-lg">
          <div className="container-custom py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#d4af7a] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+491704371672"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg text-gray-900 border border-gray-200"
              >
                <Phone className="w-4 h-4" />
                <span className="font-normal">+49 170 4371672</span>
              </a>
              {onUploadClick && (
                <button
                  onClick={() => {
                    onUploadClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg text-gray-900 border border-gray-200"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload</span>
                </button>
              )}
              <button
                onClick={onContactClick}
                className="w-full border border-gray-300 text-gray-900 px-6 py-3 text-sm hover:bg-gray-100 hover:border-[#d4af7a] transition-all duration-300"
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
