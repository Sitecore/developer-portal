// Interfaces
import type { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Global
import { classnames } from '@/tailwindcss-classnames';
// Components
import TextLink from './TextLink';
import DynamicTag from './DynamicTag';

export type FeedHeadingProps = {
  title: string;
  headingTag?: ValidHeadingLevels;
  link: {
    title: string;
    href: string;
  };
};

const FeedHeading = ({ title, headingTag = 'h2', link }: FeedHeadingProps): JSX.Element => (
  <div className={classnames('md:flex', 'justify-between', 'mb-8')}>
    <DynamicTag tag={headingTag} className={classnames('heading-md', 'mb-2', 'md:mb-0')}>
      {title}
    </DynamicTag>
    <TextLink href={link.href} text={link.title} target="_blank" />
  </div>
);

export default FeedHeading;
