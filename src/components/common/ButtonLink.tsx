import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-pine-800 text-white hover:bg-pine-700",
  outline:
    "border border-pine-800/30 bg-white/60 text-pine-800 hover:border-pine-800/60 hover:bg-white",
  light: "bg-white text-pine-800 hover:bg-pine-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
