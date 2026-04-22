import brand from "../content/site/brand.json";
import type { BrandContent } from "../types/content";

export const site: BrandContent = brand as BrandContent;

export const whatsappLink = (text?: string) => {
  const message = text || site.whatsappDefaultMessage;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = site.nav;
