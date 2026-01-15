import { CheckCircle, Clock, Shield, ThumbsUp, Headphones, Award } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: 'Verantwortung bündeln',
      description: 'Ein fester Ansprechpartner statt mehrere Dienstleister, keine Reibungsverluste zwischen verschiedenen Gewerken',
    },
    {
      icon: Clock,
      title: 'Planbare Abläufe',
      description: 'Saubere Planung und realistische Zeitfenster, Sie wissen immer, woran Sie sind',
    },
    {
      icon: Shield,
      title: 'Kompromisslose Qualität',
      description: 'Verlässliche Partner und professionelle Umsetzung unabhängig von Größe oder Komplexität',
    },
    {
      icon: ThumbsUp,
      title: 'Prozessorientiert',
      description: 'Unternehmerisches Denken und strukturierte Arbeitsweise für bessere Ergebnisse',
    },
    {
      icon: Headphones,
      title: 'Klare Kommunikation',
      description: 'Transparente Abläufe und feste Ansprechpartner, ohne Ausreden und Verzögerungen',
    },
    {
      icon: Award,
      title: 'Mehr Kontrolle',
      description: 'Weniger Chaos, mehr Kontrolle, genau das, was professionelle Entscheider brauchen',
    },
  ];

  return (
    <section id="advantages" className="section-padding bg-[#e5e7eb]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
            Warum <span className="text-[#d4af7a]">Nordic Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ihr verlässlicher Gesamtpartner für komplexe Leistungen.
            <br />
            Mit klarer Struktur und nordischer Präzision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#d4af7a] to-[#b8935f] rounded-xl flex items-center justify-center shadow-lg">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
