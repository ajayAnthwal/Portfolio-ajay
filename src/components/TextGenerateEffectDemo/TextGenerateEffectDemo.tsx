"use client";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = ` I specialize in building modern and efficient front-end solutions. Whether it's transforming static designs into dynamic web interfaces or optimizing user interactions, I enjoy the challenge of staying at the forefront of web technologies.
 `;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
