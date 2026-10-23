"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { site } from "@/config/site";
import { FadeUp } from "@/components/motion/FadeUp";

/**
 * Zod validation schema for the appointment form
 */
export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+\d\s\-()]+$/, "Phone number contains invalid characters"),
  service: z.string().min(1, "Please select a dental service"),
  preferredDate: z.string().min(1, "Please choose a preferred visit date"),
  preferredTime: z.string().min(1, "Please choose a preferred time slot"),
  message: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

/**
 * Stub submission handler — ready to connect to an API endpoint or email service
 */
async function submitAppointmentStub(data: AppointmentFormData): Promise<{ success: boolean }> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));
  // In production, wire this to: await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) })
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("Appointment submission stub received:", data);
  }
  return { success: true };
}

export function AppointmentForm({
  locale = "en",
  title,
  subtitle,
  labels,
}: {
  locale?: string;
  title?: string;
  subtitle?: string;
  labels?: {
    name?: string;
    phone?: string;
    service?: string;
    servicePlaceholder?: string;
    date?: string;
    time?: string;
    timePlaceholder?: string;
    message?: string;
    messagePlaceholder?: string;
    submit?: string;
    submitting?: string;
    successTitle?: string;
    successMessage?: string;
    resetButton?: string;
  };
}) {
  const isUrdu = locale === "ur";
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    const res = await submitAppointmentStub(data);
    if (res.success) {
      setSubmittedData(data);
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
    setSubmittedData(null);
  };

  const servicesList = site.services;

  return (
    <section id="book-appointment" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 end-0 h-96 w-96 rounded-full bg-mint-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 start-0 h-96 w-96 rounded-full bg-primary-50/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-800 border border-primary-200">
              <Calendar className="h-3.5 w-3.5 text-primary-700" aria-hidden="true" />
              <span>{isUrdu ? "آسان بکنگ" : "Easy Online Scheduling"}</span>
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-teal-950 sm:text-4xl lg:text-5xl">
              {title || (isUrdu ? "معائنے کا وقت حاصل کریں" : "Request an Appointment")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {subtitle ||
                (isUrdu
                  ? "چند سیکنڈوں میں اپنی ترجیحی تاریخ اور وقت کا انتخاب کریں۔ ہماری ٹیم تصدیق کے لیے رابطہ کرے گی۔"
                  : "Choose your preferred dental service, date, and time. Our friendly reception team will confirm your visit.")}
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-mint-300 bg-mint-50/70 p-8 sm:p-12 text-center shadow-card"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-400 text-white shadow-md">
                  <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-800 text-teal-950 sm:text-3xl">
                  {labels?.successTitle ||
                    (isUrdu ? "درخواست کامیابی سے موصول ہوگئی!" : "Appointment Request Received!")}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-teal-900 sm:text-lg max-w-lg mx-auto">
                  {isUrdu
                    ? `شکریہ ${submittedData?.name}! ہم نے آپ کی بکنگ کی درخواست وصول کرلی ہے۔ ہم جلد ہی آپ کے فون نمبر ${submittedData?.phone} پر تصدیق کے لیے رابطہ کریں گے۔`
                    : `Thank you, ${submittedData?.name}! We have received your request for ${submittedData?.service}. Our reception staff will reach out to ${submittedData?.phone} to confirm your appointment.`}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700"
                  >
                    {labels?.resetButton || (isUrdu ? "ایک اور درخواست بھیجیں" : "Submit Another Request")}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-3xl border border-teal-900/10 bg-white p-6 sm:p-10 shadow-card"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="app-name"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.name || (isUrdu ? "پورا نام" : "Full Name")} *
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-muted">
                        <User className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <input
                        id="app-name"
                        type="text"
                        {...register("name")}
                        placeholder={isUrdu ? "اپنا نام درج کریں" : "e.g. Sarah Jenkins"}
                        className={`block w-full rounded-2xl border bg-ivory/50 py-3 ps-10 pe-4 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 ${
                          errors.name ? "border-red-400 bg-red-50/20" : "border-teal-900/15"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="app-phone"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.phone || (isUrdu ? "فون نمبر" : "Phone Number")} *
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-muted">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <input
                        id="app-phone"
                        type="tel"
                        {...register("phone")}
                        placeholder={isUrdu ? "0300-1234567" : "+1 (555) 012-3456"}
                        className={`block w-full rounded-2xl border bg-ivory/50 py-3 ps-10 pe-4 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 ${
                          errors.phone ? "border-red-400 bg-red-50/20" : "border-teal-900/15"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Dental Service dropdown */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="app-service"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.service || (isUrdu ? "مطلوبہ سروس" : "Service Needed")} *
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-muted">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <select
                        id="app-service"
                        {...register("service")}
                        className={`block w-full appearance-none rounded-2xl border bg-ivory/50 py-3 ps-10 pe-10 text-sm text-ink transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 ${
                          errors.service ? "border-red-400 bg-red-50/20" : "border-teal-900/15"
                        }`}
                      >
                        <option value="">
                          {labels?.servicePlaceholder ||
                            (isUrdu ? "سروس منتخب کریں..." : "Select a treatment or consultation...")}
                        </option>
                        {servicesList.map((svc) => (
                          <option key={svc.slug} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5 text-muted">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.service.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="app-date"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.date || (isUrdu ? "ترجیحی تاریخ" : "Preferred Date")} *
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-muted">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <input
                        id="app-date"
                        type="date"
                        {...register("preferredDate")}
                        className={`block w-full rounded-2xl border bg-ivory/50 py-3 ps-10 pe-4 text-sm text-ink transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 ${
                          errors.preferredDate ? "border-red-400 bg-red-50/20" : "border-teal-900/15"
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.preferredDate.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="app-time"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.time || (isUrdu ? "ترجیحی وقت" : "Preferred Time Slot")} *
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-muted">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <select
                        id="app-time"
                        {...register("preferredTime")}
                        className={`block w-full appearance-none rounded-2xl border bg-ivory/50 py-3 ps-10 pe-10 text-sm text-ink transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 ${
                          errors.preferredTime ? "border-red-400 bg-red-50/20" : "border-teal-900/15"
                        }`}
                      >
                        <option value="">
                          {labels?.timePlaceholder || (isUrdu ? "وقت منتخب کریں..." : "Select time slot...")}
                        </option>
                        <option value="Morning (8:00 AM – 12:00 PM)">
                          {isUrdu ? "صبح (8:00 AM – 12:00 PM)" : "Morning (8:00 AM – 12:00 PM)"}
                        </option>
                        <option value="Afternoon (12:00 PM – 4:00 PM)">
                          {isUrdu ? "دوپہر (12:00 PM – 4:00 PM)" : "Afternoon (12:00 PM – 4:00 PM)"}
                        </option>
                        <option value="Evening (4:00 PM – 6:00 PM)">
                          {isUrdu ? "شام (4:00 PM – 6:00 PM)" : "Evening (4:00 PM – 6:00 PM)"}
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5 text-muted">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.preferredTime && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.preferredTime.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="app-message"
                      className="block text-sm font-semibold text-teal-950"
                    >
                      {labels?.message ||
                        (isUrdu ? "اضافی تفصیلات یا علامات (اختیاری)" : "Additional notes or concerns (Optional)")}
                    </label>
                    <div className="relative mt-2">
                      <div className="pointer-events-none absolute top-3.5 start-3.5 text-muted">
                        <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <textarea
                        id="app-message"
                        rows={3}
                        {...register("message")}
                        placeholder={
                          labels?.messagePlaceholder ||
                          (isUrdu
                            ? "اگر دانت میں درد ہے یا کوئی خاص ضرورت ہے تو یہاں لکھیں..."
                            : "Tell us about any specific dental pain, previous dental anxiety, or questions...")
                        }
                        className="block w-full rounded-2xl border border-teal-900/15 bg-ivory/50 py-3 ps-10 pe-4 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-teal-800 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg disabled:opacity-70 focus-visible:ring-4 focus-visible:ring-mint-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        <span>{labels?.submitting || (isUrdu ? "درخواست بھیجی جا رہی ہے..." : "Scheduling your visit...")}</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" aria-hidden="true" />
                        <span>{labels?.submit || (isUrdu ? "وقت بک کریں" : "Confirm Appointment Request")}</span>
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted">
                    {isUrdu
                      ? "🔒 آپ کی ذاتی معلومات محفوظ اور نجی رکھی جاتی ہیں۔"
                      : "🔒 Your health information is kept strictly private and secure."}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
