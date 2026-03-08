const jobs = [
  {
    period: "2021 — Present",
    current: true,
    company: "QXO · Brad Jacobs Company",
    title: "Director – Digital Marketing & Marketing Operations · Herndon, VA",
    description: "Built QXO's entire digital marketing infrastructure from zero inside an $800B industry. Architected the funnel, CDP, segmentation engine, Growth Lab, and attribution system — then scaled it to $1.25B in digital revenue while influencing $2.5B in branch sales.",
    bullets: [
      "Built complete marketing funnel and lifecycle tracking system from scratch",
      "Deployed a sophisticated unified marketing intelligence platform",
      "Founded the Growth Lab — cross-functional innovation think tank across 6 departments",
      "Designed AI segmentation framework: RFM analysis, CLV modeling, and behavioral signals",
      "Operated within a zero-based budgeting framework",
      "Invited to NYSE as part of QXO leadership during Beacon Building Products acquisition",
    ],
    stats: [
      { label: "Digital Revenue Scaled", value: "$750M→$1.25B" },
      { label: "Offline Sales Influenced", value: "$2.5B" },
      { label: "Leads / Quarter", value: "30,000" },
      { label: "New Customers / Qtr", value: "1,500" },
      { label: "Marketing Budget", value: "$7M" },
      { label: "Team Size", value: "11 People" },
    ],
  },
  {
    period: "2018 — 2021",
    company: "CIC Plus (now Equifax)",
    title: "Head of Digital Marketing",
    description: "Led all digital marketing strategy, execution, and performance reporting — driving compounding funnel improvements, a complete brand overhaul, and scalable marketing intelligence infrastructure.",
    bullets: [
      "Directed a comprehensive brand refresh — authored a 40-page brand guideline",
      "Designed and implemented custom KPI dashboard in Salesforce Einstein Analytics",
      "Built automated workflows driving 392% average MQL growth over three years",
      "Developed integrated marketing automation infrastructure",
      "Owned SEO and SEM strategy end-to-end",
    ],
    stats: [
      { label: "MQL Growth", value: "+392%" },
      { label: "SQL Growth", value: "+150%" },
      { label: "Marketing-Influenced Deals", value: "+178%" },
      { label: "Team Size", value: "4 People" },
    ],
  },
  {
    period: "2017 — 2018",
    company: "CCC Information Services",
    title: "Senior Marketing Analyst",
    description: "Elevated paid media performance and built the marketing technology foundation — delivering transformative ROI within months.",
    bullets: [
      "Increased paid search ROI by 800% within three months",
      "Implemented and managed Pardot marketing automation",
      "Developed and maintained the marketing technology stack",
    ],
    stats: [
      { label: "Paid Search ROI", value: "+800%" },
      { label: "Tenure", value: "1 yr 4 mos" },
      { label: "MarTech Integrations", value: "4+ Platforms" },
    ],
  },
  {
    period: "2014 — 2017",
    company: "WorkForce Software",
    title: "Digital Marketing Analyst (Global)",
    description: "Drove global digital marketing growth across paid and organic channels. Grew lead volume massively while cutting acquisition costs.",
    bullets: [
      "Grew lead generation 1,600% to 900+ leads per month",
      "Reduced paid advertising cost-per-lead by 30%",
    ],
    stats: [
      { label: "Lead Gen Growth", value: "+1,600%" },
      { label: "Monthly Leads", value: "900+" },
      { label: "CPL Reduction", value: "-30%" },
    ],
  },
  {
    period: "2012 — 2014",
    company: "jTypes",
    title: "Digital Marketing Specialist",
    description: "Started the professional journey optimizing digital channels through SEO, SEM, and analytics — building the foundation for a career defined by measurable outcomes.",
    bullets: [
      "Improved website conversion rates by 12% through SEO, SEM, and analytics",
      "Managed website development and mobile applications",
    ],
    stats: [{ label: "Conversion Lift", value: "+12%" }],
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-bold text-sm">04</span>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Career <span className="font-display italic text-primary">Timeline</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border" />

          <div className="space-y-16">
            {jobs.map((job, idx) => (
              <div key={idx} className="relative pl-10">
                {/* Dot */}
                <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${job.current ? "bg-primary border-primary" : "bg-background border-border"}`} />

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs tracking-widest-custom text-muted-foreground">{job.period}</span>
                  {job.current && (
                    <span className="text-[9px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">CURRENT</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                <p className="text-sm text-primary font-medium">{job.title}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{job.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {job.stats.map((s) => (
                    <div key={s.label} className="bg-secondary rounded-lg px-4 py-2">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-bold text-primary">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
