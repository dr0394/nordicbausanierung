import { AlertTriangle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-20 bg-[#e5e7eb]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-normal mb-4">
              Das Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
              Kennen Sie diese Herausforderungen?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Baustellen-Chaos</h3>
                  <p className="text-gray-600">Komplexe Sanierung nach Brand- oder Wasserschäden ohne klare Koordination</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Abstimmungsprobleme</h3>
                  <p className="text-gray-600">Mehrere Gewerke bedeuten viele Ansprechpartner und Unsicherheit bei Kosten und Terminen</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Hohe Verantwortung, wenig Zeit</h3>
                  <p className="text-gray-600">Als Immobilieneigentümer, Architekt oder Verwalter fehlt die Zeit für komplexe Baustellenkoordination</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-[#d4af7a]/20 text-[#d4af7a] px-4 py-2 rounded-full text-sm font-normal mb-4">
              Unsere Lösung
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
              Ihr verlässlicher Generalunternehmer
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#d4af7a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Ein fester Ansprechpartner</h3>
                  <p className="text-gray-600">Wir koordinieren alle Gewerke ganzheitlich und sorgen für klare Abläufe</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#d4af7a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Klare Abläufe & Transparenz</h3>
                  <p className="text-gray-600">Verlässliche Termine, dokumentierte Schritte und saubere Ergebnisse</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#d4af7a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-normal text-gray-900 mb-1">Spürbare Entlastung</h3>
                  <p className="text-gray-600">Volle Kontrolle ohne Baustellen-Chaos – damit Sie sich auf Ihr Geschäft konzentrieren können</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
