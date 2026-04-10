import { Icon } from "@/lib/icon";
import { Button } from "@/src/components/ui/button";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { mdiStarFourPoints } from "@mdi/js";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

export interface ToggleAiAssistantButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  className?: string;
  text?: string;
  responsive?: boolean;
}

export default function ToggleAiAssistantButton({
  className,
  text,
  responsive,
  ...buttonProps
}: ToggleAiAssistantButtonProps): React.ReactNode {
  const isMobile = useIsMobile();

  return (
    <Button
      {...buttonProps}
      aria-label="Toggle AI assistant"
      data-action="openai"
      variant={isMobile ? "ghost" : "default"}
      className={clsx(
        "md:bg-linear-to-r md:from-[#ed2a54] md:to-[#9f36ff] md:text-white",
        "bg-transparent text-primary",
        className,
      )}
      size={responsive && isMobile ? "icon-xs" : "sm"}
    >
      <Icon path={mdiStarFourPoints} size="md" />
      <span className={clsx(responsive && "hidden md:inline")}>{text}</span>
    </Button>
  );
}
