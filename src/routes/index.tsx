import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections, consultationUrl, pageHead } from "@/lib/quadri";
import scene from "@/assets/jewellery-scene.webp";
import mobileScene from "@/assets/jewellery-mobile.webp";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Diamonds, jewellery & life’s defining moments",
      "Explore diamonds, fine jewellery, timepieces and engagement rings with Quadri & Co in Bedford. Book a personal consultation.",
    ),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="hero-title">
        <picture className="hero-scene">
          <source media="(max-width: 1023px)" srcSet={mobileScene} />
          <img
            src={scene}
            width={1920}
            height={1080}
            alt="An upright rose-gold solitaire ring and a separate brilliant diamond resting on ivory limestone"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">QUADRI & CO · BEDFORD</p>
            <h1 id="hero-title">
              Find the piece that
              <br className="desktop-break" /> feels like yours.
            </h1>
            <p className="hero-description">
              Explore diamonds, fine jewellery, timepieces
              <br className="desktop-break" /> and rings for life’s defining moments.
            </p>
            <div className="hero-actions">
              <Button asChild variant="consultation">
                <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                </a>
              </Button>
              <Button asChild variant="link" className="explore-link">
                <a href="#collections">
                  Explore Collections <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="collections" className="collections-section" aria-labelledby="collections-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A WORLD OF QUADRI & CO</p>
            <h2 id="collections-title">Something distinctly you.</h2>
          </div>
          <span>Discover our collections</span>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <Link to={collection.path} key={collection.path} className="collection-card">
              <div className="collection-image">
                <img
                  src={collection.image}
                  alt={collection.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
              </div>
              <div className="collection-title">
                <h3>{collection.name}</h3>
                <ArrowUpRight size={20} />
              </div>
              <p>{collection.description}</p>
            </Link>
          ))}
        </div>
        <p className="image-note">
          Jewellery imagery is illustrative. Please enquire about available pieces.
        </p>
      </section>
    </main>
  );
}
