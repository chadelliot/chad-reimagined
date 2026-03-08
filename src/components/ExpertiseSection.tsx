const expertiseItems = [
  { num: "01", title: "AI-Driven Marketing Systems", desc: "Designing and deploying AI-powered ecosystems including predictive segmentation, next-best-action engines, and automated lifecycle campaigns." },
  { num: "02", title: "Customer Data Platforms", desc: "Enterprise CDP architecture, customer identity resolution, and unified data infrastructure powering personalization and real-time activation." },
  { num: "03", title: "Marketing Operations & RevOps", desc: "Building full-funnel marketing operations frameworks that align marketing, sales, and analytics teams around shared revenue metrics." },
  { num: "04", title: "CLV & Segmentation Modeling", desc: "RFM analysis, customer lifetime value modeling, and behavioral segmentation frameworks that drive differentiated lifecycle strategies." },
  { num: "05", title: "Revenue Attribution", desc: "Multi-channel attribution systems and Marketing ROI dashboards connecting digital campaigns, branch sales, loyalty, and partner channels." },
  { num: "06", title: "Ecommerce & Digital Commerce", desc: "Built and operate a fully autonomous ecommerce business generating $250K+ annually across multiple marketplaces using data-driven automation." },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-bold text-sm">05</span>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Core <span className="font-display italic text-primary">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item) => (
            <div key={item.num} className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <span className="text-3xl font-bold text-primary/20">{item.num}</span>
              <h3 className="text-lg font-bold mt-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
