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
    const preferredTime = String(data.get("preferredTime") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone) {
      setError(dict.formError);
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setError(dict.formPhoneError);
      return;
    }
    setError("");

    const text =
      locale === "ur"
        ? [
            `السلام علیکم، میرا نام ${name} ہے۔`,
            `میرا فون نمبر: ${phone}۔`,
            preferredTime ? `میرا پسندیدہ وقت: ${preferredTime}۔` : "",
            message ? `مسئلہ / بیماری: ${message}` : "",
            "میں فزیوتھراپی اپائنٹمنٹ کی درخواست کرنا چاہتا/چاہتی ہوں۔ براہ کرم دستیابی کی تصدیق کر دیں۔",
          ]
            .filter(Boolean)
            .join("\n")
        : [
            `Hello ${site.physiotherapist}, my name is ${name}.`,
            `My phone number is ${phone}.`,
            preferredTime ? `My preferred appointment time is: ${preferredTime}.` : "",
            message ? `My condition / concern: ${message}` : "",
            "I would like to request a physiotherapy appointment. Please confirm availability.",
          ]
            .filter(Boolean)
            .join("\n");

    const popup = window.open(whatsappUrl(text), "_blank");
    if (!popup) {
      setError(dict.popupError);
      return;
    }
    popup.opener = null;
  }

  const inputClass =
    "w-full rounded-xl border border-pine-900/15 bg-cream/60 px-4 py-3.5 text-base text-ink placeholder:text-ink/35 transition-colors hover:border-pine-900/25 focus:border-pine-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-600/15 focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-1";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-4xl border border-pine-900/10 bg-white p-7 shadow-card sm:p-10 lg:p-12"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-100 text-pine-800">
          <Send className="h-4 w-4" aria-hidden="true" />
        </span>
        <h2 className="font-display text-3xl font-semibold text-ink">
          {dict.formTitle}
        </h2>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
            placeholder={site.phoneDisplay}
            autoComplete="tel"
            dir="ltr"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "cf-error" : undefined}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-preferred-time" className="mb-2 block text-sm font-semibold text-ink">
            {dict.formPreferredTime}
          </label>
          <input
            id="cf-preferred-time"
            name="preferredTime"
            type="datetime-local"
            className={`${inputClass} text-start`}
            dir="ltr"
          />
        </div>

        <div className="sm:col-span-2">
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
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1FA855] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#178f47] hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA855] focus-visible:ring-offset-2 active:scale-[0.99]"
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
