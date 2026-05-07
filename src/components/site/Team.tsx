import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const team = ["Abeer Qishawi", "Zaid Alwael", "Ali Alwael", "Mirna Abu Baqi"];

export const Team = () => (
  <section id="team" className="py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeader eyebrow="Our Team" title="The people behind Nurse Home." />
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group text-center rounded-2xl bg-white border border-border/60 py-8 px-4 hover:shadow-elegant hover:border-primary/40 transition-all duration-500"
          >
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div className="mt-4 font-semibold">{name}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Founding team</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);