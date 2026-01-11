"use client";

import {
  mdiAlertCircle,
  mdiCheckCircle,
  mdiClose,
  mdiInformation,
} from "@mdi/js";
import { Icon } from "@/src/lib/icon";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-left"
      expand={true}
      toastOptions={{
        classNames: {
          toast: "!border-none",
          icon: "!self-start !mt-0.5",
          success: "!bg-success-bg",
          error: "!bg-sonner-error",
          info: "!bg-info-bg",
          warning: "!bg-warning-bg",
          default: "!bg-info-bg",
          actionButton: "!bg-primary !text-inverse-text !hover:bg-primary-600 !active:bg-primary-700 !rounded-4xl",
          title: "text-sm !text-body-text !font-normal",
          description: "text-sm !text-body-text",
          closeButton: "!absolute !top-3 !right-0 !left-auto !bg-transparent !border-none",
        },
      }}
      {...props}
      icons={{
        success: (
          <div className="text-success">
            <Icon path={mdiCheckCircle} className="size-5" />
          </div>
        ),
        error: (
          <div className="text-danger">
            <Icon path={mdiAlertCircle} className="size-5" />
          </div>
        ),
        info: (
          <div className="text-info">
            <Icon path={mdiInformation} className="size-5" />
          </div>
        ),
        warning: (
          <div className="text-warning">
            <Icon path={mdiAlertCircle} className="size-5" />
          </div>
        ),
        close: (
          <div className="text-neutral-fg">
            <Icon path={mdiClose} className="size-4" />
          </div>
        ),
      }}
    />
  );
};

export { Toaster };
