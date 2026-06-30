import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, telLink } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.fullName} — advanced, personalised dental care in a calm, luxurious
              studio. <span className="font-script text-foreground">Where every smile matters.</span>
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-base font-semibold text-foreground">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm text-muted-foreground">
            <h4 className="font-display text-base font-semibold text-foreground">Reach Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>{site.address}</span>
            </div>
            <a href={telLink} className="flex items-start gap-3 hover:text-foreground">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-foreground">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>{site.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <div>
                {site.hours.map((h) => (
                  <div key={h.d}>{h.d}: <span className="text-foreground">{h.h}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
