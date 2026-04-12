"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section";

export function BrandStory() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="relative flex items-center justify-center min-h-[50vh] overflow-hidden bg-background">
      
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-8"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          &ldquo;Spice up your life <br className="hidden md:block"/>
          in <span className="font-medium text-brand italic">every unexpected bite.</span>&rdquo;
        </motion.h2>

        <motion.p 
            className="text-lg md:text-xl text-muted-foreground tracking-wide uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
        >
          — The Red Oscar Promise
        </motion.p>
      </Container>

    </SectionShell>
  );
}
