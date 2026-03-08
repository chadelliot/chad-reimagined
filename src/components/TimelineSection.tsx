import { SectionHeader } from "./PillarsSection";

const jobs = [
  {
    period: "2021 — Present",
    current: true,
    company: "QXO Building Products, Inc.",
    companyDescriptor: "a Brad Jacobs Company",
    title: "Director – Digital Marketing & Marketing Operations · Herndon, VA",
    description: "Built QXO's entire digital marketing infrastructure from zero inside an $800B industry. Architected the funnel, CDP, segmentation engine, Growth Lab, and attribution system — then scaled it to $1.25B in digital revenue while influencing $2.5B in branch sales. Stood on the podium during the Beacon Building Products acquisition.",
    bullets: [
      "Built complete marketing funnel and lifecycle tracking system from scratch",
      "Deployed a sophisticated unified marketing intelligence platform driving predictive targeting, lifecycle automation, and the framework for next-best-action",
      "Founded the Growth Lab — cross-functional innovation think tank across 6 departments",
      "Designed AI segmentation framework: RFM analysis, CLV modeling, and behavioral signals synthesized across several customer tiers",
      "Operated within a zero-based budgeting framework — connecting every dollar to measurable incremental revenue",
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
    featured: {
      label: "NYSE Ceremony",
      cta: "Watch Video",
      href: "https://tv.nyse.com/videos/qxo-inc-nyse-qxo-rings-the-opening-bell-1",
    },
  },
  {
    period: "2018 — 2021",
    company: "CIC Plus (now Equifax)",
    title: "Head of Digital Marketing",
    description: "Led all digital marketing strategy, execution, and performance reporting across a 3.5-year tenure — driving compounding funnel improvements, a complete brand overhaul, and a marketing intelligence infrastructure built to scale.",
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
    description: "Elevated paid media performance and built the marketing technology foundation — delivering transformative ROI within months while scaling inbound pipeline generation.",
    bullets: [
      "Increased paid search ROI by 800% within three months",
      "Implemented and managed Pardot marketing automation with Salesforce CRM",
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
    description: "Drove global digital marketing growth across paid and organic channels. Grew lead volume massively while cutting acquisition costs simultaneously.",
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
      "Improved website conversion rates by 12% through SEO, SEM, and analytics-driven optimization",
      "Managed website development and mobile applications",
    ],
    stats: [{ label: "Conversion Lift", value: "+12%" }],
  },
];

const TimelineSection = () => {
  return (
    <section style={{ padding: "120px 80px" }} className="bg-background">
      <SectionHeader num="04" title="Career" em="Timeline" />

      <div className="relative" style={{ paddingLeft: 60 }}>
        {/* Vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{ background: "linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--border)) 100%)" }}
        />

        {jobs.map((job, idx) => (
          <div key={idx} className="relative mb-20">
            {/* Dot */}
            <div
              className={`absolute w-[10px] h-[10px] rounded-full ${job.current ? "animate-dotPulse" : ""}`}
              style={{
                left: -64,
                top: 4,
                background: job.current ? "hsl(var(--primary))" : "hsl(var(--primary))",
                boxShadow: job.current
                  ? "0 0 0 4px rgba(94,209,174,0.15), 0 0 20px rgba(94,209,174,0.4)"
                  : "0 0 0 4px rgba(47,163,127,0.15), 0 0 16px rgba(47,163,127,0.3)",
              }}
            />

            {/* Year */}
            <div className="font-mono text-[11px] text-primary tracking-[0.15em] mb-2.5 flex items-center gap-2.5">
              {job.period}
              {job.current && (
                <span
                  className="text-[9px] font-semibold tracking-[0.1em] rounded"
                  style={{ background: "hsl(var(--primary))", color: "hsl(var(--background))", padding: "2px 8px" }}
                >
                  CURRENT
                </span>
              )}
            </div>

            {/* Company & role */}
            <div className="font-display text-[22px] font-extrabold tracking-[-0.02em] mb-1 flex items-baseline gap-3" style={{ color: "hsl(var(--charcoal))" }}>
              {job.company}
              {job.companyDescriptor && (
                <span className="font-sans text-[11px] font-normal text-muted-foreground tracking-[0.05em] italic">
                  {job.companyDescriptor}
                </span>
              )}
            </div>
            <div className="font-sans text-[11px] text-muted-foreground tracking-[0.12em] uppercase mb-6">
              {job.title}
            </div>

            {/* Body grid */}
            <div className="grid grid-cols-[1fr_280px] gap-10 items-start">
              <div>
                <p className="font-sans text-[13px] leading-[1.8] mb-5" style={{ color: "hsl(var(--charcoal))" }}>
                  {job.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="font-sans text-[12px] text-muted-foreground flex items-start gap-3 leading-[1.6]">
                      <span className="text-primary flex-shrink-0 mt-[1px] text-[10px]">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="flex flex-col gap-2.5">
                {job.featured && (
                  <div className="relative">
                    <span
                      className="absolute flex items-center justify-center w-[26px] h-[26px] rounded-full bg-primary text-primary-foreground text-[13px] font-bold z-10"
                      style={{ top: -10, right: -10, boxShadow: "0 2px 8px hsl(var(--primary) / 0.4)" }}
                    >
                      ★
                    </span>
                    <a
                      href={job.featured.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between gap-3 rounded border border-primary/30 bg-card hover:bg-secondary transition-colors"
                      style={{ padding: "14px 18px" }}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-primary text-[11px]">▶</span>
                        <span className="font-sans text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: "hsl(var(--charcoal))" }}>
                          {job.featured.label}
                        </span>
                      </span>
                      <span className="font-mono text-[10px] text-primary tracking-[0.1em] uppercase font-semibold">
                        {job.featured.cta}
                      </span>
                    </a>
                  </div>
                )}
                <div
                  className="flex flex-col overflow-hidden rounded"
                  style={{ gap: "1px", background: "hsl(var(--border))", border: "1px solid hsl(var(--border))" }}
                >
                  {job.stats.map((s) => (
                    <div key={s.label} className="bg-card hover:bg-secondary transition-colors flex justify-between items-center gap-3" style={{ padding: "14px 18px" }}>
                      <span className="font-sans text-[10px] text-muted-foreground tracking-[0.1em] uppercase flex-1">{s.label}</span>
                      <span className="font-display text-[16px] font-bold text-primary text-right whitespace-nowrap">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
