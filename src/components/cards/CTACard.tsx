import { LinkButton } from "@src/components/links";
import { Card, CardContent } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";

export type CTACardProps = {
	description: string;
	href: string;
	linkText: string;
	link2href?: string;
	link2Text?: string;
	title: string;
	className?: string;
};

export const CTACard = ({
	description,
	href,
	linkText,
	title,
	link2Text,
	link2href,
	className,
}: CTACardProps) => (
	<Card className={cn("bg-muted", className)}>
		<CardContent>
			<h2 className="text-5xl font-heading mb-4">{title}</h2>
			<p className="text-lg mb-6">{description}</p>
			<div className="flex flex-col sm:flex-row gap-4">
				<LinkButton color="white" href={href} text={linkText} size="lg" />
				{link2href && link2Text && (
					<LinkButton href={link2href} text={link2Text} size="lg" />
				)}
			</div>
		</CardContent>
	</Card>
);
