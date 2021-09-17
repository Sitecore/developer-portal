// Global
import Image from 'next/image';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import { classnames } from '@/tailwindcss-classnames';
import SvgIcon from '../helper/SvgIcon';
import React from 'react';
import Container from '../helper/Container';

export type HeroProps = {
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
};

const HeroWithImageClasses = classnames('lg:min-h-320', 'md:grid-cols-9');

const Hero = ({ description, headingLevel = 'h1', title, image }: HeroProps): JSX.Element => (
  <header className={classnames('py-14', 'relative')}>
    <Container
      size="standard"
      className={classnames('grid', 'gap-16', 'lg:items-center', {
        [HeroWithImageClasses]: !!image,
      })}
    >
      <div className={classnames('md:col-span-5', 'lg:pr-24')}>
        <DynamicTag tag={headingLevel} className={classnames('heading-lg', 'mb-5', 'relative')}>
          {title}
          <SvgIcon
            icon="heading"
            className={classnames(
              '-top-3.5',
              '-left-24',
              'absolute',
              'h-1.75em',
              'w-1.75em',
              'text-red',
              'hidden',
              'lg:block'
            )}
          />
        </DynamicTag>
        <p className={classnames('text-lg', 'text-gray-dark')}>{description}</p>
      </div>
      {image && (
        <React.Fragment>
          <div
            className={classnames(
              'bg-hero-pattern',
              'bg-repeat',
              'bg-size-hero-pattern',
              'w-1/3',
              'h-full',
              'absolute',
              'right-0',
              'top-0',
              'bottom-0',
              'hidden',
              'lg:block'
            )}
            aria-hidden={true}
          ></div>
          <div className={classnames('relative', 'hidden', 'md:block', 'md:col-span-4')}>
            <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full', 'bg-gray-light')}>
              <Image
                src={image}
                alt=""
                className={classnames('relative', 'z-10')}
                layout="fill"
                objectFit="fill"
                priority={true}
              />
            </div>
            <div
              className={classnames(
                'bg-red',
                'h-48',
                'w-48',
                'absolute',
                'z-0',
                '-right-4',
                '-top-4',
                'hidden',
                'lg:block',
                'xl:h-64',
                'xl:w-64'
              )}
            ></div>
          </div>
        </React.Fragment>
      )}
    </Container>
  </header>
);

export default Hero;
