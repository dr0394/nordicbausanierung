import { Phone, FileText, Wrench, Home, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Erstkontakt & Schadensaufnahme',
      description: 'Sie kontaktieren uns telefonisch, per E-Mail oder über unser Formular. Bei Notfällen sind wir sofort für Sie da. Wir besichtigen den Schaden und analysieren den Umfang. Notwendige Maßnahmen werden unverzüglich ergriffen.',
      duration: 'Sofort',
    },
    {
      number: 2,
      icon: Wrench,
      title: 'Schadensanierung',
      description: 'Bei Notfällen beginnen wir sofort mit der Erstversorgung. Wir führen Trocknungsmaßnahmen durch, entfernen beschädigte Materialien und sorgen für Sicherheit.',
      duration: '1-2 Tage',
    },
    {
      number: 3,
      icon: FileText,
      title: 'Angebot',
      description: 'Sie erhalten ein transparentes, detailliertes Angebot mit allen Kosten. Wir erstellen einen Zeit- und Maßnahmenplan und klären alle technischen Details mit Ihnen ab.',
      duration: '2-7 Tage',
    },
    {
      number: 4,
      icon: Home,
      title: 'Wiederaufbau',
      description: 'Wir koordinieren alle Gewerke für Sie. Die fachgerechte Sanierung erfolgt nach neuesten Standards mit hochwertigen Materialien und regelmäßigen Qualitätskontrollen.',
      duration: 'Je nach Projekt',
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Abschluss & Übergabe',
      description: 'Gemeinsame Endabnahme und Übergabe der Dokumentation. Sie erhalten alle Unterlagen für Versicherungen und Gewährleistungszusagen für unsere Arbeit.',
      duration: '1 Tag',
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#2c3e50]">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 sm:mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Unser <span className="text-[#d4af7a]">Prozess</span>
          </h2>
          <p
            className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            Transparenz von Anfang an – In 5 Schritten zu Ihrem sanierten Objekt
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-start space-x-4 sm:space-x-6 mb-8 sm:mb-12">
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#d4af7a] to-[#b8935f] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#34495e] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-[#34495e]/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-white/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-normal text-white"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-xs sm:text-sm font-normal text-[#d4af7a] bg-[#d4af7a]/10 px-2 sm:px-3 py-1 rounded-full w-fit"
                      style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    className="text-sm sm:text-base text-white/80 leading-relaxed"
                    style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-7 sm:left-8 md:left-10 top-14 sm:top-16 md:top-20 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-[#d4af7a] to-[#b8935f]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-[#34495e]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-white/20">
          <h3
            className="text-2xl sm:text-3xl font-normal text-white mb-3 sm:mb-4"
            style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}
          >
            Haben Sie Fragen zum Ablauf?
          </h3>
          <p
            className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            Wir beraten Sie gerne persönlich und beantworten alle Ihre Fragen zu Ihrem Sanierungsprojekt.
          </p>
          <a
            href="#contact"
            className="inline-block border border-white/60 text-white px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all duration-300"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
