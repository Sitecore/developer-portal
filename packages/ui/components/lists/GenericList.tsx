// Global
import Image from 'next/legacy/image';
import Link from 'next/link';
// Components
import { GenericListData } from 'ui/common/types/genericList';
import TextLink from 'ui/components/common/TextLink';
import FeedHeading from '../headings/FeedHeading';

type GenericListProps = {
  data: GenericListData;
  className?: string;
  columns?: number;
  headingClass?: string;
};

const GenericList = ({ className, data, columns, headingClass }: GenericListProps): JSX.Element => (
  <div className={className}>
    <FeedHeading title={data.title != null ? data.title : 'Sitecore Changelog'} headingClass={headingClass} />
    <p className="text-theme-text-alt mb-6 text-lg">{data.subtitle}</p>
    <ul className={`grid  items-stretch gap-6 ${columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3'}`}>
      {data.content.map((link) => (
        <li key={link.title} className="border-theme-border flex h-full flex-col border hover:shadow-lg">
          <div className="border-theme-border-alt bg-theme-bg-alt mb-4">
            <Link href={link.href}>
              <Image src={link.img.src} alt={link.img.alt || ''} width="368" height="207" layout="responsive" />
            </Link>
          </div>
          <div className="flex-1 px-4">
            <h3 className="text-base font-semibold">{link.title}</h3>

            <p className="text-theme-text-alt my-4 text-sm">{link.description}</p>
          </div>
          <TextLink href={link.href} text={link.linkText} className="p-4" />
        </li>
      ))}
    </ul>
  </div>
);
GenericList.defaultProps = {
  className: '',
};

export default GenericList;
