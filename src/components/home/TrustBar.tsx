"use client";

import { ShieldCheck, Cpu, Smile, Users } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const iconMap = {
  cpu: Cpu,
  sterilization: ShieldCheck,
  painless: Smile,
  family: Users,
};

export type TrustItem = {
  title: string;
  description: string;
  iconKey?: keyof typeof iconMap;
};

export function TrustBar({
  items,
}: {
  items?: TrustItem[];
}) {
  const defaultItems: TrustItem[] = items || [
    {
      title: "Modern Equipment",
      description: "Low-radiation 3D imaging & digital scanners",
      iconKey: "cpu",
    },
    {
      title: "Hospital-Grade Sterilization",
      description: "Autoclave sterilized tools for every patient",
      iconKey: "sterilization",
    },
    {
      title: "Gentle, Painless Care",
      description: "Compassionate techniques for anxiety-free visits",
      iconKey: "painless",
    },
    {
      title: "Family Friendly",
      description: "Warm, welcoming care from toddlers to grandparents",
      iconKey: "family",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-teal-900/10 bg-white/95 p-6 sm:p-8 shadow-card backdrop-blur-md">
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {defaultItems.map((item, idx) => {
            const Icon = (item.iconKey && iconMap[item.iconKey]) ? iconMap[item.iconKey] : Cpu;
            return (
              <StaggerItem key={idx}>
                <div className="flex items-start gap-4 p-2 transition-all">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint-50 text-teal-800 border border-mint-200 shadow-xs">
                    <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-700 text-teal-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
