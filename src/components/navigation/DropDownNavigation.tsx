"use client";

import { Button } from "@src/components/ui/button";
import type { ManifestConfig } from "@src/lib/interfaces/manifest";
import { cn } from "@src/lib/utils";
import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import { SidebarGroupItem } from "./SidebarNavigation";

export interface SidebarNavigationProps {
	title?: string;
	showSearch?: boolean;
	config: ManifestConfig;
}

export const DropDownNavigation = ({
	config,
	...rest
}: SidebarNavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="lg:hidden" {...rest}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				variant="outline"
				className="w-full flex items-center justify-between"
			>
				{config.title}
				<Icon
					path={mdiChevronDown}
					size={1}
					className={cn("transition-transform", isOpen && "rotate-180")}
				/>
			</Button>
			{isOpen && (
				<div className="relative">
					<ul className="flex flex-col gap-1 mt-2 w-full">
						{config.routes.map((link) => (
							<SidebarGroupItem {...link} key={link.path || link.title} />
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
