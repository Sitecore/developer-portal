import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/util/index";

const emptyStatesVariants = cva(
  "flex items-center justify-center h-full",
  {
    variants: {
      variant: {
        "no-search-results": "",
        "nothing-created": "",
        error: "",
      },
    },
    defaultVariants: {
      variant: "no-search-results",
    },
  }
);

interface EmptyStatesProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof emptyStatesVariants> {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
}

const emptyStateConfig = {
  "no-search-results": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-magnify-close-neutral",
    imageAlt: "magnifier icon",
    defaultTitle: "No search results",
    defaultDescription: "Try a different search query.",
  },
  "nothing-created": {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-cactus-neutral",
    imageAlt: "desert icon",
    defaultTitle: "No widgets yet",
    defaultDescription: undefined,
  },
  error: {
    imageSrc: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-alert-circle",
    imageAlt: "alert icon",
    defaultTitle: "Something went wrong",
    defaultDescription: "Description of the error.",
  },
};

function EmptyStates({
  className,
  variant = "no-search-results",
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
  ...props
}: EmptyStatesProps) {
  const config = emptyStateConfig[variant || "no-search-results"];
  const finalTitle = title || config.defaultTitle;
  const finalDescription = description || config.defaultDescription;
  const finalImageSrc = imageSrc || config.imageSrc;
  const finalImageAlt = imageAlt || config.imageAlt;

  const defaultActions = {
    "no-search-results": (
      <Button variant="link">Reset search</Button>
    ),
    "nothing-created": (
      <Button variant="default">Create widget</Button>
    ),
    error: (
      <Button variant="link">Try again</Button>
    ),
  };

  const finalActions = actions || defaultActions[variant || "no-search-results"];

  return (
    <div
      data-slot="empty-states"
      className={cn(emptyStatesVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-sm">
        <img
          src={finalImageSrc}
          alt={finalImageAlt}
          className="w-16 h-16"
        />
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-lg font-semibold">{finalTitle}</h2>
          {finalDescription && (
            <p className="text-sm text-muted-foreground">{finalDescription}</p>
          )}
        </div>
        {finalActions}
      </div>
    </div>
  );
}

export { EmptyStates, emptyStatesVariants, type EmptyStatesProps };

