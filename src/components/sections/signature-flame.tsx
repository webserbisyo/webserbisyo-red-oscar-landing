"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell, SectionLabel } from "@/components/ui/section";
import fireSushiAsset from "@/app/assets/firesushi.webp";

export function SignatureFlame() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40">
      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

        {/* Text Block - Left */}
        <motion.div
          className="flex flex-col items-start gap-6 max-w-lg order-2 md:order-1"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel>Signature Technique</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Torch-Finished.<br />
            <span className="font-medium">Table-Ready.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-2">
            The intensity of the flame transforms the flavor profile, unlocking rich umami
            characteristics while a subtle smokiness remains. Our signature cuts are kissed
            by fire just moments before they arrive at your table, ensuring an unforgettable
            balance of fresh texture and deep warmth.
          </p>
        </motion.div>

        {/* Media Block - Right (Emotional Payoff) */}
        <motion.div
          className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={fireSushiAsset}
            alt="Signature Flame Sushi Technique"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Edge softening overlay to embed it elegantly and calmly */}
          <div className="absolute inset-0 border border-border/50 rounded-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-background/10 mix-blend-multiply" />
        </motion.div>

      </Container>
    </SectionShell>
  );
}
