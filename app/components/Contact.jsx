import Icon, { TikTokIcon } from "../icons.jsx";
import { CONTACT } from "../data.js";

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-background/40 p-4 transition hover:border-primary/60">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/15 text-primary">{icon}</div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-10 md:p-14 shadow-card">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Contact</div>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Ai nevoie de noi acum?</h2>
              <p className="mt-4 text-muted-foreground">Sună direct — răspundem 24/7 și plecăm imediat spre locația ta.</p>
              <a
                href={CONTACT.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-5 text-lg font-bold text-primary-foreground shadow-amber transition hover:bg-primary-glow"
              >
                <Icon name="phone" className="lucide lucide-phone h-6 w-6" /> {CONTACT.phone}
              </a>
            </div>
            <div className="space-y-4">
              <ContactRow
                href={CONTACT.phoneHref}
                icon={<Icon name="phone" className="lucide lucide-phone h-5 w-5" />}
                label="Telefon"
                value={CONTACT.phone}
              />
              <ContactRow
                href={CONTACT.emailHref}
                icon={<Icon name="mail" className="lucide lucide-mail h-5 w-5" />}
                label="E-mail"
                value={CONTACT.email}
              />
              <ContactRow
                href={CONTACT.facebook}
                icon={<Icon name="facebook" className="lucide lucide-facebook h-5 w-5" />}
                label="Facebook"
                value={CONTACT.facebookLabel}
              />
              <ContactRow
                href={CONTACT.tiktok}
                icon={<TikTokIcon className="h-5 w-5" />}
                label="TikTok"
                value={CONTACT.tiktokLabel}
              />
              <ContactRow
                icon={<Icon name="clock" className="lucide lucide-clock h-5 w-5" />}
                label="Program"
                value={CONTACT.hours}
              />
              <ContactRow
                icon={<Icon name="mapPin" className="lucide lucide-map-pin h-5 w-5" />}
                label="Zonă"
                value={CONTACT.area}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
