import { useState, useEffect } from "react";
import profile from "../../data/profile.json";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the current section
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-lg border-b border-[#334155]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 h-20">
        {/* LEFT — logo + name */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9] flex items-center justify-center text-[#0f172a] text-sm font-bold">
            {profile.initials}
          </div>
          <span className="font-bold tracking-tight text-white text-lg">
            {profile.name}
          </span>
        </a>

        {/* RIGHT — nav links */}
        <ul className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-base font-bold transition-colors px-4 py-3 rounded-lg ${
                  active === l.href
                    ? "text-[#14b8a6]"
                    : "text-white hover:text-[#14b8a6] hover:bg-white/[0.04]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#334155] bg-[#0f172a]/95 backdrop-blur-lg">
          <ul className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-4 text-base font-bold rounded-lg transition-colors ${
                    active === l.href
                      ? "text-[#14b8a6] bg-white/[0.04]"
                      : "text-white hover:text-[#14b8a6] hover:bg-white/[0.04]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}