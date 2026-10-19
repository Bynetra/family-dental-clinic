import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-pine-800 text-white hover:bg-pine-700",
  whatsapp: "bg-[#1FA855] text-white hover:bg-[#178f47]",
  outline: "border border-pine-800/30 bg-white/60 text-pine-800 hover:border-pine-800/60 hover:bg-white",
  light: "bg-white text-pine-800 hover:bg-pine-50",
};

export function WhatsAppButton({
  label,
  message,
  variant = "primary",
  className,
}: {
  label: string;
  message: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
