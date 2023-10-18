export interface IEngageConfigKeys {
  SitecoreCdpClientKey: string;
  SitecoreCdpPointOfSale: string;
  SitecoreCdpCookieDomain: string;
  SitecoreCdpTargetUrl: string;
}

export const EngageKeys: IEngageConfigKeys = {
  SitecoreCdpClientKey: process.env.NEXT_PUBLIC_SITECORE_CDP_CLIENT_KEY ?? '',
  SitecoreCdpPointOfSale: process.env.NEXT_PUBLIC_SITECORE_CDP_POS ?? '',
  SitecoreCdpCookieDomain: process.env.NEXT_PUBLIC_SITECORE_CDP_COOKIE_DOMAIN ?? '',
  SitecoreCdpTargetUrl: process.env.NEXT_PUBLIC_SITECORE_CDP_TARGETURL ?? '',
};
