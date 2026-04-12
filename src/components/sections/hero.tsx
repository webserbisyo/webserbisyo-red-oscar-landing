"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

// Static asset import allows Next.js to auto-determine width/height, preventing layout shifts
import fireSushiAsset from "@/app/assets/firesushi.webp";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-background pt-20">
      {/* Background Media Layer (Right Aligned / Cinematic Overlap) */}
      <div className="absolute inset-0 z-0 flex items-center justify-end">
        <motion.div
          className="relative h-full w-full md:w-[75%] lg:w-[65%]"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} // smooth, non-chaotic ease
        >
          {/* Main Visual */}
          <Image
            src={fireSushiAsset}
            alt="Flame-kissed sushi"
            fill
            priority
            className="object-cover object-center md:object-[35%_center]"
            sizes="(max-width: 768px) 100vw, 75vw"
          />

          {/* Left-to-Right Dark Gradient: Softened to preserve text readability while unmasking the authentic left edge of the sushi tray and flame */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-30% to-transparent md:via-background/30" />

          {/* Subtle vignette/fade at the bottom so it flows nicely into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>

      {/* Content Layer */}
      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col items-start gap-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-3 text-brand text-sm font-medium tracking-[0.2em] uppercase">
            <span className="h-px w-8 bg-brand opacity-60"></span>
            Red Oscar
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-foreground">
            Crafted Heat.<br />
            <span className="font-medium">Premium Flavor.</span>
          </h1>

          {/* Supportive Copy */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Spice up every unexpected bite. Experience a sophisticated fusion
            of Japanese tradition and Filipino warmth, flame-finished to perfection.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
              Order Now
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              Visit Red Oscar
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
