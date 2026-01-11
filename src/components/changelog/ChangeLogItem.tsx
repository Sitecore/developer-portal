"use client";

import { Loading } from "@src/components/ui";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@src/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@src/components/ui/dialog";
import type { ChangelogEntry } from "@src/lib/changelog/types";
import { cn } from "@src/lib/utils";
import { getSlug } from "@src/lib/utils/stringUtil";
import { getChangelogEntryUrl } from "@src/lib/utils/urlUtil";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@src/components/links";
import { SocialShare } from "@src/components/ui/socialShare";
import { ChangelogItemMeta } from "./ChangelogItemMeta";

export type ChangeLogItemProps = {
	item: ChangelogEntry;
	loading: boolean;
	isLast: boolean;
	isMore?: boolean;
	loadEntries: () => void;
};

const ChangeLogItem = ({
	item,
	loadEntries,
	isLast,
	isMore,
}: ChangeLogItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const entryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!entryRef?.current) {
			return;
		}

		const observer = new IntersectionObserver(([entry]) => {
			if (isLast && entry.isIntersecting && isMore) {
				loadEntries();
				observer.unobserve(entry.target);
			}
		});

		observer.observe(entryRef.current);
	}, [isLast, isMore, loadEntries]);

	return (
		<>
			<Card ref={entryRef} className="border-0 shadow-none mt-2 mb-8">
				<CardHeader className="pb-4">
					<h2 className="text-xl font-heading" id={getSlug(item.title)}>
						<Link
							href={getChangelogEntryUrl(item)}
							title={item.title}
							className="hover:underline"
						>
							{item.title}
						</Link>
					</h2>
					<ChangelogItemMeta item={item} />
				</CardHeader>
				<CardContent className="py-0">
					{item.image.length > 0 && item.image[0].fileUrl && (
						<>
							<button
								type="button"
								className="relative mb-4 cursor-zoom-in border-0 bg-transparent p-0"
								onClick={() => setIsOpen(true)}
								aria-label={`View full size image for ${item.title || ""}`}
							>
								<Image
									src={item.image[0].fileUrl}
									alt={item.title || ""}
									width={800}
									height={600}
									className="rounded-lg max-w-full"
								/>
							</button>

							<Dialog open={isOpen} onOpenChange={setIsOpen}>
								<DialogContent className="max-w-[90vw] max-h-[90vh]">
									<DialogHeader>
										<DialogTitle>{item.title}</DialogTitle>
										{item.title && (
											<DialogDescription>
												Click outside to close
											</DialogDescription>
										)}
									</DialogHeader>
									<div className="flex items-center justify-center overflow-auto">
										<Image
											src={item.image[0].fileUrl}
											alt={item.title || ""}
											width={1200}
											height={900}
											className="max-w-full max-h-[70vh] object-contain"
										/>
									</div>
									<DialogFooter>
										<Button variant="outline" onClick={() => setIsOpen(false)}>
											Close
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</>
					)}

					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Content from CMS, sanitized by source */}
					<div
						className="prose prose-lg max-w-none my-0 py-0"
						dangerouslySetInnerHTML={{ __html: item.description }}
					/>
				</CardContent>
				<CardFooter
					className={cn("justify-between", !item.readMoreLink && "justify-end")}
				>
					{item.readMoreLink && (
						<LinkButton
							variant="ghost"
							href={item.readMoreLink}
							text="Read more"
							title={`Read more about ${item.title}`}
						/>
					)}
					<SocialShare
						url={getChangelogEntryUrl(item, true)}
						title={`${item.title} - ${item.productName} Changelog - Sitecore`}
					/>
				</CardFooter>
			</Card>

			{isLast && isMore && <Loading />}
		</>
	);
};

export default ChangeLogItem;
