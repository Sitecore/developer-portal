import { PageInfo } from '@/src/lib/interfaces/page-info';
import { INestedObject } from '@sitecore/engage/types/lib/utils/flatten-object';
import { FC, useEffect } from 'react';
import { useEngageTracker } from 'ui/components/integrations';

interface TrackPageViewProps {
  pageInfo: PageInfo;
  children: React.ReactNode;
}

export const TrackPageView: FC<TrackPageViewProps> = (props) => {
  const tracker = useEngageTracker();

  useEffect(() => {
    const additionalData: INestedObject = {
      title: props.pageInfo.title,
    };

    if (props.pageInfo?.cdpTags && props.pageInfo.cdpTags.length > 0) {
      additionalData.tags = props.pageInfo.cdpTags;
    }

    tracker.TrackPageView(props.pageInfo.slug, additionalData);
  }, [props, tracker]);

  return <>{props.children}</>;
};
