// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Global
// Components
import DynamicTag from 'ui/components/common/DynamicTag';
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
  <div className="mb-8 justify-between md:flex">
    <DynamicTag tag={headingTag} className="heading-md mb-2 md:mb-0">
      {title}
    </DynamicTag>
    <TextLink href={link.href} text={link.title} target="_blank" />
  </div>
);

export default FeedHeading;
