import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border bg-primary">
        <img
          src="/images/logo.jpg"
          alt="ShailDent"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
          ShailDent
        </span>
        {!compact && (
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mt-0.5">
            The Dental Studio
          </span>
        )}
      </div>
    </Link>
  );
}
