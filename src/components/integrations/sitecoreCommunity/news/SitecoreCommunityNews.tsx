import { ExtendedCard } from '@/src/components/ui/custom/card-extended';
import { cn } from '@/src/lib/util';
import { TextLink } from '@src/components/links/TextLink';
import { CardContent, CardHeader } from '@src/components/ui/card';
import { SitecoreCommunityNewsOrEventItem, SitecoreCommunityNewsOrEventItemSidebar } from '../SitecoreCommunityNewsOrEventItem';
import type { SitecoreCommunityContent } from '../types';

type SitecoreCommunityNewsProps = {
  title?: string;
  data?: Array<SitecoreCommunityContent>;
  hideCategory?: boolean;
  listItem?: boolean;
  className?: string;
};

export const SitecoreCommunityNews = ({ title, data, hideCategory, listItem, className }: SitecoreCommunityNewsProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <ExtendedCard className={cn('p-0', className)} style="flat" elevation="none">
      <CardHeader className="flex justify-between py-8 px-0">
        <h3 className="text-2xl font-heading font-medium">{title ? title : 'News and Announcements'}</h3>
        <TextLink href="https://community.sitecore.com/community?id=community_forum&sys_id=af85dddf1bf17810486a4083b24bcb00" text="See all" />
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item) =>
            listItem ? (
              <SitecoreCommunityNewsOrEventItemSidebar {...item} startDate={item.publishDate} key={item.url} />
            ) : (
              <SitecoreCommunityNewsOrEventItem {...item} startDate={item.publishDate} categoryTitle={!hideCategory ? 'News and Announcements' : undefined} key={item.url} />
            )
          )}
        </div>
      </CardContent>
    </ExtendedCard>
  );
};
