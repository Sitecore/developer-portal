// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from '@/src/common/global-state';
// Interfaces
import { LinkValue } from '@/src/interfaces/link-value';
import { useEffect, useRef, useState } from 'react';
import DynamicTag from '../common/DynamicTag';
import SvgIcon from '../common/SvgIcon';

interface SidebarNavProps {
  title?: string;
  links: LinkValue[];
}

export type InPageNavTWClasses =
  | 'side-bar-nav'
  | 'side-bar-nav-item'
  | 'side-bar-nav-item--scrolled-to';

const SidebarNav = ({ links, title }: SidebarNavProps) => {
  const [navScrolled] = useGlobalState('navScrolled');
  const navItemRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const toggleNavItem = (event: React.MouseEvent) => {
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
  const positionalClasses = navScrolled ? 'md:top-24' : 'md:top-36';

  return (
    <nav
      className={`mb-8 md:mr-16 md:sticky self-start transform-gpu transition-all ${positionalClasses} `}
    >
      {title && (
        <>
          <DynamicTag
            tag={'button'}
            className={`side-bar-nav-title w-full sm:font-bold lg:block text-left sm:mb-4 text-sm sm:p-0`}
            onClick={toggleNavItem}
          >
            {title}
            <span className="absolute top-5 right-3 h-3 w-3 md:hidden sm:block">
              <SvgIcon
                icon="chevron-down"
                className={`h-inherit w-inherit top-5 transition-transform transform-gpu ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </span>
          </DynamicTag>
        </>
      )}

      <ul
        className={`fixed w-full bg-theme-bg-alt sm:bg-theme-bg sm:pl-1.5 pl-4 pt-3 transition-transform transform-gpu ease duration-500 lg:block ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {links.map((link, i) => {
          const activeClasses = 'font-bold';

          return (
            <li className="relative pb-4 pl-4 side-bar-nav-item border-l-theme-bg-alt" key={i}>
              <Link
                href={link.href}
                className={`text-violet dark:text-teal text-sm inline-block hover:underline focus:underline ${
                  link.active ? activeClasses : ''
                }`}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNav;
