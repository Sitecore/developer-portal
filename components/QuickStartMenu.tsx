// Global
import React, { useState, useRef, useEffect } from 'react';
import { TTailwindString } from 'tailwindcss-classnames';
import { classnames } from 'tailwindcss-classnames';
// Local
import { SitecoreQuickLinks } from '@/data/data-navigation';

type QuickStartMenuProps = {
  className?: TTailwindString;
  callback?: () => void;
};

const QuickStartMenu = ({ className, callback }: QuickStartMenuProps): JSX.Element => {
  const quickStartMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const toggleQuickStartMenu = (event: React.MouseEvent) => {
    if (callback && (event?.target as HTMLButtonElement)?.localName !== 'button') {
      console.log(event.target);
      callback();
    }
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

  const quickStartMenuInactiveClasses = classnames(
    'translate-x-full',
    'lg:translate-none',
    'lg:hidden'
  );
  const quickStartMenuActiveClasses = classnames('translate-x-0');

  return (
    <div className={classnames('block', 'w-5', 'h-5', className)}>
      <button
        className={classnames('w-inherit', 'h-inherit', 'hover:text-teal', 'transition')}
        onClick={toggleQuickStartMenu}
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
      </button>
      <div
        ref={quickStartMenuRef}
        className={classnames(
          'shadow-sm',
          'bg-white',
          'border',
          'border-gray-light',
          'absolute',
          'top-20',
          'w-56',
          'right-1',
          'lg:transform-none',
          'lg:transition-none',
          'transform-gpu',
          {
            [quickStartMenuInactiveClasses]: !isOpen,
            [quickStartMenuActiveClasses]: isOpen,
          }
        )}
      >
        <div className={classnames('hidden')}>{SitecoreQuickLinks.title}</div>
        <ul className={classnames('py-3')}>
          {SitecoreQuickLinks.children?.map((child, index) => (
            <li
              key={`child-${index}`}
              className={classnames(
                'font-regular',
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
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classnames('transform', 'scale-625')}
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
