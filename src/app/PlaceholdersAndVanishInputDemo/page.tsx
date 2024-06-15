"use client";

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { TextGenerateEffectDemo } from '../TextGenerateEffectDemo/page';

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Designed and implemented responsive web interfaces.",
    "integrate APIs",
    "Languages: JavaScript, HTML, CSS",
    "Frameworks: React Js",
    "Tools: Git, npm"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4 mt-5">
     <h2 className="mb-5 sm: text-xl text-center sm:text-5xl dark:text-white text-black">
     What I Do
      </h2>
      <div className="m-auto text-center w-full sm:w-3/4 md:w-1/2 font-thin">
  <TextGenerateEffectDemo />
</div>

      <br />
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
