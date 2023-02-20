// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from 'ui/common/global-state';
// Interfaces
import { LinkValue } from 'ui/common/types/link-value';

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
      className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses} `}
    >
      {title && <p className="mb-4 text-sm font-bold md:hidden">{title}</p>}
      <ul className="side-bar-nav relative pl-1.5">
        {links.map((link, i) => {
          const activeClasses = 'font-bold';

          return (
            <li className="relative pb-4 pl-4 side-bar-nav-item" key={i}>
              <Link
                href={link.href}
                className={`text-violet dark:text-teal inline-block text-sm hover:underline focus:underline ${
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
