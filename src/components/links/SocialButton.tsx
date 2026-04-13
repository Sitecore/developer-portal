import { Button } from "@src/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import Link from "next/link";
import type { JSXElementConstructor, ReactElement } from "react";

type SocialButtonProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  label: string;
  href: string;
};

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" asChild>
            <Link href={href} aria-label={label}>
              {children}
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
