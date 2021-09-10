// Global
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';

type QuickStartMenuProps = {
  className?: TTailwindString;
};

const QuickStartMenu = ({ className }: QuickStartMenuProps): JSX.Element => {
  return (
    <div className={classnames('block', 'w-5', 'h-5', className)}>
      <button className={classnames('w-inherit', 'h-inherit', 'hover:text-teal', 'transition')}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
          <g>
            <rect x="0" y="0" width="18.8" height="18.8" fill="currentColor" />
            <rect x="35.6" y="0" width="18.8" height="18.8" fill="currentColor" />
            <rect x="71.2" width="18.8" height="18.8" fill="currentColor" />
            <rect x="0.1" y="35.6" width="18.8" height="18.8" fill="currentColor" />
            <rect x="35.6" y="35.7" width="18.8" height="18.8" fill="currentColor" />
            <rect x="71.2" y="35.6" width="18.8" height="18.8" fill="currentColor" />
            <rect y="71.3" width="18.8" height="18.8" fill="currentColor" />
            <rect x="35.6" y="71.2" width="18.8" height="18.8" fill="currentColor" />
            <rect x="71.2" y="71.2" width="18.8" height="18.8" fill="currentColor" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default QuickStartMenu;
