import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, Stethoscope } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: Sparkles, title: "Verified network", text: "Every nurse on Nurse Home is licensed, vetted, and continuously rated." },
  { icon: CalendarCheck, title: "Effortless booking", text: "Match with the right nurse in seconds and schedule care that fits your life." },
  { icon: Stethoscope, title: "Continuous follow-up", text: "Stay in the loop with progress updates, notes, and ongoing care plans." },
];

export const Solution = () => (
  <section id="solution" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] bg-primary/10 blur-3xl rounded-full" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="Our Solution" title="One platform. Complete care." description="Nurse Home brings trust, speed, and consistency to home healthcare." />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-b from-primary/30 to-transparent"
          >
            <div className="rounded-3xl bg-white p-8 h-full shadow-card">
              <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft">
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);