import { Link, useLocation } from "@tanstack/react-router";
import { Home, Sparkles, Images, Star, Info, Phone } from "lucide-react";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Sparkles },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/reviews", label: "Reviews", icon: Star },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] -translate-x-1/2 md:hidden">
      <div className="flex items-center justify-between rounded-full border border-border/60 bg-background/75 px-2 py-2 shadow-soft backdrop-blur-2xl">
        {tabs.map((t) => {
          const active = pathname === t.to;
          const Icon = t.icon;
          return (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-1 flex-col items-center gap-1 transition-all duration-300"
            >
              <span
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                  active
                    ? "h-9 w-9 bg-accent text-accent-foreground shadow-gold"
                    : "h-7 w-7 text-primary/80"
                }`}
              >
                <Icon className={active ? "h-4 w-4" : "h-4 w-4"} />
              </span>
              <span
                className={`text-[9px] font-semibold leading-none ${
                  active ? "text-accent" : "text-primary/70"
                }`}
              >
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
