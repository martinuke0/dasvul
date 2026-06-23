import Icon from "../icons.jsx";
import { CONTACT } from "../data.js";

export default function TopBar() {
  return (
    <div className="border-b border-border bg-card/40 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-muted-foreground">
        <span className="flex items-center gap-2">
          <Icon name="clock" className="lucide lucide-clock h-3.5 w-3.5 text-primary" /> {CONTACT.hours}
        </span>
        <span className="hidden sm:flex items-center gap-2">
          <Icon name="mapPin" className="lucide lucide-map-pin h-3.5 w-3.5 text-primary" /> Botoșani și împrejurimi
        </span>
      </div>
    </div>
  );
}
