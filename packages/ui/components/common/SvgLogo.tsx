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
  className?: string;
};

export type IconProps = {
  logo: Logo;
  className?: string;
};

const SvgLogo = ({ logo, className }: IconProps): JSX.Element => {
  const LogoComponent = dynamic<LogoComponent>(() => import(`./logos/logo--${logo.toLowerCase()}`));

  return <LogoComponent className={className} />;
};
export default SvgLogo;
