export enum ChangeType {
  Improvement = 'improvementid',
  NewFeature = 'newfeatureid',
  Bugfix = 'bugfixid',
}

export enum Product {
  ORDERCLOUD = 'OrderCloud',
  CDP = 'Sitecore CDP',
  CONTENTHUBONE = 'Content Hub ONE',
  XMCLOUD = 'XM Cloud',
  PERSONALIZE = 'Sitecore Personalize',
  SEND = 'Sitecore Send',
  CONTENTOPS = 'Content Operations',
  CONTENTHUB = 'Content Hub',
  SEARCH = 'Sitecore Search',
  DAM = 'Sitecore DAM',
  DISCOVER = 'Sitecore Discover',
  CONNECT = 'Sitecore Connect',
}

export * from './changeType';
export * from './common/media';
export * from './releaseNotes';
export * from './sitecoreCloud';
export * from './sitecoreProduct';

