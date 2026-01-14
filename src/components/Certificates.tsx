import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      icon: Award,
      title: "Meisterbetrieb",
      description: "Zertifizierter Handwerksbetrieb mit Meisterbrief"
    },
    {
      icon: Shield,
      title: "TÜV Zertifiziert",
      description: "Geprüfte Qualität und Sicherheit"
    },
    {
      icon: CheckCircle,
      title: "DIN Normen",
      description: "Arbeiten nach aktuellen DIN-Normen"
    },
    {
      icon: Star,
      title: "Fachbetrieb für Sanierung",
      description: "Spezialisiert auf Brand- und Wasserschadensanierung"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zertifizierungen & Qualifikationen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unsere Qualifikationen und Zertifizierungen garantieren Ihnen höchste Qualität und Fachkompetenz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-xl mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-primary">Vertrauen Sie auf Qualität:</span> Wir arbeiten nach den höchsten Standards und lassen unsere Arbeit regelmäßig von unabhängigen Stellen prüfen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
