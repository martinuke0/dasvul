export const metadata = {
  title: "DAS Mobil Service — Vulcanizare Mobilă Non-Stop Botoșani | 0741 102 525",
  description:
    "Vulcanizare mobilă 24/7 în Botoșani și împrejurimi. Schimb anvelope, reparații pene, echilibrare, deblocări antifurt. Venim la tine — oriunde, oricând.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="stylesheet" href="/assets/styles.css" />
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/marquee.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
