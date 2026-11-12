import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections, consultationUrl } from "@/lib/quadri";

export function CollectionPage({ index }: { index: number }) {
  const collection = collections[index];
  if (!collection) return null;
  return (
    <main className="collection-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> All collections
      </Link>
      <div className="collection-detail">
        <div>
          <p className="eyebrow">QUADRI & CO · BEDFORD</p>
          <h1>{collection.name}</h1>
          <p className="detail-description">{collection.body}</p>
          <Button asChild variant="consultation">
            <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation <ArrowUpRight />
            </a>
          </Button>
        </div>
        <figure>
          <img src={collection.image} width={1024} height={1024} alt={collection.name} />
          <figcaption>Illustrative imagery. Please enquire about available pieces.</figcaption>
        </figure>
      </div>
    </main>
  );
}
