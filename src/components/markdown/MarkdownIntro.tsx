import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";

type MarkdownIntroProps = {
	children: React.ReactNode | Array<React.ReactNode>;
	title: string;
	className?: string;
};

export const MarkdownIntro = ({
	children,
	title,
	className,
}: MarkdownIntroProps) => {
	return (
		<Card className={cn("border bg-muted py-4 px-2", className)}>
			<CardHeader>
				<h3 className="text-sm font-heading">{title}</h3>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
};
