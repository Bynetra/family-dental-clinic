import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "start";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pine-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink/70">{sub}</p>}
    </div>
  );
}
