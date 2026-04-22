export interface BrandContent {
  name: string;
  url: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  email: string;
  ga4Id: string;
  tagline: string;
  hours: Array<{ day: string; label: string; hours: string }>;
  addresses: Array<{ title: string; street: string; city: string; note: string }>;
  nav: Array<{ href: string; label: string }>;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface HomeContent {
  seo: SeoMeta;
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadLine1: string;
    subheadLine2: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  };
  story: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    paragraph1: string;
    paragraph2: string;
    ctaText: string;
    ctaLink: string;
  };
}

export interface AboutContent {
  seo: SeoMeta;
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    lead: string;
    imageAlt: string;
  };
  sections: Array<{ heading: string; paragraphs: string[] }>;
  cta: { text: string; href: string };
}

export interface ServiceCardContent {
  slug: string;
  eyebrow: string;
  titleHe: string;
  titleEn: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface ServicesContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
  cards: ServiceCardContent[];
  ctaBar: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  };
}

export interface ProcessStepContent {
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
  steps: ProcessStepContent[];
  cta: { text: string; href: string };
}

export interface TestimonialContent {
  name: string;
  role: string;
  stars: number;
  quote: string;
}

export interface TestimonialsContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
  items: TestimonialContent[];
  cta: { text: string; href: string };
}

export interface ContactContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
  whatsapp: { eyebrow: string; title: string; body: string };
  form: {
    eyebrow: string;
    title: string;
    labelName: string;
    labelPhone: string;
    labelEmail: string;
    labelEmailOptional: string;
    labelMessage: string;
    submit: string;
    disclaimer: string;
  };
  labels: {
    emailEyebrow: string;
    hoursEyebrow: string;
    locationEyebrow: string;
    locationCaption: string;
  };
}

export interface BookingContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
  fallback: { prefix: string; linkText: string };
  labels: { hoursEyebrow: string };
  plannieUrl: string;
}

export interface ArticleIndexContent {
  seo: SeoMeta;
  header: { eyebrow: string; title: string; lead: string };
}

export interface BodyMapRegion {
  id: string;
  label: string;
  title: string;
  intro: string;
  commonProblems: Array<{ name: string; description: string }>;
  approach: string;
}

export interface BodyMapContent {
  intro: {
    eyebrow: string;
    headline: string;
    subhead: string;
    disclaimer: string;
  };
  regions: BodyMapRegion[];
}
