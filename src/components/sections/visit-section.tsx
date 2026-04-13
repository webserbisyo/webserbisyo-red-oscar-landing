"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section";
import { MapPin, Clock, Phone, Navigation, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import bgAsset from "@/app/assets/background.png";

// Lazy-load Leaflet client-only — prevents SSR window errors
const LeafletMap = dynamic(
  () => import("@/components/map/leaflet-map").then((m) => m.LeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full min-h-[380px] items-center justify-center bg-surface/20">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <MapPin className="h-7 w-7 text-brand animate-pulse" />
          <span className="text-sm">Loading map…</span>
        </div>
      </div>
    ),
  }
);

const ADDRESS = "#38 Paraiso St., Lower Bicutan, Taguig, Philippines";
const GMAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=%2338+Paraiso+St,+Lower+Bicutan,+Taguig,+Philippines";

// Inline button class helper — avoids asChild prop issues with our <button>-only Button primitive
const btn = (variant: "primary" | "ghost", extra?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
    variant === "primary" &&
      "bg-brand text-white hover:bg-brand/90 shadow-md hover:shadow-lg hover:shadow-brand/20",
    variant === "ghost" &&
      "border border-border/50 text-foreground/80 hover:bg-surface/60 hover:text-foreground hover:border-border/80",
    extra
  );

export function VisitSection() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section id="visit" className="relative overflow-hidden bg-background py-24 md:py-32 border-t border-border/20">

      {/* ── Atmospheric background layer ── */}
      {/* Image at high opacity — asset is already dark, no heavy overlay needed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none"
        style={{ opacity: 0.75 }}
      >
        <Image
          src={bgAsset}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 3. Top + bottom edge fade — blends section into surrounding sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 select-none"
        style={{
          background: "linear-gradient(to bottom, #050505 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 select-none"
        style={{
          background: "linear-gradient(to top, #050505 0%, transparent 100%)",
        }}
      />

      {/* ── Foreground content (above all backdrop layers) ── */}
      <Container className="relative z-10 flex flex-col gap-16">

        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionLabel>Find Red Oscar</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1]">
            Visit <span className="font-medium">Red Oscar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Ready to spice up your life? Find us in Lower Bicutan, Taguig for dine-in,
            or grab your order on the go.
          </p>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* LEFT — Info Card — slightly more opaque than before so it lifts off the bg */}
          <motion.div
            className="flex flex-col gap-7 rounded-3xl border border-border/50 bg-background/70 backdrop-blur-md p-8 md:p-10 shadow-2xl ring-1 ring-white/[0.04]"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Location */}
            <div className="flex gap-4 items-start">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <MapPin className="h-4 w-4 text-brand" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand mb-2">
                  Location
                </p>
                <address className="not-italic text-foreground font-medium leading-relaxed text-base">
                  #38 Paraiso St.<br />
                  Lower Bicutan, Taguig<br />
                  Philippines
                </address>
              </div>
            </div>

            <div className="h-px bg-border/40" />

            {/* Hours — CMS placeholder */}
            <div className="flex gap-4 items-start">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
                <Clock className="h-4 w-4 text-foreground/30" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Hours
                </p>
                <p className="text-sm text-foreground/25 italic">Coming soon</p>
              </div>
            </div>

            <div className="h-px bg-border/40" />

            {/* Contact — CMS placeholder */}
            <div className="flex gap-4 items-start">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
                <Phone className="h-4 w-4 text-foreground/30" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Contact
                </p>
                <p className="text-sm text-foreground/25 italic">Coming soon</p>
              </div>
            </div>

            <div className="h-px bg-border/40" />

            {/* Action Buttons — one line */}
            <div className="flex flex-row gap-2.5">
              <a
                href={GMAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className={btn("primary")}
              >
                <Navigation className="h-4 w-4 shrink-0" />
                Get Directions
              </a>
              <button
                onClick={handleCopy}
                className={btn("ghost", copied ? "border-brand/50 text-brand" : "")}
              >
                {copied ? (
                  <><Check className="h-4 w-4 shrink-0" />Copied!</>
                ) : (
                  <><Copy className="h-4 w-4 shrink-0" />Copy Address</>
                )}
              </button>
            </div>

          </motion.div>

          {/* RIGHT — Map Card (isolate creates a stacking context so Leaflet can't bleed above the fixed nav) */}
          <motion.div
            className="relative isolate min-h-[380px] lg:min-h-0 rounded-3xl overflow-hidden border border-border/50 shadow-2xl ring-1 ring-white/[0.04]"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <LeafletMap />
            <div className="absolute inset-0 ring-1 ring-inset ring-background/20 rounded-3xl pointer-events-none" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
