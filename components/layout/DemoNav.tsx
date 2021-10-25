// Global
import Link from 'next/link';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { DemoNavData, DemoNavContext } from '@/interfaces/page-info';
// Components
import Collapse from '@/components/helper/Collapse';

// TODO: Fix this
type MultiPageNavProps = {
  context: DemoNavContext;
  navData: DemoNavData;
};

const MultiPageNav = ({ context, navData }: MultiPageNavProps): JSX.Element => {
  const buildSlug = (parent: string, child: string) => `/demos/${context.demo}/${parent}/${child}`;

  return (
    <nav>
      <ul className={classnames('text-sm')}>
        {navData.nav.map((parent) => (
          <li key={parent.title} className={classnames('mb-4')}>
            <Collapse title={parent.title} expandedByDefault={context.parent === parent.slug}>
              <ul className={classnames('pl-4')}>
                {parent.children.map((child) => {
                  const isActive = context.child === child.slug;
                  return (
                    <li key={child.title} className={classnames('mb-4')}>
                      <Link href={buildSlug(parent.slug, child.slug)}>
                        <a className={classnames({ 'text-teal': isActive, 'font-bold': isActive })}>
                          {child.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Collapse>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MultiPageNav;
