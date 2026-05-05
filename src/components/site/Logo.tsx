import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  title?: string;
}

export const Logo = ({ className, title = "Nurse Home" }: LogoProps) => (
  <svg
    viewBox="0 0 64 56"
    className={cn("text-[#1a6b7a]", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth={4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label={title}
    role="img"
  >
    <title>{title}</title>
    {/* Chimney */}
    <path d="M14 22 V8 H20 V16" />
    {/* Roof */}
    <path d="M4 28 L32 6 L60 28" />
    {/* Medical cross */}
    <path d="M32 34 V48 M25 41 H39" />
  </svg>
);