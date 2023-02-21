// Global
import Link from 'next/link';
// Interfaces
import type { TrialNavContext, TrialNavData } from '@/src/interfaces/page-info';
// Components
import Collapse from 'ui/components/common/Collapse';

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
      <ul className="text-sm">
        {navData.nav.map((parent) => (
          <li key={parent.title} className="mb-4">
            <Collapse title={parent.title} expandedByDefault={context.parent === parent.slug}>
              <ul className="pl-4">
                {parent.children.map((child) => {
                  const isActive = context.child === child.slug;
                  return (
                    <li key={child.title} className="mb-4">
                      <Link
                        href={buildSlug(parent.slug, child.slug)}
                        className={`${isActive ? 'text-teal font-bold' : ''}`}
                      >
                        {child.title}
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
