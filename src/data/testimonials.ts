export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

/** Client testimonials   sourced from lefsignature.com. */
export const testimonials: Testimonial[] = [
  {
    quote: "The quality of service and professionalism was top notch.",
    author: "Kwaku Nkansah",
    location: "Asokwa, Kumasi",
  },
  {
    quote: "Very good work done for me, and they will handle all my future works.",
    author: "Obed Ababio",
    location: "Ho, Volta",
  },
  {
    quote: "A trustworthy brand   they build trust and work with passion.",
    author: "Pearl Opoku",
    location: "Kasoa, Accra",
  },
];
