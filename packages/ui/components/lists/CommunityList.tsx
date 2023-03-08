// Global
import Image from 'next/legacy/image';
// Components
import { CommunityListData } from 'ui/common/types/communityList';
import TextLink from 'ui/components/common/TextLink';

type CommunityListProps = {
  className?: string;
  data: CommunityListData;
};

const CommunityList = ({ className, data }: CommunityListProps): JSX.Element => (
  <div className={className}>
    <h2 className="mb-4 heading-md">{data.title}</h2>
    <p className="mb-6 text-lg text-theme-text-alt">{data.subtitle}</p>
    <ul className="grid gap-6 md:grid-cols-3">
      {data.content.map((link) => (
        <li key={link.title} className="flex flex-col justify-between">
          <div>
            <div className="mb-4 border border-theme-border-alt bg-theme-bg-alt">
              <Image
                src={link.img.src}
                alt={link.img.alt || ''}
                width="368"
                height="207"
                layout="responsive"
              />
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
CommunityList.defaultProps = {
  className: '',
};

export default CommunityList;
