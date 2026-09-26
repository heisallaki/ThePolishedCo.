export type CollectionType = "service" | "retail";
export type CollectionStatus = "active" | "coming-soon";

export interface PricingItem {
  name: string;
  price: number;
  note?: string;
  description?: string;
}

export interface PricingCategory {
  name: string;
  group?: string;
  items: PricingItem[];
}

export interface Collection {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  type: CollectionType;
  status: CollectionStatus;
  features?: string[];
  pricing: PricingCategory[];
}

export const collections: Collection[] = [
  {
    slug: "nails",
    name: "Polished by Jael",
    category: "Nails",
    tagline: "Beautiful nails. Confident you.",
    description:
      "Gel and acrylic nail services, manicures, pedicures, and nail art, done with care in Juja.",
    type: "service",
    status: "active",
    pricing: [
      {
        name: "Basic Services",
        items: [
          { name: "Nail Prep", price: 200 },
          { name: "Gel Polish Hands", price: 400 },
          { name: "Gel Polish Toes", price: 300 },
          { name: "Gel Polish Removal", price: 200 },
        ],
      },
      {
        name: "Nail Extensions",
        items: [
          { name: "Tips and Gel", price: 700 },
          { name: "Stickons", price: 500 },
          { name: "Acrylic Tips", price: 1500 },
          { name: "Refill (Gel/Acrylic)", price: 600 },
          { name: "Builder Gel Tips", price: 1200 },
          { name: "GumGel Tips", price: 1200 },
          { name: "French Tips", price: 1000 },
          { name: "Ombre Nails", price: 1200 },
        ],
      },
      {
        name: "Manicure & Pedicure",
        items: [
          { name: "Classic Manicure", price: 300 },
          { name: "Gel Manicure", price: 500 },
          { name: "French Manicure", price: 600 },
          { name: "Cuticle Treatment", price: 250 },
          { name: "Classic Pedicure", price: 400 },
          { name: "Gel Pedicure", price: 600 },
          { name: "Exfoliation & Scrub", price: 300 },
          { name: "Foot Soak & Massage", price: 300 },
        ],
      },
      {
        name: "Add Ons",
        items: [
          { name: "Nail Art (Simple)", price: 50 },
          { name: "Nail Art (Complex)", price: 100 },
          { name: "Chrome Finish", price: 200 },
          { name: "Stickers / Foils", price: 100 },
          { name: "Nail Repair (Per Nail)", price: 70 },
          { name: "Rhinestones", price: 50 },
          { name: "3D Nail Art", price: 50 },
        ],
      },
      {
        name: "Combo Packages",
        items: [
          { name: "Classic Manicure - Pedicure", price: 650 },
          { name: "Gel Manicure - Pedicure", price: 1000 },
          { name: "Deluxe Pedicure", price: 900 },
        ],
      },
    ],
  },
  {
    slug: "lashes",
    name: "Lash Luxe",
    category: "Lashes",
    tagline: "Enhance your natural beauty. LONGER. FULLER. FLAWLESS.",
    description:
      "Classic to mega volume lash extensions, plus refills, lifts, and tints in Juja.",
    type: "service",
    status: "active",
    pricing: [
      {
        name: "Lash Extensions",
        items: [
          { name: "Classic Set", price: 500 },
          { name: "Volume Classic Set", price: 600 },
          { name: "Cat Eye Set", price: 600 },
          { name: "Volume Cat Eye Set", price: 700 },
          { name: "Wispy Set", price: 700 },
          { name: "Volume Wispy Set", price: 800 },
          { name: "Hybrid Set", price: 700 },
          { name: "Volume Hybrid Set", price: 800 },
          { name: "Mega Volume Set", price: 1000 },
          { name: "Strip Set", price: 150 },
        ],
      },
      {
        name: "Lash Maintenance",
        items: [
          { name: "Lash Refill (1 Week)", price: 500 },
          { name: "Lash Refill (2 Weeks)", price: 800 },
          { name: "Lash Refill (3 Weeks)", price: 1000 },
        ],
      },
      {
        name: "Lash Treatments",
        items: [
          { name: "Lash Removal", price: 300 },
          { name: "Lash Bath", price: 500 },
          { name: "Lash Lift", price: 1000 },
          { name: "Lash Tint", price: 1000 },
        ],
      },
    ],
  },
  {
    slug: "makeup",
    name: "Glam Studio",
    category: "Makeup",
    tagline: "Enhancing your beauty, empowering your glow.",
    description: "Everyday, event, and bridal makeup, arriving soon at The Polished Co.",
    type: "service",
    status: "coming-soon",
    pricing: [
      {
        name: "Everyday Makeup",
        items: [
          { name: "Natural Glam", price: 1500 },
          { name: "Soft Glam", price: 1000 },
        ],
      },
      {
        name: "Event Makeup",
        items: [
          { name: "Birthday Makeup", price: 1500 },
          { name: "Graduation Makeup", price: 1500 },
          { name: "Photoshoot Makeup", price: 1500 },
        ],
      },
      {
        name: "Bridal Makeup",
        items: [
          { name: "Bridal Trial", price: 2000 },
          { name: "Bridal Makeup", price: 2000 },
          { name: "Bridal Party Makeup", price: 2000 },
        ],
      },
      {
        name: "Makeup Add-Ons",
        items: [
          { name: "Strip Lashes", price: 100 },
          { name: "Touch-up Service", price: 200 },
        ],
      },
    ],
  },
  {
    slug: "wigs",
    name: "Crown Atelier",
    category: "Wig Services",
    tagline: "Your crown. Your style. Your confidence.",
    description: "Wig installation, styling, maintenance, and customization, arriving soon at The Polished Co.",
    type: "service",
    status: "coming-soon",
    pricing: [
      {
        name: "Wig Installation",
        items: [
          { name: "Glue-less Installation", price: 1000 },
          { name: "Frontal Installation", price: 1500 },
          { name: "Closure Installation", price: 2000 },
        ],
      },
      {
        name: "Wig Styling",
        items: [
          { name: "Straightening", price: 200 },
          { name: "Curling", price: 500 },
          { name: "Custom Styling", price: 300 },
        ],
      },
      {
        name: "Wig Maintenance",
        items: [
          { name: "Wig Washing", price: 700 },
          { name: "Wig Revamp", price: 1000 },
          { name: "Wig Treatment", price: 600 },
        ],
      },
      {
        name: "Wig Customization",
        items: [
          { name: "Wig Coloring", price: 1500 },
          { name: "Wig Plucking", price: 1000 },
          { name: "Wig Bleaching Knots", price: 1000 },
        ],
      },
    ],
  },
  {
    slug: "waxing",
    name: "Silk Studio",
    category: "Waxing",
    tagline: "Silky smooth. Confident you.",
    description: "Facial to full body waxing, arriving soon at The Polished Co.",
    type: "service",
    status: "coming-soon",
    features: ["Gentle on skin", "Hygienic & Safe", "Premium Products", "Smooth Results"],
    pricing: [
      {
        name: "Waxing Services",
        items: [
          { name: "Facial Waxing", price: 600 },
          { name: "Full Body Waxing", price: 4000 },
          { name: "Bikini Waxing", price: 1000 },
          { name: "Brazilian Waxing", price: 1500 },
          { name: "Legs Waxing", price: 1000 },
          { name: "Arms Waxing", price: 1000 },
        ],
      },
    ],
  },
  {
    slug: "massage",
    name: "Serenity Spa",
    category: "Massage",
    tagline: "RELAX. RECHARGE. RENEW.",
    description: "Relaxation and therapeutic massage treatments, arriving soon at The Polished Co.",
    type: "service",
    status: "coming-soon",
    pricing: [
      {
        name: "Massage Services",
        items: [
          {
            name: "Relaxation Massage",
            price: 1000,
            description: "A soothing massage designed to relieve stress and promote deep relaxation.",
          },
          {
            name: "Full Body Massage (90 Min)",
            price: 3500,
            description: "A complete head-to-toe massage to ease tension and restore balance.",
          },
          {
            name: "Back Massage (30 Min)",
            price: 1000,
            description: "Focuses on the back, neck and shoulders to relieve pain and muscle tension.",
          },
          {
            name: "Head, Neck & Shoulder Massage",
            price: 800,
            description: "Targets stress and tension in the upper body for instant relief.",
          },
        ],
      },
    ],
  },
  {
    slug: "beauty-edit",
    name: "The Beauty Edit",
    category: "Beauty Retail",
    tagline: "Beauty. Live beautifully. QUALITY PRODUCTS, CURATED FOR YOU.",
    description: "Curated bags, beauty products, hair services, and skincare, arriving soon at The Polished Co.",
    type: "retail",
    status: "coming-soon",
    pricing: [
      {
        name: "Everyday Bags",
        group: "Bags",
        items: [
          { name: "Tote Bags", price: 800 },
          { name: "Handbags", price: 1000 },
          { name: "Crossbody Bags", price: 1500 },
        ],
      },
      {
        name: "Luxury Collection",
        group: "Bags",
        items: [
          { name: "Premium Handbags", price: 2500 },
          { name: "Designer-inspired Bags", price: 1000 },
        ],
      },
      {
        name: "Travel & Storage",
        group: "Bags",
        items: [
          { name: "Makeup Bags", price: 1000 },
          { name: "Toiletry Bags", price: 500 },
          { name: "Travel Organizers", price: 1000 },
        ],
      },
      {
        name: "Beauty Products",
        items: [
          { name: "Lip Gloss", price: 150 },
          { name: "Cuticle Oil", price: 300 },
          { name: "Beauty Kits", price: 300 },
        ],
      },
      {
        name: "Hair Services",
        items: [
          { name: "Washing", price: 100 },
          { name: "Blowdry", price: 100 },
          { name: "Braiding", price: 1000, note: "Price depends on style" },
          { name: "Wig Making", price: 1500 },
          { name: "Hair Treatment", price: 500 },
        ],
      },
      {
        name: "Skincare",
        items: [
          { name: "Facials", price: 500 },
          { name: "Skin Consultation", price: 1000 },
        ],
      },
    ],
  },
];