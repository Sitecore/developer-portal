import * as React from "react";
import { mdiAlertCircle, mdiCheckCircle, mdiInformation } from "@mdi/js";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/util/index";
import { Icon } from "@/src/lib/icon";

const alertVariants = cva(
  "relative w-full rounded-md px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-primary-bg [&>svg]:text-primary-500 dark:[&>svg]:text-primary-200",
        primary: "bg-primary-bg [&>svg]:text-primary-500 dark:[&>svg]:text-primary-200",
        danger: "bg-danger-bg [&>svg]:text-danger-500 dark:[&>svg]:text-danger-200",
        warning: "bg-warning-bg [&>svg]:text-warning-500 dark:[&>svg]:text-warning-200",
        success: "bg-success-bg [&>svg]:text-success-500 dark:[&>svg]:text-success-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const variantIcons = {
  default: mdiInformation,
  primary: mdiInformation,
  danger: mdiAlertCircle,
  warning: mdiAlertCircle,
  success: mdiCheckCircle,
};

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {variant && (
        <Icon
          path={variantIcons[variant]}
          size={1.2}
          className="text-current"
        />
      )}
      {props.children}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-md col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
