"use client";

import { Card, CardContent, CardFooter } from "@src/components/ui/card";
import { GetProductLogoByVariant, Type, Variant } from "@src/lib/assets";
import Image from "next/image";
import { useTheme } from "next-themes";
import type React from "react";
import {
	CDP,
	Connect,
	ContentHub,
	ContentHubONE,
	Discover,
	OrderCloud,
	Personalize,
	type ProductInfoType,
	Search,
	Send,
	XMCloud,
	XP,
} from "@/data/products";
import { LinkButton } from "../../links";

type ProductListProps = Record<string, never>;

interface ProductListItemProps {
	product: ProductInfoType;
}

interface ProductListTitleProps {
	title: string;
	description: string;
	children?: React.ReactNode | Array<React.ReactNode> | undefined;
}

export const ProductList: React.FC<ProductListProps> = () => {
	return (
		<div className="my-4">
			<ProductListTitle
				title="Experience Management"
				description="Be better to stand out. Deliver exceptional experiences that differentiate your brand."
			/>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
				<ProductListItem product={XMCloud} />
				<ProductListItem product={Search} />
				<ProductListItem product={Personalize} />
				<ProductListItem product={CDP} />
				<ProductListItem product={Connect} />
				<ProductListItem product={XP} />
				<ProductListItem product={ContentHubONE} />
				<ProductListItem product={Discover} />
				<ProductListItem product={Send} />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
				<ProductListTitle
					title="Content lifecycle"
					description="Take control of your global content lifecycle from strategy to delivery."
				>
					<ProductListItem product={ContentHub} />
				</ProductListTitle>
				<ProductListTitle
					title="Commerce"
					description="Experience limitless possibilities with leading headless ecommerce."
				>
					<ProductListItem product={OrderCloud} />
				</ProductListTitle>
			</div>
		</div>
	);
};

export const ProductListTitle: React.FC<ProductListTitleProps> = ({
	title,
	description,
	children,
}) => {
	return (
		<div>
			<h3 className="text-2xl font-heading">{title}</h3>
			<p className="text-lg my-4 font-sans font-light">{description}</p>
			{children}
		</div>
	);
};

export const ProductListItem: React.FC<ProductListItemProps> = ({
	product,
}) => {
	const { theme } = useTheme();
	const logoSrc =
		theme === "dark"
			? GetProductLogoByVariant(product.type, Variant.Dark, Type.Full)
			: GetProductLogoByVariant(product.type, Variant.Light, Type.Full);

	return (
		<Card className="border shadow-md">
			<CardContent>
				<div className="flex flex-col gap-4 items-start">
					<div className="h-6 w-full relative">
						<Image
							src={logoSrc}
							alt={`${product.name} logo`}
							fill
							style={{ objectFit: "fill" }}
							sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw"
							className="!w-auto"
						/>
					</div>
					<h4 className="text-lg font-heading hidden md:block">
						{product.subTitle}
					</h4>
					<p className="font-sans font-light">{product.description}</p>
				</div>
			</CardContent>
			<CardFooter>
				<LinkButton
					href={product.linkHref}
					text={product.linkText}
					variant="outline"
				/>
			</CardFooter>
		</Card>
	);
};

export default ProductList;
