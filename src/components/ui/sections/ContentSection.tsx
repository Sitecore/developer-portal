import { cn } from "@src/lib/utils";
import React from "react";

type ContentSectionProps = React.HTMLAttributes<HTMLElement>;

export const ContentSection = React.forwardRef<
	HTMLElement,
	ContentSectionProps
>(({ className, ...props }, ref) => (
	<section
		ref={ref}
		id="contentSection"
		className={cn(
			"flex flex-col items-center justify-start",
			"px-2 2xl:px-0",
			"text-black dark:text-white",
			"transition-all duration-150 ease-out",
			className,
		)}
		{...props}
	/>
));
ContentSection.displayName = "ContentSection";
