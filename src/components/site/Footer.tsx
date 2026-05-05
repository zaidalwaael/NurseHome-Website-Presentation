import logo from "@/assets/nurse-home-logo.png";

export const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Nurse Home" className="h-8 w-auto" />
      </div>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nurse Home. All rights reserved.</p>
    </div>
  </footer>
);