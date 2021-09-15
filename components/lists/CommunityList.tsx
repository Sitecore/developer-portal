// Global
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
import Link from 'next/link';
// Data
import data from '@/data/data-community-list';
// Components
import SvgIcon from '@/components/helper/SvgIcon';

type CommunityListProps = {
  className?: TTailwindString;
};

const CommunityList = ({ className }: CommunityListProps): JSX.Element => (
  <div className={classnames(className)}>
    <h2 className={classnames('heading-md', 'mb-8')}>{data.title}</h2>
    <ul className={classnames('grid', 'gap-6', 'md:grid-cols-3')}>
      {data.content.map((link) => (
        <li key={link.title} className={classnames('flex', 'flex-col', 'justify-between')}>
          <div>
            <h3 className={classnames('heading-sm', 'mb-2')}>{link.title}</h3>
            <p className={classnames('text-sm', 'text-gray-dark', 'mb-6')}>{link.description}</p>
          </div>
          <Link href={link.href}>
            <a
              className={classnames(
                'group',
                'font-bold',
                'text-sm',
                'flex',
                'items-center',
                'hover:underline',
                'focus:underline'
              )}
            >
              {link.linkText}
              <span
                className={classnames(
                  'h-4',
                  'inline-block',
                  'ml-2',
                  'transform-gpu',
                  'transition-transform',
                  'w-4',
                  'group-hover:translate-x-2',
                  'group-focus:translate-x-2'
                )}
              >
                <SvgIcon icon="quick-links" className={classnames('text-red')} />
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CommunityList;
