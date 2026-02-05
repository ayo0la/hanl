import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "gold" | "dark";
  className?: string;
}

const variantStyles = {
  accent:
    "bg-accent-500/10 text-accent-500 border border-accent-500/30",
  gold: "bg-gold-500/10 text-gold-500 border border-gold-500/30",
  dark: "bg-hanl-800 text-white border border-hanl-700",
};

export default function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
