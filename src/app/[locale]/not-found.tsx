import Link from "next/link";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-6 py-16 text-center">
      <svg width="72" height="72" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect width="48" height="48" rx="12" fill="#0B4655" />
        <path d="M10 30c6-12 22-12 28 0" stroke="#75CBD5" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 30h6l3-8 4 14 3-6h6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="mt-6 font-display text-7xl font-semibold text-pine-800">404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
        Page not found / صفحہ نہیں ملا
      </h1>
      <p className="mt-3 max-w-md text-ink/60">
        The page you are looking for does not exist or may have been moved. /
        جو صفحہ آپ تلاش کر رہے ہیں وہ موجود نہیں۔
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-pine-700"
        >
          Home (English)
          <LinkPendingIndicator label="Loading English home page" />
        </Link>
        <Link
          href="/ur"
          className="inline-flex items-center gap-2 rounded-full border border-pine-800/30 bg-white px-6 py-3 font-semibold text-pine-800 transition-colors hover:bg-pine-50"
        >
          ہوم پیج (اردو)
          <LinkPendingIndicator label="اردو ہوم پیج لوڈ ہو رہا ہے" />
        </Link>
      </div>
    </div>
  );
}
