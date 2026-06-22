import fs from "node:fs";
import path from "node:path";

export default function Page() {
  let html = fs.readFileSync(path.join(process.cwd(), "app/content.html"), "utf8");

  const slidesDir = path.join(process.cwd(), "public/assets/slideshow");
  const imgs = fs
    .readdirSync(slidesDir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort();

  // duplicate track so the -50% translate loops seamlessly
  const track = [...imgs, ...imgs]
    .map(
      (f) =>
        `<img src="/assets/slideshow/${f}" alt="Lucrare DAS Mobil Service" loading="lazy" class="h-64 w-auto flex-none rounded-xl object-cover shadow-card">`
    )
    .join("");

  const slideshow = `
<section id="galerie" class="border-t border-border py-24">
  <div class="mx-auto max-w-7xl px-4">
    <div class="text-xs uppercase tracking-[0.25em] text-primary">Galerie</div>
    <h2 class="mt-2 font-display text-4xl md:text-5xl">Din teren — lucrări recente</h2>
    <p class="mt-3 max-w-2xl text-muted-foreground">Intervenții reale: turisme, autoutilitare, camioane și utilaje. Pe drum, în parcare sau la sediul clientului.</p>
  </div>
  <div class="das-marquee mt-12">
    <div class="das-marquee-track">${track}</div>
  </div>
</section>`;

  html = html.replace("__SLIDESHOW__", slideshow);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
