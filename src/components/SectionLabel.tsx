import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="font-semibold">{children}</span>
    </div>
  );
}
