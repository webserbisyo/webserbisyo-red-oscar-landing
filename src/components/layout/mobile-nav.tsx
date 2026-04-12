"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent scrolling when mobile nav is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Nav Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background/95 backdrop-blur-md shadow-2xl border-l border-border px-6 py-6"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-medium tracking-wide">Explore</span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link href="/" onClick={onClose} className="text-2xl font-light text-foreground/80 hover:text-brand transition-colors">
                Home
              </Link>
              <Link href="/#signature" onClick={onClose} className="text-2xl font-light text-foreground/80 hover:text-brand transition-colors">
                Signature
              </Link>
              <Link href="/#feast" onClick={onClose} className="text-2xl font-light text-foreground/80 hover:text-brand transition-colors">
                Feast
              </Link>
              <Link href="/visit" onClick={onClose} className="text-2xl font-light text-foreground/80 hover:text-brand transition-colors">
                Visit
              </Link>
            </nav>

            <div className="mt-auto flex flex-col gap-4 pb-8">
              <div className="flex gap-4 mb-4">
                <Button variant="ghost" className="flex-1 justify-start px-0 text-muted-foreground/50 cursor-not-allowed">
                  Sign In (Soon)
                </Button>
                <Button variant="ghost" className="flex-1 justify-end px-0 text-muted-foreground/50 cursor-not-allowed">
                  Cart (Soon)
                </Button>
              </div>
              <Button size="lg" className="w-full opacity-80 cursor-not-allowed">
                Order (Soon)
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
