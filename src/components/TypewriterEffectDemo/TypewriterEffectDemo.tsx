"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SignupFormDemo } from "../SignupFormDemo/SignupFormDemo";
import { BackgroundBeams } from "@/components/ui/background-beams";


export function TypewriterEffectDemo() {
    const words = [
        {
            text: "If",
        },
        {
            text: "you",
        },
        {
            text: "have",
        },
        {
            text: "any",
        },
        {
            text: "questions,",
        },
        {
            text: "feel",
        },
        {
            text: "free",
        },
        {
            text: "to",
        },
        {
            text: "contact",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "me",
        },
    ];
    return (
        <>
        <BackgroundBeams />
        <div className="flex flex-col items-center justify-center h-[30rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
                Thank you for visiting my portfolio.
            </p>
            <TypewriterEffect words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Contact Now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Hire Me
                </button>
            </div>
        </div>
        <SignupFormDemo />
        </>
    );
}
