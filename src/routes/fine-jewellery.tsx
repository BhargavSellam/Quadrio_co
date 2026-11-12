import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/collection-page";
import { collections, pageHead } from "@/lib/quadri";
export const Route = createFileRoute("/fine-jewellery")({
  head: () => pageHead(collections[1].name, collections[1].body),
  component: () => <CollectionPage index={1} />,
});
