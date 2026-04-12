"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoreInfo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell className="bg-background py-16 md:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Information Column */}
        <motion.div
          initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-10"
        >
          {/* Address Block */}
          <div className="flex gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <MapPin className="h-5 w-5 text-brand" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">Location</h3>
              <address className="not-italic text-muted-foreground leading-relaxed">
                #38 Paraiso St., Lower Bicutan<br />
                Taguig City, Metro Manila<br />
                Philippines
              </address>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button className="w-full sm:w-auto h-11 px-8">
                  <Navigation className="mr-2 h-4 w-4" /> Get Directions
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto h-11 px-8 opacity-80 cursor-not-allowed">
                  Order Now (Soon)
                </Button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-border/50" />

          {/* Hours Block Placeholder */}
          <div className="flex gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface">
              <Clock className="h-5 w-5 text-foreground/70" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">Hours</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex justify-between w-48"><span>Mon - Sun</span> <span>11am - 10pm</span></li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-border/50" />

          {/* Contact Block Placeholder */}
          <div className="flex gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface">
              <Phone className="h-5 w-5 text-foreground/70" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">Contact</h3>
              <p className="text-muted-foreground">
                hello@redoscar.ph<br />
                (02) 8XXX-XXXX
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Map Placeholder Column */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-square w-full rounded-3xl bg-surface/30 border border-border/40 overflow-hidden flex items-center justify-center shadow-lg"
        >
          {/* Subtle decoration to look like a premium map UI placeholder */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-brand/10 blur-[60px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center text-center gap-2">
            <div className="h-14 w-14 rounded-full bg-background border border-brand shadow-xl flex items-center justify-center animate-pulse">
              <MapPin className="h-6 w-6 text-brand" />
            </div>
            <span className="text-sm font-medium text-muted-foreground mt-2 px-3 py-1 bg-background/80 rounded-full border border-border/50 backdrop-blur-sm">
              Interactive Map Coming Soon
            </span>
          </div>
        </motion.div>

      </Container>
    </SectionShell>
  );
}
