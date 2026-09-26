import { routes } from "../utils/url";

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Gallery", href: routes.gallery },
  { label: "Reviews", href: routes.reviews },
  { label: "Book", href: routes.book },
  { label: "Policies", href: routes.policies },
  { label: "Contact", href: routes.contact },
];