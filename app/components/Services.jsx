import Icon from "../icons.jsx";
import { SERVICES } from "../data.js";

const ICON_CLASS = {
  disc3: "lucide lucide-disc3 lucide-disc-3",
  wrench: "lucide lucide-wrench",
  gauge: "lucide lucide-gauge",
  shieldCheck: "lucide lucide-shield-check",
  keyRound: "lucide lucide-key-round",
  drill: "lucide lucide-drill",
};

export default function Services() {
  return (
    <section id="servicii" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Ce facem</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Servicii de vulcanizare mobilă</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Ne deplasăm cu o autoutilitară echipată ca atelier mobil — acoperim toată gama de vehicule și utilaje.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 shadow-card"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
              <Icon name={s.icon} className={`${ICON_CLASS[s.icon]} h-9 w-9 text-primary`} />
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
