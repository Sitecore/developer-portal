import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/src/lib/util/index";

const spinnerVariants = cva("size-4 animate-spin", {
  variants: {
    variant: {
      default: "text-neutral-fg",
      primary: "text-primary-fg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Spinner({
  className,
  variant,
  ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Spinner, spinnerVariants };
