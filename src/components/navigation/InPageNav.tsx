import { Button } from "@src/components/ui/button";
import type { ContentHeading } from "@src/lib/interfaces/contentheading";
import { cn } from "@src/lib/utils";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import useInPageNavigation from "@src/hooks/useInPageNavigation";

type InPageNavProps = {
	title?: string;
	titles: Array<ContentHeading>;
	className?: string;
	mt?: string | number;
};

const InPageNav = ({ title, titles, className, mt }: InPageNavProps) => {
	const links = useInPageNavigation(titles, true);

	return (
		<nav
			className={cn(
				"flex flex-col",
				mt ? `mt-${mt}` : "mt-0 md:mt-10",
				"mr-0 p-2 md:p-0 w-48",
				"hidden xl:block",
				className,
			)}
		>
			<h2 className="text-sm uppercase tracking-wide text-muted-foreground mb-0 md:mb-2">
				{title ? title : "Table of contents"}
			</h2>
			<div className="flex flex-col gap-1 -mx-2">
				{links.map((link) => {
					return (
						<Button
							asChild
							variant="ghost"
							key={link.href || link.text}
							className="justify-start"
						>
							<a href={link.href} className="flex items-center gap-2">
								<Icon path={mdiChevronRight} size={0.8} />
								{link.text}
							</a>
						</Button>
					);
				})}
			</div>
		</nav>
	);
};

export default InPageNav;
