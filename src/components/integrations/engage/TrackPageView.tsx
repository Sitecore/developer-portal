import { Product } from '@lib/changelog/types';

import { useRouter } from 'next/router';
import { FC, useEffect, useRef } from 'react';

import { useEngageTracker } from '@/src/hooks/useEngageTracker';
import { PageInfo } from '@/src/lib/interfaces/page-info';

interface TrackPageViewProps {
  children: React.ReactNode;
  pageInfo?: PageInfo | undefined;
  product?: Product | undefined;
  slug?: string;
}

export const TrackPageView: FC<TrackPageViewProps> = (props) => {
  const router = useRouter();
  const tracker = useEngageTracker();
  const prevUrlRef = useRef<string>('');

  const callTrackPageView = async (url: string) => {
    if (prevUrlRef.current !== url && tracker && tracker.context && tracker.context.isTrackerEnabled) {
      let slugPath = url;

      // If slug is provided, override the router slug
      if (props.slug) {
        slugPath = props.slug;
      }

      const additionalData: any = {};

      if (props.pageInfo?.product) {
        additionalData.product = props.pageInfo.product;
      }

      // To account for ChangeLog Product Pages
      if (props.product) {
        additionalData.product = props.product.name;
      }

      await tracker.TrackPageView(slugPath, additionalData);
      prevUrlRef.current = url;
    }
  };

  // Call on initial render
  useEffect(() => {
    callTrackPageView(router.asPath);
    prevUrlRef.current = router.asPath;
  });

  // Listen for route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (router.asPath !== prevUrlRef.current) {
        callTrackPageView(url);
        prevUrlRef.current = url;
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath, tracker.context.isTrackerEnabled]);

  return <>{props.children}</>;
};
