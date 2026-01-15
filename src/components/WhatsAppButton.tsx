import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/491704371672', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="font-semibold text-sm sm:text-base hidden sm:inline">WhatsApp</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
    </button>
  );
};

export default WhatsAppButton;
