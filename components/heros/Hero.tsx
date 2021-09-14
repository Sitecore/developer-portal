// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import { classnames } from '@/tailwindcss-classnames';

export type HeroProps = {
  containerTag?: 'header';
  title: string;
  headingLevel?: ValidHeadingLevels;
  description?: string;
  image?: string;
};

const Hero = ({
  containerTag = 'header',
  description,
  headingLevel = 'h2',
  title,
  image,
}: HeroProps): JSX.Element => (
  <DynamicTag tag={containerTag} className={classnames('py-11', 'px-gutter-all')}>
    {/* @TODO: Replace with <Container> tag that Brian is adding in. */}
    <div
      className={classnames('max-w-screen-xl', 'm-auto', 'grid', 'md:grid-cols-2', 'items-center', {
        ['min-h-320']: image,
      })}
    >
      <div>
        <DynamicTag tag={headingLevel} className={classnames('heading-lg', 'mb-5')}>
          {title}
        </DynamicTag>
        <p>{description}</p>
      </div>
    </div>
  </DynamicTag>
);

export default Hero;
