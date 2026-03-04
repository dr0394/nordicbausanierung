import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigateToPage = (page: string) => {
    window.history.pushState({}, '', `/${page}`);
    window.location.href = `/${page}`;
  };

  return (
    <>
      <footer className="bg-[#f9fafb] text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af7a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af7a] rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom py-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://kvfgqhuyudwuqqypopgl.supabase.co/storage/v1/object/public/gallery-images/renovierung/1772639630205-j6ri29.png"
                  alt="Nordic Vision Logo"
                  className="h-16 w-auto"
                />
                
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Professionelle Bausanierung in einer neuen Dimension – schnell, zuverlässig und mit höchster Qualität.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 tracking-wide text-gray-900">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#d4af7a]" />
                  <span className="text-gray-600 text-[15px] leading-relaxed group-hover:text-gray-900 transition-colors">Waldweg 85<br />22393 Hamburg</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#d4af7a]" />
                  <a href="tel:+491704371672" className="text-gray-600 hover:text-gray-900 transition-colors text-[15px]">
                    +49 170 4371672
                  </a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#d4af7a]" />
                  <a href="mailto:info@nordic-bau.de" className="text-gray-600 hover:text-gray-900 transition-colors text-[15px]">
                    info@nordic-bau.de
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 tracking-wide text-gray-900">Leistungen</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block">Brandschadensanierung</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block">Wasserschadensanierung</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block">Komplettsanierung</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block">Energetische Sanierung</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block">Fassadensanierung</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 tracking-wide text-gray-900">Rechtliches</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <a
                    href="/impressum"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('impressum');
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('datenschutz');
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block"
                  >
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <a
                    href="/agb"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage('agb');
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block"
                  >
                    AGB
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-6 tracking-wide text-gray-900">Folgen Sie uns</h3>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/profile.php?id=61585767533568" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-[#d4af7a] hover:to-[#b8935f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/nordic_vision_gruppe" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-[#d4af7a] hover:to-[#b8935f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-[#d4af7a] hover:to-[#b8935f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="text-gray-500 text-sm tracking-wide">
                © {currentYear} Nordic Vision GmbH. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-5 text-sm text-gray-500">
                  <span className="flex items-center space-x-2 tracking-wide">
                    <span className="w-1.5 h-1.5 bg-[#d4af7a] rounded-full"></span>
                    <span>Zertifizierter Meisterbetrieb</span>
                  </span>
                  <span className="flex items-center space-x-2 tracking-wide">
                    <span className="w-1.5 h-1.5 bg-[#d4af7a] rounded-full"></span>
                    <span>TÜV-geprüft</span>
                  </span>
                  <span className="flex items-center space-x-2 tracking-wide">
                    <span className="w-1.5 h-1.5 bg-[#d4af7a] rounded-full"></span>
                    <span>Vollversichert</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
