import Icon from "../icons.jsx";
import { WHY_US } from "../data.js";

export default function WhyUs() {
  return (
    <section id="de-ce-noi" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/tools-uLq8OZCK.jpg"
              alt="Scule de vulcanizare"
              width="1280"
              height="960"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-card"
            />
            <img
              src="/assets/balance-DchFTsax.jpg"
              alt="Echilibrare roată"
              width="1280"
              height="960"
              loading="lazy"
              className="mt-10 aspect-[4/5] w-full rounded-xl object-cover shadow-card"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-primary/40 bg-background px-6 py-4 shadow-amber md:block">
            <div className="font-display text-3xl text-primary">Non-Stop</div>
            <div className="text-xs text-muted-foreground">24 / 7 · 365 zile</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary">{WHY_US.eyebrow}</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{WHY_US.title}</h2>
          <p className="mt-5 text-muted-foreground">{WHY_US.description}</p>
          <ul className="mt-8 space-y-4">
            {WHY_US.bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon name="circleCheck" className="lucide lucide-circle-check h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
