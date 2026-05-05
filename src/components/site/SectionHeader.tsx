import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
  >
    {eyebrow && (
      <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
        {eyebrow}
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);