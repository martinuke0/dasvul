export default function robots() {
  const base = "https://vulcanizarebt.ro";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
