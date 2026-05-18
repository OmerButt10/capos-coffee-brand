import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/capos-logo.png";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Book Now", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background grain border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center text-center">
        <img src={logo} alt="Capo's Coffee" className="h-24 w-24 mb-6" loading="lazy" />
        <p className="font-display italic text-xl text-gold max-w-md">
          A marriage of cultures, one unforgettable cup at a time.
        </p>
        <div className="mx-auto w-24 gold-rule my-8" />
        <ul className="flex flex-wrap justify-center gap-8 mb-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.25em] uppercase text-foreground/80 hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 mb-10">
          <a href="#" aria-label="Instagram" className="text-cream hover:text-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-cream hover:text-gold transition-colors">
            <Facebook size={20} />
          </a>
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          © 2025 Capo's Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
