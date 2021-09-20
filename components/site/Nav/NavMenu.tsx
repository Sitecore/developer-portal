// Global
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { classnames } from 'tailwindcss-classnames';
// Data
import { NavigationData } from '@/data/data-navigation';
// Components
import SvgIcon, { IconNames } from '@/components/helper/SvgIcon';
import DynamicTag from '@/components/helper/DynamicTag';
import ConditionalWrapper from '@/components/helper/ConditionalWrapper';
// Local
import NavLink from '@/components/site/Nav/NavLink';

type NavMenuProps = NavigationData & {
  buttonIcon?: IconNames;
  callback?: () => void;
};

/*
 * The menus themselves.
 */
const NavMenu = ({ title, url, children, buttonIcon, callback }: NavMenuProps): JSX.Element => {
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

  const mainNavItemStyles = classnames(
    'nav-item--button',
    'flex',
    'items-center',
    'font-semibold',
    'text-left',
    'relative',
    'pr-8',
    'h-14',
    'w-full',
    'group',
    'whitespace-nowrap',
    'transform-gpu',
    'transition-colors',
    'hover:text-teal',
    'lg:h-16',
    'lg:pr-0'
  );
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
        Main Nav Item
      */}
      <ConditionalWrapper
        condition={!!url}
        wrapper={(children) => (
          <Link href={url as string} passHref>
            {children}
          </Link>
        )}
      >
        <DynamicTag
          tag={children ? 'button' : 'a'}
          className={classnames(mainNavItemStyles, {
            [buttonActiveClasses]: children && isOpen,
            ['lg:pr-5']: !!children,
          })}
          onClick={toggleNavItem}
        >
          <span className={classnames('inline-flex', 'items-center', 'pointer-events-none')}>
            {buttonIcon && (
              <SvgIcon icon={buttonIcon} className={classnames('w-em', 'h-em', 'mr-em')} />
            )}
            {title}
          </span>
          {children && (
            <>
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
                <SvgIcon
                  icon="chevron-right"
                  className={classnames(
                    'h-inherit',
                    'w-inherit',
                    'top-5',
                    'transition-transform',
                    'transform-gpu',
                    'group-hover:translate-x-1'
                  )}
                />
              </span>
              <span
                className={classnames(
                  'absolute',
                  'top-1/2',
                  '-mt-1.5',
                  'right-0',
                  'block',
                  'h-3',
                  'w-3',
                  'hidden',
                  'lg:block'
                )}
              >
                <SvgIcon
                  icon="chevron-down"
                  className={classnames(
                    'h-inherit',
                    'w-inherit',
                    'top-5',
                    'transition-transform',
                    'transform-gpu',
                    {
                      ['rotate-180']: isOpen,
                    }
                  )}
                />
              </span>
            </>
          )}
        </DynamicTag>
      </ConditionalWrapper>
      {/* 
        Nav Item Overlay
      */}
      {children && (
        <React.Fragment>
          <div
            ref={navItemRef}
            className={classnames(
              'fixed',
              'top-32',
              'bottom-0',
              'inset-x-0',
              'bg-white',
              'border-b',
              'border-gray-lightest',
              'z-50',
              'transform-gpu',
              'overflow-y-auto',
              'transition-transform',
              'lg:top-16',
              'lg:absolute',
              'lg:bottom-auto',
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
              <span
                className={classnames(
                  'absolute',
                  'top-5',
                  'left-4',
                  'block',
                  'h-em',
                  'w-em',
                  'pointer-events-none'
                )}
              >
                <SvgIcon
                  icon="chevron-left"
                  className={classnames(
                    'h-inherit',
                    'w-inherit',
                    'top-5',
                    'transition-transform',
                    'transform-gpu',
                    'group-hover:-translate-x-1'
                  )}
                />
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
                      <NavLink
                        text={child.title}
                        url={child.url}
                        level={1}
                        onClick={toggleNavItem}
                      />
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
        </React.Fragment>
      )}
    </div>
  );
};

export default NavMenu;
