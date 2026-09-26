import { business } from "../config/business";
import { social } from "../config/social";
import { collections } from "../data/collections";
import type { Collection } from "../data/collections";

const DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function expandDays(days: string): string[] {
  if (days.includes("-")) {
    const [startRaw, endRaw] = days.split("-").map((part) => part.trim());
    const startIndex = DAY_ORDER.indexOf(startRaw);
    const endIndex = DAY_ORDER.indexOf(endRaw);
    if (startIndex >= 0 && endIndex >= 0) {
      return DAY_ORDER.slice(startIndex, endIndex + 1);
    }
  }
  return DAY_ORDER.includes(days) ? [days] : [];
}

function to24Hour(time: string): string {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return "";
  }
  let hours = Number.parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) {
    hours += 12;
  }
  if (period === "AM" && hours === 12) {
    hours = 0;
  }
  return `${String(hours).padStart(2, "0")}:${minutes}`;
}

function getOpeningHoursSpecification() {
  return business.workingHours
    .filter((entry) => entry.hours.toLowerCase() !== "closed")
    .map((entry) => {
      const [opensRaw, closesRaw] = entry.hours.split("-").map((part) => part.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: expandDays(entry.days),
        opens: to24Hour(opensRaw),
        closes: to24Hour(closesRaw),
      };
    });
}

function getAllPrices(): number[] {
  return collections.flatMap((collection) =>
    collection.pricing.flatMap((category) => category.items.map((item) => item.price))
  );
}

function formatPriceRangeLabel(prices: number[]): string {
  if (prices.length === 0) {
    return "";
  }
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return `Ksh ${min.toLocaleString("en-US")} - Ksh ${max.toLocaleString("en-US")}`;
}

export function getLocalBusinessSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    description: "Premium nails, lashes, and beauty services in Juja, Kenya.",
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.location.town,
      addressCountry: "KE",
    },
    openingHoursSpecification: getOpeningHoursSpecification(),
    sameAs: [social.instagram.canonicalUrl, social.tiktok.canonicalUrl],
    priceRange: formatPriceRangeLabel(getAllPrices()),
  };
}

export function getServiceSchema(collection: Collection, pageUrl: string) {
  const prices = collection.pricing.flatMap((category) => category.items.map((item) => item.price));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: collection.category,
    name: collection.name,
    description: collection.description,
    provider: {
      "@type": "BeautySalon",
      name: business.name,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.location.town,
        addressCountry: "KE",
      },
    },
    areaServed: {
      "@type": "City",
      name: business.location.town,
    },
    priceRange: formatPriceRangeLabel(prices),
    url: pageUrl,
  };
}