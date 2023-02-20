/**
 * Sitecore Community Integrations
 */
type SitecoreCommunityCore = {
  commentCount: string;
  title: string;
  url: string;
  viewCount: string;
  contentType: 'event' | 'Blog';
  userName: string;
};

export type SitecoreCommunityEvent = SitecoreCommunityCore & {
  editedDate: string;
  endDate: string;
  location: string;
  startDate: string;
  virtualUrl: string;
};

export type SitecoreCommunityContent = SitecoreCommunityCore & {
  publishDate: string;
};
