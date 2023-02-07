// Global
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
// Data
import { NavigationData } from '@/data/data-navigation';
// Components
import ConditionalWrapper from '@/src/components/common/ConditionalWrapper';
import DynamicTag from '@/src/components/common/DynamicTag';
import SvgIcon, { IconNames } from '@/src/components/common/SvgIcon';
// Local
import NavLink from '@/src/layouts/components/head/NavLink';

type NavMenuProps = NavigationData & {
  buttonIcon?: IconNames;
  callback?: () => void;
};

const NavMenu = ({
  title,
  url,
  children,
  pathname,
  buttonIcon,
  callback,
}: NavMenuProps): JSX.Element => {
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

  const router = useRouter();
  const currentPage = router.asPath;
  const isCurrentPage = currentPage === url;
  const currentRoute = router.pathname;
  const isCurrentPath = (!!url && currentRoute.startsWith(url)) || currentRoute === pathname;

  return (
    <div>
      {/* 
        Main Nav Item
      */}
      <ConditionalWrapper
        condition={!!url}
        wrapper={(children) => (
          <Link href={url as string} passHref legacyBehavior>
            {children}
          </Link>
        )}
      >
        <DynamicTag
          tag={children ? 'button' : 'a'}
          aria-current={!children ? isCurrentPage : undefined}
          className={`group main-nav-item ${
            (children && isOpen) || isCurrentPath ? 'button-active' : ''
          } ${children ? 'lg:pr-5' : ''}`}
          onClick={toggleNavItem}
        >
          <span className="inline-flex items-center pointer-events-none">
            {buttonIcon && <SvgIcon icon={buttonIcon} className="w-em h-em mr-em" />}
            {title}
          </span>
          {children && (
            <>
              <span className="absolute right-0 block pointer-events-none top-5 h-em w-em lg:hidden">
                <SvgIcon
                  icon="chevron-right"
                  className="transition-transform h-inherit w-inherit top-5 transform-gpu group-hover:translate-x-1"
                />
              </span>
              <span className="absolute top-1/2 -mt-1.5 right-0 block h-3 w-3 hidden lg:block">
                <SvgIcon
                  icon="chevron-down"
                  className={`h-inherit w-inherit top-5 transition-transform transform-gpu ${
                    isOpen ? 'rotate-180' : ''
                  }`}
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
            className={`nav-item-overlay ${
              isOpen ? 'nav-item-overlay-active' : 'nav-item-overlay-inactive lg:translate-none'
            }`}
          >
            {/* 
              Back Button
            */}
            <button className="group btn-nav-back" onClick={toggleNavItem}>
              Back
              <span className="btn-nav-back-icon-outer">
                <SvgIcon icon="chevron-left" className="btn-nav-back-icon" />
              </span>
            </button>
            {/* 
              Nav Item Links
            */}
            <div className="shadow-inner px-gutter">
              <div className="max-w-screen-lg pt-6 mx-auto lg:py-12">
                <ul className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {children?.map((child, index) => (
                    <li key={`child-${index}`} className="pb-4 border-b border-gray-light md:pb-6">
                      <NavLink
                        text={child.title}
                        url={child.url}
                        level={1}
                        onClick={toggleNavItem}
                      />
                      {child.children && (
                        <ul>
                          {child.children?.map((child, index) => (
                            <li key={`child-${index}`} className="mb-4 lg:mb-2">
                              <NavLink
                                aria-current={currentPage === child.url}
                                text={child.title}
                                url={child.url}
                                external={child.external}
                                onClick={toggleNavItem}
                              />
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
