# Mian Channu Physio Rehab — Website

A bilingual (English / اردو) physiotherapy & rehabilitation website for
**Mian Channu Physio Rehab**, Mian Channu, Punjab, Pakistan.
Built with Next.js (App Router), TypeScript, Tailwind CSS and Lucide icons.

**Primary conversion goal:** WhatsApp appointment inquiries.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /en)
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Deploy on **Vercel** (zero-config for Next.js) or any Node-compatible host.

## Configuration before launch ⚠️

All business details live in **one file**: `src/config/site.ts`

| Setting             | What to do                                                        |
| ------------------- | ----------------------------------------------------------------- |
| `url`               | Replace with the final production domain (used in canonical/OG/sitemap). |
| `whatsappNumber`    | **Digits only**, international format, no `+`/spaces (e.g. `923001234567`). Powers every WhatsApp button. |
| `phoneDisplay`      | Same number, nicely formatted for display.                        |
| `address`           | Verified street address (shown in footer/contact).                |
| `googleMapsUrl`     | Google Maps share link; leave empty until the location is confirmed. |
| `sessionLength`     | Adjust to match clinic policy.                                    |
| `openingHours`      | Replace with verified timings.                                    |

Additionally:

1. **Verified qualifications** for Ibrahim — add them to the profile section
   (`src/lib/i18n/translations.ts` → `physio.fieldsNote` / about page) once confirmed.
   Never publish unverified credentials, registration numbers or experience claims.
2. **Structured data** (`src/components/common/JsonLd.tsx`) intentionally contains
   only verified fields. Add `address`, `geo`, `openingHoursSpecification` after confirmation.
3. Replace the original placeholder illustrations in `public/images/` with real,
   licensed clinic photography (keep the same file names or update the components).
4. Confirm the **service list** (`translations.ts` → `services.items`) — items are
   presented as "intended scope" until verified.

## Editing content

All copy (both languages) is centralized in **`src/lib/i18n/translations.ts`**.
English and Urdu share one typed shape — add a key to both objects.

- English routes: `/en`, `/en/about`, `/en/services`, `/en/conditions`, `/en/contact`
- Urdu routes: `/ur`, `/ur/about`, `/ur/services`, `/ur/conditions`, `/ur/contact`
- `/` redirects to `/en`. Every page sets `lang` + `dir` and uses the
  Noto Nastaliq Urdu font with RTL-aware Tailwind logical utilities.

## WhatsApp integration

- Single source of truth: `site.whatsappNumber` → all links are
  `https://wa.me/<number>?text=<url-encoded message>`.
- Pre-filled messages adapt to the active language and include the service
  name for service-specific buttons (`translations.ts` → `whatsapp`).
- The contact form has **no backend**: it validates and hands off to WhatsApp.
  It never claims to have "sent" anything.

## Structure

```
src/
  app/
    [locale]/            localized routes (layout sets lang/dir, header/footer/floating WA)
      page.tsx           home (hero, about, services, conditions, why, how, profile, FAQ, CTA)
      about/  services/  conditions/  contact/
    sitemap.ts robots.ts icon.svg not-found.tsx
  components/  layout/ (Header, Footer, MobileMenu) · home/ · common/
  config/site.ts         ← business details (edit before launch)
  lib/i18n/              config.ts · translations.ts · getDictionary.ts
  lib/seo.ts pageMetadata helper
public/images/           original SVG artwork (replace with photography)
```

## Accessibility, SEO & performance notes

- Semantic landmarks, skip link, visible focus rings, labelled form fields,
  `aria-expanded` accordion, keyboard-friendly mobile menu.
- Reduced-motion support (animations disabled via `prefers-reduced-motion`).
- Per-page metadata, canonical + `hreflang` alternates, Open Graph, sitemap, robots.
- Server Components by default; client JS only for the menu, FAQ and form.
- No tracking, no backend, no secrets. Lighthouse scores should be verified
  after deployment on the production domain.

## Future expansion (intentionally not built yet)

Online scheduling/calendar, admin dashboard, inquiry management, blog,
per-service detail pages, analytics, reviews (only authentic ones),
additional languages. The structure above is ready for all of these.

## License / ownership

© Mian Channu Physio Rehab. Code provided for the clinic's use.
