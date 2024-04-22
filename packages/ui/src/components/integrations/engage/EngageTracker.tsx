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
  
  const isTrackerEnabled = useRef<boolean>(true);

  const initEngageTracker = useCallback(async () => {
    if (!EngageKeys.SitecoreCdpClientKey || !EngageKeys.SitecoreCdpTargetUrl || !EngageKeys.SitecoreCdpPointOfSale) {
      isTrackerEnabled.current = false;
      console.log('Engage tracker is disabled because of missing configuration.');
    }

    const initConfig: any = {
      clientKey: EngageKeys.SitecoreCdpClientKey,
      targetURL: EngageKeys.SitecoreCdpTargetUrl,
      pointOfSale: EngageKeys.SitecoreCdpPointOfSale,
      cookieExpiryDays: 365,
      forceServerCookieMode: false,
      //webPersonalization: true,
    };

    if (EngageKeys.SitecoreCdpCookieDomain) {
      initConfig.cookieDomain = EngageKeys.SitecoreCdpCookieDomain;
    }

    if (isTrackerEnabled.current) {
      const engage = await init(initConfig);
      setEngageTracker(engage);
    }
  }, []);

  useEffect(() => {
    initEngageTracker();
  }, [initEngageTracker]);

  return <EngageTrackerContext.Provider value={{ engageTracker, isTrackerEnabled: isTrackerEnabled.current, engageKeys: EngageKeys }}>{children}</EngageTrackerContext.Provider>;
};
