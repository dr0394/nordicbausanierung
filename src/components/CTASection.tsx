import { Phone, Mail } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  onPrimaryClick: () => void;
  variant?: 'primary' | 'accent';
}

const CTASection = ({
  title,
  description,
  primaryButtonText = 'Jetzt Kontakt aufnehmen',
  onPrimaryClick,
  variant = 'primary'
}: CTASectionProps) => {
  const bgClass = variant === 'primary'
    ? 'bg-gradient-to-r from-primary to-primary-light'
    : 'bg-gradient-to-r from-accent to-accent-dark';

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className={`${bgClass} rounded-2xl p-8 md:p-12 text-center border border-white/10`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onPrimaryClick}
              className="bg-white hover:bg-gray-100 text-primary font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>{primaryButtonText}</span>
            </button>
            <a
              href="tel:+491704371672"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+49 170 4371672</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
