"use client";
import React from "react";
import { HeroParallax } from '@/components/ui/hero-parallax';

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/project-1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/project-2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/project-3.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/project-4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/project-5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/project-6.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/project-7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/project-8.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/project-9.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/project-10.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/project-11.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/project-12.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/project-13.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/project-14.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/project-15.png",
  },
];
