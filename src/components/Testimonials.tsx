import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Familie Schneider',
      location: 'Bielefeld',
      rating: 5,
      text: 'Nach einem Wasserschaden waren wir verzweifelt. Das Team von Bausanierung war innerhalb von 2 Stunden vor Ort und hat sofort mit der Trocknung begonnen. Die gesamte Sanierung verlief professionell und pünktlich. Absolut empfehlenswert!',
      project: 'Wasserschadensanierung',
    },
    {
      name: 'Thomas Meyer',
      location: 'Gütersloh',
      rating: 5,
      text: 'Komplettsanierung unseres Altbaus – ein Großprojekt! Die Planung war transparent, die Ausführung perfekt. Besonders beeindruckt hat uns die Koordination aller Gewerke. Alles aus einer Hand, wie versprochen!',
      project: 'Komplettsanierung',
    },
    {
      name: 'Petra Koch',
      location: 'Paderborn',
      rating: 5,
      text: 'Nach einem Küchenbrand hat uns das Team schnell und unkompliziert geholfen. Von der Versicherungsabwicklung bis zur finalen Übergabe wurde alles perfekt organisiert. Wir fühlten uns in guten Händen.',
      project: 'Brandschadensanierung',
    },
    {
      name: 'Markus Weber GmbH',
      location: 'Detmold',
      rating: 5,
      text: 'Fassadensanierung unseres Geschäftshauses während des laufenden Betriebs – eine Herausforderung, die perfekt gemeistert wurde. Termingerecht, sauber und mit minimaler Beeinträchtigung unseres Geschäftsbetriebs.',
      project: 'Fassadensanierung',
    },
    {
      name: 'Andrea Schulz',
      location: 'Bielefeld',
      rating: 5,
      text: 'Die energetische Sanierung hat unsere Heizkosten halbiert! Die Beratung war kompetent, die Förderanträge wurden unterstützt und die Ausführung war top. Wir können Bausanierung nur weiterempfehlen.',
      project: 'Energetische Sanierung',
    },
    {
      name: 'Familie Hoffmann',
      location: 'Herford',
      rating: 5,
      text: 'Unser Bad war nach 30 Jahren renovierungsbedürftig. Die Innenraumsanierung wurde innerhalb von 3 Wochen abgeschlossen – pünktlich und im Budget. Das Ergebnis übertrifft unsere Erwartungen!',
      project: 'Innenraumsanierung',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#2c3e50]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-white mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Das sagen unsere <span className="text-[#d4af7a]">Kunden</span>
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-normal text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>5,0</span>
          </div>
          <p
            className="text-lg text-white/90"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
          >
            Basierend auf über 150 Google-Bewertungen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#34495e]/50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative border border-white/20"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#d4af7a]/30" />
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{review.text}</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-normal text-white" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>{review.name}</p>
                <p className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{review.location}</p>
                <p className="text-xs text-[#d4af7a] font-normal mt-1" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{review.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#34495e]/50 rounded-2xl p-8 md:p-12 text-center border border-white/20">
          <h3 className="text-3xl font-normal text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
            Werden auch Sie Teil unserer zufriedenen Kunden
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
            Lassen Sie sich von unserer Qualität überzeugen und starten Sie jetzt Ihr Sanierungsprojekt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="border border-white/60 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
            >
              Kostenloses Angebot anfordern
            </a>
            <a
              href="https://www.google.com/search?q=bausanierung+bielefeld"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/60 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
            >
              Alle Google-Bewertungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
