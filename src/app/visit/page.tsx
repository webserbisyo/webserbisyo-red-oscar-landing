import { VisitHero } from "@/components/sections/visit-hero";
import { StoreInfo } from "@/components/sections/store-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Find Red Oscar Japanese Filipino Food House at Taguig. View opening hours, directions, and contact information.",
};

export default function VisitPage() {
  return (
    <>
      {/* TopNav and Footer are automatically provided by layout.tsx! */}
      <VisitHero />
      <StoreInfo />
    </>
  );
}
