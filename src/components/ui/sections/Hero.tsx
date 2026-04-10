"use client";

import { GuidedDemo } from "@src/components/links/GuidedDemo";
import { CenteredContent, VerticalGroup } from "@src/components/ui/sections";
import { GetProductLogo } from "@src/lib/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroProps = {
	title: string;
	description?: string;
	image?: string;
	productLogo?: string;
	demoId?: string;
	portalURL?: string;
	children?: React.ReactNode | Array<React.ReactNode>;
};

export const Hero = ({
	description,
	title,
	children,
	productLogo,
	demoId,
	portalURL,
}: HeroProps) => {
	const [mounted, setMounted] = useState(false);
	const { theme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	// Determine if dark mode is active
	const isDark =
		mounted &&
		(theme === "dark" || (theme === "system" && systemTheme === "dark"));
	const logoSrc = productLogo
		? GetProductLogo(productLogo, isDark ? "Dark" : "Light")
		: "";

	return (
		<VerticalGroup className="max-w-full border-b border-t border-border-color bg-hero-gradient">
			<CenteredContent className="py-6 px-4 md:py-12 xl:py-16" direction="column">
				{productLogo && logoSrc && (
					<Image src={logoSrc} alt={`${title} logo`} width={280} height={60} />
				)}
				{!productLogo && (
					<h1 className="mb-0 text-4xl font-semibold sm:text-5xl lg:text-6xl font-sans">
						{title}
					</h1>
				)}
				{description && (
					<h2 className="text-sm md:text-xl font-sans font-normal text-neutral-600 dark:text-neutral-400">
						{description}
					</h2>
				)}
				{demoId && (
					<GuidedDemo
						demoId={demoId}
						productName={title}
						productLogo={productLogo}
					/>
				)}
				{portalURL && (
					<a
						href={portalURL}
						target="_blank"
						rel="noopener noreferrer"
						title="Login"
					>
						Login
					</a>
				)}
				{children}
			</CenteredContent>
		</VerticalGroup>
	);
};

export default Hero;
