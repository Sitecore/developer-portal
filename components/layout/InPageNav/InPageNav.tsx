// Global
import { classnames } from 'tailwindcss-classnames';
import Link from 'next/link';
// Interfaces
import type { PagePartial } from '@/interfaces/page-info';
// Lib
import getSectionId from '@/lib/section-id';

type InPageNavProps = {
  partials: PagePartial[];
  idSeed: string;
};

export type InPageNavTWClasses =
  | 'in-page-nav'
  | 'in-page-nav-item'
  | 'in-page-nav-item--scrolled-to';

const InPageNav = ({ partials, idSeed }: InPageNavProps): JSX.Element => (
  <nav className={classnames('mb-8', 'md:mr-16', 'md:top-24', 'md:sticky', 'self-start')}>
    <p className={classnames('font-bold', 'text-sm', 'mb-4', 'md:hidden')}>Table of contents</p>
    <ul className={classnames('in-page-nav', 'relative')}>
      {partials.map((partial) => (
        <li
          className={classnames('in-page-nav-item', 'pb-4', 'relative', 'pl-4')}
          key={partial.title}
        >
          <Link href={`#${getSectionId(partial.title, idSeed)}`}>
            <a className={classnames('text-teal', 'text-sm', 'hover:underline', 'focus:underline')}>
              {partial.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default InPageNav;
