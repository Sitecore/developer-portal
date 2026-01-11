import { cn } from "@src/lib/utils";
import type * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-inverse-text dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-sm border bg-body-bg px-3 py-1 text-base transition-[color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-primary",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				"border-input focus:border-primary focus:ring-primary text-md font-regular placeholder-blackAlpha-400 rounded-md border focus:ring-1",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
