"use client";

import { Button } from "@src/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@src/components/ui/tooltip";
import {
	mdiCheck,
	mdiChevronLeft,
	mdiChevronRight,
	mdiContentCopy,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
	EmailIcon,
	EmailShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	RedditIcon,
	RedditShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "next-share";
import { useState } from "react";
import { toast } from "sonner";

type SocialShareProps = {
	url: string;
	title: string;
};

export const SocialShare = ({ title, url }: SocialShareProps) => {
	const [hasCopied, setHasCopied] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(url);
		setHasCopied(true);
		setTimeout(() => setHasCopied(false), 2000);
		toast("Link copied to clipboard");
	};

	return (
		<div className="flex items-center gap-0">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							aria-label="More sharing methods"
							onClick={() => setIsOpen(!isOpen)}
							className="h-8 w-8 p-0 mx-1"
						>
							<Icon path={isOpen ? mdiChevronRight : mdiChevronLeft} size={1} />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>More sharing methods</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			{isOpen && (
				<div className="flex items-center gap-0">
					<WhatsappShareButton url={url} title={title}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										aria-label="Share by Whatsapp"
										className="h-8 w-8 p-0"
									>
										<WhatsappIcon size={32} round />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Share link by Whatsapp</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</WhatsappShareButton>
					<TelegramShareButton url={url} title={title}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										aria-label="Share by Telegram"
										className="h-8 w-8 p-0"
									>
										<TelegramIcon size={32} round />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Share link by Telegram</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</TelegramShareButton>
					<RedditShareButton url={url} title={title}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										aria-label="Share by Reddit"
										className="h-8 w-8 p-0"
									>
										<RedditIcon size={32} round />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Share link by Reddit</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</RedditShareButton>
					<TwitterShareButton url={url} title={title}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										aria-label="Share on X"
										className="h-8 w-8 p-0"
									>
										<TwitterIcon size={32} round />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Share link on X</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</TwitterShareButton>
				</div>
			)}

			<EmailShareButton url={url} title={title}>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								aria-label="Share by email"
								className="h-8 w-8 p-0"
							>
								<EmailIcon size={32} round />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Share link by email</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</EmailShareButton>

			<LinkedinShareButton url={url} title={title}>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								aria-label="Share on LinkedIn"
								className="h-8 w-8 p-0"
							>
								<LinkedinIcon size={32} round />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Share link on LinkedIn</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</LinkedinShareButton>

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							onClick={onCopy}
							aria-label="Copy"
							variant="ghost"
							size="sm"
							className="mx-1"
						>
							{hasCopied ? (
								<>
									<Icon path={mdiCheck} size={1} className="mr-1" />
									Copied!
								</>
							) : (
								<>
									<Icon path={mdiContentCopy} size={1} className="mr-1" />
									Copy
								</>
							)}
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Copy link to clipboard</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export default SocialShare;
