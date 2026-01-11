export type ManifestConfig = {
	title: string;
	description: string;
	heading: boolean;
	path: string;
	showRootAsSections?: boolean;
	enableSearch?: boolean;
	enableBreadcrumb?: boolean;
	enableNextPrevious?: boolean;
	productLogo?: string;
	routes: Array<ManifestNavigationItem>;
	productFeedbackLabel?: string[];
};

export type ManifestNavigationItem = {
	title: string;
	path: string;
	fullPath?: string;
	ignoreLink?: boolean;
	children: Array<ManifestNavigationItem>;
	parents: Array<ManifestNavigationItem>;
	collapsed?: boolean;
	url: string;
};
