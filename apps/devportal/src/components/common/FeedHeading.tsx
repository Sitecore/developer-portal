// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Global
// Components
import DynamicTag from './DynamicTag';
import TextLink from './TextLink';

export type FeedHeadingProps = {
  title: string;
  headingTag?: ValidHeadingLevels;
  link: {
    title: string;
    href: string;
  };
};

const FeedHeading = ({ title, headingTag = 'h2', link }: FeedHeadingProps): JSX.Element => (
  <div className="justify-between mb-8 md:flex">
    <DynamicTag tag={headingTag} className="mb-2 heading-md md:mb-0">
      {title}
    </DynamicTag>
    <TextLink href={link.href} text={link.title} target="_blank" />
  </div>
);

export default FeedHeading;
