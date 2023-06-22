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
  <div className={`${className} ${data.CssClass}`}>
    <span className=" generic-list-heading">
      <FeedHeading title={data.title != null ? data.title : 'Sitecore Changelog'} headingClass={headingClass} />
    </span>
    <p className="text-theme-text-alt subtitle mb-6 text-lg">{data.subtitle}</p>
    <ul className={`grid  items-stretch gap-6 ${columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3'}`}>
      {data.content.map((link) => (
        <li key={link.title} className="border-theme-border generic-list-item group flex h-full flex-col border hover:shadow-lg">
          <div className="border-theme-border-alt mb-4">
            <Link href={link.href}>
              <Image src={link.img.src} alt={link.img.alt || ''} width={link.img.width || '368'} height={link.img.height || '207'} layout={link.img.width && link.img.height ? 'fixed' : 'responsive'} />
            </Link>
          </div>
          <div className="flex-1 px-4 ">
            <Link href={link.href}>
              <h3 className="text-theme-text-alt text-base font-semibold">{link.title}</h3>

              <p className="text-theme-text-alt my-4 text-sm">{link.description}</p>
            </Link>
          </div>
          <TextLink href={link.href} text={link.linkText} className="text-theme-text-alt p-4" />
        </li>
      ))}
    </ul>
  </div>
);
GenericList.defaultProps = {
  className: '',
};

export default GenericList;
