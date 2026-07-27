"use client";

import type * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/util/index";

const switchVariants = cva(
  "peer data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.10rem] w-8 shrink-0 cursor-pointer items-center justify-start rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "data-[state=checked]:bg-primary",
        danger: "data-[state=checked]:bg-destructive",
        success: "data-[state=checked]:bg-success",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

function Switch({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant, className }))}
      aria-label={props['aria-label'] || props['aria-labelledby'] ? undefined : 'Toggle switch'}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchVariants };
