import {
  Sparkles,
  Smile,
  Crown,
  Shield,
  Stethoscope,
  Zap,
  Baby,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "smile-design",
    title: "Smile Designing",
    short: "Custom-crafted smiles tailored to your face, lips and personality.",
    description:
      "A complete cosmetic transformation that blends digital smile design with hand-crafted artistry. Dr. Shailaja studies your facial proportions, lip dynamics and tooth shade to design a smile that looks effortlessly natural — never overdone. Ideal for anyone preparing for a wedding, a career milestone or simply ready to feel confident in every photograph.",
    benefits: [
      "Digital smile preview before treatment",
      "Minimally invasive, tooth-preserving approach",
      "Natural translucency and gloss",
      "Results that age beautifully",
    ],
    icon: Sparkles,
  },
  {
    slug: "teeth-whitening",
    title: "Professional Teeth Whitening",
    short: "Several shades brighter in a single, gentle in-clinic session.",
    description:
      "Our medical-grade whitening lifts years of coffee, tea and tobacco stains in under an hour. A protective barrier is placed over your gums, and the activating gel is light-cured in short, comfortable cycles. You walk out with a visibly brighter, polished smile — without sensitivity afterwards.",
    benefits: [
      "Up to 6 shades lighter in one visit",
      "Enamel-safe peroxide formula",
      "Zero downtime, return to work same day",
      "Includes home maintenance kit",
    ],
    icon: Smile,
  },
  {
    slug: "veneers-crowns",
    title: "Veneers & Ceramic Crowns",
    short: "Ultra-thin porcelain that rebuilds shape, colour and confidence.",
    description:
      "Hand-layered E-max and zirconia restorations crafted in partnership with master ceramists. We correct chips, gaps, worn edges and discoloured teeth with restorations so lifelike, they reflect light the way natural enamel does. Each veneer is bonded with precision and finished to a mirror polish.",
    benefits: [
      "Metal-free, biocompatible ceramics",
      "Lifelike translucency and shade matching",
      "Long-lasting bond, 10–15 year lifespan",
      "Minimal tooth reduction",
    ],
    icon: Crown,
  },
  {
    slug: "implants",
    title: "Dental Implants",
    short: "Permanent tooth replacement that looks, feels and functions naturally.",
    description:
      "Lost teeth are replaced with biocompatible titanium implants placed using guided surgical protocols for pinpoint accuracy. Whether you need a single tooth, multiple implants or a full arch (All-on-4 / All-on-6), the result is a strong, stable bite that lets you eat, speak and smile without a second thought.",
    benefits: [
      "Computer-guided, minimally invasive placement",
      "Premium global implant systems",
      "Restores 90%+ of natural bite force",
      "No impact on adjacent healthy teeth",
    ],
    icon: Stethoscope,
  },
  {
    slug: "root-canal",
    title: "Painless Root Canal Therapy",
    short: "Save your natural tooth with virtually painless single-sitting RCT.",
    description:
      "Using rotary endodontic instruments and apex locators, most root canals are completed in a single, comfortable appointment. Modern anaesthesia and gentle technique mean you'll feel almost nothing — and walk out the same day with a tooth that's been saved, not extracted.",
    benefits: [
      "Single-sitting completion for most cases",
      "Virtually painless with modern anaesthesia",
      "Saves the natural tooth structure",
      "Followed by a protective crown",
    ],
    icon: Shield,
  },
  {
    slug: "orthodontics",
    title: "Braces & Clear Aligners",
    short: "Straighten your teeth discreetly — with metal braces or invisible aligners.",
    description:
      "From traditional metal and ceramic braces to fully invisible clear aligners, we design treatment plans that fit your lifestyle. 3D scans and digital simulation show you the final result before you begin. Most adult aligner cases finish in 6–12 months.",
    benefits: [
      "Invisible aligner option for adults",
      "3D treatment preview before you start",
      "Comfortable, low-friction brackets",
      "Retainers and follow-up included",
    ],
    icon: Zap,
  },
  {
    slug: "kids-dentistry",
    title: "Kids' Dentistry",
    short: "Gentle, playful care that builds a lifetime of healthy habits.",
    description:
      "A child's first dental memories matter. Our paediatric chair-side approach is patient, playful and never rushed — covering everything from preventive sealants and fluoride to fillings, space maintainers and habit counselling for thumb-sucking or grinding.",
    benefits: [
      "Anxiety-free, child-friendly environment",
      "Preventive sealants and fluoride therapy",
      "Tooth-coloured fillings",
      "Early orthodontic screening",
    ],
    icon: Baby,
  },
  {
    slug: "cleaning-checkup",
    title: "Scaling, Polishing & Checkups",
    short: "Six-monthly hygiene visits that keep gums healthy and breath fresh.",
    description:
      "Ultrasonic scaling lifts plaque and tartar from above and below the gumline, followed by a fine polish that smooths the enamel and removes surface stains. We finish with a full oral health screening — catching cavities, gum issues and bite problems before they become expensive.",
    benefits: [
      "Ultrasonic deep cleaning",
      "Stain removal and polish",
      "Full oral cancer screening",
      "Personalised home care plan",
    ],
    icon: Wrench,
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
  { src: "/images/lounge.jpg", alt: "Sage green lounge in the waiting area", category: "Reception" },
  { src: "/images/consult-room.jpg", alt: "Modern consultation room with city view", category: "Treatment Rooms" },
  { src: "/images/dental-chair.jpg", alt: "Osstem dental chair in a glass-walled operatory", category: "Treatment Rooms" },
  { src: "/images/treatment-room.jpg", alt: "Aesthetic treatment room with mural wall", category: "Treatment Rooms" },
  { src: "/images/dr-shailaja-working.jpg", alt: "Dr. Shailaja treating a patient", category: "Moments" },
  { src: "/images/inauguration-lamp.jpg", alt: "Lamp lighting at the clinic inauguration", category: "Moments" },
  { src: "/images/ribbon-cutting.jpg", alt: "Ribbon cutting at the clinic opening", category: "Moments" },
  { src: "/images/entrance.jpg", alt: "Floral entrance arch with Where every smile matters signage", category: "Exterior" },
];

export const trustStats = [
  { label: "Google Rating", value: "5.0 ★" },
  { label: "Happy Smiles", value: "2,000+" },
  { label: "Specialised Treatments", value: "12+" },
  { label: "Painless Care", value: "Always" },
  { label: "Women-Owned", value: "Studio" },
  { label: "Sterilisation", value: "Hospital Grade" },
];
