import { X } from 'lucide-react';

interface ImpressumProps {
  isOpen: boolean;
  onClose: () => void;
}

const Impressum = ({ isOpen, onClose }: ImpressumProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-normal text-gray-900" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
            Impressum
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Angaben gemäß § 5 TMG</h3>
            <p className="text-gray-700 leading-relaxed">
              Nordic Bau GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Vertreten durch</h3>
            <p className="text-gray-700 leading-relaxed">
              [Geschäftsführer Name]<br />
              Geschäftsführer
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Kontakt</h3>
            <p className="text-gray-700 leading-relaxed">
              Telefon: +49 170 4371672<br />
              E-Mail: info@nordic-bau.de<br />
              Website: www.nordic-bau.de
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Registereintrag</h3>
            <p className="text-gray-700 leading-relaxed">
              Eintragung im Handelsregister<br />
              Registergericht: [Amtsgericht]<br />
              Registernummer: [HRB-Nummer]
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Umsatzsteuer-ID</h3>
            <p className="text-gray-700 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Berufsrechtliche Regelungen</h3>
            <p className="text-gray-700 leading-relaxed">
              Zuständige Kammer: [Handwerkskammer/IHK]<br />
              Zuständige Aufsichtsbehörde: [Behörde]
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Versicherung</h3>
            <p className="text-gray-700 leading-relaxed">
              Betriebshaftpflichtversicherung<br />
              [Name der Versicherung]<br />
              [Adresse der Versicherung]<br />
              Geltungsbereich: Deutschland
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">EU-Streitschlichtung</h3>
            <p className="text-gray-700 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af7a] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p className="text-gray-700 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Haftung für Inhalte</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Haftung für Links</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-[#d4af7a] hover:bg-[#b8935f] text-white px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md font-normal tracking-wide"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
