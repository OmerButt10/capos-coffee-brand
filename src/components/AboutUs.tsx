import { motion } from "framer-motion";
// TODO: Replace with your brand photo
import aboutImg from "@/assets/about-coffee.jpg";

const services = [
  { icon: "🥂", label: "Weddings" },
  { icon: "🎂", label: "Birthdays" },
  { icon: "👑", label: "Sweet Sixteens" },
  { icon: "🎊", label: "Private Gatherings" },
  { icon: "☕", label: "Pop-Up Experiences" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={aboutImg}
            alt="Espresso pour in candlelight"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-gold mb-4">Who We Are</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1.05]">
            More than what's <br />
            <em className="text-gold">in your cup.</em>
          </h2>
          <div className="w-24 gold-rule my-8" />
          <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p>
              Capo's Coffee is a coffee cart service serving the greater Tri-State area,
              dedicated to making your wedding, sweet sixteen, birthday, or any special
              occasion unforgettable. Though we are not a standstill brick and mortar, we
              plan to live in your hearts one pop-up at a time.
            </p>
            <p>
              At Capo's, it's more than just what's in your cup. We pride ourselves in
              serving you a marriage of cultures and heritage — a blend of bold South Asian
              flavors, authentic Yemeni-style coffee, and timeless Italian recipes.
            </p>
          </div>

          <div className="w-full gold-rule my-10" />

          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {services.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-3 text-cream text-base tracking-wide"
              >
                <span className="text-xl">{s.icon}</span>
                {s.label}
              </li>
            ))}
          </ul>

          <p className="font-display italic text-2xl text-gold">With love, — Capo</p>
        </motion.div>
      </div>
    </section>
  );
}
