// Global
import Image from 'next/legacy/image';
// Components
import { CommunityListData } from 'ui/common/types/communityList';
import Button from '../buttons/Button';

type CommunityListProps = {
  className?: string;
  data: CommunityListData;
};

const CommunityList = ({ className, data }: CommunityListProps): JSX.Element => (
  <div className={className}>
    <h2 className="heading-md mb-4">{data.title}</h2>
    <p className="text-theme-text-alt mb-6 text-lg">{data.subtitle}</p>
    <ul className="grid gap-6 md:grid-cols-3">
      {data.content.map((link) => (
        <li key={link.title} className="flex flex-col justify-between">
          <div>
            <div className="border-theme-border-alt bg-theme-bg-alt mb-4 border">
              <Image src={link.img.src} alt={link.img.alt || ''} width="368" height="207" layout="responsive" />
            </div>
            <h3 className="heading-sm mb-2">{link.title}</h3>
            <p className="text-theme-text-alt mb-6 text-sm">{link.description}</p>
          </div>
          <div>
            <Button variant="text" text={link.linkText} href={link.href} icon={true} />
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
