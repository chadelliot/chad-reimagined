const navItems = [
  { label: "MY CONTRIBUTION", href: "#pillars" },
  { label: "MKTG INTELLIGENCE", href: "#qxo-story" },
  { label: "SEGMENTATION", href: "#segmentation" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "IMPACT", href: "#expertise" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-xl font-bold tracking-tight text-foreground">
          AUDAPTI
          <span className="text-primary">O</span>N
        </span>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-widest-custom text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
