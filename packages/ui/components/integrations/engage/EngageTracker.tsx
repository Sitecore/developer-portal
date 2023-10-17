import { Engage, init } from '@sitecore/engage';
import { FC, createContext, useCallback, useEffect, useRef, useState } from 'react';
import { EngageKeys, IEngageConfigKeys } from './EngageKeys';

export const EngageTrackerContext = createContext<EngageTrackerContextType>({} as EngageTrackerContextType);

export interface EngageTrackerContextType {
  engageTracker: Engage | undefined;
  engageKeys: IEngageConfigKeys;
  isTrackerEnabled: boolean;
}

interface EngageTrackerProviderProps {
  children: React.ReactNode;
}

export const EngageTrackerProvider: FC<EngageTrackerProviderProps> = ({ children }) => {
  const [engageTracker, setEngageTracker] = useState<Engage | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const isTrackerEnabled = useRef<boolean>(true);

  const initEngageTracker = useCallback(async () => {
    setLoading(true);

    if (!EngageKeys.SitecoreCdpClientKey || !EngageKeys.SitecoreCdpTargetUrl || !EngageKeys.SitecoreCdpCookieDomain || !EngageKeys.SitecoreCdpPointOfSale) {
      isTrackerEnabled.current = false;
      console.log('Engage tracker is disabled because of missing configuration.');
    }

    if (isTrackerEnabled.current) {
      const engage = await init({
        clientKey: EngageKeys.SitecoreCdpClientKey,
        targetURL: EngageKeys.SitecoreCdpTargetUrl,
        cookieDomain: EngageKeys.SitecoreCdpCookieDomain,
        pointOfSale: EngageKeys.SitecoreCdpPointOfSale,
        cookieExpiryDays: 365,
        forceServerCookieMode: false,
      });
      setEngageTracker(engage);
      setLoading(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    initEngageTracker();
  }, [initEngageTracker]);

  return <EngageTrackerContext.Provider value={{ engageTracker, isTrackerEnabled: isTrackerEnabled.current, engageKeys: EngageKeys }}>{loading ? null : children}</EngageTrackerContext.Provider>;
};
