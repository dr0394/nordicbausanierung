import { Star } from 'lucide-react';

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://kvfgqhuyudwuqqypopgl.supabase.co/storage/v1/object/public/gallery-images/renovierung/1769706410746-w0iauc.png)' }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#2c3e50]/40 via-[#2c3e50]/35 to-[#2c3e50]/45"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Ihr Generalunternehmer für 
            <span className="text-[#d4af7a]"> anspruchsvolle Sanierungen</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            Kernsanierungen sowie Brand- und Wasserschäden, mit nur einem Ansprechpartner, voller Kontrolle und ohne Baustellen-Chaos
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <button
              onClick={onContactClick}
              className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 border border-white/60 text-white text-sm sm:text-base font-normal hover:bg-white/10 hover:border-white transition-all duration-300"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              Jetzt Anfragen
            </button>

            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600">
                    <span className="font-semibold text-gray-900">4.9</span> aus 127 Bewertungen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
