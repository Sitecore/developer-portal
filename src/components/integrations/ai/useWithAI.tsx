"use client";

import { Button } from "@src/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@src/components/ui/tooltip";
import type { PageInfo } from "@src/lib/interfaces/page-info";
import { mdiCheck, mdiContentCopy, mdiLanguageMarkdownOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { toast } from "sonner";
import SvgLogo from "../../ui/logos/SvgLogo";

export type useWithAIProps = {
	pageInfo: PageInfo;
};

export const useWithAI = ({ pageInfo }: useWithAIProps) => {
	const editUrl = "https://github.com/sitecore/developer-portal/edit";
	const rawUrl =
		"https://raw.githubusercontent.com/Sitecore/developer-portal/refs/heads";

	const urltoParse = pageInfo.fileName.replace(editUrl, rawUrl);
	const chatGPTURL = `https://chatgpt.com/?hints=search&q=Read+${encodeURIComponent(urltoParse)}+so+I+can+ask+questions+about+it`;

	const [hasCopied, setHasCopied] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(pageInfo.content || "");
		setHasCopied(true);
		setTimeout(() => setHasCopied(false), 2000);
		toast("Link copied to clipboard");
	};

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm uppercase tracking-wide text-muted-foreground mb-0 md:mb-2">
				Use with AI
			</p>
			<div className="flex items-center gap-0 shadow-sm rounded-md border">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="rounded-r-none border-r-0"
								onClick={onCopy}
							>
								{hasCopied ? (
									<Icon path={mdiCheck} size={1} className="mr-2" />
								) : (
									<Icon path={mdiContentCopy} size={1} className="mr-2" />
								)}
								Copy page
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Copy page as markdown for LLMs</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="rounded-none border-r-0"
								onClick={() => window.open(urltoParse, "_blank")}
							>
								<Icon
									path={mdiLanguageMarkdownOutline}
									size={1}
									className="mr-2"
								/>
								Markdown
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>View as Markdown</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="rounded-l-none"
								onClick={() => window.open(chatGPTURL, "_blank")}
							>
								<span className="mr-2">
									<SvgLogo logo={"chatgpt"} height={20} />
								</span>
								ChatGPT
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Ask questions about this page</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default useWithAI;
