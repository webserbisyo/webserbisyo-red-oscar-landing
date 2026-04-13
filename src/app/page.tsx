import { HomeHero } from "@/components/sections/hero";
import { SignatureFlame } from "@/components/sections/signature-flame";
import { RamenImmersion } from "@/components/sections/ramen-immersion";
import { Feast } from "@/components/sections/feast";
import { WhyRedOscar } from "@/components/sections/why-red-oscar";
import { BrandStory } from "@/components/sections/brand-story";
import { VisitSection } from "@/components/sections/visit-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div id="signature">
        <SignatureFlame />
      </div>
      <RamenImmersion />
      <div id="feast">
        <Feast />
      </div>
      <WhyRedOscar />
      <BrandStory />
      <VisitSection />
    </>
  );
}
