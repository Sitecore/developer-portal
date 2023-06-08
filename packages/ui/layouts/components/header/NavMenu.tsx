// Global
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
// Data
// Components
import ConditionalWrapper from 'ui/components/common/ConditionalWrapper';
import DynamicTag from 'ui/components/common/DynamicTag';
import SvgIcon, { IconNames } from 'ui/components/common/SvgIcon';
// Local
import NavLink from 'ui/layouts/components/header/NavLink';
import { NavigationData } from './Nav';

type NavMenuProps = NavigationData & {
  buttonIcon?: IconNames;
  callback?: () => void;
};

const NavMenu = ({ title, url, children, pathname, buttonIcon, callback }: NavMenuProps): JSX.Element => {
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
          className={`main-nav-item group ${(children && isOpen) || isCurrentPath ? 'button-active' : ''} ${children ? 'lg:pr-5' : ''}`}
          onClick={toggleNavItem}
        >
          <span className="pointer-events-none inline-flex items-center">
            {buttonIcon && <SvgIcon icon={buttonIcon} className="w-em h-em mr-em" />}
            {title}
          </span>
          {children && (
            <>
              <span className="h-em w-em pointer-events-none absolute right-0 top-5 block lg:hidden">
                <SvgIcon icon="chevron-right" className="h-inherit w-inherit top-5 transform-gpu transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute right-0 top-1/2 -mt-1.5 hidden h-3 w-3 lg:block">
                <SvgIcon icon="chevron-down" className={`h-inherit w-inherit top-5 transform-gpu transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
          <div ref={navItemRef} className={`nav-item-overlay ${isOpen ? 'nav-item-overlay-active' : 'nav-item-overlay-inactive lg:translate-none'}`}>
            {/* 
              Back Button
            */}
            <button className="btn-nav-back group" onClick={toggleNavItem}>
              Back
              <span className="btn-nav-back-icon-outer">
                <SvgIcon icon="chevron-left" className="btn-nav-back-icon" />
              </span>
            </button>
            {/* 
              Nav Item Links
            */}
            <div className="px-gutter shadow-inner">
              <div className="mx-auto max-w-screen-lg pt-6 lg:py-12">
                <ul className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  {children?.map((child, index) => (
                    <li key={`child-${index}`} className="border-gray-light border-b pb-4 md:pb-6">
                      <NavLink text={child.title} url={child.url} level={1} onClick={toggleNavItem} />
                      {child.children && (
                        <ul>
                          {child.children?.map((child, index) => (
                            <li key={`child-${index}`} className="mb-4 lg:mb-2">
                              <NavLink aria-current={currentPage === child.url} text={child.title} url={child.url} external={child.external} onClick={toggleNavItem} />
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
