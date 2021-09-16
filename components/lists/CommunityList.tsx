// Global
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
// Data
import data from '@/data/data-community-list';
// Components
import TextLink from '@/components/helper/TextLink';

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
          <TextLink href={link.href} text={link.linkText} />
        </li>
      ))}
    </ul>
  </div>
);

export default CommunityList;
