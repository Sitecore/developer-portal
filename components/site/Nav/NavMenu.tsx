// Global
import React, { useState, useRef, useEffect } from 'react';
import { classnames } from 'tailwindcss-classnames';
// Data
import { NavigationData } from '@/data/data-navigation';
// Components
import SvgIcon, { IconNames } from '@/components/helper/SvgIcon';
import NavLink from '@/components/site/Nav/NavLink';

type NavMenuProps = NavigationData & {
  buttonIcon?: IconNames;
  callback?: () => void;
};

/*
 * The menus themselves.
 */
const NavMenu = ({ title, children, buttonIcon, callback }: NavMenuProps): JSX.Element => {
  const navItemRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const toggleNavItem = (event: React.MouseEvent) => {
    if (callback && (event?.target as HTMLButtonElement)?.localName !== 'button') {
      callback();
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    const pageClickEvent = (event: Event) => {
      if (navItemRef.current !== null && !navItemRef?.current?.contains(event.target as Node)) {
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

  const buttonActiveClasses = classnames('text-teal', 'nav-item--button-active');
  const navItemOverlayInactiveClasses = classnames(
    'translate-x-full',
    'lg:translate-none',
    'lg:hidden'
  );
  const navItemOverlayActiveClasses = classnames('translate-x-0', 'shadow-inner');

  return (
    <div>
      {/* 
        Main Nav Button
      */}
      <button
        className={classnames(
          'nav-item--button',
          'font-semibold',
          'text-left',
          'relative',
          'pr-8',
          'h-14',
          'w-full',
          'group',
          'whitespace-nowrap',
          'lg:h-20',
          'lg:pr-0',
          'transform-gpu',
          'transition-colors',
          'hover:text-teal',
          {
            [buttonActiveClasses]: isOpen,
          }
        )}
        onClick={toggleNavItem}
      >
        <span className={classnames('inline-flex', 'items-center', 'pointer-events-none')}>
          {buttonIcon && (
            <SvgIcon icon={buttonIcon} className={classnames('w-em', 'h-em', 'mr-em')} />
          )}
          {title}
        </span>
        <span
          className={classnames(
            'absolute',
            'top-5',
            'right-0',
            'block',
            'h-em',
            'w-em',
            'lg:hidden'
          )}
        >
          <svg
            className={classnames(
              'h-inherit',
              'w-inherit',
              'top-5',
              'transition-transform',
              'transform-gpu',
              'group-hover:translate-x-1'
            )}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11.7 19.8"
          >
            <path d="M0,18l1.8,1.8l9.9-9.9L1.8,0L0,1.8l8.2,8.1L0,18z" fill="currentColor" />
          </svg>
        </span>
      </button>
      {/* 
        Nav Item Overlay
      */}
      <div
        ref={navItemRef}
        className={classnames(
          'fixed',
          'top-20',
          'bottom-0',
          'inset-x-0',
          'bg-white',
          'border-b',
          'border-gray-lightest',
          'z-20',
          'transform-gpu',
          'overflow-y-auto',
          'transition-transform',
          'lg:absolute',
          'lg:bottom-auto',
          'lg:top-20',
          'lg:shadow-lg',
          'lg:transform-none',
          'lg:transition-none',
          {
            [navItemOverlayInactiveClasses]: !isOpen,
            [navItemOverlayActiveClasses]: isOpen,
          }
        )}
      >
        {/* 
          Back Button
        */}
        <button
          className={classnames(
            'font-semibold',
            'text-left',
            'relative',
            'pr-4',
            'pl-10',
            'h-14',
            'w-full',
            'group',
            'bg-teal',
            'text-white',
            'lg:hidden',
            'transform-gpu',
            'transition-colors',
            'hover:bg-teal-dark'
          )}
          onClick={toggleNavItem}
        >
          Back
          <span className={classnames('absolute', 'top-5', 'left-4', 'block', 'h-em', 'w-em')}>
            <svg
              className={classnames(
                'h-inherit',
                'w-inherit',
                'top-5',
                'transition-transform',
                'transform-gpu',
                'group-hover:-translate-x-1'
              )}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11.7 19.8"
            >
              <path
                d="M11.8,1.9l-1.8-1.8L0.2,10l9.9,9.9l1.8-1.8L3.7,10L11.8,1.9z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
        {/* 
          Nav Item Links
        */}
        <div className={classnames('px-gutter')}>
          <div className={classnames('max-w-screen-lg', 'mx-auto', 'pt-6', 'lg:py-12')}>
            <ul className={classnames('grid', 'gap-6', 'md:grid-cols-2', 'lg:grid-cols-3')}>
              {children?.map((child, index) => (
                <li
                  key={`child-${index}`}
                  className={classnames('border-b', 'border-gray-light', 'pb-4')}
                >
                  <NavLink text={child.title} url={child.url} level={1} onClick={toggleNavItem} />
                  {child.children && (
                    <ul>
                      {child.children?.map((child, index) => (
                        <li key={`child-${index}`} className={classnames('mb-4', 'lg:mb-2')}>
                          <NavLink text={child.title} url={child.url} onClick={toggleNavItem} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
