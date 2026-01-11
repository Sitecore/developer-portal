import { cn } from "@src/lib/utils";
import Link from "next/link";

type LinkedHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	id?: string;
};

export const LinkedHeading = ({
	id,
	children,
	className,
	...props
}: LinkedHeadingProps) => (
	<h2 data-group="" className={cn("group", className)} {...props}>
		<span className="content">{children}</span>
		{id && (
			<Link
				href={`?details=${id}`}
				aria-label="anchor"
				className="font-normal text-muted-foreground outline-none opacity-0 group-hover:opacity-100 ml-1.5 transition-opacity"
			>
				<svg
					viewBox="0 0 16 16"
					focusable="false"
					aria-hidden="true"
					className="inline-block w-4 h-4 text-current"
					fill="currentColor"
				>
					<path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z" />
				</svg>
			</Link>
		)}
	</h2>
);
