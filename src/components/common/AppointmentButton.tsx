"use client";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface Props {
  label?: string;
  className?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  scrollToForm?: boolean;
}

/** Appointment CTA — scrolls to form in demo mode, links to real contact when live. */
export function AppointmentButton({
  label = "Request an Appointment",
  className,
  variant = "primary",
  size = "md",
  scrollToForm = true,
}: Props) {
  function handleClick() {
    if (scrollToForm) {
      document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
    } else if (site.phone) {
      window.location.href = `tel:${site.phone}`;
    } else {
      alert(
        "Demo mode — real contact details will be added before launch.\n\nPlease scroll to the appointment form to request a visit.",
      );
    }
  }

  const base =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600 cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[36px]",
    md: "px-6 py-3 text-sm min-h-[44px]",
    lg: "px-7 py-3.5 text-base min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-teal-800 text-white shadow-sm hover:bg-teal-700",
    outline:
      "border border-teal-800/30 bg-white text-teal-800 hover:bg-teal-50",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
    >
      <Calendar className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
