"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "React",
    designation: "React Js",
    image:
      "/ajay.jpg",
  },
  {
    id: 2,
    name: "Next Js",
    designation: "Next Js",
    image:
    "/ajay.jpg",
},
  {
    id: 3,
    name: "JavaScript",
    designation: "JavaScript",
    image:
      "/ajay.jpg",
  },
  {
    id: 4,
    name: "Tailwind",
    designation: "Css Libary",
    image:
      "/ajay.jpg",
  },
  {
    id: 5,
    name: "Bootstrap",
    designation: "Css Libary",
    image:
      "/ajay.jpg",
  },
  {
    id: 6,
    name: "Html",
    designation: "Html",
    image:
    "/ajay.jpg",
},
{
  id: 7,
  name: "Css",
  designation: "Css",
  image:
  "/ajay.jpg",
},
{
  id: 8,
  name: "Wordpress",
  designation: "Wordpress",
  image:
  "/ajay.jpg",
}
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
