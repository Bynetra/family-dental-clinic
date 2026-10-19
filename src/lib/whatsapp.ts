import { site } from "@/config/site";

/**
 * Builds a correctly-encoded https://wa.me/ link using the single
 * configured clinic number (see src/config/site.ts).
 */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
