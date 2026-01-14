import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    damageType: '',
    affectedRooms: '',
    urgency: '',
    address: '',
    name: '',
    phone: '',
    email: '',
    contactMethod: 'whatsapp',
    message: '',
    dataConsent: false,
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (!formData.dataConsent) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    const message = `
Neue Anfrage über Website:

Schadenstyp: ${formData.damageType}
Betroffene Räume: ${formData.affectedRooms}
Dringlichkeit: ${formData.urgency}

Adresse: ${formData.address}

Name: ${formData.name}
Telefon: ${formData.phone}
E-Mail: ${formData.email}

Bevorzugte Kontaktmethode: ${formData.contactMethod}

Nachricht: ${formData.message || 'Keine zusätzliche Nachricht'}
    `.trim();

    if (formData.contactMethod === 'whatsapp') {
      const whatsappMessage = encodeURIComponent(message);
      window.open(`https://wa.me/491712345678?text=${whatsappMessage}`, '_blank');
    } else if (formData.contactMethod === 'email') {
      const emailSubject = encodeURIComponent('Neue Anfrage über Website');
      const emailBody = encodeURIComponent(message);
      window.location.href = `mailto:info@bausanierung4-0.de?subject=${emailSubject}&body=${emailBody}`;
    }

    onClose();
    setStep(1);
    setFormData({
      damageType: '',
      affectedRooms: '',
      urgency: '',
      address: '',
      name: '',
      phone: '',
      email: '',
      contactMethod: 'whatsapp',
      message: '',
      dataConsent: false,
    });
  };

  const damageTypes = [
    { value: 'brand', label: 'Brandschaden' },
    { value: 'wasser', label: 'Wasserschaden' },
    { value: 'schimmel', label: 'Schimmel' },
    { value: 'komplett', label: 'Komplettsanierung' },
    { value: 'energie', label: 'Energetische Sanierung' },
    { value: 'sonstiges', label: 'Sonstiges' },
  ];

  const urgencyLevels = [
    { value: 'notfall', label: 'Notfall (sofort)', color: 'bg-red-500' },
    { value: 'dringend', label: 'Dringend (1-3 Tage)', color: 'bg-orange-500' },
    { value: 'normal', label: 'Normal (1-2 Wochen)', color: 'bg-yellow-500' },
    { value: 'planung', label: 'In Planung', color: 'bg-green-500' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl font-normal text-gray-900" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>Anfrage stellen</h2>
            <p className="text-xs sm:text-sm text-gray-600">Schritt {step} von 5</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-[#d4af7a] h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        <div className="p-4 sm:p-6">
          {step === 1 && (
            <div>
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-4 sm:mb-6">Welche Art von Schaden haben Sie?</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {damageTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setFormData({ ...formData, damageType: type.value })}
                    className={`p-4 sm:p-5 rounded-lg border transition-all text-left ${
                      formData.damageType === type.value
                        ? 'border-[#d4af7a] bg-[#d4af7a]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#d4af7a] hover:shadow-sm'
                    }`}
                  >
                    <div className="font-normal text-sm sm:text-base text-gray-900 tracking-wide">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-4 sm:mb-6">Wie viele Räume sind betroffen?</h3>
              <input
                type="text"
                value={formData.affectedRooms}
                onChange={(e) => setFormData({ ...formData, affectedRooms: e.target.value })}
                placeholder="z.B. 2 Zimmer, Badezimmer, Küche"
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all"
              />
              <p className="text-sm text-gray-500 mt-3">Bitte beschreiben Sie kurz, welche Bereiche betroffen sind.</p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-4 sm:mb-6">Wie dringend ist die Sanierung?</h3>
              <div className="space-y-3">
                {urgencyLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setFormData({ ...formData, urgency: level.value })}
                    className={`w-full p-5 rounded-lg border transition-all flex items-center space-x-4 ${
                      formData.urgency === level.value
                        ? 'border-[#d4af7a] bg-[#d4af7a]/5 shadow-md'
                        : 'border-gray-200 hover:border-[#d4af7a] hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                    <div className="font-normal text-gray-900 tracking-wide">{level.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-4 sm:mb-6">Wo befindet sich das Objekt?</h3>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Straße und Hausnummer"
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all"
              />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Zusätzliche Informationen (optional)"
                rows={5}
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all resize-none"
              />
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-4 sm:mb-6">Wie können wir Sie erreichen?</h3>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ihr Name"
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Telefonnummer"
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-Mail-Adresse"
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-[#d4af7a] focus:shadow-md focus:outline-none transition-all"
              />

              <div className="pt-2">
                <label className="text-sm font-normal text-gray-900 mb-3 block tracking-wide">
                  Bevorzugte Kontaktmethode
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#d4af7a] hover:shadow-sm transition-all">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-4 h-4 text-[#d4af7a]"
                    />
                    <span className="text-gray-900 tracking-wide">WhatsApp</span>
                  </label>
                  <label className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#d4af7a] hover:shadow-sm transition-all">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-4 h-4 text-[#d4af7a]"
                    />
                    <span className="text-gray-900 tracking-wide">E-Mail</span>
                  </label>
                  <label className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#d4af7a] hover:shadow-sm transition-all">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-4 h-4 text-[#d4af7a]"
                    />
                    <span className="text-gray-900 tracking-wide">Telefon</span>
                  </label>
                </div>
              </div>

              <label className="flex items-start space-x-3 p-5 bg-gray-50 rounded-lg border border-gray-100">
                <input
                  type="checkbox"
                  checked={formData.dataConsent}
                  onChange={(e) => setFormData({ ...formData, dataConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#d4af7a]"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6 flex items-center justify-between gap-3">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center space-x-1 sm:space-x-2 px-4 sm:px-7 py-2.5 sm:py-3.5 font-normal transition-all tracking-wide rounded-lg text-sm sm:text-base ${
              step === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'border border-gray-300 text-gray-900 hover:border-[#d4af7a] hover:shadow-sm'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Zurück</span>
          </button>

          {step < 5 ? (
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.damageType) ||
                (step === 2 && !formData.affectedRooms) ||
                (step === 3 && !formData.urgency) ||
                (step === 4 && !formData.address)
              }
              className={`flex items-center space-x-1 sm:space-x-2 px-4 sm:px-7 py-2.5 sm:py-3.5 font-normal transition-all tracking-wide rounded-lg text-sm sm:text-base ${
                (step === 1 && !formData.damageType) ||
                (step === 2 && !formData.affectedRooms) ||
                (step === 3 && !formData.urgency) ||
                (step === 4 && !formData.address)
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#d4af7a] hover:bg-[#b8935f] text-white shadow-sm hover:shadow-md'
              }`}
            >
              <span>Weiter</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.phone || !formData.dataConsent}
              className={`flex items-center space-x-1 sm:space-x-2 px-4 sm:px-7 py-2.5 sm:py-3.5 font-normal transition-all tracking-wide rounded-lg text-sm sm:text-base ${
                !formData.name || !formData.phone || !formData.dataConsent
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#d4af7a] hover:bg-[#b8935f] text-white shadow-sm hover:shadow-md'
              }`}
            >
              <span className="hidden sm:inline">Anfrage absenden</span>
              <span className="sm:hidden">Absenden</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
