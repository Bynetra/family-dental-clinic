import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp({
  label,
  message,
}: {
  label: string;
  message: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#178f47] hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1FA855]/40 active:scale-95"
    >
      <span className="sr-only">{label}</span>
      <MessageCircle className="h-7 w-7 transition-transform duration-200 group-hover:rotate-6" aria-hidden="true" />
    </a>
  );
}
