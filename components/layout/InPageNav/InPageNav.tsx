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

/*
 * @TODO: Adding search back
 *
 * To re-enable search (at least the UI in navigation)
 * You only need to change a few classes and uncomment the search include below.
 *
 * All @TODO: statements have the same text, so you can simply search for
 *    @TODO: Adding search back
 * to find what you need to change.
 *
 * Files affected:
 *   - Nav.tsx
 *   - NavMenu.tsx
 *   - InPageNav.tsx
 */

const InPageNav = ({ titles }: InPageNavProps): JSX.Element => {
  const [navScrolled] = useGlobalState('navScrolled');

  /*
   * @TODO: Adding Search Back
   *
   * Change positionalClasses to reflect additional height from search.
   * const positionalClasses = navScrolled ? classnames('md:top-24') : classnames('md:top-36');
   */
  const positionalClasses = navScrolled ? classnames('md:top-8') : classnames('md:top-24');

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
        {titles.map((title, i) => (
          <li className={classnames('in-page-nav-item', 'pb-4', 'relative', 'pl-4')} key={i}>
            <Link href={`#${getSectionId(title)}`}>
              <a
                className={classnames(
                  'text-violet',
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
