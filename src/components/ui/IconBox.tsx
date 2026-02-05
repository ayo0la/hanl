import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function IconBox({
  icon: Icon,
  title,
  description,
  className,
}: IconBoxProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 mb-4">
        <Icon className="h-6 w-6 text-accent-500" />
      </div>
      <h3 className="text-lg font-bold text-hanl-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
