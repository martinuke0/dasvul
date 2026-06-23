import Icon, { WhatsAppIcon } from "../icons.jsx";
import { CONTACT } from "../data.js";

const FAB =
  "fixed bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-amber animate-pulse-ring sm:hidden";

export default function MobileFabs() {
  return (
    <>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" className={`${FAB} left-5`}>
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a href={CONTACT.phoneHref} aria-label="Sună acum" className={`${FAB} right-5`}>
        <Icon name="phone" className="lucide lucide-phone h-6 w-6" />
      </a>
    </>
  );
}
