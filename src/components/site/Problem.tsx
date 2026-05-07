import { motion } from "framer-motion";
import { SearchX, TimerOff, Activity } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: SearchX, title: "Hard to find trust", text: "Families struggle to find qualified, trustworthy nurses for in-home care." },
  { icon: TimerOff, title: "Delayed care", text: "Long waits and complex coordination delay critical care when it's needed most." },
  { icon: Activity, title: "No follow-up", text: "Lack of continuous monitoring leaves patients without consistent oversight." },
];

export const Problem = () => (
  <section id="problem" className="py-24 md:py-32 relative">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="The Problem" title="Home healthcare is broken." description="Patients and families face the same friction every single day." />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl bg-white border border-border/50 p-8 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all duration-500"
          >
            <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary/15 transition-all duration-500">
              <it.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-rotate-3" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);