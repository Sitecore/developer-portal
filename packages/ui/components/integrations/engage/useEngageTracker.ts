import { ICustomEventInput, IPageViewEventInput, IPersonalizerInput } from '@sitecore/engage';
import { INestedObject } from '@sitecore/engage/types/lib/utils/flatten-object';
import { useContext } from 'react';
import { EngageTrackerContext } from './EngageTracker';

export const useEngageTracker = () => {
  const context = useContext(EngageTrackerContext);

  const TrackPageView = async (pageSlug: string, extensionData: INestedObject | undefined) => {
    if (!context.isTrackerEnabled) return;

    if (!context.engageTracker === undefined) {
      console.log('engageTracker is undefined');
      return;
    }

    const pageViewData: IPageViewEventInput = {
      channel: 'WEB',
      currency: 'USD',
      pointOfSale: context.engageKeys.SitecoreCdpPointOfSale,
      language: 'EN',
      page: pageSlug,
    };

    await context.engageTracker?.pageView(pageViewData, extensionData);
  };

  const TrackEvent = async (eventName: string, extensionData?: INestedObject | undefined) => {
    if (!context.isTrackerEnabled) return;

    if (!context.engageTracker === undefined) {
      console.log('engageTracker is undefined');
      return;
    }

    const eventData: ICustomEventInput = {
      channel: 'WEB',
      currency: 'USD',
      pointOfSale: context.engageKeys.SitecoreCdpPointOfSale,
      language: 'EN',
    };

    await context.engageTracker?.event(eventName, eventData, extensionData);
  };

  const RunPersonalizationFlow = async <T>(friendlyId: string, data?: INestedObject | undefined): Promise<T | undefined> => {
    if (!context.isTrackerEnabled) return;

    if (!context.engageTracker === undefined) {
      console.log('engageTracker is undefined');
      return;
    }

    const personalizationData: IPersonalizerInput = {
      channel: 'WEB',
      currency: 'USD',
      friendlyId,
      pointOfSale: context.engageKeys.SitecoreCdpPointOfSale,
    };

    if (data) {
      personalizationData.params = data;
    }

    const response = await context.engageTracker?.personalize(personalizationData, 10000);

    return response as T;
  };

  return { context, TrackPageView, TrackEvent, RunPersonalizationFlow };
};
