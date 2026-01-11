import type { ComponentType } from "react";

export type GenericListData = {
	title: string;
	subtitle: string;
	data: Array<GenericListItem>;
	column?: number;
	cardVariant?: string;
	className?: string;
};

export type GenericListItem = {
	description: string;
	href: string;
	linkText: string;
	title: string;
	img: {
		src: string;
		alt?: string;
		width?: number;
		height?: number;
	};
	color?: string;
	icon?: ComponentType<{ className?: string; size?: number | string }>;
};
