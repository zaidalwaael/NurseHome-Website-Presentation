import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("Please fill in both fields.");
      return;
    }
    const subject = encodeURIComponent(`Nurse Home — message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:nursehomeapp@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email…");
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white shadow-elegant border border-border/50 p-10 md:p-14"
        >
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">We'd love to hear from you. Reach out anytime.</p>
            <a
              href="mailto:nursehomeapp@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              <Mail className="h-4 w-4" />
              nursehomeapp@gmail.com
            </a>
          </div>

          <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-secondary/50 px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-border bg-secondary/50 px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="group shimmer-overlay bg-gradient-primary text-primary-foreground font-medium px-7 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};