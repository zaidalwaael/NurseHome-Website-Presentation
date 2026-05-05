import { motion } from "framer-motion";
import { ClipboardList, UserCheck, HomeIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: ClipboardList, title: "Request a service", text: "Tell us what care you need in under a minute." },
  { icon: UserCheck, title: "Get matched with a nurse", text: "We pair you with the most suitable certified nurse." },
  { icon: HomeIcon, title: "Receive care at home", text: "Quality care arrives at your door — when you need it." },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 md:py-32 relative">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="How it works" title="Care in three steps." />
      <div className="mt-16 relative">
        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-24 w-24 rounded-full bg-white border border-border flex items-center justify-center shadow-card">
                <s.icon className="h-9 w-9 text-primary" />
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);