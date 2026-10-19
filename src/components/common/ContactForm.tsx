"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * The inquiry form intentionally has NO backend. On submit it validates,
 * builds a WhatsApp message in the active language, and hands off to
 * WhatsApp — never showing a fake "sent" confirmation.
 */
export function ContactForm({
  dict,
  locale,
}: {
  dict: Dictionary["contactPage"];
  locale: Locale;
}) {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone) {
      setError(dict.formError);
      return;
    }
    setError("");

    const text =
      locale === "ur"
        ? [
            `السلام علیکم، میرا نام ${name} ہے۔`,
            `میرا فون نمبر: ${phone}۔`,
            message ? `مسئلہ / بیماری: ${message}` : "",
            "میں فزیوتھریپی کی اپائنٹمنٹ کے بارے میں معلومات چاہتا/چاہتی ہوں۔",
          ]
            .filter(Boolean)
            .join("\n")
        : [
            `Hello Dr. Farhan (${site.name}), my name is ${name}.`,
            `My phone number is ${phone}.`,
            message ? `My condition / concern: ${message}` : "",
            "I would like to inquire about booking a physiotherapy appointment.",
          ]
            .filter(Boolean)
            .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-pine-900/20 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition-colors focus:border-pine-700 focus:outline-none focus:ring-2 focus:ring-pine-700/20 focus-visible:ring-2 focus-visible:ring-pine-700 focus-visible:ring-offset-1";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-pine-900/10 bg-white p-7 sm:p-9 shadow-card"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1FA855]/10 text-[#1FA855]">
          <Send className="h-4 w-4" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink">
          {dict.formTitle}
        </h2>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-sm font-semibold text-ink">
            {dict.formName}
            <span className="text-red-600 ms-1" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder={locale === "ur" ? "اپنا نام درج کریں" : "e.g. Muhammad Ali"}
            autoComplete="name"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "cf-error" : undefined}
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-sm font-semibold text-ink">
            {dict.formPhone}
            <span className="text-red-600 ms-1" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            className={`${inputClass} text-start`}
            placeholder="0336-6945952"
            autoComplete="tel"
            dir="ltr"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "cf-error" : undefined}
          />
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-2 block text-sm font-semibold text-ink">
            {dict.formMessage}
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder={dict.messageLabel}
          />
        </div>
      </div>

      {error && (
        <p
          id="cf-error"
          role="alert"
          className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1FA855] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#178f47] hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA855] focus-visible:ring-offset-2 active:scale-[0.99]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>{dict.formSubmit}</span>
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink/55">
        {dict.formNote}
      </p>
    </form>
  );
}
