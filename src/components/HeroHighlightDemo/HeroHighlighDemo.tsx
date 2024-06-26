"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { AnimatedTooltipPreview } from "../AnimatedTooltipPreview/AnimatedTooltipPreview";
import { PlaceholdersAndVanishInputDemo } from "../PlaceholdersAndVanishInputDemo/PlaceholdersAndVanishInputDemo";
export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >  Welcome to
        <Highlight className="text-black dark:text-white">
          Ajay Anthwal portfolio
        </Highlight>
      </motion.h1>
      <br />
      <br />
      <AnimatedTooltipPreview />
    </HeroHighlight>
  );
}