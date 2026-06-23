const SITE_URL = "https://vulcanizarebt.ro";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vulcanizare Mobilă Botoșani 24/7 — DAS Mobil Service · 0741 102 525",
  description:
    "Vulcanizare mobilă non-stop în Botoșani și împrejurimi. Schimb anvelope, reparații pene, echilibrare, deblocări antifurt — la domiciliu, în parcare sau pe traseu. Sună 0741 102 525.",
  keywords: [
    // primary intent
    "vulcanizare mobilă Botoșani",
    "vulcanizare non-stop Botoșani",
    "vulcanizare 24/7 Botoșani",
    "vulcanizare la domiciliu Botoșani",
    "vulcanizare pe traseu Botoșani",
    "vulcanizare urgentă Botoșani",
    "asistență rutieră Botoșani",
    // services
    "schimb anvelope la domiciliu",
    "schimb cauciucuri Botoșani",
    "reparații pene Botoșani",
    "pană cauciuc Botoșani",
    "echilibrare roți pe loc",
    "deblocare antifurt jantă",
    "extragere prezoane rupte",
    "montat demontat roți Botoșani",
    // vehicle types
    "vulcanizare camioane Botoșani",
    "vulcanizare TIR Botoșani",
    "vulcanizare utilaje agricole",
    "anvelope camion Botoșani",
    // localities & roads
    "vulcanizare Dorohoi",
    "vulcanizare Săveni",
    "vulcanizare Flămânzi",
    "vulcanizare Bucecea",
    "vulcanizare Ștefănești",
    "vulcanizare DN29",
    "vulcanizare DN24C",
    "vulcanizare E58",
    // brand
    "DAS Mobil Service",
    "vulcanizarebt.ro",
    "vulcanizarebotosani.ro",
    "vulcanizare mobila",
    "vulcanizare mobila das",
    "vulcanizare nonstop",
    "pana botosani",
    "pana nonstop"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "DAS Mobil Service",
    title: "Vulcanizare Mobilă Botoșani 24/7 — DAS Mobil Service",
    description:
      "Vulcanizare mobilă non-stop în Botoșani. Venim la tine — la domiciliu, în parcare sau pe traseu. Sună 0741 102 525.",
    images: [{ url: "/assets/hero-night-DjnTfWI8.jpg", width: 1920, height: 1280, alt: "DAS Mobil Service — autoutilitară intervenind noaptea" }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "DAS Mobil Service — Vulcanizare Mobilă Botoșani",
  description:
    "Vulcanizare mobilă non-stop în Botoșani: schimb anvelope, reparații pene, echilibrare roți, deblocări antifurt.",
  url: SITE_URL,
  telephone: "+40741102525",
  email: "dasmobilservice@yahoo.com",
  image: `${SITE_URL}/assets/hero-night-DjnTfWI8.jpg`,
  logo: `${SITE_URL}/assets/das-logo-transparent.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Botoșani",
    addressRegion: "BT",
    addressCountry: "RO",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Județul Botoșani" },
    "Botoșani", "Dorohoi", "Săveni", "Flămânzi", "Bucecea", "Ștefănești",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/vulcanizaremobilabt",
    "https://www.tiktok.com/@vulcanizaremobilabt",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/marquee.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
