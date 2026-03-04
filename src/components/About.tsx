import { Clock, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#e5e7eb]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
              Arbeitsweise & <span className="text-[#d4af7a]">Verantwortung</span>
            </h2>

            <div className="relative lg:hidden mb-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#d4af7a] to-[#b8935f] p-1 overflow-hidden">
                <img
                  src="https://i.imgur.com/K5FzSf5.jpeg"
                  alt="Nordic Vision Bau Team im Einsatz"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d4af7a] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Erfolgreiche Projekte</div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed mt-8 lg:mt-0">
              Nordic Vision Bau unterscheidet sich nicht durch leere Superlative, sondern durch Arbeitsweise und Haltung. Während viele Anbieter einzelne Gewerke ausführen oder Verantwortung weiterreichen, übernimmt Nordic Vision Bau die vollständige Steuerung des Projekts – von der ersten Einschätzung bis zur sauberen Abnahme.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Der entscheidende Unterschied ist Konsequenz in der Koordination: ein fester Ansprechpartner, klare Abläufe, dokumentierte Schritte und verbindliche Termine. Keine Abstimmungen auf Zuruf, kein Weiterreichen von Problemen an den Kunden. Die Website strahlt aus, was wir auf der Baustelle liefern: Struktur, Kontrolle und Verlässlichkeit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">24/7 Notdienst</h3>
                  <p className="text-sm text-gray-600">Schnelle Hilfe im Ernstfall</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Erfahrenes Team</h3>
                  <p className="text-sm text-gray-600">Hochqualifizierte Fachkräfte</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Vollversichert</h3>
                  <p className="text-sm text-gray-600">Umfassender Versicherungsschutz</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-900 italic">
                "Weniger Chaos, mehr Kontrolle, bessere Ergebnisse – genau das, was Entscheider wirklich brauchen."
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#d4af7a] rounded-full flex items-center justify-center text-white font-bold">
                  DR
                </div>
                <div>
                  <div className="font-normal text-gray-900">Daniela Roth</div>
                  <div className="text-sm text-gray-600">Geschäftsführerin</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#d4af7a] to-[#b8935f] p-1 overflow-hidden">
              <img
                src="https://i.imgur.com/K5FzSf5.jpeg"
                alt="Nordic Vision Bau Team im Einsatz"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d4af7a] text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Erfolgreiche Projekte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
