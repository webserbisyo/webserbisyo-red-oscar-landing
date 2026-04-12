import * as React from "react";
import { cn } from "@/lib/utils";

// --- Section Shell ---
export interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const SectionShell = React.forwardRef<HTMLElement, SectionShellProps>(
  ({ className, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("w-full py-20 md:py-28 lg:py-32", className)}
        {...props}
      />
    );
  }
);
SectionShell.displayName = "SectionShell";

// --- Section Label ---
export interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const SectionLabel = React.forwardRef<HTMLParagraphElement, SectionLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
SectionLabel.displayName = "SectionLabel";

export { SectionShell, SectionLabel };
