"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function SlideIn({
  children,
  from = "start",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 32,
}: {
  children: ReactNode;
  from?: "start" | "end" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(document.documentElement.dir === "rtl");
  }, []);

  let initialX = 0;
  let initialY = 0;

  if (from === "start") {
    initialX = isRtl ? distance : -distance;
  } else if (from === "end") {
    initialX = isRtl ? -distance : distance;
  } else if (from === "top") {
    initialY = -distance;
  } else if (from === "bottom") {
    initialY = distance;
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

