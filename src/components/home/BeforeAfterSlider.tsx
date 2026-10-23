"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";

export function BeforeAfterSlider({
  title,
  subtitle,
  beforeLabel = "Before",
  afterLabel = "After",
  description,
}: {
  title: string;
  subtitle: string;
  beforeLabel?: string;
  afterLabel?: string;
  description: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    },
    [handleMove],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-mint-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-800 border border-mint-200">
              <Sparkles className="h-3.5 w-3.5 text-mint-500" aria-hidden="true" />
              <span>Real Transformations</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle}
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 mx-auto max-w-4xl">
          <FadeUp delay={0.15}>
            <div
              ref={containerRef}
              tabIndex={0}
              role="slider"
              aria-label="Before and after teeth transformation comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={5}
              aria-valuemax={95}
              onKeyDown={handleKeyDown}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-teal-900/10 shadow-card focus-visible:ring-4 focus-visible:ring-mint-400 cursor-ew-resize touch-none"
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src="/images/after-smile.jpg"
                  alt="After dental cosmetic treatment smile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
                <span className="absolute bottom-5 right-5 z-10 rounded-full bg-teal-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                  {afterLabel}
                </span>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full w-[900px] max-w-none">
                  <Image
                    src="/images/before-smile.jpg"
                    alt="Before dental treatment smile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute bottom-5 left-5 z-10 rounded-full bg-black/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                  {beforeLabel}
                </span>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -left-5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-teal-800 text-white shadow-xl transition-transform active:scale-95">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l-4 3 4 3m8-6l4 3-4 3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted">
              {description} • <span className="font-medium text-teal-800">Drag or swipe slider to compare</span>
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

