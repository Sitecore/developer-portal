// Global
import React, { useState, useRef, useEffect } from 'react';
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';
import { useId } from 'react-id-generator';

// Local
import { SitecoreQuickLinks } from '@/data/data-navigation';

type QuickStartMenuProps = {
  className?: TTailwindString;
};

const QuickStartMenu = ({ className }: QuickStartMenuProps): JSX.Element => {
  /**
   *  React hook for unique IDs using react-unique-id.
   *  Avoid generating new ID on every rerender.
   */

  const [idSeed] = useId(1, 'qs-menu');
  const qsMenuId = idSeed;
  const buttonId = `${idSeed}--button`;

  const quickStartMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const toggleQuickStartMenu = (event: React.MouseEvent) => {
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

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen]);

  const quickStartMenuInactiveClasses = classnames('hidden');
  const quickStartMenuActiveClasses = classnames('block');

  return (
    <div className={classnames('block', 'w-5', 'h-5', className)}>
      <button
        id={buttonId}
        className={classnames('w-inherit', 'h-inherit', 'hover:text-teal', 'transition')}
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
        <span className={classnames('sr-only')}>{SitecoreQuickLinks.title}</span>
      </button>
      {/* NOTE:: Dropdown currently absolutely positioned. Revist if used in place other than the navigation */}
      <div
        id={qsMenuId}
        aria-labelledby={buttonId}
        ref={quickStartMenuRef}
        className={classnames(
          'shadow-sm',
          'bg-theme-bg',
          'border',
          'border-theme-border',
          'absolute',
          'top-20',
          'w-56',
          'right-1',
          {
            [quickStartMenuInactiveClasses]: !isOpen,
            [quickStartMenuActiveClasses]: isOpen,
          }
        )}
      >
        <ul className={classnames('py-3')}>
          {SitecoreQuickLinks.children?.map((child, index) => (
            <li
              key={`child-${index}`}
              className={classnames(
                'font-semibold',
                'hover:bg-teal-light',
                'hover:text-teal',
                'text-xs'
              )}
            >
              <a
                className={classnames('px-4', 'py-2', 'flex', 'justify-between', 'items-center')}
                href={child.url}
                target="_blank"
              >
                {child.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className={classnames('w-em', 'h-em', 'scale-75', 'transform-gpu')}
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

export default QuickStartMenu;
