import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import m1 from "@/assets/app-mockup-1.png";
import m2 from "@/assets/app-mockup-2.png";
import m3 from "@/assets/app-mockup-3.png";

const phones = [
  { src: m1, label: "Service selection", rotate: "-6deg", y: 20 },
  { src: m2, label: "Booking", rotate: "0deg", y: 0 },
  { src: m3, label: "Reviews", rotate: "6deg", y: 20 },
];

export const ProductPreview = () => (
  <section className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-gradient-primary opacity-10 blur-3xl" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader eyebrow="Product Preview" title="Designed for clarity and care." description="A glimpse at the experience patients and families enjoy every day." />
      <div className="mt-20 flex justify-center items-end gap-4 md:gap-10">
        {phones.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            whileInView={{ opacity: 1, y: p.y, rotate: parseFloat(p.rotate) }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: p.y - 12, rotate: 0, transition: { duration: 0.4 } }}
            className="relative w-1/3 max-w-[220px] md:max-w-[260px]"
          >
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            <img src={p.src} alt={p.label} className="relative drop-shadow-2xl" loading="lazy" />
            <div className="text-center mt-4 text-sm font-medium text-muted-foreground">{p.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);