"use client";

import type * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/util/index";

const tabsListVariants = cva(
  "inline-flex h-9 w-fit items-center justify-center",
  {
    variants: {
      variant: {
        line: "",
        "soft-rounded": "",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  }
);

const tabsTriggerVariants = cva(
  "inline-flex h-9 items-center justify-center gap-1.5 text-md font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        line: "text-neutral-fg data-[state=active]:text-primary-fg border-b-2 border-border-color data-[state=active]:border-primary-fg hover:cursor-pointer px-4",
        "soft-rounded":
          "text-neutral-fg data-[state=active]:text-primary-fg data-[state=active]:bg-primary-bg hover:cursor-pointer px-4 rounded-[9999px]",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  }
);

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, className }))}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, className }))}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
