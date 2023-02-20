// Global
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import DynamicTag from 'ui/components/common/DynamicTag';

type SectionHeadingProps = {
  title: string;
  description: string;
  headingLevel?: ValidHeadingLevels;
};

const SectionHeading = ({
  title,
  description,
  headingLevel = 'h2',
}: SectionHeadingProps): JSX.Element => {
  const anchorLink = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return (
    <>
      <DynamicTag
        className={`heading-md ${description ? `mb-2` : `mb-6`}`}
        tag={headingLevel}
        id={anchorLink}
      >
        {title}
        <a className="anchor" href={`#${anchorLink}`} title={title}>
          <svg width="16" height="16" viewBox="0 0 16 16" display={'inline'}>
            <use xlinkHref="#link-icon" href="#link-icon"></use>
          </svg>
        </a>
      </DynamicTag>
      {description && <p className="mb-6 max-w-prose">{description}</p>}
    </>
  );
};

export default SectionHeading;
