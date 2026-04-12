"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell, SectionLabel } from "@/components/ui/section";
import manySushiAsset from "@/app/assets/many-sushi.webp";

export function Feast() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="relative overflow-hidden bg-surface/20 py-24 md:py-32">
      <Container className="flex flex-col items-center gap-16">
        
        {/* Intro Copy */}
        <motion.div 
          className="flex flex-col items-center text-center gap-6 max-w-2xl"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel>Gather & Share</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            The Feast <span className="font-medium text-brand">Centerpiece</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Crafted for the whole table to enjoy. Whether bringing family together or turning a 
            gathering with friends into a cinematic experience, our grand platters ensure that every 
            guest gets a taste of the extraordinary.
          </p>
        </motion.div>

        {/* Grand Media Presentation */}
        <motion.div 
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border/30"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={manySushiAsset}
            alt="Red Oscar Feast Platter"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          {/* Edge softening so it doesn't look like a harsh pasted image */}
          <div className="absolute inset-0 ring-1 ring-inset ring-background/10 rounded-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-background/5 mix-blend-overlay" />
        </motion.div>

      </Container>
    </SectionShell>
  );
}
