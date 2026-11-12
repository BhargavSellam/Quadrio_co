import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { consultationUrl, pageHead } from "@/lib/quadri";

export const Route = createFileRoute("/diamond-guide")({
  head: () =>
    pageHead(
      "Diamond Guide",
      "Understand diamond cut, colour, clarity and carat with Quadri & Co in Bedford.",
    ),
  component: DiamondGuide,
});

function DiamondGuide() {
  const qualities = [
    [
      "Cut",
      "Cut describes how well a diamond’s facets interact with light. Proportions, symmetry and polish influence its brilliance; cut is different from its shape.",
    ],
    [
      "Colour",
      "The standard colour scale for white diamonds runs from D to Z, from colourless to a noticeable light tint. Fancy-coloured diamonds are assessed differently.",
    ],
    [
      "Clarity",
      "Clarity considers internal inclusions and surface blemishes. Their size, position and visibility help determine a diamond’s clarity grade.",
    ],
    [
      "Carat",
      "Carat is a measure of weight, not size. One carat equals 0.2 grams; a diamond’s proportions and shape also affect how large it appears.",
    ],
  ];
  return (
    <main className="information-page">
      <p className="eyebrow">THE DETAILS THAT MATTER</p>
      <h1>Diamond Guide</h1>
      <p className="detail-description">
        Discover the four Cs, and find the balance that feels right for you.
      </p>
      <div className="guide-grid">
        {qualities.map(([name, text]) => (
          <article key={name}>
            <h2>{name}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="hero-actions">
        <Button asChild variant="consultation">
          <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
            Book a Consultation
          </a>
        </Button>
      </div>
    </main>
  );
}
