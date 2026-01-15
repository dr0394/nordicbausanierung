import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const currentYear = new Date().getFullYear();

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
                  src="https://i.imgur.com/LPgaXte.png"
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
                  <a href="mailto:F.b.1985@icloud.com" className="text-gray-600 hover:text-gray-900 transition-colors text-[15px]">
                    F.b.1985@icloud.com
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
                  <button
                    onClick={() => setShowImpressum(true)}
                    className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowDatenschutz(true)}
                    className="text-gray-600 hover:text-gray-900 transition-all text-[15px] hover:translate-x-1 inline-block"
                  >
                    Datenschutzerklärung
                  </button>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-6 tracking-wide text-gray-900">Folgen Sie uns</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-[#d4af7a] hover:to-[#b8935f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-11 h-11 bg-gray-100 hover:bg-gradient-to-br hover:from-[#d4af7a] hover:to-[#b8935f] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 hover:text-white">
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

      {showImpressum && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowImpressum(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white px-8 py-6 rounded-t-2xl">
              <h2 className="text-3xl font-semibold tracking-wide">Impressum</h2>
            </div>
            <div className="p-8 space-y-6 text-gray-700">
              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Angaben gemäß § 5 TMG</h3>
                <p className="leading-relaxed">Nordic Vision GmbH</p>
                <p className="leading-relaxed">Waldweg 85</p>
                <p className="leading-relaxed">22393 Hamburg</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Vertreten durch</h3>
                <p className="leading-relaxed">Geschäftsführerin: Daniela Roth</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Kontakt</h3>
                <p className="leading-relaxed">Telefon: +49 170 4371672</p>
                <p className="leading-relaxed">E-Mail: F.b.1985@icloud.com</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Registereintrag</h3>
                <p className="leading-relaxed">Eintragung im Handelsregister</p>
                <p className="leading-relaxed">Registergericht: Amtsgericht Hamburg</p>
                <p className="leading-relaxed">Registernummer: HRB 189418</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Umsatzsteuer-ID</h3>
                <p className="leading-relaxed">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                <p className="leading-relaxed">DE123456789</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Kammer</h3>
                <p className="leading-relaxed">Handwerkskammer Ostwestfalen-Lippe zu Bielefeld</p>
              </div>

              <div className="border-l-4 border-[#d4af7a] pl-5 py-1">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg tracking-wide">Berufsbezeichnung</h3>
                <p className="leading-relaxed">Meisterbetrieb im Bauhandwerk</p>
                <p className="leading-relaxed">Verliehen in: Deutschland</p>
              </div>
            </div>
            <div className="px-8 pb-8">
              <button
                onClick={() => setShowImpressum(false)}
                className="w-full bg-gradient-to-r from-[#d4af7a] to-[#b8935f] text-white py-4 rounded-xl font-semibold tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}

      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowDatenschutz(false)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white px-8 py-6 rounded-t-2xl">
              <h2 className="text-3xl font-semibold tracking-wide">Datenschutzerklärung</h2>
            </div>
            <div className="p-8 space-y-8 text-gray-700">
              <div>
                <div className="border-l-4 border-[#d4af7a] pl-5 py-1 mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">1. Datenschutz auf einen Blick</h3>
                </div>
                <div className="pl-5">
                  <h4 className="font-semibold text-gray-900 mt-4 mb-3 tracking-wide">Allgemeine Hinweise</h4>
                  <p className="leading-relaxed text-gray-600">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
              </div>

              <div>
                <div className="border-l-4 border-[#d4af7a] pl-5 py-1 mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">2. Datenerfassung auf dieser Website</h3>
                </div>
                <div className="pl-5 space-y-5">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 tracking-wide">Kontaktformular</h4>
                    <p className="leading-relaxed text-gray-600">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 tracking-wide">WhatsApp-Button</h4>
                    <p className="leading-relaxed text-gray-600">
                      Unsere Website bietet die Möglichkeit, direkt über WhatsApp Kontakt mit uns aufzunehmen. Wenn Sie diesen Button nutzen, werden Sie zu WhatsApp weitergeleitet. Dabei können Daten an WhatsApp übermittelt werden. Bitte beachten Sie die Datenschutzerklärung von WhatsApp.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 tracking-wide">Google Maps</h4>
                    <p className="leading-relaxed text-gray-600">
                      Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited. Bei der Nutzung von Google Maps können Informationen über Ihre Nutzung dieser Website einschließlich Ihrer IP-Adresse an einen Server von Google in den USA übertragen und dort gespeichert werden.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-l-4 border-[#d4af7a] pl-5 py-1 mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">3. Cookies</h3>
                </div>
                <div className="pl-5">
                  <p className="leading-relaxed text-gray-600">
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher zu gestalten. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden.
                  </p>
                </div>
              </div>

              <div>
                <div className="border-l-4 border-[#d4af7a] pl-5 py-1 mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">4. Ihre Rechte</h3>
                </div>
                <div className="pl-5">
                  <p className="leading-relaxed text-gray-600">
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                </div>
              </div>

              <div>
                <div className="border-l-4 border-[#d4af7a] pl-5 py-1 mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg tracking-wide">5. Verantwortliche Stelle</h3>
                </div>
                <div className="pl-5">
                  <p className="leading-relaxed text-gray-600">
                    Nordic Vision GmbH<br />
                    Waldweg 85<br />
                    22393 Hamburg<br />
                    E-Mail: F.b.1985@icloud.com<br />
                    Telefon: +49 170 4371672
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 pb-8">
              <button
                onClick={() => setShowDatenschutz(false)}
                className="w-full bg-gradient-to-r from-[#d4af7a] to-[#b8935f] text-white py-4 rounded-xl font-semibold tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
