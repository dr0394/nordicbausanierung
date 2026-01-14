import { useState } from 'react';
import { Flame, Droplet, Home, Building, Zap, Wrench } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'fire',
      title: 'Brandschadensanierung Einfamilienhaus',
      description: 'Vollständige Sanierung nach Küchenbrand',
      duration: '3-5 Wochen',
      challenge: 'Rußbeseitigung und komplette Neugestaltung',
      icon: Flame,
      image: 'https://i.imgur.com/aP4QZcS.jpeg',
    },
    {
      id: 2,
      category: 'water',
      title: 'Wasserschaden Mehrfamilienhaus',
      description: 'Rohrbruch im 3. OG mit Folgeschäden',
      duration: '6 Wochen',
      challenge: 'Trocknung und Schimmelprävention',
      icon: Droplet,
      image: 'https://i.imgur.com/LaWTlqz.jpeg',
    },
    {
      id: 3,
      category: 'complete',
      title: 'Komplettsanierung Altbau',
      description: 'Kernsanierung eines denkmalgeschützten Gebäudes',
      duration: '12 Wochen',
      challenge: 'Erhalt der historischen Substanz',
      icon: Home,
      image: 'https://i.imgur.com/0tYTz30.jpeg',
    },
    {
      id: 4,
      category: 'facade',
      title: 'Fassadensanierung Geschäftshaus',
      description: 'Moderne Fassadengestaltung mit Wärmedämmung',
      duration: '12 Wochen',
      challenge: 'Laufender Geschäftsbetrieb während der Sanierung',
      icon: Building,
      image: 'https://i.imgur.com/ooq4iAm.jpeg',
    },
    {
      id: 5,
      category: 'energy',
      title: 'Energetische Sanierung',
      description: 'Dämmung und neue Heizungsanlage',
      duration: '4 Wochen',
      challenge: 'Optimale Energieeffizienz erreichen',
      icon: Zap,
      image: 'https://i.imgur.com/EHPnSO1.jpeg',
    },
    {
      id: 6,
      category: 'interior',
      title: 'Innenraumsanierung Büroflächen',
      description: 'Komplette Neugestaltung von 500m² Bürofläche',
      duration: '5 Wochen',
      challenge: 'Enge Zeitvorgaben einhalten',
      icon: Wrench,
      image: 'https://i.imgur.com/ACGZMDl.jpeg',
    },
  ];

  const categories = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'fire', label: 'Brandschäden' },
    { id: 'water', label: 'Wasserschäden' },
    { id: 'complete', label: 'Komplettsanierung' },
    { id: 'facade', label: 'Fassade' },
    { id: 'energy', label: 'Energetisch' },
    { id: 'interior', label: 'Innenraum' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-[#e5e7eb]">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4 sm:mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
            Unsere <span className="text-[#d4af7a]">Projekte</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Überzeugen Sie sich von unserer Arbeit – Vorher/Nachher-Bilder aus realen Projekten
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-normal transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#d4af7a] text-white shadow-lg'
                  : 'bg-white text-gray-900 border border-gray-300 hover:border-[#d4af7a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <project.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dauer:</span>
                    <span className="font-normal text-gray-900">{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
