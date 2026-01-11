import { cn } from "@src/lib/utils";
import type * as React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"border-input placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary focus:ring-primary aria-invalid:ring-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white dark:bg-input/30 text-md flex min-h-16 w-full rounded-md border px-3 py-2 transition-[color] outline-none focus:ring-1 focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
