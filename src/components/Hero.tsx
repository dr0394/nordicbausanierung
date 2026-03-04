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
              className="relative inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-[#d4af7a] text-[#1a2332] text-base sm:text-lg font-semibold tracking-wide uppercase hover:bg-[#e0c088] active:scale-95 transition-all duration-200 shadow-[0_0_0_3px_rgba(212,175,122,0.4),0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_4px_rgba(212,175,122,0.6),0_12px_32px_rgba(0,0,0,0.5)]"
            >
              Jetzt Anfragen
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
