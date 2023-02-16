// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from '@/src/common/global-state';
// Interfaces
import { LinkValue } from '@/src/interfaces/link-value';

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

  const positionalClasses = navScrolled ? 'md:top-24' : 'md:top-36';

  return (
    <nav
      className={`mb-8 md:mr-16 md:sticky self-start transform-gpu transition-all ${positionalClasses} `}
    >
      {title && <p className="mb-4 text-sm font-bold md:hidden">{title}</p>}
      <ul className="side-bar-nav relative pl-1.5">
        {links.map((link, i) => {
          const activeClasses = 'font-bold';

          return (
            <li className="relative pb-4 pl-4 side-bar-nav-item" key={i}>
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
