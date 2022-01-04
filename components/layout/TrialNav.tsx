// Global
import Link from 'next/link';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { TrialNavData, TrialNavContext } from '@/interfaces/page-info';
// Components
import Collapse from '@/components/helper/Collapse';

// TODO: Fix this
type MultiPageNavProps = {
  context: TrialNavContext;
  navData: TrialNavData;
};

const MultiPageNav = ({ context, navData }: MultiPageNavProps): JSX.Element => {
  const buildSlug = (parent: string, child: string) =>
    `/trials/${context.trial}/${parent}/${child}`;

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
