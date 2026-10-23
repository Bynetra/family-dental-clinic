# Dr Rana Shahid Physiotherapist — Website

A responsive bilingual (English / اردو) website for **Dr Rana Shahid**,
Consultant Physiotherapist at Shifa Hospital, Mian Channu. Built with Next.js
App Router, TypeScript, Tailwind CSS, and Lucide icons.

The primary conversion flow is a structured WhatsApp appointment request. The
site never presents opening WhatsApp as an appointment confirmation.

## Local development

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

The root route redirects to `/en`. English and Urdu routes share the same
components and typed content structure.

## Central business configuration

Public business data lives in `src/config/site.ts`:

- Doctor and clinic names
- Qualifications
- Phone and WhatsApp number
- Address and Google Maps directions
- Opening hours
- Google review count
- Canonical site origin

Set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin before launch.
The fallback is intentionally `http://localhost:3000`; no unconfirmed public
domain is embedded in metadata, sitemap, robots, or structured data.

## Content and localization

All English and Urdu copy is in `src/lib/i18n/translations.ts`. The locale
layout sets `lang`, text direction, and the Urdu font. The language switcher
replaces only the locale segment, preserving the current route.

Routes:

- `/en` and `/ur`
- `/en/about` and `/ur/about`
- `/en/services` and `/ur/services`
- `/en/conditions` and `/ur/conditions`
- `/en/contact` and `/ur/contact`

## WhatsApp appointment flow

The contact form validates the visitor's name and phone number and lets them
add a preferred date/time and concern. Submission creates a localized,
URL-encoded WhatsApp message for `site.whatsappNumber`. No form data is stored
by this website.

## Owner confirmation before launch

The current values follow the supplied Google Business profile and Urdu
posters. Confirm these items with the owner before publishing:

1. Final production domain (`NEXT_PUBLIC_SITE_URL`).
2. Exact styling/expansion of the `MPPTA` qualification.
3. Whether `Shifa Hospital` is the preferred public clinic name.
4. WhatsApp availability on `0315 2315145`.
5. Daily hours: the site uses the supplied Google profile hours of 9 AM–4 PM.
6. Exact service scope, especially pediatric and stroke rehabilitation.
7. A licensed professional portrait, if the representative illustration is to
   be replaced.

## Accessibility, SEO, and performance

- Semantic page structure, skip link, keyboard-accessible navigation and FAQ
- Visible focus states and reduced-motion support
- Responsive LTR and RTL layouts
- Localized titles, descriptions, canonical and `hreflang` URLs
- MedicalClinic structured data using supplied details only
- Optimized local SVG artwork and no unnecessary client-side JavaScript

No deployment or publishing configuration is included in this local change.
