import { MessageCircle, Phone } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-28 md:bottom-6 z-30 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition-transform duration-200"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={telLink}
        aria-label="Call"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold hover:scale-110 transition-transform duration-200"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
