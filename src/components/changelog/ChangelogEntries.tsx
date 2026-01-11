"use client";

import { TextLink } from "@src/components/links";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@src/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@src/components/ui/popover";
import type { ChangelogEntry } from "@src/lib/changelog/types";
import { cn } from "@src/lib/utils";
import { mdiRss } from "@mdi/js";
import Icon from "@mdi/react";
import { getSlug } from "@src/lib/utils/stringUtil";
import { getChangelogEntryUrl } from "@src/lib/utils/urlUtil";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type ChangelogEntriesProps = {
	entries: Array<ChangelogEntry>;
	className?: string;
	title?: string;
	linkHref?: string;
	linkText?: string;
	hideProductIcon?: boolean;
	columns?: number;
};

const ChangelogEntries = ({
	entries,
	title = "Sitecore Changelog",
	linkHref = "/changelog",
	linkText = "See all changes",
	hideProductIcon,
	columns,
}: ChangelogEntriesProps) => {
	const { theme } = useTheme();

	if (entries.length === 0) {
		return null;
	}

	return (
		<Card className="border-0 shadow-none">
			<CardHeader className="flex flex-col sm:flex-row justify-between sm:justify-between py-8 items-baseline">
				<h3 className="text-2xl font-heading font-medium flex items-center gap-2">
					{title}
					<Link href="/changelog/rss.xml" className="ml-1">
						<Button
							variant="ghost"
							size="sm"
							aria-label="RSS"
							className="h-6 w-6 p-0"
						>
							<Icon path={mdiRss} size={0.8} />
						</Button>
					</Link>
				</h3>

				<div className="hidden md:block">
					<TextLink href={linkHref} text={linkText} />
				</div>
			</CardHeader>
			<CardContent className={cn("py-2 md:py-4")}>
				<div
					className={cn(
						"grid",
						columns ? `grid-cols-${columns}` : "grid-cols-1",
						"gap-0",
					)}
				>
					{entries.map((entry) => {
						const iconSrc = theme === "dark" ? entry.darkIcon : entry.lightIcon;
						return (
							<div className="flex items-start mb-4" key={entry.id}>
								{!hideProductIcon && (
									<div className="hidden sm:block text-center mr-5 h-[43px] w-[43px]">
										<Image
											src={iconSrc}
											alt={
												entry.productName ? entry.productName : "Product icon"
											}
											width={25}
											height={25}
											priority
											className="m-2"
										/>
									</div>
								)}
								<div className="text-sm">
									<h4 className="text-lg font-heading mb-2">
										<Link
											href={getChangelogEntryUrl(entry)}
											title={entry.title}
											className="text-foreground hover:underline"
										>
											{entry.title}
										</Link>
									</h4>

									<div className="flex flex-row items-center gap-6">
										<p>
											{new Date(entry.releaseDate).toLocaleString("en-US", {
												dateStyle: "medium",
											})}
										</p>

										{entry.products != null && entry.products?.length > 1 ? (
											<div className="flex flex-row items-center gap-0">
												<Popover>
													<div className="flex items-center gap-1">
														{entry.products != null && (
															<Link
																href={`/changelog/${getSlug(entry.products[0].productName)}`}
																className="text-foreground hover:underline"
															>
																{entry.products[0].productName}
															</Link>
														)}
														<PopoverTrigger asChild>
															<Button
																variant="ghost"
																size="sm"
																className="hidden sm:inline-flex h-auto py-0"
															>
																+ {entry.products.length - 1}{" "}
																<span className="hidden md:inline">
																	{entry.products.length === 1
																		? "other"
																		: "others"}
																</span>
															</Button>
														</PopoverTrigger>
													</div>
													<PopoverContent className="p-2 max-w-xs">
														<div className="flex flex-col gap-2">
															{entry.products?.slice(1).map((product) => {
																const productIconSrc =
																	theme === "dark"
																		? product.darkIcon
																		: product.lightIcon;
																return (
																	<div
																		key={product.id || product.productName}
																		className="flex items-center gap-2"
																	>
																		<Image
																			src={productIconSrc}
																			alt={
																				product.productName
																					? product.productName
																					: "Product icon"
																			}
																			width={15}
																			height={15}
																			priority
																		/>
																		<Link
																			href={`/changelog/${getSlug(product.productName)}`}
																			className="text-foreground hover:underline"
																		>
																			{product.productName}
																		</Link>
																	</div>
																);
															})}
														</div>
													</PopoverContent>
												</Popover>
											</div>
										) : (
											entry.products != null && (
												<Link
													href={`/changelog/${getSlug(entry.products[0].productName)}`}
													key={
														entry.products[0].id ||
														entry.products[0].productName
													}
													className="text-foreground hover:underline"
												>
													{entry.products[0].productName}
												</Link>
											)
										)}

										{entry.changeTypeName != null && (
											<Badge
												variant="default"
												colorScheme={
													entry.changeTypeName === "Resolved"
														? "neutral"
														: entry.changeTypeName === "New feature"
															? "primary"
															: "neutral"
												}
												className="text-xs"
											>
												{entry.changeTypeName}
											</Badge>
										)}
										{entry.breakingChange && (
											<Badge variant="bold" className="text-xs">
												Action required
											</Badge>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</CardContent>
			<CardFooter className="md:hidden py-0 self-end">
				<TextLink href={linkHref} text={linkText} />
			</CardFooter>
		</Card>
	);
};

export default ChangelogEntries;
