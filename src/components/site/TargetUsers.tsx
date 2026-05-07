import { motion } from "framer-motion";
import { UserRound, HeartPulse, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const users = [
  { icon: UserRound, title: "Elderly patients", text: "Compassionate, attentive care in the comfort of home." },
  { icon: HeartPulse, title: "Post-surgery care", text: "Skilled recovery support tailored to each patient." },
  { icon: Users, title: "Families", text: "Peace of mind for those caring for the ones they love." },
];

export const TargetUsers = () => (
  <section className="py-24 md:py-32 bg-gradient-soft">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="Who it's for" title="Care, designed for everyone." />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {users.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group text-center rounded-3xl bg-white p-10 shadow-card border border-border/50 transition-all duration-500 hover:shadow-elegant hover:border-primary/30"
          >
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <u.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{u.title}</h3>
            <p className="mt-2 text-muted-foreground">{u.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);