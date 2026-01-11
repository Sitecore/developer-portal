import { Icon } from "@src/components/lib/icon";
import { Button } from "@src/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@src/components/ui/navigation-menu";
import { GetProductLogoByVariant, Product, Type, Variant } from "@src/lib/assets";
import { mdiClose, mdiDotsGrid, mdiMenu } from "@mdi/js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { mainNavigation } from "@/data/data-navigation";
import UserAccount from "@src/components/authentication/UserAccount";
import { PreviewSearchInput } from "@src/components/integrations/sitecore-search";
import { cn } from "@src/components/lib/utils";
import { ProductIcon } from "@src/components/ui/logos";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { QuickStartMenu } from "./QuickStartMenu";
import { SearchButton } from "./SearchButton";

export type TopNavProps = {
	searchEnabled?: boolean;
};

export default function TopNav({ searchEnabled }: TopNavProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [focusedOnSearch, setFocusedOnSearch] = useState(false);
	const router = useRouter();
	const { theme } = useTheme();

	return (
		<header className="border-b bg-body-bg">
			<div className="flex h-16 items-center px-4 justify-between">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Button
							variant="ghost"
							size="icon"
							colorScheme="neutral"
							aria-label="Menu"
						>
							<Icon path={mdiDotsGrid} size={1} />
						</Button>
						<div className="flex items-center gap-1">
							<span className="text-xl font-bold text-red-500">
								<Image
									alt="Logo"
									className="shrink-0 grow-0 rounded-md object-cover object-left p-1 block"
									src={getLogoByPath(router.asPath, theme) || ""}
									width={40}
									height={40}
								/>
							</span>
							<span className="text-lg font-semibold"></span>
						</div>
					</div>

					{/* Navigation Menu */}
					<NavigationMenu className="ml-6 md:inline-flex hidden">
						<NavigationMenuList>
							{mainNavigation.map((navItem) =>
								navItem.url && !navItem.children ? (
									<NavigationMenuItem key={navItem.url || navItem.title}>
										<NavigationMenuLink
											href={navItem.url || "#"}
											className={navigationMenuTriggerStyle()}
										>
											{navItem.title}
										</NavigationMenuLink>
									</NavigationMenuItem>
								) : (
									<NavigationMenuItem key={navItem.url || navItem.title}>
										<NavigationMenuTrigger>
											{navItem.title}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											{navItem.type === "grouped" ? (
												<div className="flex w-[800px] gap-5 p-4 md:w-[1000px] md:grid-cols-5 lg:w-[1000px]">
													<div className="py-2">
														<div
															className={cn(
																"flex flex-row flex-wrap gap-6 w-full max-w-[60vw]",
															)}
														>
															{navItem.children?.map((item) => (
																<div key={item.url || item.title}>
																	<span className="block mb-4 font-sans font-semibold">
																		{item.title}
																	</span>
																	<ul
																		className={`grid gap-2 ${(item.children?.length ?? 0) > 5 ? "grid-cols-2" : ""}`}
																	>
																		{item.children?.map((product) => (
																			<ProductListItem
																				key={product.url || product.title}
																				href={product.url}
																				title={product?.title}
																			>
																				<ProductIcon
																					product={
																						product.logo || Product.Sitecore
																					}
																					height="20px"
																					width="32px"
																				/>
																			</ProductListItem>
																		))}
																	</ul>
																</div>
															))}
														</div>
													</div>
												</div>
											) : navItem.type === "cta" ? (
												<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-neutral-fg-inverse">
													<li className="row-span-4">
														<NavigationMenuLink
															asChild
															className="bg-hero-gradient"
														>
															<a
																className="flex flex-col justify-end p-6 w-full h-full no-underline rounded-md outline-none select-none bg-linear-to-b from-muted/50 to-muted focus:shadow-md"
																href={navItem?.children?.[0]?.url || "#"}
															>
																<div className="mt-2 mb-2 text-lg font-medium">
																	{navItem?.children?.[0]?.title}
																</div>
																<p className="text-sm leading-tight text-muted-foreground">
																	{navItem?.children?.[0]?.subTitle}
																</p>
															</a>
														</NavigationMenuLink>
													</li>
													{navItem?.children?.slice(1).map((child) => (
														<ListItem
															key={child.title}
															href={child.url}
															title={child.title}
														/>
													))}
												</ul>
											) : null}
										</NavigationMenuContent>
									</NavigationMenuItem>
								),
							)}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-2">
					{searchEnabled && (
						<>
							<div className="hidden 3xl:block">
								<PreviewSearchInput
									rfkId="rfkid_6"
									defaultItemsPerPage={6}
									onFocus={() => setFocusedOnSearch(true)}
									onBlur={() => setFocusedOnSearch(false)}
									className={cn(
										"flex transition-all duration-100 ease-in-out",
										focusedOnSearch ? "w-2xl" : "w-lg",
									)}
								/>
							</div>

							<div className="3xl:hidden xl:block">
								<SearchButton />
							</div>
						</>
					)}

					<Button
						onClick={() => setIsOpen(!isOpen)}
						variant="ghost"
						size="sm"
						aria-label="Toggle Navigation"
						className="xl:hidden"
					>
						{isOpen ? (
							<Icon path={mdiClose} size={1} />
						) : (
							<Icon path={mdiMenu} size={1.25} />
						)}
					</Button>
					<DarkModeSwitch />
					<QuickStartMenu key={router.asPath} />
					<UserAccount />
				</div>
			</div>
		</header>
	);
}

function getLogoByPath(
	asPath: string,
	theme: string | undefined,
): string | undefined {
	// Default to developer logo
	let logo: Product = Product.SitecoreDevelopers;

	// Use the Sitecore logo for the roadmap pages
	if (asPath.includes("/roadmap")) {
		logo = Product.Sitecore;
	}
	return theme === "dark"
		? GetProductLogoByVariant(logo, Variant.Dark, Type.Full)
		: GetProductLogoByVariant(logo, Variant.Light, Type.Full);
}

const MenuItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, href }, ref) => {
	return (
		<NavigationMenuItem className={className}>
			<NavigationMenuLink
				href={href}
				ref={ref}
				className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
			>
				{title}
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
});
MenuItem.displayName = "MenuItem";

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block p-3 space-y-1 leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

const ProductListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"flex flex-row gap-4 items-center leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					{children}
					<div className="text-sm font-medium leading-none">{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ProductListItem.displayName = "ProductListItem";
