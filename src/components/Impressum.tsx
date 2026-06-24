import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

const Impressum = ({ onBack }: ImpressumProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>

          <h1 className="text-4xl font-normal text-gray-900 mb-12" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
            Impressum
          </h1>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Angaben gemäß § 5 TMG</h3>
            <p className="text-gray-700 leading-relaxed">
              Nordic Vision GmbH<br />
              Waldweg 85<br />
              22393 Hamburg<br />
              Deutschland
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Vertreten durch</h3>
            <p className="text-gray-700 leading-relaxed">
              Daniela Roth<br />
              Geschäftsführerin
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
              Registergericht: Amtsgericht Hamburg<br />
              Registernummer: HRB 189418
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Betriebsnummer</h3>
            <p className="text-gray-700 leading-relaxed">
              71369032
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Umsatzsteuer-ID</h3>
            <p className="text-gray-700 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE460286141
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Berufsrechtliche Regelungen</h3>
            <p className="text-gray-700 leading-relaxed">
              Zuständige Kammer: IHK Hamburg
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">Versicherung</h3>
            <p className="text-gray-700 leading-relaxed">
              Betriebshaftpflichtversicherung<br />
              Signal Iduna<br />
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
        </div>
      </div>
    </div>
  );
};

export default Impressum;
