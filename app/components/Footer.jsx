import { BRAND, CONTACT } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/assets/das-logo.png" alt="" className="h-8 w-8 rounded" />
          <span>© {year} {BRAND.legal}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={CONTACT.phoneHref} className="hover:text-foreground">{CONTACT.phone}</a>
          <a href={CONTACT.emailHref} className="hover:text-foreground">{CONTACT.email}</a>
          <a href={CONTACT.facebook} className="hover:text-foreground">Facebook</a>
          <a href={CONTACT.tiktok} className="hover:text-foreground">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
