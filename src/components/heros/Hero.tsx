// Global
import Image from 'next/image';
// Interfaces
import { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import { classnames } from '@/src/common/types/tailwindcss-classnames';
import DynamicTag from '@/src/components/common/DynamicTag';
import React from 'react';
import Container from '../common/Container';
import ProductLogo from '../common/ProductLogo';

export type HeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
  productLogo?: string;
};

const HeroWithImageClasses = classnames('lg:min-h-120', 'md:grid-cols-9');
const HeroWithBackgroundImageClasses = classnames(
  'bg-wide-hero-light',
  'dark:bg-wide-hero-dark',
  'bg-cover',
  'py-7'
);

const Hero = ({
  description,
  headingLevel = 'h1',
  title,
  image,
  productLogo,
}: HeroProps): JSX.Element => (
  <header
    className={classnames('py-14', 'relative', {
      [HeroWithBackgroundImageClasses]: !image || !!productLogo,
    })}
  >
    <Container
      size="standard"
      className={classnames('grid', 'gap-16', 'lg:items-center', {
        [HeroWithImageClasses]: !!image || !!productLogo,
      })}
    >
      <div
        className={classnames('lg:pr-24', {
          ['md:col-span-5']: !!image || !!productLogo,
        })}
      >
        <DynamicTag tag={headingLevel} className={classnames('heading-lg', 'mb-5', 'relative')}>
          {title}
        </DynamicTag>
        <p className={classnames('text-lg', 'text-theme-text-alt')}>{description}</p>
      </div>
      {productLogo && (
        <React.Fragment>
          <div className={classnames('relative', 'hidden', 'md:block', 'md:col-span-4')}>
            <div className={classnames('h-20', 'w-full', 'hidden', 'dark:block')}>
              <ProductLogo product={productLogo} variant="Dark" />
            </div>
            <div className={classnames('h-20', 'w-full', 'dark:hidden')}>
              <ProductLogo product={productLogo} variant="Light" />
            </div>
          </div>
        </React.Fragment>
      )}
      {image && (
        <React.Fragment>
          <div className={classnames('relative', 'hidden', 'md:block', 'md:col-span-4')}>
            <div className={classnames('h-20', 'w-full')}>
              <Image
                src={image}
                alt=""
                className={classnames('relative', 'z-10')}
                layout="fill"
                objectFit="fill"
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
