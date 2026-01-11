import { cn } from "@src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const cardVariants = cva(
	"flex flex-col gap-6 rounded-xl border transition-shadow",
	{
		variants: {
			elevation: {
				none: "shadow-none",
				xs: "shadow-xs",
				sm: "shadow-sm",
				base: "shadow-base",
				md: "shadow-md",
				lg: "shadow-lg",
			},
			style: {
				flat: "bg-body-bg border-transparent",
				outline: "bg-body-bg border-border-color",
				filled: "bg-subtle-bg border-transparent",
			},
			padding: {
				sm: "px-3 py-3 rounded-base",
				md: "px-5 py-5 rounded-md",
				lg: "px-7 py-7 rounded-lg",
			},
		},
		defaultVariants: {
			elevation: "none",
			style: "flat",
			padding: "lg",
		},
	},
);

function Card({
	className,
	elevation,
	style,
	padding,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
	return (
		<div
			data-slot="card"
			className={cn(cardVariants({ elevation, style, padding }), className)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn("leading-none font-semibold", className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-subtle-text text-sm", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className,
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="card-content" className={cn("", className)} {...props} />
	);
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center [.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
};
