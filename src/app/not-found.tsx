import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>404 - Page Not Found | Family Dental Clinic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          padding: "40px 20px",
          backgroundColor: "#FAF8F3",
          color: "#203236",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var clean=function(){var el=document.documentElement;if(!el)return;for(var i=el.attributes.length-1;i>=0;i--){var n=el.attributes[i].name;if(n.indexOf("katalon")!==-1||n.indexOf("data-gr-")===0||n.indexOf("data-lt-")===0||n.indexOf("cz-shortcut-listen")!==-1){el.removeAttribute(n);}}};clean();if(typeof MutationObserver!=="undefined"){var o=new MutationObserver(clean);o.observe(document.documentElement,{attributes:true});window.addEventListener("DOMContentLoaded",function(){clean();setTimeout(function(){o.disconnect();},2000);});}}catch(e){}})();`,
          }}
          suppressHydrationWarning
        />
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

        <h1 style={{ fontSize: "64px", fontWeight: "800", color: "#123E43", margin: "20px 0 0" }}>
          404
        </h1>
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#203236", margin: "10px 0" }}>
          Page not found
        </h2>
        <p
          style={{
            maxWidth: "460px",
            color: "#5A7074",
            fontSize: "15px",
            lineHeight: "1.6",
            margin: "0 0 28px",
          }}
        >
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/en"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            backgroundColor: "#123E43",
            color: "#ffffff",
            padding: "12px 28px",
            fontWeight: "600",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Return to Home
        </Link>
      </body>
    </html>
  );
}
