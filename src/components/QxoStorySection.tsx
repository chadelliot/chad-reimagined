import { useState } from "react";

const tabs = [
  { id: "overview", label: "Strategic Overview" },
  { id: "intelligence", label: "Marketing Intelligence" },
  { id: "segmentation", label: "Customer Segmentation" },
  { id: "activation", label: "Activation" },
];

const OverviewTab = () => (
  <div>
    <div className="flex items-center gap-4 mb-2">
      <span className="text-primary font-bold text-sm">01</span>
      <div className="w-8 h-[1px] bg-primary" />
    </div>
    <h3 className="text-3xl font-bold text-foreground">
      Strategic <span className="font-display italic text-primary">Overview</span>
    </h3>
    <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed text-sm">
      Modern growth systems are built by connecting marketing intelligence, customer segmentation, and activation infrastructure into a single operating model. Rather than isolated campaigns, this approach focuses on building a scalable framework that turns unified data into measurable revenue outcomes.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {[
        {
          phase: "BUILD.",
          desc: "Architect from zero.",
          detail: "Marketing funnel · tracking ecosystem · MarTech stack · CDP deployment",
          tags: ["Funnel Tracking", "CDP", "Attribution"],
          year: "2021 — Foundation",
        },
        {
          phase: "SCALE.",
          desc: "Turn data into revenue.",
          detail: "30K leads/qtr · 10K qualified · 1,500 new customers per quarter",
          tags: ["30K Leads/Qtr", "AI Segmentation", "Growth Lab"],
          year: "2022–23 — Acceleration",
        },
        {
          phase: "IMPACT.",
          desc: "$750M → $1.25B digital revenue.",
          detail: "Influencing $2.5B in branch sales · NYSE · Beacon Building acquisition",
          tags: ["$1.25B Revenue", "$2.5B Influenced", "NYSE Podium"],
          year: "2024 — Transformation",
        },
      ].map((item, i) => (
        <div key={i} className="border border-border rounded-xl p-6">
          <p className="text-xl font-bold text-foreground">{item.phase}</p>
          <p className="text-sm text-primary font-medium mt-1">{item.desc}</p>
          <p className="text-xs text-muted-foreground mt-3">{item.detail}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((t) => (
              <span key={t} className="text-[10px] bg-secondary text-foreground px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-4">{item.year}</p>
        </div>
      ))}
    </div>
  </div>
);

const IntelligenceTab = () => (
  <div>
    <div className="flex items-center gap-4 mb-2">
      <span className="text-primary font-bold text-sm">02</span>
      <div className="w-8 h-[1px] bg-primary" />
    </div>
    <h3 className="text-3xl font-bold text-foreground">
      Marketing <span className="font-display italic text-primary">Intelligence</span>
    </h3>
    <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed text-sm">
      I designed and deployed the marketing intelligence infrastructure that connects every customer touchpoint into a centralized system — transforming fragmented signals into unified insights, and activating them across every channel in real time.
    </p>

    <div className="mt-12">
      {/* Data sources */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { icon: "🗂️", label: "CRM System" },
          { icon: "🌐", label: "Web Signals" },
          { icon: "🏪", label: "Store Level Data" },
          { icon: "📧", label: "Marketing Automation" },
          { icon: "📱", label: "Mobile App" },
          { icon: "🔗", label: "Partner APIs" },
        ].map((s) => (
          <div key={s.label} className="border border-border rounded-lg p-4 text-center">
            <span className="text-2xl">{s.icon}</span>
            <p className="text-xs text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Central hub */}
      <div className="border-2 border-primary rounded-xl p-8 text-center bg-primary/5">
        <span className="text-3xl">⬡</span>
        <p className="text-lg font-bold text-foreground mt-2">Centralized</p>
        <p className="text-sm text-primary font-medium">Data · Intelligence</p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["AI Segmentation", "Campaign Activation", "Loyalty Programs", "Revenue Attribution", "Next-Best-Action"].map((t) => (
            <span key={t} className="text-[10px] bg-secondary text-foreground px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SegmentationTab = () => (
  <div id="segmentation">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-primary font-bold text-sm">03</span>
      <div className="w-8 h-[1px] bg-primary" />
    </div>
    <h3 className="text-3xl font-bold text-foreground">
      Customer <span className="font-display italic text-primary">Segmentation</span>
    </h3>
    <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed text-sm">
      Precision growth requires precise targeting. This framework organizes customers around recency, frequency, and value signals so teams can move from broad campaigns to lifecycle-based prioritization.
    </p>

    {/* RFM */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {[
        { letter: "R", title: "Recency", desc: "How recently did they purchase?", bullets: ["Strong predictor of churn risk", "Near-term reorder likelihood", "Days since last transaction"] },
        { letter: "F", title: "Frequency", desc: "How often do they purchase?", bullets: ["Indicates habitual purchasing", "Forecasts lifetime value", "Identifies \"sticky\" accounts"] },
        { letter: "M", title: "Monetary", desc: "How much do they spend?", bullets: ["Total revenue & gross margin", "Average order value", "Annual wallet share"] },
      ].map((r) => (
        <div key={r.letter} className="border border-border rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">{r.letter}</div>
          <p className="text-lg font-bold mt-3 text-foreground">{r.title}</p>
          <p className="text-sm text-primary mt-1">{r.desc}</p>
          <ul className="mt-3 space-y-1">
            {r.bullets.map((b, i) => (
              <li key={i} className="text-xs text-muted-foreground">• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Segments */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {[
        { icon: "👑", name: "Top Performers", desc: "High recency, frequency, and spend. Your highest-value accounts.", score: 88 },
        { icon: "🔁", name: "Core Accounts", desc: "Consistent purchasers with reliable frequency.", score: 74 },
        { icon: "🚀", name: "Promising", desc: "Recent buyers with growing frequency.", score: 61 },
        { icon: "⚠️", name: "Needs Attention", desc: "Above-average historically but declining engagement.", score: 46 },
        { icon: "🔴", name: "At-Risk", desc: "Previously valuable but showing strong churn signals.", score: 29 },
        { icon: "💤", name: "Churned", desc: "Fully lapsed. Targeted win-back or removal.", score: 11 },
      ].map((s) => (
        <div key={s.name} className="border border-border rounded-lg p-5">
          <div className="flex items-center gap-3">
            <span className="text-xl">{s.icon}</span>
            <p className="font-bold text-foreground">{s.name}</p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">{s.desc}</p>
          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
              <span>Value Score</span>
              <span>{s.score}%</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-progress" style={{ "--target-width": `${s.score}%`, width: `${s.score}%` } as React.CSSProperties} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ActivationTab = () => (
  <div>
    <div className="flex items-center gap-4 mb-2">
      <span className="text-primary font-bold text-sm">04 · Revenue Activation</span>
    </div>
    <h3 className="text-3xl font-bold text-foreground">
      When data moves, <span className="font-display italic text-primary">revenue follows.</span>
    </h3>
    <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed text-sm">
      Intelligence and segmentation are only as valuable as the system that acts on them. This layer connects unified customer profiles, behavioral signals, and workflow automation into a repeatable engine.
    </p>

    {/* Architecture diagram */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {[
        { icon: "⬡", title: "Unified Data Layer", sub: "CDP · CRM · Signals", arrow: "segment & score" },
        { icon: "◈", title: "Orchestration Engine", sub: "Routing · Scoring · Timing", arrow: "activate & measure" },
        { icon: "↗", title: "Revenue Outcomes", sub: "Pipeline · CLV · ROAS", arrow: null },
      ].map((a) => (
        <div key={a.title} className="border border-border rounded-xl p-6 text-center relative">
          <span className="text-3xl">{a.icon}</span>
          <p className="font-bold mt-2 text-foreground">{a.title}</p>
          <p className="text-xs text-primary">{a.sub}</p>
          {a.arrow && (
            <p className="text-[10px] text-muted-foreground mt-3 italic">{a.arrow} →</p>
          )}
        </div>
      ))}
    </div>

    {/* Activation layers */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {[
        { num: "01", title: "Omnichannel orchestration", tag: "Always-on", bullets: ["Faster lead-to-sales conversion", "Shorter response times", "Improved new customer growth"] },
        { num: "02", title: "Budgeting intelligence", tag: "Adaptive", bullets: ["Higher return on ad spend", "Lower cost per qualified lead", "Reduced manual overhead"] },
        { num: "03", title: "Content production", tag: "High-velocity", bullets: ["Greater content velocity", "Lower production cost", "Consistent brand voice"] },
        { num: "04", title: "Experimentation layer", tag: "Continuous", bullets: ["Higher conversion rates", "Better efficiency", "More testing capacity"] },
        { num: "05", title: "Engagement scoring", tag: "Predictive", bullets: ["Higher quality pipeline", "Better sales prioritization", "Improved conversion"] },
        { num: "06", title: "Workflow acceleration", tag: "Efficient", bullets: ["Shorter campaign timelines", "More output from same team", "Clearer alignment"] },
      ].map((l) => (
        <div key={l.num} className="border border-border rounded-lg p-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest-custom text-primary">{l.num}</span>
            <p className="font-bold text-foreground">{l.title}</p>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-auto">{l.tag}</span>
          </div>
          <ul className="mt-3 space-y-1">
            {l.bullets.map((b, i) => (
              <li key={i} className="text-xs text-muted-foreground">• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Revenue influenced</p>
        <p className="text-4xl font-bold text-foreground font-display italic">$1.25B</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Layers connected</p>
        <p className="text-4xl font-bold text-foreground">6 <span className="font-display italic">operating</span></p>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Activation model</p>
        <p className="text-4xl font-bold text-foreground font-display italic">Always-on lifecycle</p>
      </div>
    </div>
  </div>
);

const QxoStorySection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <OverviewTab />;
      case "intelligence": return <IntelligenceTab />;
      case "segmentation": return <SegmentationTab />;
      case "activation": return <ActivationTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <section id="qxo-story" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primary font-bold text-sm">02</span>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          QXO <span className="font-display italic text-primary">Story</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed text-sm">
          Use the tabs to move through a four-part growth story — strategic overview, marketing intelligence, customer segmentation, and activation.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mt-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderTab()}
      </div>
    </section>
  );
};

export default QxoStorySection;
