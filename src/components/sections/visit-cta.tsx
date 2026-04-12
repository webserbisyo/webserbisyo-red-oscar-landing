"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell, SectionLabel } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function VisitCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="bg-surface/20 py-24 md:py-32">
      <Container className="flex flex-col items-center justify-center text-center max-w-3xl border border-border/50 bg-background/50 backdrop-blur-sm rounded-3xl p-10 md:p-20 shadow-2xl">

        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center mb-2">
            <MapPin className="h-6 w-6 text-brand" />
          </div>

          <SectionLabel>Your Table Awaits</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Experience <span className="font-medium">Red Oscar</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mt-2">
            We are open daily for lunch and dinner. Secure your spot or order delivery straight to your door.
          </p>

          <address className="not-italic text-lg font-medium text-foreground py-6 px-8 bg-surface/50 rounded-xl mt-4 border border-border/50">
            #38 Paraiso St.<br />
            Lower Bicutan, Taguig, Philippines
          </address>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
              Get Directions
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              Order Now
            </Button>
          </div>
        </motion.div>

      </Container>
    </SectionShell>
  );
}
