import {
  Crown,
  Shield,
  Stethoscope,
  Zap,
  Baby,
  Wrench,
  Sparkles,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Permanent tooth replacement that looks, feels and functions naturally.",
    description:
      "Lost teeth are replaced with biocompatible titanium implants placed using guided surgical protocols for pinpoint accuracy. Single tooth, multiple implants or full-arch (All-on-4 / All-on-6) — the result is a strong, stable bite that lets you eat, speak and smile with confidence again.",
    benefits: [
      "Computer-guided, minimally invasive placement",
      "Premium global implant systems",
      "Restores 90%+ of natural bite force",
      "No harm to adjacent healthy teeth",
    ],
    image: "/images/dental-chair.jpg",
    icon: Stethoscope,
  },
  {
    slug: "root-canal",
    title: "Painless Root Canal",
    short: "Save your natural tooth with a virtually painless single-sitting RCT.",
    description:
      "Using rotary endodontic instruments and apex locators, most root canals are completed in a single, comfortable appointment. Modern anaesthesia and gentle technique mean you'll feel almost nothing — and walk out the same day with a tooth saved, not extracted.",
    benefits: [
      "Single-sitting completion for most cases",
      "Virtually painless with modern anaesthesia",
      "Saves the natural tooth structure",
      "Followed by a protective ceramic crown",
    ],
    image: "/images/treatment-1.jpg",
    icon: Shield,
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    short: "Advanced periodontal care to stop bleeding gums and preserve your smile.",
    description:
      "From routine deep cleaning to advanced periodontal therapy, we treat the root cause of bleeding, receding or inflamed gums. Ultrasonic scaling, root planing and, where needed, laser-assisted therapy restore healthy pink gums and prevent tooth loss.",
    benefits: [
      "Stops bleeding & bad breath at the source",
      "Ultrasonic deep cleaning below the gumline",
      "Laser-assisted therapy for advanced cases",
      "Prevents bone loss and future tooth loss",
    ],
    image: "/images/consult-room.jpg",
    icon: Leaf,
  },
  {
    slug: "extraction",
    title: "Tooth Extraction",
    short: "Gentle, precise removal — including wisdom teeth — with minimal downtime.",
    description:
      "When a tooth truly can't be saved, our extractions are done with modern local anaesthesia, atraumatic technique and same-day socket preservation where implants are planned. Complex wisdom-tooth cases are handled with surgical precision to reduce swelling and recovery time.",
    benefits: [
      "Truly painless with modern anaesthesia",
      "Atraumatic technique preserves bone",
      "Wisdom tooth & impacted tooth expertise",
      "Same-day implant planning available",
    ],
    image: "/images/reception.jpg",
    icon: Wrench,
  },
  {
    slug: "aligners-braces",
    title: "Aligners & Braces",
    short: "Straighten your teeth discreetly — invisible aligners or modern braces.",
    description:
      "From fully invisible clear aligners to ceramic and metal braces, we design treatment plans that fit your lifestyle. 3D scans and digital simulation show the final result before you begin. Most adult aligner cases finish in 6–12 months with regular, short visits.",
    benefits: [
      "Invisible aligner option for adults",
      "3D treatment preview before you start",
      "Low-friction, comfortable brackets",
      "Retainers and follow-up included",
    ],
    image: "/images/clinic-1.jpg",
    icon: Zap,
  },
  {
    slug: "veneers",
    title: "Veneers & Smile Design",
    short: "Ultra-thin porcelain veneers that redesign shape, colour and confidence.",
    description:
      "Hand-layered E-max and zirconia veneers crafted with master ceramists. We correct chips, gaps, worn edges and discoloured teeth with restorations so lifelike they reflect light the way natural enamel does. A digital smile preview is designed before a single tooth is touched.",
    benefits: [
      "Digital smile preview before treatment",
      "Metal-free, biocompatible ceramics",
      "Lifelike translucency and shade matching",
      "Minimal tooth reduction, long-lasting bond",
    ],
    image: "/images/clinic-2.jpg",
    icon: Sparkles,
  },
  {
    slug: "dentures",
    title: "Dentures",
    short: "Comfortable, lifelike dentures — flexible, fixed or implant-supported.",
    description:
      "Modern full and partial dentures crafted for a natural fit and a natural smile. Choose from flexible, cast-partial or implant-supported (overdenture) options — each precisely fitted and finished with tooth shades and gum tints matched to you.",
    benefits: [
      "Flexible, cast-partial & implant-supported options",
      "Natural gum & tooth shade matching",
      "Precise fit with no painful pressure points",
      "Comfortable chewing and clear speech",
    ],
    image: "/images/clinic-3.jpg",
    icon: Crown,
  },
  {
    slug: "kids-dentistry",
    title: "Kids' Dentistry",
    short: "Gentle, playful care that builds a lifetime of healthy habits.",
    description:
      "A child's first dental memory matters. Our paediatric approach is patient, playful and never rushed — covering preventive sealants and fluoride, tooth-coloured fillings, space maintainers and habit counselling for thumb-sucking or grinding.",
    benefits: [
      "Anxiety-free, child-friendly environment",
      "Preventive sealants and fluoride therapy",
      "Tooth-coloured fillings",
      "Early orthodontic screening",
    ],
    image: "/images/dental-chair.jpg",
    icon: Baby,
  },
];

export interface Review {
  name: string;
  rating: number;
  text: string;
  source: "Google";
}

export const reviews: Review[] = [
  {
    name: "Faizan Khan",
    rating: 5,
    text: "One of the best aesthetic clinics I have ever visited. Dr. Shailaja and her staff were really helpful and the environment was calm.",
    source: "Google",
  },
  {
    name: "Kushal Kanjiya",
    rating: 5,
    text: "Very clean and aesthetic ambient clinic. Dr. Shailaja is very polite and knowledgeable — had my teeth cleaned in minutes.",
    source: "Google",
  },
  {
    name: "Vijay Musadiya",
    rating: 5,
    text: "Very good treatment. Such a beautiful and aesthetic dental clinic.",
    source: "Google",
  },
  {
    name: "Kishan Patel",
    rating: 5,
    text: "One of the best facilities in Rajkot. You will get the best treatment with proper care and confidence by knowledgeable Dr. Shailaja.",
    source: "Google",
  },
  {
    name: "Vimal Jivani",
    rating: 5,
    text: "Went to the dentist — very brilliant in this field. A great doctor with a beautifully designed interior.",
    source: "Google",
  },
  {
    name: "Jenya Javia",
    rating: 5,
    text: "She is highly skilled, patient, and attentive, making every treatment feel safe and comfortable.",
    source: "Google",
  },
  {
    name: "Mm Mm",
    rating: 5,
    text: "Such a beautiful, calm, and aesthetic dental clinic. The soothing vibe instantly makes you feel comfortable and relaxed.",
    source: "Google",
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
  category: "Reception" | "Treatment Rooms" | "Moments" | "Exterior";
}

export const gallery: GalleryItem[] = [
  { src: "/images/reception.jpg", alt: "ShailDent reception desk with sculpted wall art", category: "Reception" },
  { src: "/images/consult-room.jpg", alt: "Consultation room with sage green desk", category: "Reception" },
  { src: "/images/dental-chair.jpg", alt: "Modern dental chair in operatory", category: "Treatment Rooms" },
  { src: "/images/treatment-1.jpg", alt: "Dr. Shailaja treating a patient", category: "Treatment Rooms" },
  { src: "/images/inauguration.jpg", alt: "Lamp lighting at the clinic inauguration", category: "Moments" },
  { src: "/images/clinic-1.jpg", alt: "Interior of ShailDent studio", category: "Treatment Rooms" },
  { src: "/images/clinic-2.jpg", alt: "Treatment area at ShailDent", category: "Treatment Rooms" },
  { src: "/images/clinic-3.jpg", alt: "Clinic detail shot", category: "Treatment Rooms" },
];

export const trustStats = [
  { label: "Google Rating", value: "5.0 ★" },
  { label: "Happy Smiles", value: "2,000+" },
  { label: "Specialised Treatments", value: "8+" },
  { label: "Painless Care", value: "Always" },
  { label: "Women-Owned", value: "Studio" },
  { label: "Sterilisation", value: "Hospital Grade" },
];
