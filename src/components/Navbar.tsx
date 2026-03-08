import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/" },
  { label: "My Approach", href: "/approach" },
  { label: "Career", href: "/career" },
  { label: "Skills", href: "/skills" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center"
      style={{
        padding: "24px 80px",
        background: "rgba(248,249,250,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="flex items-center">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-foreground">
          AUDAPTI<span className="text-primary" style={{ fontStyle: "normal" }}>O</span>N
        </Link>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className={`no-underline text-[11px] font-medium tracking-[0.15em] uppercase transition-colors ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
