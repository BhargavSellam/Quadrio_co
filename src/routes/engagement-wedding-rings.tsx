import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/collection-page";
import { collections, pageHead } from "@/lib/quadri";
export const Route = createFileRoute("/engagement-wedding-rings")({
  head: () => pageHead(collections[3].name, collections[3].body),
  component: () => <CollectionPage index={3} />,
});
