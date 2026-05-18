import { useState } from "react";
import { X } from "lucide-react";

// ✏️ CLIENT EDITABLE — Update to change the announcement banner
const bannerConfig = {
  text: "🌹 NOW FEATURING: Cars N' Coffee — Mother's Day Edition · Collaboration with Namkeen · May 10 · Lake Hiawatha, NJ",
  cta: "Book Now",
  ctaLink: "#contact",
  isVisible: true,
};

export default function AnnouncementBanner() {
  const [open, setOpen] = useState(bannerConfig.isVisible);
  if (!open) return null;

  const item = (
    <span className="inline-flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
      <span>{bannerConfig.text}</span>
      <a href={bannerConfig.ctaLink} className="underline underline-offset-4">
        {bannerConfig.cta} →
      </a>
      <span aria-hidden>✦</span>
    </span>
  );

  return (
    <div className="relative z-50 bg-rose text-cream">
      <div className="flex items-center">
        <div className="marquee flex-1 py-2.5">
          <div className="marquee-track">
            {item}{item}{item}{item}
          </div>
        </div>
        <button
          aria-label="Dismiss announcement"
          onClick={() => setOpen(false)}
          className="px-3 py-2 hover:opacity-70 transition-opacity"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
