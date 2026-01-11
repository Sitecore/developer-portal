import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";
import { TextLink } from "@src/components/links/TextLink";
import { SitecoreCommunityNewsOrEventItem } from "../SitecoreCommunityNewsOrEventItem";
import type { SitecoreCommunityEvent } from "../types";

type SitecoreCommunityEventsProps = {
	title?: string;
	data?: Array<SitecoreCommunityEvent>;
	className?: string;
};

export const SitecoreCommunityEvents = ({
	data,
	title,
	className,
}: SitecoreCommunityEventsProps) => {
	if (!data || data.length === 0) {
		return null;
	}

	return (
		<Card className={cn("shadow-none", className)}>
			<CardHeader className="flex justify-between">
				<h3 className="text-2xl font-heading font-normal">
					{title ? title : "Events"}
				</h3>
				<TextLink
					href="https://community.sitecore.com/community?id=community_forum&sys_id=7a84272f1b313c10486a4083b24bcbd5"
					text="See all"
				/>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col md:flex-row gap-8">
					{data.map((event) => (
						<SitecoreCommunityNewsOrEventItem
							{...event}
							categoryTitle="Event"
							key={event.url}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
