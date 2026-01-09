'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CenteredContent, VerticalGroup } from '@components/ui/sections';
import { GetProductLogo } from '../../../lib/assets';

import { GuidedDemo } from '../../links/GuidedDemo';

export type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  productLogo?: string;
  demoId?: string;
  portalURL?: string;
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const Hero = ({ description, title, children, productLogo, demoId, portalURL }: HeroProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDark = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'));
  const logoSrc = productLogo ? GetProductLogo(productLogo, isDark ? 'Dark' : 'Light') : '';

  return (
    <VerticalGroup className="max-w-full border-b border-border bg-gradient-to-br from-[#dedbff] via-[#f9f9f9] to-[#ffcfcf] dark:from-[#2c2c4a] dark:via-[#1a1a1a] dark:to-[#4a2c2c]">
      <CenteredContent className="py-6 md:py-12 xl:py-16" direction="column">
        {productLogo && logoSrc && <Image src={logoSrc} alt={`${title} logo`} width={280} height={60} />}
        {!productLogo && <h1 className="text-2xl md:text-4xl xl:text-6xl font-heading font-normal">{title}</h1>}
        {description && <h2 className="text-sm md:text-xl font-heading font-normal tracking-wider text-neutral-600 dark:text-neutral-400">{description}</h2>}
        {demoId && <GuidedDemo demoId={demoId} productName={title} productLogo={productLogo} />}
        {portalURL && <a href={portalURL} target="_blank" rel="noopener noreferrer" title="Login" />}
        {children}
      </CenteredContent>
    </VerticalGroup>
  );
};

export default Hero;
