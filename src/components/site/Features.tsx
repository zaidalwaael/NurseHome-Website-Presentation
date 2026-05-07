import { motion } from "framer-motion";
import { BadgeCheck, Clock3, MousePointerClick, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: BadgeCheck, title: "Verified Nurses", text: "Every professional is licensed, background-checked, and rated." },
  { icon: Clock3, title: "24/7 Availability", text: "Care that responds whenever you need it — day or night." },
  { icon: MousePointerClick, title: "Easy Booking", text: "Book the right nurse in just a few taps." },
  { icon: Lock, title: "Secure Experience", text: "End-to-end protection for your data and your care." },
];

export const Features = () => (
  <section id="features" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="Features" title="Built around what matters." />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl bg-white border border-border/60 p-7 hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-elegant"
          >
            <div className="h-11 w-11 rounded-xl bg-accent flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary group-hover:rotate-6">
              <f.icon className="h-5 w-5 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);