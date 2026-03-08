import chadHeadshot from "@/assets/chad-headshot.png";

const stats = [
  { value: "$1.25B", label: "DIGITAL REVENUE SCALED" },
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "30K", label: "LEADS PER QUARTER" },
  { value: "$250K", label: "ECOMMERCE REVENUE" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          <p className="text-sm tracking-widest-custom text-muted-foreground mb-4">
            HELLO, <span className="text-primary">MY NAME IS</span>
          </p>
          <h1 className="text-7xl md:text-8xl font-bold leading-[0.9] text-foreground">
            Chad
            <br />
            <span className="font-display italic text-primary">Parker</span>
          </h1>
          <p className="mt-6 text-xs tracking-widest-custom text-muted-foreground uppercase leading-relaxed max-w-md">
            Marketing Operations & AI Strategy Leader · Digital Transformation Executive · Ecommerce Entrepreneur
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 mt-10 border border-border rounded-lg overflow-hidden max-w-sm">
            {stats.map((stat, i) => (
              <div key={i} className={`p-5 ${i < 2 ? "border-b border-border" : ""} ${i % 2 === 0 ? "border-r border-border" : ""}`}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-muted-foreground">
            <div className="w-8 h-[2px] bg-primary" />
            <div className="w-4 h-[2px] bg-border" />
            <span className="text-[10px] tracking-widest-custom">SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Corner brackets */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
            <img
              src={chadHeadshot}
              alt="Chad Parker"
              className="w-[400px] h-auto object-cover"
            />
            {/* Employer badge */}
            <div className="absolute top-4 right-0 bg-foreground text-primary-foreground px-5 py-3 rounded-lg shadow-lg">
              <p className="text-[9px] tracking-widest-custom text-primary-foreground/60 uppercase">Most Recent Employer</p>
              <p className="text-base font-bold">QXO Building</p>
              <p className="text-sm text-primary-foreground/80">Products, Inc.</p>
            </div>
          </div>
          {/* Title badge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
            <div className="border border-border rounded-full px-6 py-2 bg-background">
              <p className="text-[10px] tracking-widest-custom text-muted-foreground">
                <span className="text-primary mr-1">✦</span>
                DIRECTOR · DIGITAL MARKETING & OPS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
