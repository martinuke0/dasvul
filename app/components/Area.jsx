import Icon from "../icons.jsx";
import { AREA } from "../data.js";

export default function Area() {
  return (
    <section id="zona" className="relative border-t border-border py-24">
      <img
        src="/assets/truck-BMo-wdGU.jpg"
        alt=""
        width="1280"
        height="960"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <Icon name="truck" className="lucide lucide-truck mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 font-display text-4xl md:text-5xl">{AREA.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{AREA.description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {AREA.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
