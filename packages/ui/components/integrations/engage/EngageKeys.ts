export interface IEngageConfigKeys {
  SitecoreCdpClientKey: string;
  SitecoreCdpPointOfSale: string;
  SitecoreCdpCookieDomain: string;
  SitecoreCdpTargetUrl: string;
}

//TODO: Hardcoded values since the build is broken and I can't get these to load from the .env file
export const EngageKeys: IEngageConfigKeys = {
  SitecoreCdpClientKey: process.env.NEXT_PUBLIC_SITECORE_CDP_CLIENT_KEY ?? 'demus01flt27azgg4uvrms0rb5mkautx',
  SitecoreCdpPointOfSale: process.env.NEXT_PUBLIC_SITECORE_CDP_POS ?? 'devPortalTemp',
  SitecoreCdpCookieDomain: process.env.NEXT_PUBLIC_SITECORE_CDP_COOKIE_DOMAIN ?? 'localhost',
  SitecoreCdpTargetUrl: process.env.NEXT_PUBLIC_SITECORE_CDP_TARGETURL ?? 'https://api-engage-us.sitecorecloud.io',
};
