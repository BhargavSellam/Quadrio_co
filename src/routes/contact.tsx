import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultationUrl, pageHead } from "@/lib/quadri";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact & consultations",
      "Contact Quadri & Co in Bedford on WhatsApp to arrange a personal jewellery consultation.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <main className="information-page">
      <p className="eyebrow">QUADRI & CO · BEDFORD</p>
      <h1>Let’s find your piece.</h1>
      <p className="detail-description">
        For a special occasion, a thoughtful gift, or something just for you. Get in touch to
        arrange a personal consultation.
      </p>
      <div className="contact-details">
        <span>Bedford, United Kingdom</span>
        <a href="tel:+447947297896">+44 7947 297896</a>
      </div>
      <Button asChild variant="consultation">
        <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
          Book a Consultation <ArrowUpRight />
        </a>
      </Button>
    </main>
  );
}
