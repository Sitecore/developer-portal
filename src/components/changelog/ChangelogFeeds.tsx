import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@src/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";
import { mdiCogOutline, mdiOpenInNew, mdiRss } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { LinkButton } from "../links";

type ChangelogFeedsProps = {
	url: string;
};

export const ChangelogFeeds = ({ url }: ChangelogFeedsProps) => {
	const [feedType, setFeedType] = React.useState("1");
	const [titleFilter, setTitleFilter] = React.useState("");
	const [value, setValue] = React.useState("");
	const [hasCopied, setHasCopied] = React.useState(false);

	const generateFeedUrl = React.useCallback(() => {
		const feed = feedType === "1" ? "rss" : "atom";
		const params = new URLSearchParams();

		if (titleFilter) {
			params.append("search", titleFilter);
		}

		setValue(
			`${url}/${feed}.xml${params.toString() ? `?${params.toString()}` : ""}`,
		);
	}, [url, feedType, titleFilter]);

	React.useEffect(() => {
		generateFeedUrl();
	}, [generateFeedUrl]);

	const onCopy = () => {
		navigator.clipboard.writeText(value);
		setHasCopied(true);
		setTimeout(() => setHasCopied(false), 2000);
	};

	return (
		<div className="flex items-center gap-2">
			<LinkButton
				text="RSS"
				href={`${url}/rss.xml`}
				variant="ghost"
				icon={<Icon path={mdiRss} size={1} />}
			/>
			<LinkButton
				text="ATOM"
				href={`${url}/atom.xml`}
				variant="ghost"
				icon={<Icon path={mdiRss} size={1} />}
			/>

			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						aria-label="Customize feed"
						title="Customize feed"
					>
						<Icon path={mdiCogOutline} size={1} />
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="border-0 pt-4">
						<h3 className="text-sm font-semibold">Customize feed</h3>
					</div>
					<div className="py-4">
						<div className="flex flex-col gap-4">
							<div className="flex flex-row gap-4">
								<div>
									<Label>Feed type</Label>
									<RadioGroup
										value={feedType}
										onValueChange={setFeedType}
										className="mt-2"
									>
										<div className="flex flex-row gap-4">
											<div className="flex items-center gap-2">
												<RadioGroupItem value="1" id="rss" />
												<Label htmlFor="rss">RSS</Label>
											</div>
											<div className="flex items-center gap-2">
												<RadioGroupItem value="2" id="atom" />
												<Label htmlFor="atom">Atom</Label>
											</div>
										</div>
									</RadioGroup>
								</div>
							</div>
							<div>
								<Label>Title filter (optional)</Label>
								<Input
									value={titleFilter}
									onChange={(e) => {
										setTitleFilter(e.target.value);
									}}
									placeholder="Title must contain"
									className="mt-2"
								/>
							</div>
						</div>
					</div>
					<div className="border-0 flex items-center justify-between pb-4">
						<Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
						<LinkButton
							text="Preview"
							href={value}
							target="_blank"
							variant="ghost"
							icon={<Icon path={mdiOpenInNew} size={0.5} />}
						/>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
