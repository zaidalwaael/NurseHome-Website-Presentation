import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#top" className="flex items-center gap-3 group">
        <Logo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" />
        <span className="font-display font-semibold text-foreground tracking-tight">Nurse Home</span>
      </a>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nurse Home. All rights reserved.</p>
    </div>
  </footer>
);