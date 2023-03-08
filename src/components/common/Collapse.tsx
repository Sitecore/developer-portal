// Global
import { useId, useState } from 'react';
import SvgIcon from './SvgIcon';

export type CollapseProps = {
  title: string;
  expandedByDefault?: boolean;
  children: React.ReactNode | React.ReactNodeArray;
};

const Collapse = ({ title, expandedByDefault, children }: CollapseProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(!!expandedByDefault);
  const [idSeed] = useId();

  return (
    <div>
      <button
        aria-controls={idSeed}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center mb-4 font-bold"
      >
        {title}
        <SvgIcon
          icon="chevron-down"
          aria-expanded={isExpanded}
          className={`w-4 h-4 ml-2 transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      <div id={idSeed} aria-expanded={isExpanded} className="hidden aria-expanded:block">
        {children}
      </div>
    </div>
  );
};

export default Collapse;
