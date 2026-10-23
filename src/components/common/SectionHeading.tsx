import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = "center",
  className,
  headingClassName,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-teal-300" : "text-teal-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-700 leading-[1.2] tracking-tight sm:text-4xl",
          light ? "text-white" : "text-ink",
          headingClassName,
        )}
        style={{ fontWeight: 700 }}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-teal-200/80" : "text-muted",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
