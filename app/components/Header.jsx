import Icon from "../icons.jsx";
import { BRAND, CONTACT, NAV } from "../data.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src="/assets/das-logo.png" alt="DAS Mobil Service" className="h-11 w-11 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">{BRAND.name}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{BRAND.tagline}</div>
          </div>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <a
          href={CONTACT.phoneHref}
          className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-amber transition hover:bg-primary-glow sm:inline-flex"
        >
          <Icon name="phone" className="lucide lucide-phone h-4 w-4" /> {CONTACT.phone}
        </a>
      </div>
    </header>
  );
}
