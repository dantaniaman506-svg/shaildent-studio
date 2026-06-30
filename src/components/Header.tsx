import { Link, useLocation } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { telLink } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-3 left-1/2 z-40 w-[min(1100px,calc(100%-1.25rem))] -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-border/60 bg-background/70 px-3 py-2 shadow-soft backdrop-blur-2xl">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <Link
            to="/contact"
            hash="appointment-form"
            className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-accent-foreground shadow-gold hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
