"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

export function FloatingWhatsApp({
  locale = "en",
  label = "Chat with us",
}: {
  locale?: string;
  label?: string;
}) {
  const phone = site.whatsappNumber || "15552345678";
  const defaultText =
    locale === "ur"
      ? "السلام علیکم! میں فیملی ڈینٹل کلینک میں دانتوں کے معائنے کے لیے وقت لینا چاہتا ہوں۔"
      : "Hello! I would like to inquire about booking a dental appointment at Family Dental Clinic.";

  const href = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(defaultText)}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 end-6 z-40">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
        className="group relative flex h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-4 text-white shadow-lg transition-shadow hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
      >
        <MessageCircle className="h-6 w-6 fill-current text-white" aria-hidden="true" />
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 group-hover:max-w-xs group-hover:inline-block sm:inline-block sm:max-w-xs">
          {label}
        </span>

        {/* Pulse ring */}
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/30 duration-1000"
          aria-hidden="true"
        />
      </motion.a>
    </aside>
  );
}

