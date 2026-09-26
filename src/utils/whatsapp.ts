import { business } from "../config/business";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}