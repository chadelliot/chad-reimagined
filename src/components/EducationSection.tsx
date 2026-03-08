const certifications = [
  { icon: "☁️", name: "Salesforce Certified Pardot Consultant" },
  { icon: "⚡", name: "Salesforce Certified Pardot Specialist" },
  { icon: "🎯", name: "HubSpot Digital Marketing Certification" },
  { icon: "📊", name: "Google Analytics Certification" },
  { icon: "🔄", name: "HubSpot Inbound Marketing Certification" },
];

const EducationSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-bold text-sm">06</span>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Education & <span className="font-display italic text-primary">Credentials</span>
        </h2>

        <div className="space-y-8 mb-16">
          {[
            { degree: "Master of Science", field: "Marketing Analytics & Communications", school: "Illinois Institute of Technology", years: "2013 – 2016" },
            { degree: "Bachelor of Science", field: "Business Administration – Marketing Management", school: "Illinois Institute of Technology", years: "2008 – 2012" },
          ].map((edu) => (
            <div key={edu.degree} className="border border-border rounded-xl p-8">
              <p className="text-sm text-muted-foreground">{edu.school}</p>
              <p className="text-xl font-bold text-foreground mt-1">{edu.degree}</p>
              <p className="text-sm text-primary mt-1">{edu.field}</p>
              <p className="text-xs text-muted-foreground mt-2">{edu.years}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-foreground mb-6">Professional Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4 border border-border rounded-lg p-4">
              <span className="text-2xl">{cert.icon}</span>
              <p className="text-sm font-medium text-foreground">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
