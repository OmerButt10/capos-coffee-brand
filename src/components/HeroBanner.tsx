import { motion } from "framer-motion";

// ✏️ CLIENT EDITABLE — Update hero content here
const heroConfig = {
  // TODO: Replace videoUrl with your own .mp4
  videoUrl:
    "https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_30fps.mp4",
  eyebrow: "Mobile Coffee Cart · Tri-State Area",
  headline: "A Marriage of Cultures, One Unforgettable Cup at a Time.",
  body: "Capo's Coffee brings a one-of-a-kind coffee experience to your wedding, birthday, sweet sixteen, or any special occasion.",
  primaryCta: { label: "Book Your Event", href: "#contact" },
  secondaryCta: { label: "Explore Our Menu", href: "#menu" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.15 },
  }),
};

export default function HeroBanner() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden grain">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroConfig.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="w-24 gold-rule mb-8"
        />
        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="eyebrow text-cream mb-8"
        >
          {heroConfig.eyebrow}
        </motion.p>
        <motion.h1
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-cream max-w-5xl"
        >
          {heroConfig.headline}
        </motion.h1>
        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed"
        >
          {heroConfig.body}
        </motion.p>
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={heroConfig.secondaryCta.href}
            className="border border-cream text-cream px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-cream hover:text-background transition-colors"
          >
            {heroConfig.secondaryCta.label}
          </a>
          <a
            href={heroConfig.primaryCta.href}
            className="bg-cream text-background px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold transition-colors"
          >
            {heroConfig.primaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
