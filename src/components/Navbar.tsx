import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import logo from "@/assets/capos-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-background/95 backdrop-blur border-b border-border"
            : "top-0 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Capo's Coffee" className="h-10 w-10 object-contain" />
            <span className="hidden sm:inline font-display text-lg tracking-wide text-cream">
              Capo's Coffee
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm tracking-[0.18em] uppercase text-foreground/80 hover:text-cream transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="bg-cream text-background px-5 py-2.5 text-sm tracking-[0.18em] uppercase hover:bg-gold transition-colors"
              >
                Book Now
              </a>
            </li>
          </ul>
          <button
            aria-label="Open menu"
            className="md:hidden text-cream"
            onClick={() => setOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-border">
            <img src={logo} alt="Capo's Coffee" className="h-10 w-10" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-cream">
              <X size={24} />
            </button>
          </div>
          <ul className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-cream text-background px-8 py-3 text-sm tracking-[0.18em] uppercase"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
