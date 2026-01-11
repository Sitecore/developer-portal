"use client";

import { Icon } from "@src/components/lib/icon";
import { buttonVariants } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { mdiClose } from "@mdi/js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

function Dialog({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
				className,
			)}
			{...props}
		/>
	);
}

interface DialogContentProps
	extends React.ComponentProps<typeof DialogPrimitive.Content> {
	size?: "sm" | "md" | "lg" | "xl" | "full";
}

function DialogContent({
	className,
	children,
	size = "md",
	...props
}: DialogContentProps) {
	const sizeClasses: Record<NonNullable<DialogContentProps["size"]>, string> = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-2xl",
		xl: "max-w-4xl",
		full: "w-screen h-screen max-w-none max-h-none rounded-none p-0",
	};

	function hasCloseButton(node: React.ReactNode): boolean {
		let found = false;

		React.Children.forEach(node, (child) => {
			if (found) return;

			if (
				React.isValidElement(child) &&
				(child.type === DialogClose || child.type === DialogPrimitive.Close)
			) {
				found = true;
			} else if (
				React.isValidElement(child) &&
				child.props &&
				typeof child.props === "object" &&
				"children" in child.props
			) {
				found = hasCloseButton(child.props.children as React.ReactNode);
			}
		});

		return found;
	}

	const hasCustomCloseButton = hasCloseButton(children);

	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(
					"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200",
					size === "full"
						? sizeClasses[size]
						: "max-w-[calc(100%-2rem)] rounded-lg px-7 py-5",
					size !== "full" && sizeClasses[size],
					className,
				)}
				{...props}
			>
				{children}

				{!hasCustomCloseButton && (
					<DialogPrimitive.Close
						className={cn(
							buttonVariants({
								variant: "ghost",
								size: "icon",
								colorScheme: "neutral",
							}),
							"absolute top-2.5 right-4 min-w-0 opacity-70 transition-opacity hover:opacity-100",
						)}
					>
						<Icon path={mdiClose} size={0.9} />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
			{...props}
		/>
	);
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-2 pt-5 sm:flex-row sm:justify-end",
				className,
			)}
			{...props}
		/>
	);
}

function DialogTitle({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn("pb-5 text-lg leading-none font-semibold", className)}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
