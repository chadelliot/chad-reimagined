const pillars = [
  {
    num: "01",
    title: "Corporate",
    subtitle: "Growth",
    org: "QXO · Brad Jacobs Company",
    description:
      "I lead digital marketing and marketing operations strategy focused on scalable demand generation, segmentation, marketing intelligence, lifecycle activation, and cross-functional revenue orchestration.",
    bullets: [
      "Built the infrastructure behind digital growth in an $800B industry with no mature digital playbook.",
      "Scaled performance across acquisition, loyalty, pricing, promotions, and branch-driven customer activation.",
      "Connected marketing strategy, analytics, CRM, and sales workflows into one measurable engine.",
    ],
    stat: "$1B+",
    statLabel: "Digital Revenue Influence",
    link: "#qxo-story",
    linkLabel: "View QXO Story →",
  },
  {
    num: "02",
    title: "Advisory",
    subtitle: "& AI Strategy",
    org: "Michaels · Gap",
    description:
      "I advise select brands on customer lifetime value analysis, segmentation design, lifecycle strategy, and marketing operations modernization with an emphasis on AI-enabled activation.",
    bullets: [
      "Developed strategic approaches to CLV-based segmentation and precision marketing.",
      "Helped frame the operating model needed to move from broad campaigns to smarter customer activation.",
      "Applied the same analytical rigor used in enterprise environments to retail and ecommerce contexts.",
    ],
    stat: "2",
    statLabel: "National Retail Advisory Clients",
    link: "#timeline",
    linkLabel: "View Client Work →",
  },
  {
    num: "03",
    title: "Founder",
    subtitle: "& Ecommerce",
    org: "Hidden Gems · Amazon & Walmart",
    description:
      "I own Hidden Gems, a multi-platform ecommerce business selling on Amazon and Walmart, and I built The Blueprint course to teach entrepreneurs the sourcing systems and operating discipline behind that growth.",
    bullets: [
      "Generated $250K+ in annual ecommerce revenue through replenishable product sourcing and marketplace operations.",
      "Built a brand and education offer around the real systems used inside the business.",
      "Created The Blueprint to help others source profitably and scale with data-driven decision making.",
    ],
    stat: "$250K+",
    statLabel: "Annual Ecommerce Revenue",
    link: "https://hiddengemsmd.com/courses/blueprint/",
    linkLabel: "View The Blueprint →",
  },
];

const PillarsSection = () => {
  return (
    <section id="pillars" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-bold text-sm">01</span>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Three <span className="font-display italic text-primary">Pillars</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
          My career spans enterprise growth leadership, advisory work for national retail brands, and entrepreneurship—united by a focus on segmentation, marketing intelligence, lifecycle strategy, and building systems that turn insight into measurable revenue growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {pillars.map((p) => (
            <div key={p.num} className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow group">
              <span className="text-[10px] tracking-widest-custom text-muted-foreground">Pillar {p.num}</span>
              <h3 className="text-2xl font-bold mt-2 text-foreground">{p.title}</h3>
              <p className="text-2xl font-bold text-primary font-display italic">{p.subtitle}</p>
              <p className="text-xs tracking-widest-custom text-muted-foreground mt-3">{p.org}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.description}</p>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-3xl font-bold text-primary">{p.stat}</p>
                <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">{p.statLabel}</p>
              </div>
              <a
                href={p.link}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {p.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
