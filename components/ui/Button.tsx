import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-[10px] font-label text-[13px] tracking-[2px] uppercase px-8 py-4 border-2 cursor-pointer transition-colors duration-250",
        variant === "primary" && "bg-ink text-white border-ink hover:bg-accent hover:border-accent",
        variant === "outline" && "bg-transparent text-ink border-ink hover:bg-ink hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
