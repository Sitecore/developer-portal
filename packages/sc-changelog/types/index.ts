export enum ChangeType {
  Improvement = 'improvementid',
  NewFeature = 'newfeatureid',
  Bugfix = 'bugfixid',
}

export enum Product {
  OrderCloud,
  CDP,
  ContentHubOne,
  XMCloud,
  Personalize,
  Send,
  ContentOps,
  ContentHub,
  Search,
  DAM,
  Discover,
  Connect,
}

export * from './changeType';
export * from './common/media';
export * from './releaseNotes';
export * from './sitecoreCloud';
export * from './sitecoreProducts';
