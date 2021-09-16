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
}: SectionHeadingProps): JSX.Element => (
  <>
    <DynamicTag
      className={classnames('heading-md', {
        'mb-2': !!description,
        'mb-6': !description,
      })}
      tag={headingLevel}
    >
      {title}
    </DynamicTag>
    {description && <p className={classnames('max-w-prose', 'mb-6')}>{description}</p>}
  </>
);

export default SectionHeading;
