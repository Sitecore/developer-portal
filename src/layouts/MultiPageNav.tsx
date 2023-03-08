// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from '@/src/common/global-state';
// Interfaces
import type { CustomNavContext, CustomNavData } from '@/src/interfaces/page-info';

type MultiPageNavProps = {
  context: CustomNavContext;
  navData: CustomNavData;
  root: string;
};

const MultiPageNav = ({ context, navData, root }: MultiPageNavProps): JSX.Element => {
  const [navScrolled] = useGlobalState('navScrolled');
  const positionalClasses = navScrolled ? 'md:top-8' : 'md:top-24';
  const buildUrl = (article: string, page: string) => `${root}/${article}/${page}`;

  return (
    <nav
      className={`mb-8 md:mr-16 md:sticky self-start transform-gpu transition-all ${positionalClasses}`}
    >
      <h3 className="mb-4">
        <Link href={`${root}/${context.article}`} legacyBehavior>
          {navData.title}
        </Link>
      </h3>
      <ul className="side-bar-nav relative pl-1.5">
        {navData.routes.map((route) => {
          const isActive = context.page === route.path;

          return (
            <li
              key={route.title}
              className={`side-bar-nav-item pb-4 relative pl-4 ${isActive ? 'current' : ''}`}
            >
              <Link
                href={buildUrl(context.article, route.path)}
                className={`text-violet dark:text-teal text-sm inline-block hover:underline focus:underline ${
                  isActive ? 'font-bold' : ''
                }`}
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MultiPageNav;
