// Global
import Link from 'next/link';
import { classnames } from '@/tailwindcss-classnames';
// Lib
import { useGlobalState } from '@/lib/global-state';
// Interfaces
import type { CustomNavContext, CustomNavData } from '@/interfaces/page-info';

type MultiPageNavProps = {
  context: CustomNavContext;
  navData: CustomNavData;
  root: string;
};

const MultiPageNav = ({ context, navData, root }: MultiPageNavProps): JSX.Element => {
  const [navScrolled] = useGlobalState('navScrolled');
  const positionalClasses = navScrolled ? classnames('md:top-8') : classnames('md:top-24');
  const buildUrl = (article: string, page: string) => `${root}/${article}/${page}`;

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
      <h3 className="mb-4">{navData.title}</h3>
      <ul className={classnames('side-bar-nav', 'relative', 'pl-1.5')}>
        {navData.routes.map((route) => {
          const isActive = context.page === route.path;

          return (
            <li
              key={route.title}
              className={classnames('side-bar-nav-item', 'pb-4', 'relative', 'pl-4', {
                current: isActive,
              })}
            >
              <Link href={buildUrl(context.article, route.path)}>
                <a
                  className={classnames(
                    'text-violet',
                    'dark:text-teal',
                    'text-sm',
                    'inline-block',
                    'hover:underline',
                    'focus:underline',
                    {
                      'font-bold': isActive,
                    }
                  )}
                >
                  {route.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MultiPageNav;
