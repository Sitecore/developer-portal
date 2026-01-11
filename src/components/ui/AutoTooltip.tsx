"use client";

import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// ============================================
// AUTO TOOLTIP - White with Colored Header
// ============================================

interface AutoTooltipProps {
	title: string;
	description: string;
	linkHref: string;
	linkText: string;
	isExternal?: boolean;
	delay?: number;
	onClose?: () => void;
	storageKey?: string; // NEW: Allow custom storage key
}

export const AutoTooltip: React.FC<AutoTooltipProps> = ({
	title,
	description,
	linkHref,
	linkText,
	isExternal = false,
	delay = 1000,
	onClose,
	storageKey = "autoTooltipShown", // NEW: Default storage key
}) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Check if tooltip has already been shown in this session
		const hasShown = sessionStorage.getItem(storageKey);

		if (hasShown) return;

		const timer = setTimeout(() => {
			setIsVisible(true);
			// Mark as shown
			sessionStorage.setItem(storageKey, "true");
		}, delay);

		return () => clearTimeout(timer);
	}, [delay, storageKey]);

	const handleClose = () => {
		setIsVisible(false);
		if (onClose) onClose();
	};

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl max-w-[320px] z-[9999] overflow-hidden animate-in slide-in-from-right duration-300">
			{/* Colored Header */}
			<div className="flex justify-between items-center p-3 bg-primary text-white">
				<h4 className="text-xs font-heading text-white">{title}</h4>
				<button
					type="button"
					className="h-6 w-6 p-0 text-white/80 hover:text-white"
					onClick={handleClose}
					aria-label="Close"
				>
					<X className="h-4 w-4" />
				</button>
			</div>

			{/* White Body */}
			<div className="p-4">
				<p className="text-xs text-gray-700 mb-3">{description}</p>

				{isExternal ? (
					<a
						href={linkHref}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs text-primary-600 font-bold flex items-center gap-1 hover:text-primary-700 hover:underline"
					>
						{linkText}
						<ExternalLink className="h-3 w-3" />
					</a>
				) : (
					<Link
						href={linkHref}
						className="text-xs text-primary-600 font-bold flex items-center gap-1 hover:text-primary-700 hover:underline"
					>
						{linkText} →
					</Link>
				)}
			</div>
		</div>
	);
};

export default AutoTooltip;
