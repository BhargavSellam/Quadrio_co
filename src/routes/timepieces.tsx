import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/collection-page";
import { collections, pageHead } from "@/lib/quadri";
export const Route = createFileRoute("/timepieces")({
  head: () => pageHead(collections[2].name, collections[2].body),
  component: () => <CollectionPage index={2} />,
});
