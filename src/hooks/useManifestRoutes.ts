import { useEffect, useMemo, useState } from "react";
import type {
	ManifestConfig,
	ManifestNavigationItem,
} from "@src/lib/interfaces/manifest";
import {
	getAllParents,
	getChildren,
	getParent,
	getRouteByFullPath,
	getSiblingItem,
} from "@src/lib/manifestHelper";

/**
 * Custom hook for managing sidebar navigation.
 *
 * @param fileName - The current file name.
 * @param sidebarNavConfig - The configuration for the sidebar navigation.
 * @param currentPath - The current path.
 * @returns An object containing the current, parent, previous, and next navigation items.
 */
const useManifestRoutes = (
	sidebarNavConfig: ManifestConfig,
	currentPath: string,
) => {
	const [currentItem, setCurrentItem] = useState<ManifestNavigationItem | null>(
		null,
	);
	const [previousItem, setPreviousItem] =
		useState<ManifestNavigationItem | null>(null);
	const [nextItem, setNextItem] = useState<ManifestNavigationItem | null>(null);
	const [children, setChildren] = useState<ManifestNavigationItem[] | null>(
		null,
	);
	const [parents, setParents] = useState<ManifestNavigationItem[] | null>(null);
	const [parentItem, setParentItem] = useState<ManifestNavigationItem | null>(
		null,
	);

	const { path, routes } = sidebarNavConfig;

	useEffect(() => {
		const urlSegments: string[] =
			currentPath !== path
				? currentPath.replace(`${path}/`, "").split("/")
				: [];
		const fullPath = urlSegments.join("/");

		let currentItem = getRouteByFullPath(routes, fullPath);
		if (currentItem?.ignoreLink) {
			currentItem = currentItem.children[0] || null;
		}

		if (!currentItem) {
			return;
		}

		const parents = getAllParents(routes, fullPath);
		const nextItem = getSiblingItem(routes, fullPath, true);
		const previousItem = getSiblingItem(routes, fullPath, false);
		const parentItem = getParent(routes, fullPath);
		const children = getChildren(routes, fullPath);

		setCurrentItem(currentItem);
		setChildren(children);
		setParents(parents);
		setNextItem(nextItem);
		setPreviousItem(previousItem);
		setParentItem(parentItem);
	}, [currentPath, path, routes]);

	return useMemo(
		() => ({
			currentItem,
			parentItem,
			previousItem,
			nextItem,
			children,
			parents,
		}),
		[currentItem, parentItem, previousItem, nextItem, children, parents],
	);
};

export default useManifestRoutes;
