// Global
import { classnames } from 'tailwindcss-classnames';
import Link from 'next/link';
// Lib
import getSectionId from '@/lib/section-id';
import { useGlobalState } from '@/lib/global-state';

type InPageNavProps = {
  titles: string[];
};

export type InPageNavTWClasses =
  | 'in-page-nav'
  | 'in-page-nav-item'
  | 'in-page-nav-item--scrolled-to';

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
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
      <p className={classnames('font-bold', 'text-sm', 'mb-4', 'md:hidden')}>Table of contents</p>
      <ul className={classnames('in-page-nav', 'relative', 'pl-1.5')}>
        {titles.map((title) => (
          <li className={classnames('in-page-nav-item', 'pb-4', 'relative', 'pl-4')} key={title}>
            <Link href={`#${getSectionId(title)}`}>
              <a
                className={classnames(
                  'text-teal',
                  'text-sm',
                  'inline-block',
                  'hover:underline',
                  'focus:underline'
                )}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default InPageNav;
