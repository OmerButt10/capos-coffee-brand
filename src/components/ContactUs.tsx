import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const eventTypes = ["Wedding", "Birthday", "Sweet Sixteen", "Pop-Up", "Other"];

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-4">Reservations</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream">Book Your Event</h2>
          <div className="mx-auto w-32 gold-rule my-6" />
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
            Bring Capo's Coffee to your next celebration. We'll handle the coffee — you
            handle the memories.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 border border-border bg-surface p-8 lg:p-10"
          >
            {sent ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-6">🌹</div>
                <h3 className="font-display text-3xl text-cream mb-3">Thank you!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Capo's Coffee will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" />
                  <div className="flex flex-col gap-2">
                    <label className="eyebrow text-muted-foreground">Event Type</label>
                    <select
                      required
                      className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors"
                    >
                      <option value="">Select…</option>
                      {eventTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Field label="Event Date" name="date" type="date" />
                <div className="flex flex-col gap-2">
                  <label className="eyebrow text-muted-foreground">Message / Details</label>
                  <textarea
                    rows={5}
                    className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cream text-background py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold transition-colors"
                >
                  Send Your Inquiry
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-2 relative border border-border p-8 lg:p-10 overflow-hidden"
          >
            <RoseSvg className="absolute -bottom-10 -right-10 w-56 text-rose/15" />
            <p className="font-display italic text-2xl text-gold mb-2">
              Serving the Greater Tri-State Area
            </p>
            <div className="w-16 gold-rule mb-8" />
            <ul className="space-y-6 text-foreground/90 relative z-10">
              <li className="flex gap-4">
                <Mail className="text-gold mt-1 shrink-0" size={18} />
                {/* TODO: Replace with real email */}
                <a href="mailto:hello@caposcoffee.com" className="hover:text-cream">
                  hello@caposcoffee.com
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={18} />
                {/* TODO: Replace with real number */}
                <a href="tel:+10000000000" className="hover:text-cream">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <span>New Jersey · New York · Connecticut</span>
              </li>
              <li className="flex gap-4">
                <Instagram className="text-gold mt-1 shrink-0" size={18} />
                {/* TODO: Replace with real Instagram handle */}
                <a href="#" className="hover:text-cream">
                  @caposcoffee
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="eyebrow text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="bg-background border border-border px-4 py-3 text-foreground focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}

function RoseSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden>
      <path d="M50 20c-8 0-15 6-15 14 0 4 2 8 5 10-5 1-9 5-9 11 0 7 6 13 13 13 3 0 6-1 8-3-1 3-2 6-2 9 0 6 5 11 11 11s11-5 11-11c0-3-1-6-2-9 2 2 5 3 8 3 7 0 13-6 13-13 0-6-4-10-9-11 3-2 5-6 5-10 0-8-7-14-15-14-5 0-9 2-12 6-3-4-7-6-12-6z" opacity="0.6"/>
    </svg>
  );
}
