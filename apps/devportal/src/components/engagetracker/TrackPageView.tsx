import { PageInfo } from '@/src/lib/interfaces/page-info';
import { INestedObject } from '@sitecore/engage/types/lib/utils/flatten-object';
import { FC, useCallback, useEffect } from 'react';
import { useEngageTracker } from 'ui/components/integrations';

interface TrackPageViewProps {
  pageInfo: PageInfo;
  children: React.ReactNode;
}

export const TrackPageView: FC<TrackPageViewProps> = (props) => {
  const tracker = useEngageTracker();
  let slug = props.pageInfo.slug;

  const callTrackPageView = useCallback(async () => {
    const additionalData: INestedObject = {
      title: props.pageInfo.title,
    };

    if (props.pageInfo?.cdpTags && props.pageInfo.cdpTags.length > 0) {
      additionalData.tags = props.pageInfo.cdpTags;
    }

    // Handle Pattern Cards
    if (props.pageInfo?.cdpPersonaDefinition) {
      additionalData.patternCards = props.pageInfo.cdpPersonaDefinition;
    }

    // Handle Products Frontmatter Data
    if (props.pageInfo?.product) {
      additionalData.product = props.pageInfo.product;
    }

    // Handle weird "e" for Homepage slug
    if (slug === 'e') {
      slug = 'Home Page';
    }

    await tracker.TrackPageView(slug, additionalData);
  }, [props, tracker]);

  useEffect(() => {
    callTrackPageView();
  }, [callTrackPageView]);

  return <>{props.children}</>;
};
