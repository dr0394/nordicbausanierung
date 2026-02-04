import { ArrowLeft } from 'lucide-react';

interface AGBProps {
  onBack: () => void;
}

const AGB = ({ onBack }: AGBProps) => {
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
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              Nordic Vision Bau GmbH
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§1 Geltungsbereich</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und Leistungen zwischen der Nordic Vision Bau GmbH (nachfolgend „Auftragnehmer") und ihren Auftraggebern.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Abweichende oder ergänzende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§2 Vertragsgrundlagen</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Grundlage des Vertrages sind das jeweilige Angebot, die Leistungsbeschreibung sowie diese AGB.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§3 Leistungen</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Der Auftragnehmer erbringt Leistungen im Bereich Bau, Sanierung, Instandsetzung und Koordination von Bauleistungen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (2) Der Leistungsumfang ergibt sich ausschließlich aus dem schriftlich vereinbarten Angebot bzw. Vertrag.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (3) Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§4 Mitwirkungspflichten des Auftraggebers</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Der Auftraggeber stellt sicher, dass alle zur Leistungserbringung erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig zur Verfügung stehen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Verzögerungen aufgrund fehlender Mitwirkung gehen nicht zu Lasten des Auftragnehmers.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§5 Vergütung und Zahlungsbedingungen</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Alle Preise verstehen sich in Euro zuzüglich der jeweils gültigen gesetzlichen Mehrwertsteuer, sofern nicht anders ausgewiesen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (2) Rechnungen sind ohne Abzug innerhalb von 7 Tagen nach Rechnungsdatum fällig, sofern nichts anderes vereinbart wurde.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (3) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen gemäß den gesetzlichen Vorschriften zu verlangen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (4) Der Auftragnehmer ist berechtigt, Abschlagszahlungen entsprechend dem Baufortschritt zu verlangen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§6 Ausführungsfristen</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Angegebene Ausführungs- oder Fertigstellungstermine sind nur verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart wurden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Höhere Gewalt, behördliche Anordnungen, Materialengpässe oder nicht vom Auftragnehmer zu vertretende Umstände verlängern die Ausführungsfristen angemessen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§7 Abnahme</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Nach Fertigstellung der Leistung ist diese vom Auftraggeber abzunehmen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (2) Wesentliche Mängel sind bei der Abnahme schriftlich zu benennen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (3) Erfolgt keine Abnahme oder Mängelanzeige innerhalb angemessener Frist, gilt die Leistung als abgenommen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§8 Gewährleistung</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Es gelten die gesetzlichen Gewährleistungsrechte.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (2) Bei berechtigten Mängeln ist der Auftragnehmer zunächst zur Nacherfüllung berechtigt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (3) Weitergehende Ansprüche bestehen nur im Rahmen der gesetzlichen Vorschriften.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§9 Haftung</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              (2) Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (3) Die Haftung für entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§10 Eigentumsvorbehalt</h3>
            <p className="text-gray-700 leading-relaxed">
              Gelieferte Materialien und Leistungen bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers, soweit gesetzlich zulässig.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§11 Kündigung</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Eine Kündigung bedarf der Schriftform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Im Falle einer freien Kündigung durch den Auftraggeber gelten die gesetzlichen Regelungen, insbesondere § 648 BGB.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§12 Datenschutz</h3>
            <p className="text-gray-700 leading-relaxed">
              Der Auftragnehmer verarbeitet personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze. Weitere Informationen sind der Datenschutzerklärung zu entnehmen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§13 Gerichtsstand</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              (1) Gerichtsstand ist – soweit gesetzlich zulässig – Hamburg.
            </p>
            <p className="text-gray-700 leading-relaxed">
              (2) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">§14 Salvatorische Klausel</h3>
            <p className="text-gray-700 leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AGB;
