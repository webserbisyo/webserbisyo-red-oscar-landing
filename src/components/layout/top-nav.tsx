"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/app/assets/redoscar-logo.png";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export function TopNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center shrink-0">
              <Image 
                src={logoPng} 
                alt="Red Oscar Label" 
                width={36} 
                height={36} 
                className="object-contain mr-2 drop-shadow-md" 
                priority
              />
              <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-brand transition-colors">
                Red Oscar
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Home
            </Link>
            <Link href="/#signature" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Signature
            </Link>
            <Link href="/#feast" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Feast
            </Link>
            <Link href="/#visit" className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors">
              Visit
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-muted-foreground/50 cursor-not-allowed transition-colors p-2" aria-label="Cart (Soon)" title="Cart (Coming Soon)">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <Button size="sm" className="opacity-80 cursor-not-allowed" title="Ordering coming soon">Order (Soon)</Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button className="text-muted-foreground/50 cursor-not-allowed transition-colors p-2" aria-label="Cart (Soon)">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button
              className="text-foreground p-2"
              aria-label="Open Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
