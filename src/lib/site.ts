export const site = {
  name: "ShailDent",
  fullName: "ShailDent The Dental Studio",
  tagline: "Raw beauty. Refined smiles.",
  shortDesc:
    "Advanced, personalised dental care in a calm, luxurious studio in Rajkot.",
  owner: "Dr. Shailaja",
  ownerCreds: "BDS, Cosmetic & Aesthetic Dentistry",
  phone: "+91 90236 33499",
  phoneRaw: "+919023633499",
  whatsapp: "919023633499",
  email: "hello@shaildent.in",
  address:
    "FF 11/12/13/14, Heera Panna Complex, Speedwell Party Plot Road, Mota Mava, Rajkot, Gujarat 360005",
  city: "Rajkot",
  hours: [
    { d: "Monday – Saturday", h: "9:00 AM – 8:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=ShailDent+The+Dental+Studio+Rajkot",
  googleReviews: "https://www.google.com/maps",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  rating: 5.0,
  reviewCount: 60,
} as const;

export const telLink = `tel:${site.phoneRaw}`;
export const waLink = (msg = "Hi ShailDent, I'd like to book an appointment.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
