import { describe, expect, it } from "vitest";
import { consultationUrl, collections } from "@/lib/quadri";

describe("Quadri enquiries and collections", () => {
  it("sends consultation enquiries to the supplied WhatsApp number", () => {
    expect(new URL(consultationUrl).pathname).toBe("/447947297896");
  });
  it("prefills the exact requested consultation message", () => {
    expect(new URL(consultationUrl).searchParams.get("text")).toBe(
      "Hi Quadri & Co, I’d like to book a consultation. Could you let me know your availability?",
    );
  });
  it("offers the four requested collections", () => {
    expect(collections.map((item) => item.name)).toEqual([
      "Diamonds",
      "Fine Jewellery",
      "Timepieces",
      "Engagement & Wedding Rings",
    ]);
  });
});
