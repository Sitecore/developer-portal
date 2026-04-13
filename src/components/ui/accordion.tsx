"use client";

import { Icon } from "@/lib/icon";
import { mdiChevronDown } from "@mdi/js";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/src/lib/util";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  actions,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  actions?: React.ReactNode;
}) {
  return (
    <AccordionPrimitive.Header className="flex items-center hover:bg-blackAlpha-50 transition-colors w-full min-w-0">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 text-md font-regular flex flex-1 cursor-pointer items-center justify-between gap-4 px-2 py-4 text-left transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 min-w-0",
          className,
        )}
        {...props}
      >
        {children}
        <Icon
          path={mdiChevronDown}
          className="transition-transform duration-200 size-6 shrink-0"
        />
      </AccordionPrimitive.Trigger>
      {actions && (
        <div
          className="flex items-center shrink-0 py-4 px-2"
          onClick={(e) => e.stopPropagation()}
        >
          {actions}
        </div>
      )}
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-md overflow-hidden px-2 py-2"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
