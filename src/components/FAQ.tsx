import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Übernimmt die Versicherung die Kosten bei Brand- oder Wasserschäden?',
      answer: 'In den meisten Fällen ja. Bei Brand- und Wasserschäden greift in der Regel Ihre Wohngebäudeversicherung. Wir unterstützen Sie bei der Schadensmeldung und der Kommunikation mit Ihrer Versicherung. Unsere Dokumentation erfüllt alle Anforderungen der Versicherungsgesellschaften.',
    },
    {
      question: 'Wie schnell können Sie bei einem Notfall vor Ort sein?',
      answer: 'Bei Notfällen wie Brand- oder Wasserschäden sind wir in der Regel innerhalb von 2-4 Stunden vor Ort. Wir haben einen 24/7-Notdienst und halten stets Personal- und Materialreserven für Notfälle bereit. Rufen Sie uns einfach unter 0159 01071557 an.',
    },
    {
      question: 'Wie lange dauert eine typische Sanierung?',
      answer: 'Die Dauer hängt vom Umfang des Projekts ab. Eine Wasserschadensanierung dauert durchschnittlich 4-6 Wochen, eine Komplettsanierung 8-16 Wochen. Nach der Erstbesichtigung können wir Ihnen einen genauen Zeitplan erstellen.',
    },
    {
      question: 'Muss ich während der Sanierung ausziehen?',
      answer: 'Das hängt vom Umfang der Arbeiten ab. Bei kleineren Sanierungen können Sie oft wohnen bleiben. Bei Komplettsanierungen oder umfangreichen Schadensanierungen empfehlen wir einen vorübergehenden Auszug. Wir besprechen dies ausführlich in der Planungsphase mit Ihnen.',
    },
    {
      question: 'Bieten Sie auch Hilfe bei der Beantragung von Fördermitteln?',
      answer: 'Ja, besonders bei energetischen Sanierungen unterstützen wir Sie bei der Beantragung von KfW-Förderungen und anderen Zuschüssen. Wir kennen die aktuellen Programme und helfen Ihnen, alle erforderlichen Unterlagen zusammenzustellen.',
    },
    {
      question: 'Welche Gewährleistung geben Sie auf Ihre Arbeiten?',
      answer: 'Wir geben auf alle unsere Arbeiten die gesetzliche Gewährleistung von 5 Jahren (bei Bauwerken). Alle verwendeten Materialien sind ebenfalls mit Herstellergarantien abgesichert.',
    },
    {
      question: 'Koordinieren Sie auch andere Handwerker?',
      answer: 'Ja, das ist einer unserer großen Vorteile. Als Generalunternehmer koordinieren wir alle erforderlichen Gewerke für Sie. Sie haben nur einen Ansprechpartner und müssen sich nicht selbst um die Organisation verschiedener Handwerker kümmern.',
    },
    {
      question: 'Wie wird der Schimmel nach einem Wasserschaden verhindert?',
      answer: 'Durch schnelles Handeln und professionelle Trocknung mit modernen Geräten verhindern wir Schimmelbildung. Wir führen Feuchtigkeitsmessungen durch und dokumentieren den Trocknungsverlauf. Falls bereits Schimmel vorhanden ist, sanieren wir fachgerecht nach aktuellen Standards.',
    },
    {
      question: 'Benötige ich eine Baugenehmigung für die Sanierung?',
      answer: 'Das hängt vom Umfang der Arbeiten ab. Viele Sanierungsmaßnahmen sind genehmigungsfrei. Bei strukturellen Änderungen oder denkmalgeschützten Gebäuden ist oft eine Genehmigung erforderlich. Wir prüfen dies für Sie und übernehmen auf Wunsch die Behördengänge.',
    },
    {
      question: 'Wie transparent sind Ihre Preise?',
      answer: 'Sehr transparent. Sie erhalten von uns ein detailliertes Angebot mit allen Einzelpositionen. Es gibt keine versteckten Kosten. Sollten während der Arbeiten unvorhergesehene Probleme auftreten, informieren wir Sie sofort und besprechen das weitere Vorgehen.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#e5e7eb]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)' }}>
            Fragen & <span className="text-[#d4af7a]">Antworten</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-normal text-gray-900 pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#d4af7a] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#d4af7a] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-normal text-gray-900 mb-4">
            Ihre Frage war nicht dabei?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Kein Problem! Kontaktieren Sie uns, und wir beantworten gerne alle Ihre individuellen Fragen.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-[#d4af7a] text-[#d4af7a] hover:bg-[#d4af7a] hover:text-white transition-all duration-300"
          >
            Jetzt Frage stellen
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
