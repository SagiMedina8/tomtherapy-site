import testimonialsContent from "../content/site/testimonials.json";
import type { TestimonialContent } from "../types/content";

export type Testimonial = TestimonialContent;

export const testimonials: Testimonial[] = testimonialsContent.items as Testimonial[];
