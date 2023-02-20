// Interfaces
import { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
import Image from 'next/image';
import React from 'react';
import Container from 'ui/components/common/Container';
import DynamicTag from 'ui/components/common/DynamicTag';
import ProductLogo from '../common/ProductLogo';
// Components

export type HeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
  productLogo?: string;
};

const HeroWithImageClasses = 'lg:min-h-120 md:grid-cols-9';
const HeroWithBackgroundImageClasses = 'bg-wide-hero-light dark:bg-wide-hero-dark bg-cover py-7';

const Hero = ({
  description,
  headingLevel = 'h1',
  title,
  image,
  productLogo,
}: HeroProps): JSX.Element => (
  <header
    className={`relative py-14 ${!image || !!productLogo ? HeroWithBackgroundImageClasses : ''}`}
  >
    <Container
      size="standard"
      className={`grid gap-16 lg:items-center ${
        !!image || !!productLogo ? HeroWithImageClasses : ''
      }`}
    >
      <div className={`lg:pr-24 ${!!image || !!productLogo ? ['md:col-span-5'] : ''}`}>
        <DynamicTag tag={headingLevel} className="relative mb-5 heading-lg">
          {title}
        </DynamicTag>
        <p className="text-lg text-theme-text-alt">{description}</p>
      </div>
      {productLogo && (
        <React.Fragment>
          <div className="relative hidden md:col-span-4 md:block">
            <div className="hidden w-full h-20 dark:block">
              <ProductLogo product={productLogo} variant="Dark" />
            </div>
            <div className="w-full h-20 dark:hidden">
              <ProductLogo product={productLogo} variant="Light" />
            </div>
          </div>
        </React.Fragment>
      )}
      {image && (
        <React.Fragment>
          <div className="relative hidden md:col-span-4 md:block">
            <div className="w-full h-20">
              <Image
                src={image}
                alt=""
                className="relative z-10"
                fill
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                priority={true}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </Container>
  </header>
);

export default Hero;
