import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import DynamicTag from 'ui/components/common/DynamicTag';
import Button from '../buttons/Button';

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

      {link && (
        <div className="pt-1">
          <Button variant="text" text={link.title} href={link.href} icon={true} target={openInNewTab ? '_blank' : undefined} />
        </div>
      )}
    </div>
  );
};

export default FeedHeading;
