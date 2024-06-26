"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className=" w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className=" mx-auto text-slate-800 text-center  text-4xl font-bold">
            I hold a Bachelor of Science degree from  Hemwati Nandan <br /> Bahuguna
            Garhwal University, completed between<br /> 2017 and 2020.
          </p>
        }
        className="h-[20rem]  bg-black border-none group-hover/pin:border-white/[0.2]  rounded-md"
      >
        I hold a Bachelor of Science degree from{" "}
        <span className="text-red-500">
          Hemwati Nandan Bahuguna Garhwal University,
        </span>{" "}
        completed between 
        <span className="text-red-500">2017 and 2020. </span>.
      </MaskContainer>
    </div>
  );
}
