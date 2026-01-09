import { Card, CardContent, CardHeader } from '@components/ui/card';
import { TextLink } from '../../../links/TextLink';
import { SitecoreCommunityNewsOrEventItem, SitecoreCommunityNewsOrEventItemSidebar } from '../SitecoreCommunityNewsOrEventItem';
import { SitecoreCommunityContent } from '../types';
import { cn } from '@lib/utils';

type SitecoreCommunityNewsProps = {
  title?: string;
  data?: Array<SitecoreCommunityContent>;
  hideCategory?: boolean;
  listItem?: boolean;
  className?: string;
};

export const SitecoreCommunityNews = ({ title, data, hideCategory, listItem, className }: SitecoreCommunityNewsProps) => {
  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Card className={cn('border-0 shadow-none', className)}>
      <CardHeader className="flex justify-between px-0">
        <h3 className="text-2xl font-heading font-normal">
          {title ? title : 'News and Announcements'}
        </h3>
        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00" text="See all" />
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-8 py-5">
          {data.map((item, i) =>
            listItem ? (
              <SitecoreCommunityNewsOrEventItemSidebar {...item} startDate={item.publishDate} key={i} />
            ) : (
              <SitecoreCommunityNewsOrEventItem {...item} startDate={item.publishDate} categoryTitle={!hideCategory ? 'News and Announcements' : undefined} key={i} />
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};
