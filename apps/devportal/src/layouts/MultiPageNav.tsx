// Global
import Link from 'next/link';
// Lib
import { useGlobalState } from 'ui/common/global-state';
// Interfaces
import type { CustomNavContext, CustomNavData } from 'ui/common/types/contentPager';

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
      className={`mb-8 transform-gpu self-start transition-all md:sticky md:mr-16 ${positionalClasses}`}
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
              className={`side-bar-nav-item relative pb-4 pl-4 ${isActive ? 'current' : ''}`}
            >
              <Link
                href={buildUrl(context.article, route.path)}
                className={`text-violet dark:text-teal inline-block text-sm hover:underline focus:underline ${
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
