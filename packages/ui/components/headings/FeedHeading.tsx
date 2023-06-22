import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import DynamicTag from 'ui/components/common/DynamicTag';
import TextLink from 'ui/components/common/TextLink';

export type FeedHeadingProps = {
  title: string;
  headingTag?: ValidHeadingLevels;
  headingClass?: string;
  link?: {
    title: string;
    href: string;
    openInNewTab?: boolean;
  };
};

const FeedHeading = ({ title, headingTag = 'h2', headingClass = 'heading-md', link }: FeedHeadingProps): JSX.Element => {
  let openInNewTab = false;

  if (link?.openInNewTab == undefined) {
    openInNewTab = true;
  }

  return (
    <div className="mb-8 justify-between md:flex">
      <DynamicTag tag={headingTag} className={`mb-2 ${headingClass} md:mb-0`}>
        {title}
      </DynamicTag>
      {link && <TextLink href={link.href} text={link.title} target={openInNewTab ? '_blank' : undefined} />}
    </div>
  );
};

export default FeedHeading;
