import { User, CheckCircle } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Max Kowalski',
      role: 'Geschäftsführer & Meister',
      description: 'Bauingenieur mit über 15 Jahren Erfahrung in der Sanierung',
      qualifications: ['Meister im Bauhandwerk', 'TÜV-Sachverständiger'],
    },
    {
      name: 'Stefan Müller',
      role: 'Projektleiter Schadensanierung',
      description: 'Spezialist für Brand- und Wasserschadensanierung',
      qualifications: ['Fachkraft für Schimmelsanierung', 'Brandschutzbeauftragter'],
    },
    {
      name: 'Anna Schmidt',
      role: 'Projektmanagerin',
      description: 'Koordination und Kundenbetreuung für alle Sanierungsprojekte',
      qualifications: ['Bauingenieurin', 'Projektmanagement-Zertifikat'],
    },
    {
      name: 'Thomas Weber',
      role: 'Bauleiter',
      description: 'Überwachung und Qualitätskontrolle auf allen Baustellen',
      qualifications: ['Meister im Mauerhandwerk', '10+ Jahre Erfahrung'],
    },
  ];

  return (
    <section id="team" className="section-padding bg-[#2c3e50]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-white mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4)'
            }}
          >
            Unser <span className="text-[#d4af7a]">Team</span>
          </h2>
          <p
            className="text-lg text-white/90 max-w-3xl mx-auto"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            Lernen Sie die Menschen kennen, die Ihr Projekt zum Erfolg führen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#34495e]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className="aspect-square bg-gradient-to-br from-[#d4af7a] to-[#b8935f] flex items-center justify-center">
                <User className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-normal text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>{member.name}</h3>
                <p className="text-[#d4af7a] font-normal mb-3" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{member.role}</p>
                <p className="text-white/80 text-sm mb-4" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{member.description}</p>
                <div className="space-y-2">
                  {member.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#d4af7a] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}>{qual}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
