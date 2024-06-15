import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GoogleGeminiEffectDemo } from "./GoogleGeminiEffectDemo/page";
import { HeroHighlightDemo } from "@/app/HeroHighlightDemo/page";
import { HeroParallaxDemo } from "@/app/HeroParallaxDemo/page";
import { MacbookScrollDemo } from "./MacbookScrollDemo/MacbookScrollDemo";
import { LampDemo } from "@/components/ui/lamp";
import { SVGMaskEffectDemo } from "./SVGMaskEffectDemo/page";
import { AnimatedPinDemo } from "./AnimatedPinDemo/page";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo/page";
import { TypewriterEffectDemo } from "./TypewriterEffectDemo/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <GoogleGeminiEffectDemo />
      <div className="w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        <HeroHighlightDemo />
        <BackgroundBeams />
      </div>
      <div>
        <LampDemo />
      </div>
        <MacbookScrollDemo />

      <div>
        <HeroParallaxDemo />
      </div>
      <br />
      <PlaceholdersAndVanishInputDemo />
      <br />

     
        <AnimatedPinDemo />
        <SVGMaskEffectDemo />
 
      <div
      className=" bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    
    >  <TypewriterEffectDemo />
      <BackgroundBeams />
      </div>
      <Footer />
    </div>
  );
}
