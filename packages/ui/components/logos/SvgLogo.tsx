import dynamic from 'next/dynamic';

export enum Logo {
  Nextjs = 'nextjs',
  Vue = 'vue',
  Astro = 'astro',
  Sveltekit = 'svelte',
  React = 'react',
  ReactNative = 'reactnative',
  JavaScript = 'javascript',
  DOTNET = 'dotnet',
  NPM = 'npm',
}

export function isValidLogo(value: string): boolean {
  return Object.values(Logo).some((option) => option.toLowerCase() === value.toLowerCase());
}

export type LogoComponent = {
  width?: number;
  height?: number;
};

export type IconProps = {
  logo: Logo;
  width?: number;
  height?: number;
};

const SvgLogo = ({ logo, width, height }: IconProps): JSX.Element => {
  const LogoComponent = dynamic<LogoComponent>(() => import(`./logos/logo--${logo.toLowerCase()}`));

  return <LogoComponent width={width} height={height} />;
};
export default SvgLogo;
