import { Card, CardContent, CardFooter, CardHeader } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";
import Image from "next/image";
import { LinkButton } from "@src/components/links";
import type { GenericListData } from "./types";

const gridColsMap: Record<number, Record<string, string>> = {
	1: {
		base: "grid-cols-1",
		sm: "sm:grid-cols-1",
		md: "md:grid-cols-1",
		lg: "lg:grid-cols-1",
	},
	2: {
		base: "grid-cols-1",
		sm: "sm:grid-cols-2",
		md: "md:grid-cols-1",
		lg: "lg:grid-cols-2",
	},
	3: {
		base: "grid-cols-1",
		sm: "sm:grid-cols-2",
		md: "md:grid-cols-2",
		lg: "lg:grid-cols-3",
	},
	4: {
		base: "grid-cols-1",
		sm: "sm:grid-cols-2",
		md: "md:grid-cols-2",
		lg: "lg:grid-cols-4",
	},
};

export const GenericList = (props: GenericListData) => {
	const cols = props.column || 4;
	const cardVariant = props.cardVariant || "elevated";
	const buttonVariant = cardVariant === "blurred" ? "ghost" : "outline";
	const gridClasses = gridColsMap[cols] || gridColsMap[4];

	return (
		<div className="w-full px-4 md:px-0">
			<h2 className="text-2xl font-heading font-medium mb-4 md:mb-8 text-center md:text-left">
				{props.title}
			</h2>

			{props.subtitle && props.subtitle !== "" && (
				<h3 className="text-lg font-heading pb-3 md:pb-6 mb-4 md:mb-8 text-center md:text-left">
					{props.subtitle}
				</h3>
			)}

			<div
				className={cn(
					"grid",
					gridClasses.base,
					gridClasses.sm,
					gridClasses.md,
					gridClasses.lg,
					"gap-4 md:gap-6 items-stretch",
				)}
			>
				{props.data.map((item) => {
					const Icon = item.icon;

					return (
						// <Link href={item.href || '#'} key={key} className="flex w-full">
						<Card
							key={item.href || item.title}
							className={cn(
								"mx-auto flex flex-col rounded-xl overflow-hidden transition-all duration-200",
								cardVariant === "blurred"
									? "bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/30"
									: "shadow-md hover:shadow-lg",
								"hover:-translate-y-1 md:hover:-translate-y-1",
							)}
						>
							<CardHeader className="p-0">
								<div className="flex items-center justify-center pt-6 md:pt-10">
									{Icon ? (
										<div className="rounded-full bg-[rgba(235,0,26,0.08)] inline-flex items-center justify-center p-3 md:p-4">
											<Icon className="w-8 h-8 md:w-10 md:h-10" />
										</div>
									) : item.img?.src ? (
										item.img.width && item.img.height ? (
											<Image
												alt=""
												src={item.img.src}
												width={item.img.width}
												height={item.img.height}
												priority
											/>
										) : (
											<div className="relative w-full sm:w-[200px] md:w-full h-[170px] sm:h-full md:h-[170px]">
												<Image
													fill
													alt=""
													src={item.img.src}
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													priority
													className="object-contain"
												/>
											</div>
										)
									) : null}
								</div>
							</CardHeader>

							<CardContent className="p-0">
								<div className="flex flex-col gap-5 p-0">
									<div className="p-4 md:p-5">
										<h3 className="text-lg md:text-xl font-heading mb-2 text-center">
											{item.title}
										</h3>
										<p className="text-sm md:text-base text-center">
											{item.description}
										</p>
										<div className="lg:hidden flex items-center justify-center mt-3">
											<LinkButton
												href={item.href}
												text={item.linkText}
												variant="ghost"
												color="white"
											/>
										</div>
									</div>
								</div>
							</CardContent>

							<CardFooter className="hidden lg:block">
								<div className="flex items-center justify-center mt-2">
									<LinkButton
										href={item.href}
										text={item.linkText}
										variant={buttonVariant}
										color="white"
									/>
								</div>
							</CardFooter>
						</Card>
						// </Link>
					);
				})}
			</div>
		</div>
	);
};
