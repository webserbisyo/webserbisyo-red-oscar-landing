"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell, SectionLabel } from "@/components/ui/section";
import { Flame, Users, Sparkles } from "lucide-react";

export function WhyRedOscar() {
  const prefersReducedMotion = useReducedMotion();

  const pillars = [
    {
      icon: <Sparkles className="h-6 w-6 text-brand" strokeWidth={1.5} />,
      title: "Signature Flavor",
      description: "A refined intersection of modern Japanese precision and the comforting, rich culinary warmth of the Philippines."
    },
    {
      icon: <Users className="h-6 w-6 text-brand" strokeWidth={1.5} />,
      title: "Made for Gatherings",
      description: "Generous portions and shared platters designed specifically to be the centerpiece of your cravings with friends."
    },
    {
      icon: <Flame className="h-6 w-6 text-brand" strokeWidth={1.5} />,
      title: "Crafted to Stand Out",
      description: "Each dish is rigorously perfected, utilizing flame, smoke, and fresh technique to ensure every bite is unexpected."
    }
  ];

  return (
    <SectionShell className="bg-background py-24 md:py-32 border-y border-border/40">
      <Container className="flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          <SectionLabel>The Standard</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground">
            Why <span className="font-medium">Red Oscar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-surface/30 border border-border/50 hover:bg-surface/50 transition-colors"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : idx * 0.15, ease: "easeOut" }}
            >
              <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </SectionShell>
  );
}
