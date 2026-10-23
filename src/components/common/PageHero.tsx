import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  index: string;
}) {
  return (
    <section className="hairline-grid relative overflow-hidden bg-pine-950 text-white">
      <div aria-hidden="true" className="absolute -end-32 -top-40 h-96 w-96 rounded-full bg-pine-400/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sage">{eyebrow}</p>
          <h1 className="text-balance mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{description}</p>
        </div>
        <div className="flex items-center gap-4 lg:flex-col lg:items-end">
          <Image src="/brand/rana-shahid-mark-inverse.svg" alt="" width={52} height={52} className="h-12 w-12" aria-hidden="true" />
          <span className="font-display text-2xl text-white/25" aria-hidden="true">/{index}</span>
        </div>
      </div>
    </section>
  );
}
