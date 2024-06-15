"use client"; // Ensure this directive is present for client components
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container: any) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || "tsparticles"}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                enable: true,
                speed: speed || 4,
              },
              number: {
                density: {
                  enable: true,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 4,
                },
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
