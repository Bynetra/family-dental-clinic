import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | Dr Rana Shahid Physiotherapist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: "40px 20px",
          backgroundColor: "#F8FBFB",
          color: "#102A33",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect width="48" height="48" rx="12" fill="#0B4655" />
          <path d="M10 30c6-12 22-12 28 0" stroke="#75CBD5" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M14 30h6l3-8 4 14 3-6h6"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 style={{ fontSize: "64px", fontWeight: "700", color: "#0B4655", margin: "20px 0 0" }}>
          404
        </h1>
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#102A33", margin: "10px 0" }}>
          Page not found / صفحہ نہیں ملا
        </h2>
        <p
          style={{
            maxWidth: "460px",
            color: "rgba(29, 41, 36, 0.7)",
            fontSize: "15px",
            lineHeight: "1.6",
            margin: "0 0 28px",
          }}
        >
          The page you are looking for does not exist or may have been moved.
          <br />
          <span dir="rtl" style={{ display: "block", marginTop: "6px" }}>
            جو صفحہ آپ تلاش کر رہے ہیں وہ موجود نہیں۔
          </span>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              backgroundColor: "#0B4655",
              color: "#ffffff",
              padding: "12px 24px",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Home (English)
          </Link>
          <Link
            href="/ur"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              border: "1px solid rgba(11, 70, 85, 0.3)",
              backgroundColor: "#ffffff",
              color: "#0B4655",
              padding: "12px 24px",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            ہوم پیج (اردو)
          </Link>
        </div>
      </body>
    </html>
  );
}

