const skills = [
  "AI-Driven Marketing",
  "Revenue Attribution",
  "Customer Data Platforms",
  "MarTech Architecture",
  "CLV Modeling",
  "Zero-Based Budgeting",
  "Growth Lab Innovation",
  "Demand Generation",
  "Ecommerce Automation",
  "Segmentation Strategy",
];

const MarqueeStrip = () => {
  return (
    <div className="bg-secondary py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-xs tracking-widest-custom text-muted-foreground mx-6">
            {skill} <span className="text-primary ml-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
