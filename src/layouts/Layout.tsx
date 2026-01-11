// Global

import ScrollToTop from "@src/components/navigation/ScrollToTop";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { cn } from "@src/lib/utils";
import { AlertTriangle } from "lucide-react";
import type React from "react";
import { usePreview } from "@src/context/PreviewContext";
import Meta from "./Meta";

type LayoutProps = {
	title: string;
	baseTitle?: string;
	section?: string;
	description?: string;
	twitterDescription?: string;
	openGraphImage?: string;
	preview?: boolean;
	children: React.ReactNode | Array<React.ReactNode>;
	className?: string;
};

const Layout = ({
	title,
	description = "",
	openGraphImage,
	baseTitle,
	section,
	children,
	className,
}: LayoutProps) => {
	const { isPreview } = usePreview();

	return (
		<main className={cn(className)}>
			<Meta
				title={title}
				description={description}
				baseTitle={baseTitle}
				section={section}
				openGraphImageUrl={openGraphImage}
			/>

			<div className="sr-only">
				<a href="#main-content">Skip to main content</a>
			</div>
			{/* a11y announcement for route changes. */}
			<div className="sr-only" aria-live="polite" aria-atomic="true">
				{`The ${title} page has loaded.`}
			</div>
			<ScrollToTop />
			{isPreview && (
				<Alert
					variant="default"
					className="border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
				>
					<AlertTriangle className="h-4 w-4" />
					<AlertTitle>Preview Mode</AlertTitle>
					<AlertDescription>Preview mode enabled</AlertDescription>
				</Alert>
			)}
			{children}
		</main>
	);
};

export default Layout;
