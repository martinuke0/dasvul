export default function sitemap() {
  const base = "https://vulcanizarebt.ro";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#servicii`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#galerie`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#recenzii`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/#de-ce-noi`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#zona`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
