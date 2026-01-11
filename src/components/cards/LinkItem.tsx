import { Card } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";
import { LinkButton } from "../links";

type LinkProps = {
	title: string;
	link: string;
	linktext?: string;
	className?: string;
};

export const LinkItem = ({ title, link, className }: LinkProps) => {
	return (
		<Card
			className={cn(
				"border shadow-md hover:shadow-lg transition-shadow py-4 px-2",
				className,
			)}
		>
			<LinkButton variant="ghost" text={title} href={link} />
		</Card>
	);
};
