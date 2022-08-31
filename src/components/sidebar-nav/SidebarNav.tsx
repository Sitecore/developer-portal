// Global
import { classnames } from 'tailwindcss-classnames';
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

  const positionalClasses = navScrolled ? classnames('md:top-24') : classnames('md:top-36');

  return (
    <nav
      className={classnames(
        'mb-8',
        'md:mr-16',
        'md:sticky',
        'self-start',
        'transform-gpu',
        'transition-all',
        positionalClasses
      )}
    >
      {title && <p className={classnames('font-bold', 'text-sm', 'mb-4', 'md:hidden')}>{title}</p>}
      <ul className={classnames('side-bar-nav', 'relative', 'pl-1.5')}>
        {links.map((link, i) => (
          <li className={classnames('side-bar-nav-item', 'pb-4', 'relative', 'pl-4')} key={i}>
            <Link href={link.href}>
              <a
                className={classnames(
                  'text-violet',
                  'dark:text-teal',
                  'text-sm',
                  'inline-block',
                  'hover:underline',
                  'focus:underline'
                )}
              >
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
