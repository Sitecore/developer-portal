// Global
import Image from 'next/image';
// Interfaces
import { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import { classnames } from '@/src/common/types/tailwindcss-classnames';
import DynamicTag from '@/src/components/common/DynamicTag';
import React from 'react';
import Container from '../common/Container';

export type HeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
};

const HeroWithImageClasses = classnames('lg:min-h-320', 'md:grid-cols-9');
const HeroWithBackgroundImageClasses = classnames(
  'bg-wide-hero-light',
  'dark:bg-wide-hero-dark',
  'bg-cover',
  'py-7'
);

const Hero = ({ description, headingLevel = 'h1', title, image }: HeroProps): JSX.Element => (
  <header
    className={classnames('py-14', 'relative', {
      [HeroWithBackgroundImageClasses]: !image,
    })}
  >
    <Container
      size="standard"
      className={classnames('grid', 'gap-16', 'lg:items-center', {
        [HeroWithImageClasses]: !!image,
      })}
    >
      <div
        className={classnames('lg:pr-24', {
          ['md:col-span-5']: !!image,
        })}
      >
        <DynamicTag tag={headingLevel} className={classnames('heading-lg', 'mb-5', 'relative')}>
          {title}
        </DynamicTag>
        <p className={classnames('text-lg', 'text-theme-text-alt')}>{description}</p>
      </div>
      {image && (
        <React.Fragment>
          <div className={classnames('relative', 'hidden', 'md:block', 'md:col-span-4')}>
            <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full', 'bg-theme-bg-alt')}>
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
