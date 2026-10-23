import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "teal";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal-800 text-white shadow-sm hover:bg-teal-700 focus-visible:ring-teal-600",
  teal:
    "bg-teal-600 text-white shadow-sm hover:bg-teal-700 focus-visible:ring-teal-500",
  outline:
    "border border-teal-800/30 bg-white text-teal-800 hover:bg-teal-50 hover:border-teal-800/50 focus-visible:ring-teal-600",
  ghost:
    "text-teal-800 hover:bg-teal-50 focus-visible:ring-teal-600",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-5 py-2.5 text-sm min-h-[44px]",
  lg: "px-7 py-3.5 text-base min-h-[52px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  size = "md",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-offset-2";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </Link>
  );
}
