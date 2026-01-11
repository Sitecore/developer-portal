import { Badge } from "@src/components/ui/badge";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import {
	mdiAccount,
	mdiAccountMultipleOutline,
	mdiCalendarOutline,
	mdiFinance,
	mdiTagOutline,
} from "@mdi/js";

// Placeholder for Sitecore icon - replace with actual icon path if needed
const iconSitecore = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5";

import Icon from "@mdi/react";
import type { JSX } from "react";

type AccelerateMetaDataProps = {
	pageInfo: PageInfo;
	className?: string;
};

export const AccelerateMetaData = ({
	pageInfo,
	className,
}: AccelerateMetaDataProps) => {
	if (
		!pageInfo.features &&
		!pageInfo.audience &&
		!pageInfo.topics &&
		!pageInfo.level &&
		!pageInfo.lastUpdated
	) {
		return;
	}

	return (
		<div className={`flex flex-col gap-4 ${className || ""}`}>
			<p className="text-sm uppercase tracking-wide text-muted-foreground mb-0 md:mb-2">
				Meta data
			</p>
			<div className="flex flex-col gap-4">
				{pageInfo.features && (
					<MetaDataField
						field={pageInfo.features}
						label="Features"
						icon={<Icon path={iconSitecore} size={1} />}
					/>
				)}
				{pageInfo.audience && (
					<MetaDataField
						field={pageInfo.audience}
						label="Audience"
						icon={<Icon path={mdiAccountMultipleOutline} size={1} />}
					/>
				)}
				{pageInfo.topics && (
					<MetaDataField
						field={pageInfo.topics}
						label="Topics"
						icon={<Icon path={mdiTagOutline} size={1} />}
					/>
				)}
				{pageInfo.level && (
					<MetaDataField
						field={pageInfo.level}
						label="Level"
						icon={<Icon path={mdiFinance} size={1} />}
					/>
				)}
				{pageInfo.requestedBy && (
					<MetaDataField
						field={pageInfo.requestedBy}
						label="Requested By"
						icon={<Icon path={mdiAccount} size={1} />}
					/>
				)}
				{pageInfo.created && (
					<MetaDataField
						field={new Date(pageInfo.created).toLocaleString("en-US", {
							dateStyle: "medium",
						})}
						label="Created"
						icon={<Icon path={mdiCalendarOutline} size={1} />}
					/>
				)}
				{pageInfo.lastUpdated && (
					<MetaDataField
						field={new Date(pageInfo.lastUpdated).toLocaleString("en-US", {
							dateStyle: "medium",
						})}
						label="Last Updated"
						icon={<Icon path={mdiCalendarOutline} size={1} />}
					/>
				)}
			</div>
		</div>
	);
};

type MetaDataFieldProps = {
	label: string;
	field?: string | string[] | undefined;
	icon?: JSX.Element;
};

const MetaDataField = ({ label, field, icon }: MetaDataFieldProps) => {
	const values = Array.isArray(field) ? field : [field];

	return (
		<div className="flex items-start gap-2">
			<div className="flex items-center gap-2 w-[65%]">
				{icon}
				<p className="text-sm uppercase tracking-wide text-muted-foreground">
					{label}
				</p>
			</div>
			<div className="flex flex-wrap gap-2 w-full">
				{values?.map((audience) => (
					<Badge variant="default" key={audience}>
						{audience}
					</Badge>
				))}
			</div>
		</div>
	);
};
