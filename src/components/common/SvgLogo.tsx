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

export type IconProps = {
  logo: Logo;
  className?: string;
};

const SvgLogo = ({ logo, className }: IconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./logos/logo--${logo.toLowerCase()}`));

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 710 210" className={className}>
      <IconContent />
    </svg>
  );
};

SvgLogo.defaultProps = {
  className: '',
};

export default SvgLogo;
