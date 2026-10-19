import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "start";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-sage-light/90" : "text-pine-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight break-words",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-white/80" : "text-ink/70"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
