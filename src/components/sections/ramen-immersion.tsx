"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell, SectionLabel } from "@/components/ui/section";
import ramenBowlAsset from "@/app/assets/ramenbowl.webp";

export function RamenImmersion() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="relative flex min-h-[80vh] md:min-h-screen items-center justify-center overflow-hidden py-0">
      
      {/* Immersive Parallax Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: prefersReducedMotion ? 1 : 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <Image
          src={ramenBowlAsset}
          alt="Rich Ramen Broth"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic rich overlay prioritizing image clarity and warmth while providing text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-black/60 to-background/80" />
        
        {/* Soft edge gradients mixing into the sections above and below */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <Container className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
        <motion.div
           initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="flex flex-col items-center gap-6"
        >
          <SectionLabel className="text-brand">Immersion</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-tight">
            A Bowl Worth<br />
            <span className="font-medium italic text-foreground/90">Slowing Down For.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
            Shift the tempo. Rich, complex broth simmered for hours, bringing together bold hearty depths with comforting warmth. 
            Every spoonful is crafted to be savored, completely wrapping you in the moment.
          </p>
        </motion.div>
      </Container>

    </SectionShell>
  );
}
