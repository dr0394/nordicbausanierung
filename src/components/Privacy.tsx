import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

const Privacy = ({ onBack }: PrivacyProps) => {
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
            Datenschutzerklärung
          </h1>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">1. Datenschutz auf einen Blick</h3>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Allgemeine Hinweise</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Datenerfassung auf dieser Website</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">2. Hosting</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>[Name des Hosting-Anbieters]</strong><br />
              [Adresse des Hosting-Anbieters]
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie unsere Website besuchen, werden Ihre Daten auf den Servern des Hosting-Anbieters verarbeitet. Hierbei können verschiedene Datenarten erfasst werden, z.B. IP-Adresse, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen und Zugriffsdaten.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h3>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Datenschutz</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nordic Bau GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Telefon: +49 170 4371672<br />
              E-Mail: info@nordic-bau.de
            </p>
            <p className="text-gray-700 leading-relaxed">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Speicherdauer</h4>
            <p className="text-gray-700 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
            <p className="text-gray-700 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Recht auf Datenübertragbarkeit</h4>
            <p className="text-gray-700 leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Auskunft, Löschung und Berichtigung</h4>
            <p className="text-gray-700 leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Recht auf Einschränkung der Verarbeitung</h4>
            <p className="text-gray-700 leading-relaxed">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">4. Datenerfassung auf dieser Website</h3>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Cookies</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Kontaktformular</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <h4 className="text-lg font-normal text-gray-900 mb-2 mt-4">Anfrage per E-Mail, Telefon oder Telefax</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">5. WhatsApp Business</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wir bieten Besuchern unserer Website die Möglichkeit, mit uns über den Nachrichtendienst WhatsApp der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, in Kontakt zu treten. Hierfür verwenden wir die sog. „Business-Version" von WhatsApp.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sofern Sie uns für die Kommunikation via WhatsApp Ihre Telefonnummer mitteilen, nutzen wir diese ausschließlich zur Beantwortung Ihrer Anfrage. Die Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO sowie, sofern Sie eine Dienstleistung anfordern, Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ihre Daten werden nicht an Dritte weitergegeben. Die Kommunikationsinhalte werden auf den Servern von WhatsApp gespeichert. WhatsApp Inc. ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">6. SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-normal text-gray-900 mb-3">7. Änderung dieser Datenschutzerklärung</h3>
            <p className="text-gray-700 leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          <section className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Stand: Januar 2026<br />
              Quelle: Diese Datenschutzerklärung wurde auf Basis der gesetzlichen Anforderungen der DSGVO erstellt.
            </p>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
