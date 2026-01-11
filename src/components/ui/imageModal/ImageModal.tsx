"use client";

import { cn } from "@/src/lib/util";
import { Button } from "@src/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@src/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

type ImageModalProps = {
	src: string;
	title?: string;
	maxW?: string;
	disableModal?: boolean;
	border?: string;
};

export const ImageModal = ({
	src,
	title,
	maxW,
	disableModal,
	border = "1px",
}: ImageModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	if (disableModal) {
		return (
			<div
				className={cn(
					"p-4 my-8 w-fit border rounded-lg",
					border === "0" ? "border-0" : "border-border",
				)}
			>
				<Image
					src={src}
					alt={title || ""}
					width={800}
					height={600}
					className={cn("max-w-full", maxW)}
				/>
			</div>
		);
	}

	return (
		<>
			<div
				className={cn(
					"p-4 my-8 w-fit border rounded-lg",
					border === "0" ? "border-0" : "border-border",
				)}
			>
				<button
					type="button"
					className="cursor-zoom-in border-0 bg-transparent p-0"
					onClick={() => setIsOpen(true)}
					aria-label="Click to enlarge image"
				>
					<Image
						src={src}
						alt={title || ""}
						width={800}
						height={600}
						className={cn(
							"max-w-full md:max-w-full",
							maxW && `md:max-w-[${maxW}]`,
						)}
					/>
				</button>
			</div>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="max-w-[90vw] max-h-[90vh]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						{title && (
							<DialogDescription>Click outside to close</DialogDescription>
						)}
					</DialogHeader>
					<div className="flex items-center justify-center overflow-auto">
						<Image
							src={src}
							alt={title || ""}
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
	);
};

export default ImageModal;
