import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Heart, Search, Star, BadgeCheck, Timer } from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -60]);
  const y2 = useTransform(scrollY, [0, 600], [0, -30]);
  const orbY = useTransform(scrollY, [0, 600], [0, 80]);
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero-soft">
      {/* Decorative orbs */}
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1a7a8a]/15 blur-3xl animate-blob" />
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#7fd1d6]/30 blur-3xl animate-blob" />
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: y2 }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6 hover:shadow-soft transition-shadow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Healthcare, reimagined for the home
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Smart <span className="text-gradient-animated">Nursing Care</span>
            <br />at Home.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Connecting patients with certified nurses for reliable, on-demand
            home healthcare — built for the way modern families live.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group shimmer-overlay bg-gradient-primary text-primary-foreground font-medium px-7 py-4 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              { Icon: ShieldCheck, label: "Verified nurses" },
              { Icon: Clock, label: "24/7 availability" },
              { Icon: Heart, label: "Continuous care" },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 group cursor-default"
              >
                <Icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
                <span className="group-hover:text-foreground transition-colors">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: y1 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <AppDashboardCard />
        </motion.div>
      </div>
    </section>
  );
};

const services = [
  { label: "Home Nursing", emoji: "🏠", count: "120 nurses", active: true },
  { label: "Post Surgery", emoji: "🩺", count: "84 nurses" },
  { label: "Elderly Care", emoji: "👵", count: "96 nurses" },
  { label: "Medication", emoji: "💊", count: "62 nurses" },
];

const nurses = [
  { initials: "AM", name: "Amira Khaled", spec: "Wound care • 1.2 km", rating: 4.9 },
  { initials: "JS", name: "Jonas Silva", spec: "Post-op • 2.4 km", rating: 4.8 },
];

const AppDashboardCard = () => (
  <div className="relative w-[340px]">
    {/* Floating badge — top right */}
    <div className="absolute -top-6 -right-6 z-20 animate-float bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-black/5">
      <div className="h-9 w-9 rounded-full bg-[#1a7a8a]/10 flex items-center justify-center text-[#1a7a8a]">
        <BadgeCheck className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display font-semibold text-sm text-foreground leading-none">480+</div>
        <div className="text-[11px] text-muted-foreground mt-1">Certified nurses</div>
      </div>
    </div>

    {/* Floating badge — bottom left */}
    <div className="absolute -bottom-6 -left-8 z-20 animate-float-delayed bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 border border-black/5">
      <div className="h-9 w-9 rounded-full bg-[#1a7a8a]/10 flex items-center justify-center text-[#1a7a8a]">
        <Timer className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display font-semibold text-sm text-foreground leading-none">~15 min</div>
        <div className="text-[11px] text-muted-foreground mt-1">Avg. response time</div>
      </div>
    </div>

    {/* Main app card */}
    <div className="relative bg-white rounded-[24px] shadow-elegant overflow-hidden border border-white">
      {/* Header */}
      <div className="bg-[#1a7a8a] text-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-white/70">Good morning</p>
            <p className="font-display font-semibold text-lg leading-tight">Sarah 👋</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center font-semibold text-sm border border-white/20">
            SK
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 bg-white/15 rounded-full px-3 py-2 border border-white/15">
          <Search className="h-4 w-4 text-white/80" />
          <span className="text-xs text-white/80">Search nurses, services…</span>
        </div>
      </div>

      {/* Service grid */}
      <div className="p-4 grid grid-cols-2 gap-3">
        {services.map((s) => (
          <div
            key={s.label}
            className={`rounded-2xl p-3 border transition ${
              s.active
                ? "bg-[#1a7a8a] text-white border-[#1a7a8a]"
                : "bg-[#f4faf9] border-black/5 text-foreground"
            }`}
          >
            <div className="text-xl">{s.emoji}</div>
            <div className="mt-2 text-xs font-semibold leading-tight">{s.label}</div>
            <div className={`text-[10px] mt-0.5 ${s.active ? "text-white/80" : "text-muted-foreground"}`}>
              {s.count}
            </div>
          </div>
        ))}
      </div>

      {/* Nurse rows */}
      <div className="px-4 pb-5 space-y-2">
        <div className="flex items-center justify-between px-1">
          <p className="text-xs font-semibold text-foreground">Nearby nurses</p>
          <p className="text-[10px] text-[#1a7a8a] font-medium">See all</p>
        </div>
        {nurses.map((n) => (
          <div key={n.initials} className="flex items-center gap-3 bg-[#f4faf9] rounded-2xl p-2.5">
            <div className="h-9 w-9 rounded-full bg-[#1a7a8a] text-white flex items-center justify-center text-xs font-semibold">
              {n.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">{n.name}</p>
              <p className="text-[10px] text-muted-foreground truncate">{n.spec}</p>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              {n.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);