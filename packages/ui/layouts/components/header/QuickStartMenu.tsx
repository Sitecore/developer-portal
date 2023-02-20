// Global
import { useEffect, useId, useRef, useState } from 'react';
import { NavigationData } from './Nav';

// Local
type QuickStartMenuProps = {
  className?: string;
  data: NavigationData;
};

const QuickStartMenu = ({ className, data }: QuickStartMenuProps): JSX.Element => {
  /**
   *  React hook for unique IDs using react-unique-id.
   *  Avoid generating new ID on every rerender.
   */
  const [idSeed] = useId();
  const qsMenuId = idSeed;
  const buttonId = `${idSeed}--button`;

  const quickStartMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const toggleQuickStartMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const pageClickEvent = (event: Event) => {
      if (
        quickStartMenuRef.current !== null &&
        !quickStartMenuRef?.current?.contains(event.target as Node)
      ) {
        setOpen(!isOpen);
      }
    };

    const timeoutId = setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', pageClickEvent, false);
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('click', pageClickEvent, false);
    };
  }, [isOpen]);

  return (
    <div className={`block h-5 w-5 ${className ? className : ''}`}>
      <button
        id={buttonId}
        className="transition w-inherit h-inherit hover:text-violet"
        onClick={toggleQuickStartMenu}
        aria-expanded={isOpen}
      >
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
        <span className="sr-only">{data.title}</span>
      </button>
      {/* NOTE:: Dropdown currently absolutely positioned. Revist if used in place other than the navigation */}
      <div
        id={qsMenuId}
        aria-labelledby={buttonId}
        ref={quickStartMenuRef}
        className={`bg-theme-bg border-theme-border absolute top-16 right-4 z-50 -mt-0.5 w-56 border shadow-sm ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="py-3">
          {data.children?.map((child, index) => (
            <li
              key={`child-${index}`}
              className="text-xs font-semibold hover:bg-violet-lightest hover:text-violet"
            >
              <a
                className="flex items-center justify-between px-4 py-2"
                href={child.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="scale-75 w-em h-em transform-gpu"
                >
                  <path
                    d="m13.806 13.33-.023-10.683a.432.432 0 0 0-.43-.43L2.67 2.194a.427.427 0 0 0-.429.429v.357c.001.238.194.43.431.43l9.035.02-9.493 9.493a.43.43 0 0 0 .001.607l.254.254a.43.43 0 0 0 .607.001l9.493-9.493.02 9.035c0 .237.192.43.43.43l.357.001c.238 0 .43-.191.429-.429Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
QuickStartMenu.defaultProps = {
  className: '',
};

export default QuickStartMenu;
