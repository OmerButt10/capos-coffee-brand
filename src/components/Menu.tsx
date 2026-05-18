import { useState } from "react";
import { motion } from "framer-motion";

type Item = {
  name: string;
  description: string;
  price?: string;
  badge?: string;
  special?: boolean;
};

const signatures: Item[] = [
  {
    name: "Crème Brûlée Latte",
    description:
      "A rich espresso blended with velvety milk, layered with a cloud of golden caramel custard, tucked under the decadent flavor of hard-top candied caramelized sugar.",
    badge: "Served Iced",
  },
  {
    name: "Rose Saffron Latte",
    description:
      "A luxurious floral blend of fragrant rose syrup and warm cardamom, finished with sweet cold foam, rose petals, and saffron.",
    badge: "Served Iced",
    special: true,
  },
  {
    name: "Latte España",
    description:
      "A creamy Spanish latte made with bold espresso and silky oat milk, subtly sweetened with condensed milk and cold foam.",
    badge: "Served Iced",
  },
];

const collab: Item[] = [
  {
    name: "Tiramisu Latte",
    description:
      "A dessert-style latte featuring bold espresso, soft vanilla notes, and a luxurious mascarpone cold foam. Topped with cocoa powder and Swiss chocolate.",
  },
  {
    name: "La Dolce Latte",
    description:
      "Silky iced latte crafted with golden espresso, brown sugar, and homemade caramel. Finished with smooth cold foam. \u201CThe Sweet Latte.\u201D",
  },
];

const flavors = ["Vanilla", "Caramel", "Hazelnut", "Mocha", "White Chocolate"];

const customize = [
  { icon: "☕", label: "Add a shot of espresso" },
  { icon: "🌿", label: "Oat milk / Almond milk" },
  { icon: "🌹", label: "Rose petals / Drizzle" },
  { icon: "💧", label: "Extra syrup pump" },
  { icon: "🍪", label: "Biscoff bomb" },
];

const tabs = ["Signatures", "Essentials", "Collaboration", "Customize"] as const;
type Tab = (typeof tabs)[number];

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>("Signatures");

  return (
    <section id="menu" className="relative py-24 lg:py-32 grain bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-4">The Menu</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream">The Menu</h2>
          <div className="mx-auto w-32 gold-rule my-6" />
          <p className="text-muted-foreground italic font-display text-xl">
            Bold flavors. Cultural roots. Every cup, a story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 border-b border-border pb-4 mb-14">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs tracking-[0.25em] uppercase pb-2 transition-colors relative ${
                tab === t ? "text-cream" : "text-muted-foreground hover:text-cream/70"
              }`}
            >
              {t}
              {tab === t && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-[17px] h-px bg-cream"
                />
              )}
            </button>
          ))}
        </div>

        {tab === "Signatures" && (
          <div className="grid md:grid-cols-3 gap-6">
            {signatures.map((item) => (
              <Card key={item.name} item={item} tall />
            ))}
          </div>
        )}

        {tab === "Essentials" && (
          <div className="max-w-2xl mx-auto">
            <div className="border border-border p-10 bg-surface">
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-3xl text-cream">Iced Latte</h3>
                <span className="font-display text-2xl text-gold">$5.50</span>
              </div>
              <p className="text-muted-foreground mt-3">
                Capo's everyday classic. Choose your flavor.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {flavors.map((f) => (
                  <span
                    key={f}
                    className="border border-cream/30 text-cream px-4 py-1.5 text-xs tracking-[0.18em] uppercase"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "Collaboration" && (
          <div>
            <div className="border-l-2 border-rose pl-5 py-3 mb-10 bg-rose/10 text-cream max-w-3xl mx-auto">
              <p className="text-sm tracking-wider">
                In collaboration with <span className="text-gold">Namkeen</span> · 9 N
                Beverwyck Rd, Lake Hiawatha, NJ · May 10, 2026 · 9AM–1PM
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {collab.map((item) => (
                <Card key={item.name} item={item} tall />
              ))}
            </div>
          </div>
        )}

        {tab === "Customize" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {customize.map((c) => (
              <div
                key={c.label}
                className="border border-border bg-surface p-6 text-center hover:border-gold/50 transition-colors"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="text-sm text-foreground/85">{c.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Card({ item, tall }: { item: Item; tall?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative border border-border bg-surface p-8 flex flex-col transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(196,151,42,0.25)] ${
        tall ? "min-h-[420px]" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {item.badge && (
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2 py-1">
            {item.badge}
          </span>
        )}
        {item.special && (
          <span className="text-[10px] tracking-[0.25em] uppercase text-cream bg-rose px-2 py-1">
            🌹 Special
          </span>
        )}
      </div>
      <h3 className="font-display text-3xl text-cream mb-4 leading-tight">{item.name}</h3>
      <div className="w-12 gold-rule mb-5" />
      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
    </motion.article>
  );
}
