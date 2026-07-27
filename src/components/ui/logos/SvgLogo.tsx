/* eslint-disable no-unused-vars */

import dynamic from "next/dynamic";

const LANGUAGE_ICON_MAPPING: { [key: string]: string } = {
	nextjs: "nextjs",
	vue: "vue",
	astro: "astro",
	sveltekit: "svelte",
	react: "react",
	reactNative: "reactnative",
	javascript: "javascript",
	dotnet: "dotnet",
	npm: "npm",
	typescript: "typescript",
	powershell: "powershell",
	"c#": "dotnet",
	chatgpt: "chatgpt",
};

export function isValidLogo(value: string): boolean {
	if (LANGUAGE_ICON_MAPPING[value.toLowerCase()]) {
		return true;
	}

	return false;
}

export type LogoComponent = {
	width?: number;
	height?: number;
};

export type IconProps = {
	logo: string;
	width?: number;
	height?: number;
};

export const SvgLogo = ({ logo, width, height }: IconProps) => {
	const LogoComponent = dynamic<LogoComponent>(
		() =>
			import(
				`./logos/logo--${LANGUAGE_ICON_MAPPING[logo.toLowerCase()].toLowerCase()}`
			),
	);

	return <LogoComponent width={width} height={height} />;
};

export default SvgLogo;
