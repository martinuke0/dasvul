import fs from "node:fs";
import path from "node:path";

export default function Gallery() {
  const dir = path.join(process.cwd(), "public/assets/slideshow");
  const imgs = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort();
  const track = [...imgs, ...imgs];

  return (
    <section id="galerie" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">Galerie</div>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Din teren — lucrări recente</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Intervenții reale: turisme, autoutilitare, camioane și utilaje. Pe drum, în parcare sau la sediul clientului.
        </p>
      </div>
      <div className="das-marquee mt-12">
        <div className="das-marquee-track">
          {track.map((f, i) => (
            <img
              key={`${f}-${i}`}
              src={`/assets/slideshow/${f}`}
              alt="Lucrare DAS Mobil Service"
              loading="lazy"
              className="h-64 w-auto flex-none rounded-xl object-cover shadow-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
