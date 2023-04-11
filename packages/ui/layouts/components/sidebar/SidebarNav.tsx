// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from 'ui/common/global-state';
// Interfaces

import { useEffect, useRef, useState } from 'react';
import { LinkValue } from 'ui/common/types/link-value';
import DynamicTag from 'ui/components/common/DynamicTag';
import SvgIcon from 'ui/components/common/SvgIcon';

interface SidebarNavProps {
  title?: string;
  links: LinkValue[];
}

export type InPageNavTWClasses = 'side-bar-nav' | 'side-bar-nav-item' | 'side-bar-nav-item--scrolled-to';

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
    <nav className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses} `}>
      {title && (
        <>
          <DynamicTag tag={'button'} className={`side-bar-nav-title w-full text-left text-sm sm:mb-4 sm:p-0 sm:font-bold lg:block`} onClick={toggleNavItem}>
            {title}
            <span className="absolute top-5 right-3 h-3 w-3 sm:block md:hidden">
              <SvgIcon icon="chevron-down" className={`h-inherit w-inherit top-5 transform-gpu transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          </DynamicTag>
        </>
      )}

      <ul className={`bg-theme-bg-alt sm:bg-theme-bg ease fixed w-full transform-gpu pl-4 pt-3 transition-transform duration-500 sm:pl-1.5 lg:block ${isOpen ? 'block' : 'hidden'}`}>
        {links.map((link, i) => {
          const activeClasses = 'font-bold';

          return (
            <li className="side-bar-nav-item border-l-theme-bg-alt relative pb-4 pl-4" key={i}>
              <Link href={link.href} className={`text-primary-500 dark:text-teal-500 inline-block text-sm hover:underline focus:underline ${link.active ? activeClasses : ''}`}>
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
