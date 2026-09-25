export const business = {
  name: "The Polished Co. Ke",
  shortName: "The Polished Co.",
  owner: "Jael",
  tagline: "Beauty, polished your way.",
  email: "thepolishedco.ke@gmail.com",
  phone: "+254794050442",
  phoneDisplay: "+254 794 050 442",
  whatsappNumber: "254794050442",
  location: {
    town: "Juja",
    country: "Kenya",
    display: "Juja, Kenya",
  },
  workingHours: [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "Closed" },
    { days: "Sunday", hours: "9:00 AM - 5:00 PM" },
  ],
} as const;

export type Business = typeof business;