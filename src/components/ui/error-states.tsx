import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/util/index";

const errorStatesVariants = cva(
  "flex items-center justify-center h-full",
  {
    variants: {
      variant: {
        generic: "",
        "400": "",
        "401": "",
        "403": "",
        "404": "",
        "500": "",
        "503": "",
      },
    },
    defaultVariants: {
      variant: "generic",
    },
  }
);

interface ErrorStatesProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof errorStatesVariants> {
  title?: string;
  description?: React.ReactNode;
  errorCode?: string;
  imageSrc?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  knowledgeBaseUrl?: string;
}

const errorStateConfig = {
  generic: {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-alert",
    imageAlt: "alert",
    defaultTitle: "Something went wrong",
    defaultDescription: (knowledgeBaseUrl?: string) => (
      <>
        (Customizable text) Please try again. If the issue persists, try visiting the{" "}
        <a
          href={knowledgeBaseUrl || "#"}
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Knowledge Base
        </a>{" "}
        for assistance.
      </>
    ),
  },
  "400": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-alert-circle",
    imageAlt: "alert",
    defaultTitle: "Bad request",
    defaultDescription: "(Customizable text) Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    defaultErrorCode: "Error 400",
  },
  "401": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-stop",
    imageAlt: "stop",
    defaultTitle: "Unauthorized",
    defaultDescription: "(Customizable text) Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    defaultErrorCode: "Error 401",
  },
  "403": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock",
    imageAlt: "lock",
    defaultTitle: "Forbidden",
    defaultDescription: "(Customizable text) You don't have permission to access this page.",
    defaultErrorCode: "Error 403",
  },
  "404": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-map-search",
    imageAlt: "map-search",
    defaultTitle: "Page not found",
    defaultDescription: "The page you are looking for cannot be found.",
    defaultErrorCode: "Error 404",
  },
  "500": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-alert-circle?",
    imageAlt: "alert",
    defaultTitle: "Internal server error",
    defaultDescription: "(Customizable text) This page isn't working.",
    defaultErrorCode: "Error 500",
  },
  "503": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-wrench-clock",
    imageAlt: "wrench-clock",
    defaultTitle: "Service unavailable",
    defaultDescription: "(Customizable text) The service you requested is not available at this time.",
    defaultErrorCode: "Error 503",
  },
};

function ErrorStates({
  className,
  variant = "generic",
  title,
  description,
  errorCode,
  imageSrc,
  imageAlt,
  actions,
  knowledgeBaseUrl,
  ...props
}: ErrorStatesProps) {
  const config = errorStateConfig[variant || "generic"];
  const finalTitle = title || config.defaultTitle;
  const finalDescription =
    description ||
    (typeof config.defaultDescription === "function"
      ? config.defaultDescription(knowledgeBaseUrl)
      : config.defaultDescription);
  const finalErrorCode = errorCode || ("defaultErrorCode" in config ? config.defaultErrorCode : undefined);
  const finalImageSrc = imageSrc || config.imageSrc;
  const finalImageAlt = imageAlt || config.imageAlt;

  const defaultActions = {
    generic: (
      <div className="flex flex-col items-center gap-2">
        <Button variant="link">Retry</Button>
        <Button variant="link">Go to homepage</Button>
      </div>
    ),
    "400": (
      <Button variant="link">Go to homepage</Button>
    ),
    "401": (
      <Button variant="link">Go to homepage</Button>
    ),
    "403": (
      <Button variant="link">Go to homepage</Button>
    ),
    "404": (
      <div className="flex flex-col items-center gap-2">
        <Button variant="link">Go to homepage</Button>
        <Button variant="link">Visit knowledge base</Button>
      </div>
    ),
    "500": (
      <Button variant="link">Go to homepage</Button>
    ),
    "503": (
      <Button variant="link">Go to homepage</Button>
    ),
  };

  const finalActions = actions || defaultActions[variant || "generic"];

  return (
    <div
      data-slot="error-states"
      className={cn(errorStatesVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-sm">
        <img
          src={finalImageSrc}
          alt={finalImageAlt}
          className="w-32 h-32"
        />
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="text-2xl font-semibold">{finalTitle}</h1>
          {finalErrorCode && (
            <p className="text-sm text-muted-foreground">{finalErrorCode}</p>
          )}
        </div>
        <p className="text-base">{finalDescription}</p>
        {finalActions}
      </div>
    </div>
  );
}

export { ErrorStates, errorStatesVariants, type ErrorStatesProps };

