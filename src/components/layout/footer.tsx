"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import logoPng from "@/app/assets/redoscar-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#020202] py-16 md:py-24 border-t border-border/20">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

        {/* Brand Block */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={logoPng}
              alt="Red Oscar Footer Logo"
              width={64}
              height={64}
              className="object-contain drop-shadow-md shrink-0"
            />
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Red Oscar
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Spice up your life in every unexpected bite. The premier Japanese-Filipino fusion house.
          </p>
        </div>

        {/* Space Column */}
        <div className="hidden md:block col-span-1" />

        {/* Links Column */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-foreground mb-2">Explore</h4>
          <a href="#home" className="text-sm text-muted-foreground hover:text-brand transition-colors w-max">Home</a>
          <a href="#signature" className="text-sm text-muted-foreground hover:text-brand transition-colors w-max">Signature Flame</a>
          <a href="#feast" className="text-sm text-muted-foreground hover:text-brand transition-colors w-max">Feasts</a>
          <a href="#visit" className="text-sm text-muted-foreground hover:text-brand transition-colors w-max">Visit Us</a>
        </div>

        {/* Location & Contact */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-foreground mb-2">Location</h4>
          <address className="not-italic text-sm text-muted-foreground leading-loose">
            #38 Paraiso St.<br />
            Lower Bicutan, Taguig<br />
            Philippines
          </address>
          <p className="text-sm text-muted-foreground mt-2">
            info@redoscar.ph
          </p>
        </div>

      </Container>

      <Container className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Red Oscar Food House. All rights reserved.</p>
        <p>Powered By Web Serbisyo.</p>
      </Container>
    </footer>
  );
}
