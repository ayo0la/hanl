import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className,
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden",
        hoverable &&
          "hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
