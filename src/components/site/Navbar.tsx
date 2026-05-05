import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#team", label: "Team" },
];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass shadow-soft rounded-full flex items-center justify-between pl-3 pr-2 py-2">
          <a href="#top" className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="font-display font-semibold text-foreground tracking-tight">Nurse Home</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </motion.header>
  );
};