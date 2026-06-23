import Icon from "../icons.jsx";
import { CONTACT, HERO } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src="/assets/hero-night-DjnTfWI8.jpg"
        alt="Autoutilitară DAS Mobil Service intervenind noaptea pe drum"
        width="1920"
        height="1280"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-[1.2fr_1fr] md:py-36">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {HERO.badge}
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            {HERO.titlePre} <br />
            <span className="text-gradient-amber">{HERO.titlePost}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{HERO.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.phoneHref}
              className="group inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-amber transition hover:bg-primary-glow"
            >
              <Icon name="phone" className="lucide lucide-phone h-5 w-5" />
              Sună acum · {CONTACT.phone}
            </a>
            <a
              href="#servicii"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              Vezi serviciile <Icon name="arrowRight" className="lucide lucide-arrow-right h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            {HERO.stats.map((s) => (
              <div key={s.label}>
                {s.image ? (
                  <img src={s.image} alt={s.label} className="h-10 w-10 rounded border border-primary/40 bg-primary/15 p-0.5 object-contain" />
                ) : (
                  <div className="font-display text-3xl text-primary">{s.value}</div>
                )}
                <div className="mt-1 text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
          <div className="relative rounded-2xl border border-border bg-card/80 p-6 backdrop-blur shadow-card">
            <div className="flex items-center gap-3">
              <img src="/assets/das-logo.png" alt="" className="h-14 w-14 rounded-lg" />
              <div>
                <div className="font-display text-xl">{HERO.cardTitle}</div>
                <div className="text-xs text-muted-foreground">{HERO.cardSubtitle}</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {HERO.cardBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Icon name="circleCheck" className="lucide lucide-circle-check mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary-glow"
            >
              <Icon name="phone" className="lucide lucide-phone h-4 w-4" /> Cere intervenție
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
