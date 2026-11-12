import diamond from "@/assets/diamond.webp";
import jewellery from "@/assets/fine-jewellery.jpg";
import timepiece from "@/assets/timepiece.jpg";
import ring from "@/assets/ring.webp";

export const consultationMessage =
  "Hi Quadri & Co, I’d like to book a consultation. Could you let me know your availability?";
export const consultationUrl = `https://wa.me/447947297896?text=${encodeURIComponent(consultationMessage)}`;
export const collections = [
  {
    name: "Diamonds",
    path: "/diamonds",
    image: diamond,
    description: "A brilliance all your own.",
    body: "Explore diamonds with personal guidance on cut, colour, clarity and carat. Book a consultation to discuss your preferences.",
  },
  {
    name: "Fine Jewellery",
    path: "/fine-jewellery",
    image: jewellery,
    description: "Everyday elegance. Lasting meaning.",
    body: "From delicate details to a statement piece, find jewellery that feels personal. Enquire about the pieces and styles you have in mind.",
  },
  {
    name: "Timepieces",
    path: "/timepieces",
    image: timepiece,
    description: "For the moments that matter.",
    body: "Discuss your next timepiece with Quadri & Co. Book a consultation to explore your style, preferences and availability.",
  },
  {
    name: "Engagement & Wedding Rings",
    path: "/engagement-wedding-rings",
    image: ring,
    description: "The beginning of your forever.",
    body: "Discover a ring for your defining moment. Share your ideas and let us help you explore diamond shapes, settings and precious metals.",
  },
] as const;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Quadri & Co` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Quadri & Co` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
