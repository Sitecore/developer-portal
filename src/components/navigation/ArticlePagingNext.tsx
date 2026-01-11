import { LinkButton } from "@src/components/links";
import { Card, CardContent } from "@src/components/ui/card";
import useManifestRoutes from "@src/hooks/useManifestRoutes";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import { getItemUrl } from "@src/lib/manifestHelper";
import { mdiArrowLeft, mdiArrowRight, mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

export interface ArticlePagingProps {
	enabled?: boolean;
	currentFileName: string;
	config: ManifestConfig;
	currentPath: string;
}

export const ArticlePagingNext = ({
	config,
	currentFileName: _currentFileName,
	enabled = false,
	currentPath,
}: ArticlePagingProps) => {
	const { previousItem, nextItem } = useManifestRoutes(config, currentPath);

	if (!enabled) {
		return null;
	}

	return (
		<div className="flex justify-around">
			<Card className="border shadow-md text-center py-10 px-20">
				<CardContent className="flex flex-col gap-10">
					{nextItem != null && (
						<div className="flex flex-col gap-4">
							<h2 className="text-sm uppercase tracking-wide text-muted-foreground">
								Next step:
							</h2>
							<LinkButton
								variant="default"
								href={getItemUrl(config, nextItem)}
								text={nextItem.title}
								icon={<Icon path={mdiArrowRight} size={1} />}
							/>
						</div>
					)}
					{nextItem == null && (
						<div className="flex flex-col items-center gap-4">
							<Icon
								path={mdiCheckCircleOutline}
								size={3}
								className="text-green-500"
							/>
							<h2 className="text-sm uppercase tracking-wide text-muted-foreground">
								You have completed this tutorial!
							</h2>
						</div>
					)}
					{previousItem != null && (
						<div className="flex flex-col gap-4 mt-10">
							<h2 className="text-sm uppercase tracking-wide text-muted-foreground">
								go back to:
							</h2>
							<LinkButton
								variant="outline"
								href={getItemUrl(config, previousItem)}
								text={previousItem.title}
								icon={<Icon path={mdiArrowLeft} size={1} />}
							/>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};
