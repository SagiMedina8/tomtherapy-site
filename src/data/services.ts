import servicesContent from "../content/site/services.json";
import type { ServiceCardContent } from "../types/content";

export type Service = ServiceCardContent;

export const services: Service[] = servicesContent.cards as Service[];
