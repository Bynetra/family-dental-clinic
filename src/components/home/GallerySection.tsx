import { SectionHeading } from "@/components/common/SectionHeading";
import { ImageOff } from "lucide-react";

const galleryItems = [
  { label: "Modern treatment room", wide: true, color: "from-aqua to-seafoam" },
  { label: "Welcoming reception",   wide: false, color: "from-seafoam to-champagne" },
  { label: "Consultation space",    wide: false, color: "from-champagne to-aqua" },
  { label: "Clean, bright interior",wide: true, color: "from-aqua to-teal-100" },
];

export function GallerySection() {
  return (
    <section className="bg-seafoam/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          heading="A welcoming environment"
          sub="Illustrative images — these do not show the actual clinic. Real photography will be added before launch."
        />

        <p className="mx-auto mt-2 max-w-lg text-center text-xs italic text-muted/60">
          ✦ Demo placeholders — not the real clinic
        </p>

        {/* Mosaic grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`overflow-hidden rounded-2xl border border-teal-800/10 shadow-card ${
                item.wide ? "col-span-2" : "col-span-1"
              } ${i === 0 ? "row-span-2 sm:row-span-1" : ""}`}
            >
              <div
                className={`flex h-40 w-full flex-col items-center justify-center gap-2 bg-gradient-to-br ${item.color} sm:h-48`}
              >
                <ImageOff className="h-8 w-8 text-teal-700/50" aria-hidden="true" />
                <p className="px-4 text-center text-xs font-medium text-teal-700/70">
                  {item.label}
                </p>
                <p className="text-xs italic text-teal-600/50">Placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

