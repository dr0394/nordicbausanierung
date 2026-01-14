import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-50 max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-gray-900">Cookie-Hinweis</h3>
        </div>
        <button
          onClick={handleRejectAll}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
      </p>

      <div className="text-xs text-gray-500 mb-3 sm:mb-4">
        Weitere Informationen finden Sie in unserer{' '}
        <button className="text-accent hover:text-accent-dark underline">
          Datenschutzerklärung
        </button>
        .
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <button
          onClick={handleAcceptAll}
          className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm"
        >
          Alle akzeptieren
        </button>
        <button
          onClick={handleRejectAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm"
        >
          Alle ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
