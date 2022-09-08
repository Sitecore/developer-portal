// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
import { useId } from 'react-id-generator';
import { useState } from 'react';
import SvgIcon from './SvgIcon';

export type CollapseProps = {
  title: string;
  expandedByDefault?: boolean;
  children: React.ReactNode | React.ReactNodeArray;
};

const Collapse = ({ title, expandedByDefault, children }: CollapseProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(!!expandedByDefault);
  const [idSeed] = useId(1, 'collapse');

  return (
    <div>
      <button
        aria-controls={idSeed}
        onClick={() => setIsExpanded(!isExpanded)}
        className={classnames('font-bold', 'flex', 'items-center', 'mb-4')}
      >
        {title}
        <SvgIcon
          icon="chevron-down"
          className={classnames('h-4', 'w-4', 'ml-2', 'transform', { 'rotate-180': isExpanded })}
        />
      </button>
      <div id={idSeed} aria-expanded={isExpanded} className={classnames({ hidden: !isExpanded })}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
