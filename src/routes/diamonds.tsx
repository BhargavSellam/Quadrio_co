import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/collection-page";
import { collections, pageHead } from "@/lib/quadri";
export const Route = createFileRoute("/diamonds")({
  head: () => pageHead(collections[0].name, collections[0].body),
  component: () => <CollectionPage index={0} />,
});
