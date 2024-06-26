import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "@/components/Footer/Footer";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo/TypewriterEffectDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo/SVGMaskEffectDemo";
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo/AnimatedPinDemo";
import { PlaceholdersAndVanishInputDemo } from "@/components/PlaceholdersAndVanishInputDemo/PlaceholdersAndVanishInputDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo/HeroParallaxDemo";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo/MacbookScrollDemo";
import { LampDemo } from "@/components/ui/lamp";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo/HeroHighlighDemo";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo/GoogleGeminiEffectDemo";


export default function Home() {
  return (
    <div>
      <GoogleGeminiEffectDemo/>
      <div className="w-full bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        <HeroHighlightDemo/>
        <BackgroundBeams/>
      </div>
      <div>
        <LampDemo/>
      </div>
        <MacbookScrollDemo/>

      <div>
        <HeroParallaxDemo/>
      </div>
      <br />
      <PlaceholdersAndVanishInputDemo/>
      <br />

     
        <AnimatedPinDemo/>
        <SVGMaskEffectDemo/>
 
      <div
      className=" bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
    
    >  <TypewriterEffectDemo/>
      <BackgroundBeams />
      </div>
      <Footer/>
    </div>
  );
}
