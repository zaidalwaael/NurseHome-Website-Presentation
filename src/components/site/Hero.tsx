import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Heart } from "lucide-react";
import mockup from "@/assets/app-mockup-1.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Healthcare, reimagined for the home
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Smart <span className="text-gradient">Nursing Care</span>
            <br />at Home.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Connecting patients with certified nurses for reliable, on-demand
            home healthcare — built for the way modern families live.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group bg-gradient-primary text-primary-foreground font-medium px-7 py-4 rounded-full shadow-elegant hover:shadow-glow transition-all inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Verified nurses</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24/7 availability</div>
            <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-primary" /> Continuous care</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <img
            src={mockup}
            alt="Nurse Home mobile app preview"
            className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};