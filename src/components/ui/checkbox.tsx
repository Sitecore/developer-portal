"use client";

import * as React from "react";
import { mdiCheck } from "@mdi/js";
import { Icon } from "@/src/lib/icon";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/src/lib/util/index";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
          className="data-[state=checked]:border-info-fg data-[state=checked]:bg-info-fg data-[state=checked]:text-inverse-text dark:data-[state=checked]:border-info-fg dark:data-[state=checked]:bg-info-fg"
      >
        <Icon path={mdiCheck} size={0.8} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
