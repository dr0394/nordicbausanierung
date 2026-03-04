import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="contact" className="section-padding bg-[#2c3e50]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-white mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Nehmen Sie <span className="text-[#d4af7a]">Kontakt</span> auf
          </h2>
          <p
            className="text-lg text-white/90 max-w-3xl mx-auto"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            Wir sind für Sie da – telefonisch, per E-Mail oder direkt vor Ort
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-normal text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Kontaktinformationen</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h4 className="font-normal text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Adresse</h4>
                  <p className="text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>Waldweg 85</p>
                  <p className="text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>22393 Hamburg</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h4 className="font-normal text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Telefon</h4>
                  <a href="tel:+491704371672" className="text-[#d4af7a] hover:text-[#b8935f] font-normal text-lg" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>
                    +49 170 4371672
                  </a>
                  <p className="text-sm text-white/80 mt-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>24/7 Notfallservice verfügbar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h4 className="font-normal text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>E-Mail</h4>
                  <a href="mailto:info@nordic-bau.de" className="text-[#d4af7a] hover:text-[#b8935f] font-normal" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>
                    info@nordic-bau.de
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af7a]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#d4af7a]" />
                </div>
                <div>
                  <h4 className="font-normal text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Öffnungszeiten</h4>
                  <p className="text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>Montag - Freitag: 08:00 - 18:00 Uhr</p>
                  <p className="text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>Notdienst: 24/7 verfügbar</p>
                </div>
              </div>
            </div>

            <div className="bg-[#34495e]/50 rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-normal text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Schnelle Kontaktaufnahme</h4>
              <p className="text-white/80 mb-6" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>
                Nutzen Sie unser Kontaktformular für eine schnelle Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
              <button onClick={onContactClick} className="w-full px-8 py-3 border border-white/60 text-white font-normal hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center space-x-2" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>
                <MessageSquare className="w-5 h-5" />
                <span>Schaden melden / Anfrage stellen</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-normal text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>Standort</h3>
            <div className="bg-[#34495e]/50 rounded-xl overflow-hidden h-96 border border-white/20">
              <iframe
                src="https://maps.google.com/maps?q=Waldweg+85,+22393+Hamburg&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nordic Vision Standort"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-[#34495e]/50 rounded-2xl p-8 md:p-12 text-center border border-white/20">
          <h3 className="text-3xl font-normal text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
            Bereit für Ihr Sanierungsprojekt?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
            Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch und ein kostenloses Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+491704371672" className="px-8 py-4 bg-[#d4af7a] hover:bg-[#b8935f] text-white font-normal transition-all duration-300 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Jetzt anrufen</span>
            </a>
            <button onClick={onContactClick} className="px-8 py-4 border border-white/60 text-white font-normal hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center space-x-2" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>
              <Mail className="w-5 h-5" />
              <span>Schriftlich anfragen</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
