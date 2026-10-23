import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";
import { cn } from "@/lib/utils";

export function Logo({
  locale,
  inverse = false,
}: {
  locale: Locale;
  inverse?: boolean;
}) {
  return (
    <Link
      href={`/${locale}`}
      className="group flex shrink-0 items-center gap-3"
      aria-label={locale === "ur" ? "ڈاکٹر رانا شاہد فزیوتھراپسٹ — ہوم" : "Dr Rana Shahid Physiotherapist — Home"}
    >
      <Image
        src={inverse ? "/brand/rana-shahid-mark-inverse.svg" : "/brand/rana-shahid-mark.svg"}
        alt=""
        width={42}
        height={42}
        className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-3"
        aria-hidden="true"
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.2em]",
            inverse ? "text-sage-light" : "text-pine-700"
          )}
        >
          {locale === "ur" ? "کنسلٹنٹ فزیوتھراپسٹ" : "Consultant Physiotherapist"}
        </span>
        <span className={cn("block font-display text-lg font-semibold", inverse ? "text-white" : "text-ink")}>
          {locale === "ur" ? "ڈاکٹر رانا شاہد" : "Dr Rana Shahid"}
        </span>
      </span>
      <LinkPendingIndicator
        label={locale === "ur" ? "ہوم پیج لوڈ ہو رہا ہے" : "Loading home page"}
      />
    </Link>
  );
}
