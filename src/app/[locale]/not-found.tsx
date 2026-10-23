import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-ivory px-6 py-20 text-center">
      {/* Dental icon motif */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 60 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 10 C12 10 6 16 6 24 C6 32 8 42 13 51 C15.5 57 19 62 21.5 62 C24 62 25 59.5 26 55.5 C27 51.5 28.5 49.5 30 49.5 C31.5 49.5 33 51.5 34 55.5 C35 59.5 36 62 38.5 62 C41 62 44.5 57 47 51 C52 42 54 32 54 24 C54 16 48 10 40 10 C36 10 33.5 12 30 12 C26.5 12 24 10 20 10Z"
          fill="#123E43"
        />
        <path
          d="M18 29 Q30 39 42 29"
          stroke="#EEF7F4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <p className="mt-6 font-display text-7xl font-700 text-teal-800" style={{ fontWeight: 700 }}>
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-8">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
