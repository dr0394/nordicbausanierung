import { Flame, Droplet, Building, Wrench } from 'lucide-react';

const Services = ({ onContactClick }: { onContactClick: () => void }) => {
  const services = [
    {
      icon: Flame,
      title: 'Brandschäden',
      description: 'Schnelle Schadensbeseitigung nach Brand mit professioneller Koordination aller notwendigen Gewerke',
    },
    {
      icon: Droplet,
      title: 'Wasserschäden',
      description: 'Sofortige Reaktion bei Wasserschäden: Trocknung, Sanierung und Wiederherstellung Hand in Hand koordiniert',
    },
    {
      icon: Building,
      title: 'Kernsanierung',
      description: 'Vollständige Gebäudesanierung mit nur einem Ansprechpartner für alle Gewerke und Abläufe',
    },
    {
      icon: Wrench,
      title: 'Sanierungen',
      description: 'Anspruchsvolle Sanierungsprojekte mit klaren Abläufen, verlässlichen Terminen und sauberen Ergebnissen',
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#2c3e50]">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 sm:mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Unsere <span className="text-[#d4af7a]">Leistungen</span>
          </h2>
          <p
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            Von der Schadensbeseitigung bis zur Komplettsanierung.
            <br />
            Wir bieten Ihnen das komplette Leistungsspektrum
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent border border-white/30 p-6 sm:p-8 hover:border-white/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center h-full">
                <service.icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#d4af7a] mb-4 sm:mb-6" />
                <h3
                  className="text-lg sm:text-xl font-normal text-white mb-3 sm:mb-4"
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/80 leading-relaxed mb-6 flex-grow text-sm"
                  style={{
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {service.description}
                </p>
                <button
                  onClick={onContactClick}
                  className="border border-white/60 text-white px-6 py-2 text-sm hover:bg-white/10 hover:border-white transition-all duration-300 mt-auto"
                  style={{
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  Jetzt Anfragen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
