import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles = {
  primary:
    "bg-accent-500 text-hanl-900 hover:bg-accent-400 font-semibold shadow-lg shadow-accent-500/25",
  secondary: "bg-hanl-700 text-white hover:bg-hanl-600 font-semibold",
  outline:
    "border-2 border-white text-white hover:bg-white/10 font-semibold",
  ghost: "text-accent-500 hover:text-accent-400 hover:underline",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-in-out cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
