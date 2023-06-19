// Global
import Image from 'next/legacy/image';
// Components
import { GenericListData } from 'ui/common/types/genericList';
import TextLink from 'ui/components/common/TextLink';

type GenericListProps = {
  data: GenericListData;
  className?: string;
  columns?: number;
};

const GenericList = ({ className, data, columns }: GenericListProps): JSX.Element => (
  <div className={className}>
    <h2 className="mb-4 heading-md">{data.title}</h2>
    <p className="mb-6 text-lg text-theme-text-alt">{data.subtitle}</p>
    <ul className={`grid gap-6 ${columns ? `md:grid-cols-${columns}` : 'md:grid-cols-3'}`}>
      {data.content.map((link) => (
        <li key={link.title} className="flex flex-col justify-between">
          <div>
            <div className="mb-4 border border-theme-border-alt bg-theme-bg-alt">
              <Image src={link.img.src} alt={link.img.alt || ''} width="368" height="207" layout="responsive" />
            </div>
            <h3 className="mb-2 heading-sm">{link.title}</h3>
            <p className="mb-6 text-sm text-theme-text-alt">{link.description}</p>
          </div>
          <div>
            <TextLink href={link.href} text={link.linkText} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);
GenericList.defaultProps = {
  className: '',
};

export default GenericList;
