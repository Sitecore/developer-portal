// Global
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';

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
        className={classnames('heading-md', {
          'mb-2': !!description,
          'mb-6': !description,
        })}
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
      {description && <p className={classnames('max-w-prose', 'mb-6')}>{description}</p>}
    </>
  );
};

export default SectionHeading;
