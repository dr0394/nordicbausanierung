import { Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Referenzprojekt 1',
      category: 'Sanierung',
      image: 'https://i.imgur.com/EHPnSO1.jpeg',
    },
    {
      id: 2,
      title: 'Referenzprojekt 2',
      category: 'Sanierung',
      image: 'https://i.imgur.com/ooq4iAm.jpeg',
    },
    {
      id: 3,
      title: 'Referenzprojekt 3',
      category: 'Sanierung',
      image: 'https://i.imgur.com/0tYTz30.jpeg',
    },
    {
      id: 4,
      title: 'Referenzprojekt 4',
      category: 'Sanierung',
      image: 'https://i.imgur.com/1vXeRQ0.jpeg',
    },
    {
      id: 5,
      title: 'Referenzprojekt 5',
      category: 'Sanierung',
      image: 'https://i.imgur.com/ACGZMDl.jpeg',
    },
    {
      id: 6,
      title: 'Referenzprojekt 6',
      category: 'Sanierung',
      image: 'https://i.imgur.com/aP4QZcS.jpeg',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Unsere Projekte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-xl mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <ImageIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
