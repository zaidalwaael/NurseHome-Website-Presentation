import { motion, useScroll, useTransform } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#team", label: "Team" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const padY = useTransform(scrollY, [0, 80], [8, 4]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0.55, 0.85]);
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 4px 24px -16px hsl(191 64% 33% / 0.15)", "0 12px 40px -20px hsl(191 64% 33% / 0.35)"]
  );
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <motion.nav
          style={{
            paddingTop: padY,
            paddingBottom: padY,
            backgroundColor: useTransform(bgOpacity, (v) => `hsl(0 0% 100% / ${v})`),
            boxShadow: shadow,
          }}
          className="rounded-full flex items-center justify-between pl-3 pr-2 backdrop-blur-xl backdrop-saturate-150 border border-white/60"
        >
          <a href="#top" className="flex items-center gap-2 group">
            <Logo className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" />
            <span className="font-display font-semibold text-foreground tracking-tight">Nurse Home</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-full after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="shimmer-overlay relative bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
          </a>
        </motion.nav>
      </div>
    </motion.header>
  );
};