"use client";
import React from "react";
import { PinContainer } from '@/components/ui/3d-pin';
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <PinContainer
        title="Ajay Anthwal"
        href="#"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Education
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Bachelor of Science
            </span>
          </div>
          <Image
            src="/Education.png"
            alt="Education"
            width={320}
            height={320}
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-black-500 via-white-500 to-blue-500"
          />
        </div>
      </PinContainer>
    </div>
  );
}
