import { useState } from "react";
import { SectionHeader } from "./PillarsSection";

const tabs = [
  { id: "overview", label: "Strategic Overview" },
  { id: "intelligence", label: "Marketing Intelligence" },
  { id: "segmentation", label: "Customer Segmentation" },
  { id: "activation", label: "Activation" },
];

/* ── STORY OVERVIEW (Visify style) ── */
const StoryOverview = () => (
  <div className="bg-card" style={{
    padding: "120px 80px 0",
    backgroundImage: "linear-gradient(rgba(47,163,127,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(47,163,127,0.045) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
  }}>
    <SectionHeader num="01" title="My" em="Contribution" />
    <div className="max-w-[600px] mb-5">
      <p className="font-sans text-[14px] text-muted-foreground leading-[1.8]">
        How do you drive $1B+ in digital revenue inside an $800B industry that had almost no digital playbook? As the architect of the digital marketing system, I built the infrastructure, scaled the engine, and delivered measurable impact — three chapters, three years, one relentless approach to growth.
      </p>
    </div>

    {/* Story canvas */}
    <div className="relative w-full" style={{ height: 680 }}>
      {[
        {
          label: "BUILD.",
          sub: "Architect from zero.",
          detail: "[marketing funnel · tracking ecosystem\nMarTech stack · CDP deployment]",
          chips: ["Funnel Tracking", "CDP", "Attribution"],
          btn: "2021 — Foundation",
          pos: { top: 30, left: 0, width: 280 },
        },
        {
          label: "SCALE.",
          sub: "Turn data into revenue.",
          detail: "[30K leads/qtr · 10K qualified\n1,500 new customers per quarter]",
          chips: ["30K Leads/Qtr", "AI Segmentation", "Growth Lab"],
          btn: "2022–23 — Acceleration",
          pos: { top: 200, left: "38%", width: 300 },
        },
        {
          label: "IMPACT.",
          sub: "$750M → $1.25B digital revenue.",
          detail: "[influencing $2.5B in branch sales\nNYSE · Beacon Building acquisition]",
          chips: ["$1.25B Revenue", "$2.5B Influenced", "NYSE Floor"],
          btn: "2024 — Transformation",
          pos: { top: 380, left: "68%", width: 320 },
        },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: node.pos.top, left: node.pos.left, width: node.pos.width }}
        >
          <div className="font-hand text-[52px] font-bold text-foreground leading-none mb-1.5 underline decoration-primary underline-offset-4">
            {node.label}
          </div>
          <div className="font-sans text-[13px] text-foreground mb-1.5">{node.sub}</div>
          <div className="font-mono text-[11px] text-muted-foreground italic leading-[1.5] whitespace-pre-line">{node.detail}</div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {node.chips.map((c) => (
              <span
                key={c}
                className="text-[10px] tracking-[0.1em] text-primary px-2.5 py-1 rounded"
                style={{ background: "rgba(47,163,127,0.1)", border: "1px solid hsl(var(--primary-deep))" }}
              >
                {c}
              </span>
            ))}
          </div>
          <button
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.12em] uppercase text-primary border border-primary/50 px-[18px] py-[10px] rounded bg-primary/[0.06] hover:bg-primary/[0.14] hover:border-primary transition-all cursor-pointer"
          >
            {node.btn}
          </button>
        </div>
      ))}
    </div>
  </div>
);

/* ── MARKETING INTELLIGENCE (0.xyz style) ── */
const IntelligenceTab = () => {
  const sources = [
    { icon: "🗂️", label: "CRM System" },
    { icon: "🌐", label: "Web Signals" },
    { icon: "🏪", label: "Store Level Data" },
    { icon: "📧", label: "Marketing Automation" },
    { icon: "📱", label: "Mobile App" },
    { icon: "🔗", label: "Partner APIs" },
  ];
  const outputs = [
    { label: "AI Segmentation", color: "hsl(var(--primary))" },
    { label: "Campaign Activation", color: "hsl(var(--accent))" },
    { label: "Loyalty Programs", color: "hsl(var(--primary))" },
    { label: "Revenue Attribution", color: "hsl(var(--primary))" },
    { label: "Next-Best-Action", color: "#f4a261" },
  ];

  return (
    <div className="bg-card" style={{ padding: "120px 80px" }}>
      <SectionHeader num="02" title="Integrated Marketing" em="Intelligence" />
      <p className="font-sans text-[14px] text-muted-foreground leading-[1.8] max-w-[600px] mb-16">
        I designed and deployed the marketing intelligence infrastructure that connects every customer touchpoint into a centralized system — transforming fragmented signals into unified insights, and activating them across every channel in real time.
      </p>

      <div className="relative w-full" style={{ height: 520 }}>
        {/* Source nodes - left */}
        <div className="absolute left-[2%] top-0 bottom-0 flex flex-col justify-around" style={{ width: 100 }}>
          {sources.slice(0, 4).map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="flex items-center justify-center text-[22px] rounded-lg"
                style={{ width: 52, height: 52, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }}
              >
                {s.icon}
              </div>
              <div className="font-sans text-[9px] tracking-[0.12em] uppercase text-muted-foreground text-center max-w-[70px] leading-[1.4]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Extra source nodes */}
        <div className="absolute left-[22%] top-[4%] flex flex-col items-center gap-2">
          <div className="flex items-center justify-center text-[22px] rounded-lg" style={{ width: 52, height: 52, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }}>
            {sources[4].icon}
          </div>
          <div className="font-sans text-[9px] tracking-[0.12em] uppercase text-muted-foreground text-center max-w-[70px] leading-[1.4]">{sources[4].label}</div>
        </div>
        <div className="absolute left-[22%] bottom-[4%] flex flex-col items-center gap-2">
          <div className="flex items-center justify-center text-[22px] rounded-lg" style={{ width: 52, height: 52, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }}>
            {sources[5].icon}
          </div>
          <div className="font-sans text-[9px] tracking-[0.12em] uppercase text-muted-foreground text-center max-w-[70px] leading-[1.4]">{sources[5].label}</div>
        </div>

        {/* Center CDP */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            {/* Pulse rings */}
            <div className="absolute left-1/2 top-1/2 pointer-events-none">
              <div className="absolute" style={{ width: 160, height: 160, border: "1px solid rgba(47,163,127,0.25)", borderRadius: "50%", animation: "pulsering 2.5s ease-in-out infinite" }} />
              <div className="absolute" style={{ width: 195, height: 195, border: "1px solid rgba(47,163,127,0.25)", borderRadius: "50%", animation: "pulsering 2.5s ease-in-out infinite 0.8s" }} />
            </div>
            <div
              className="flex flex-col items-center justify-center gap-1 relative cursor-pointer"
              style={{
                width: 130,
                height: 130,
                border: "1px solid hsl(var(--primary))",
                background: "hsl(var(--card))",
                borderRadius: 4,
              }}
            >
              <div
                className="absolute"
                style={{
                  inset: 6,
                  border: "1px solid hsl(var(--primary-deep))",
                  animation: "rotateBorder 8s linear infinite",
                }}
              />
              <div className="text-[28px]">⬡</div>
              <div className="font-display text-[11px] font-bold tracking-[0.1em] uppercase text-primary">Centralized</div>
              <div className="font-sans text-[9px] text-muted-foreground tracking-[0.08em]">Data · Intelligence</div>
            </div>
          </div>
        </div>

        {/* Output nodes - right */}
        <div className="absolute right-[2%] top-0 bottom-0 flex flex-col justify-around" style={{ width: 180 }}>
          {outputs.map((o, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className="flex items-center gap-2.5"
                style={{
                  padding: "10px 16px",
                  background: "hsl(var(--secondary))",
                  border: "1px solid hsl(var(--border))",
                  minWidth: 160,
                }}
              >
                <div
                  className="animate-blink"
                  style={{ width: 6, height: 6, borderRadius: "50%", background: o.color, flexShrink: 0 }}
                />
                <span className="font-sans text-[11px] tracking-[0.08em] text-foreground">{o.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── SEGMENTATION ── */
const SegmentationTab = () => {
  const dims = [
    { letter: "R", name: "Recency", question: "How recently did they purchase?", metrics: ["Strong predictor of churn risk", "Near-term reorder likelihood", "Days since last transaction"] },
    { letter: "F", name: "Frequency", question: "How often do they purchase?", metrics: ["Indicates habitual purchasing", "Forecasts lifetime value", "Identifies \"sticky\" accounts"] },
    { letter: "M", name: "Monetary", question: "How much do they spend?", metrics: ["Total revenue & gross margin", "Average order value", "Annual wallet share"] },
  ];

  const segments = [
    { icon: "👑", name: "Top Performers", desc: "High recency, frequency, and spend. Your highest-value accounts — protect and grow.", score: 88, color: "#ffd700" },
    { icon: "🔁", name: "Core Accounts", desc: "Consistent purchasers with reliable frequency. Backbone of predictable revenue.", score: 74, color: "#5ae0a0" },
    { icon: "🚀", name: "Promising", desc: "Recent buyers with growing frequency. On the path to loyalty — invest now.", score: 61, color: "#4f8ef7" },
    { icon: "⚠️", name: "Needs Attention", desc: "Above-average historically but declining engagement signals emerging risk.", score: 46, color: "#f4a261" },
    { icon: "🔴", name: "At-Risk", desc: "Previously valuable but showing strong churn signals. Re-engagement urgency high.", score: 29, color: "#e05a5a" },
    { icon: "💤", name: "Churned", desc: "Fully lapsed. Targeted win-back or removal from active spend — protect budget efficiency.", score: 11, color: "#6b6b7a" },
  ];

  return (
    <div style={{ padding: "120px 80px" }} className="bg-background">
      <SectionHeader num="03" title="RFM" em="Segmentation" />
      <div className="max-w-[700px] mb-16">
        <p className="font-sans text-[14px] text-muted-foreground leading-[1.8]">
          Precision marketing requires precision targeting. I designed the segmentation framework around three leading indicators of customer value and churn risk — moving the business from mass messaging to individualized, ROI-based activation.
        </p>
      </div>

      <div className="grid grid-cols-[300px_1fr] mb-12" style={{ gap: "2px", background: "hsl(var(--border))" }}>
        {/* RFM Dimensions */}
        <div className="flex flex-col" style={{ gap: "2px", background: "hsl(var(--border))" }}>
          {dims.map((d) => (
            <div key={d.letter} className="bg-card rounded" style={{ padding: "28px 24px", borderLeft: "3px solid hsl(var(--border))" }}>
              <div className="font-display text-[42px] font-extrabold leading-none mb-1.5" style={{ color: "hsl(var(--border))" }}>{d.letter}</div>
              <div className="font-display text-[14px] font-bold mb-1">{d.name}</div>
              <div className="font-sans text-[11px] text-muted-foreground tracking-[0.06em] mb-2.5">{d.question}</div>
              <div className="flex flex-col gap-1">
                {d.metrics.map((m, i) => (
                  <div key={i} className="font-sans text-[10px] text-muted-foreground flex items-center gap-2">
                    <span className="w-[14px] h-[1px] flex-shrink-0" style={{ background: "hsl(var(--primary-deep))" }} />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Segments */}
        <div className="bg-card flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={{ padding: "24px 32px 16px", borderBottom: "1px solid hsl(var(--border))" }}>
            Customer Segments → Lifecycle Stages
          </div>
          <div className="grid grid-cols-3 flex-1" style={{ gap: "1px", background: "hsl(var(--border))" }}>
            {segments.map((s) => (
              <div key={s.name} className="bg-card hover:bg-secondary transition-colors cursor-pointer relative overflow-hidden group" style={{ padding: "24px 20px" }}>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" style={{ background: s.color }} />
                <div className="text-[24px] mb-2.5">{s.icon}</div>
                <div className="font-display text-[13px] font-bold mb-1">{s.name}</div>
                <div className="font-sans text-[10px] text-muted-foreground leading-[1.5] mb-2.5">{s.desc}</div>
                <div className="h-1 bg-border mb-1.5">
                  <div className="h-full transition-all duration-1000" style={{ background: s.color, width: `${s.score}%` }} />
                </div>
                <div className="font-mono text-[9px] text-muted-foreground">Value Score: {s.score}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activation flow */}
      <div
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 bg-card"
        style={{ border: "1px solid hsl(var(--border))", borderTop: "2px solid hsl(var(--primary))", padding: 32, borderRadius: "0 0 8px 8px" }}
      >
        <div>
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">Segmentation Inputs</div>
          <div className="flex flex-col gap-2">
            {["📊 Purchase recency, frequency, monetary value", "🎯 Behavioral engagement signals", "📈 Customer lifetime value modeling", "🏪 Customer loyalty & wallet share"].map((item, i) => (
              <div key={i} className="font-sans text-[11px] text-muted-foreground flex items-center gap-2.5">
                <span className="text-primary text-[16px]">{item.slice(0, 2)}</span>
                {item.slice(3)}
              </div>
            ))}
          </div>
        </div>
        <div className="font-display text-[32px] font-extrabold text-primary text-center">→</div>
        <div>
          <div className="font-display text-[18px] font-bold text-primary mb-1">Precision Activation</div>
          <div className="font-sans text-[10px] text-muted-foreground tracking-[0.08em] leading-[1.6]">
            Mass marketing → Precision marketing<br />
            Uniform spend → ROI-based allocation<br />
            Generic messaging → 1:1 personalization<br />
            Reactive campaigns → Predictive lifecycle
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── ACTIVATION ── */
const ActivationTab = () => {
  const layers = [
    { num: "01", title: "Omnichannel orchestration", subtitle: "Real-time customer activation", tag: "Always-on", desc: "A customer data layer, engagement automation, and routing logic trigger timely experiences across email, SMS, in-app, and sales motions.", bullets: ["Faster lead-to-sales conversion and pipeline velocity", "Shorter response times across the full lifecycle", "Improved new customer growth through precision triggers"] },
    { num: "02", title: "Budgeting intelligence", subtitle: "Performance automation", tag: "Adaptive", desc: "Campaign and cost signals feed directly into optimization tools so budget, placement, and creative decisions adapt automatically.", bullets: ["Higher return on ad spend at scale", "Lower cost per qualified lead", "Reduced manual overhead from media operations"] },
    { num: "03", title: "Content production", subtitle: "AI-assisted content generation", tag: "High-velocity", desc: "A single strategic asset becomes multiple campaign-ready formats — landing pages, nurture sequences, sales follow-up, social, and paid media.", bullets: ["Greater content velocity across channels and teams", "Lower production cost per asset", "Consistent brand voice at scale"] },
    { num: "04", title: "Experimentation layer", subtitle: "Adaptive testing", tag: "Continuous", desc: "The system continuously optimizes channel, message, timing, and audience combinations.", bullets: ["Higher conversion rates and win rates", "Better efficiency from existing traffic", "More testing capacity than static A/B workflows"] },
    { num: "05", title: "Engagement scoring", subtitle: "Signal-based prioritization", tag: "Predictive", desc: "Demo behavior, content depth, click patterns, and product interest signals sharpen qualification, scoring, and handoff decisions.", bullets: ["Higher quality pipeline with fewer wasted handoffs", "Better sales prioritization from behavioral data", "Improved conversion from engaged prospects"] },
    { num: "06", title: "Workflow acceleration", subtitle: "Automated campaign operations", tag: "Efficient", desc: "Task management, approvals, and AI-assisted production connect so briefs become coordinated campaigns.", bullets: ["Shorter campaign launch timelines", "More output from the same team capacity", "Clearer alignment between planning and execution"] },
  ];

  return (
    <div style={{ padding: "120px 80px" }} className="bg-card">
      <div className="flex items-center gap-5 mb-16">
        <span className="font-mono text-[11px] text-primary tracking-[0.1em]">04 · Revenue Activation</span>
        <div className="flex-1 h-[1px] bg-border" />
      </div>

      <h2 className="font-display font-extrabold leading-none tracking-[-0.025em] mb-4" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
        When data moves, <em className="text-primary">revenue follows.</em>
      </h2>
      <p className="font-sans text-[14px] text-muted-foreground leading-[1.8] max-w-[600px] mb-12">
        Intelligence and segmentation are only as valuable as the system that acts on them. This layer connects unified customer profiles, behavioral signals, and workflow automation into a repeatable engine.
      </p>

      {/* Architecture */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {[
          { icon: "⬡", title: "Unified Data Layer", sub: "CDP · CRM · Signals", arrow: "segment & score" },
          { icon: "◈", title: "Orchestration Engine", sub: "Routing · Scoring · Timing", arrow: "activate & measure" },
          { icon: "↗", title: "Revenue Outcomes", sub: "Pipeline · CLV · ROAS", arrow: null },
        ].map((a) => (
          <div key={a.title} className="text-center" style={{ border: "1px solid hsl(var(--border))", borderRadius: 8, padding: "32px 24px" }}>
            <div className="text-[28px]">{a.icon}</div>
            <div className="font-display text-[13px] font-bold mt-2">{a.title}</div>
            <div className="font-sans text-[11px] text-primary tracking-[0.08em]">{a.sub}</div>
            {a.arrow && <div className="font-sans text-[10px] text-muted-foreground mt-3 italic">{a.arrow} →</div>}
          </div>
        ))}
      </div>

      {/* Layers */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px", background: "hsl(var(--border))", border: "1px solid hsl(var(--border))", borderRadius: 8, overflow: "hidden" }}>
        {layers.map((l) => (
          <div key={l.num} className="bg-card hover:bg-secondary transition-colors" style={{ padding: "28px 24px" }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[10px] tracking-[0.15em] text-primary">{l.num} · {l.title}</span>
            </div>
            <div className="font-display text-[14px] font-bold mb-1">{l.subtitle}</div>
            <span className="inline-block text-[9px] tracking-[0.1em] uppercase text-primary px-2 py-0.5 rounded mb-3" style={{ background: "rgba(47,163,127,0.1)" }}>{l.tag}</span>
            <p className="font-sans text-[12px] text-muted-foreground leading-[1.7] mb-3">{l.desc}</p>
            <ul className="flex flex-col gap-1.5">
              {l.bullets.map((b, i) => (
                <li key={i} className="font-sans text-[11px] text-muted-foreground flex items-start gap-2">
                  <span className="text-primary flex-shrink-0 mt-[1px] text-[10px]">▸</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-3 mt-12" style={{ gap: "1px", background: "hsl(var(--border))", border: "1px solid hsl(var(--border))", borderRadius: 8, overflow: "hidden" }}>
        {[
          { label: "Revenue influenced", value: "$1.25B" },
          { label: "Layers connected", value: "6 operating" },
          { label: "Activation model", value: "Always-on lifecycle" },
        ].map((s) => (
          <div key={s.label} className="bg-card text-center" style={{ padding: "48px 32px" }}>
            <div className="font-sans text-[11px] text-muted-foreground tracking-[0.15em] uppercase mb-2">{s.label}</div>
            <div className="font-display text-[52px] font-extrabold text-primary leading-none tracking-[-0.03em] italic">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── MAIN QXO STORY SECTION ── */
const QxoStorySection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <StoryOverview />;
      case "intelligence": return <IntelligenceTab />;
      case "segmentation": return <SegmentationTab />;
      case "activation": return <ActivationTab />;
      default: return <StoryOverview />;
    }
  };

  return (
    <div>
      {/* Tab bar */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm" style={{ borderBottom: "1px solid hsl(var(--border))", padding: "16px 80px" }}>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded text-[11px] font-sans tracking-[0.12em] uppercase transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {renderTab()}
    </div>
  );
};

export default QxoStorySection;
