"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section";
import { motion, useReducedMotion } from "motion/react";

export function VisitHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="relative flex min-h-[40vh] items-end pb-16 pt-32 overflow-hidden bg-background border-b border-border/30">
      <Container className="relative z-10">
        <motion.div
           initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 text-brand text-sm font-medium tracking-[0.2em] uppercase mb-4">
            <span className="h-px w-8 bg-brand opacity-60"></span>
            Location
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-foreground leading-tight mb-4">
            Visit Red Oscar
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to spice up your life? Find us in Taguig for dine-in, or quickly place your pickup order to grab unexpected flavor on the go.
          </p>
        </motion.div>
      </Container>
    </SectionShell>
  );
}
