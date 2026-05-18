import { motion } from "framer-motion";
import eventCars from "@/assets/event-cars.jpg";

// ✏️ CLIENT EDITABLE — Add, remove, or update events here
const events = [
  {
    id: 1,
    title: "Cars N' Coffee — Mother's Day Edition",
    date: "May 10, 2026",
    dateBadge: "MAY 10",
    time: "9 AM – 1 PM",
    location: "Lake Hiawatha, NJ",
    description:
      "A special Mother's Day pop-up in collaboration with Namkeen. Come for the cars, stay for the coffee.",
    image: eventCars, // TODO: Replace
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="relative py-24 lg:py-32 bg-surface grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-4">Mark Your Calendar</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream">Upcoming Events</h2>
          <div className="mx-auto w-32 gold-rule my-6" />
        </div>

        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x">
          {events.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-border bg-background min-w-[85%] md:min-w-0 snap-start group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-rose text-cream px-3 py-2 text-center">
                  <div className="text-[10px] tracking-[0.2em] uppercase">{e.dateBadge.split(" ")[0]}</div>
                  <div className="font-display text-2xl leading-none">{e.dateBadge.split(" ")[1]}</div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-cream leading-tight">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {e.time} · {e.location}
                </p>
                <p className="mt-4 text-foreground/80 leading-relaxed">{e.description}</p>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-xs tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
