import axios from 'axios';
// Interfaces
import type { SitecoreCommunityContent, SitecoreCommunityEvent } from './types';

type SitecoreCommunityBaseResponse = {
  comment_count: string;
  content_type: {
    name: string;
    page: string;
  };
  title: string;
  userAvatarObject: {
    name: string;
  };
  sys_id: string;
  view_count: string;
};

type SitecoreCommunityEventResponse = SitecoreCommunityBaseResponse & {
  edited_date_display: string;
  end_date: string;
  location_name: string;
  start_date: string;
  virtual_url: string;
};

type SitecoreCommunityContentResponse = SitecoreCommunityBaseResponse & {
  published_date: string;
};

export type ContentType = 'event' | 'blog' | 'questions';
export type ForumOption =
  | 'blog'
  | 'events'
  | 'news'
  | 'experiencePlatform'
  | 'contentManagement'
  | 'orderManagement'
  | 'contentOperations'
  | 'customerDataManagement'
  | 'digitalAssetManagement'
  | 'marketingAutomation'
  | 'personalizationAndTesting'
  | 'searchAndMerchandizing'
  | 'storefrontsAndMarketplaces';
export type SortOption = 'publish' | 'view' | 'created';

type SitecoreCommunityOptions = {
  contentType?: ContentType;
  forum?: ForumOption;
  maxResults?: number;
  sort?: SortOption;
};

const getEvents = async (maxResults: number): Promise<SitecoreCommunityEvent[]> => {
  const params = [`limit=${maxResults}`, 'offset=0', 'upcoming=false', 'sort=start_date', 'eventFilter=all', 'fetchRsvp=false'];
  return axios.get(`https://community.sitecore.com/api/sn_communities/v1/community/events?${params.join('&')}`).then((response) => {
    return response.data.result.contents.map((event: SitecoreCommunityEventResponse) => ({
      contentType: 'event',
      editedDate: event.edited_date_display,
      endDate: event.end_date,
      location: event.location_name,
      startDate: event.start_date,
      title: event.title,
      url: `/community?id=community_event&sys_id=${event.sys_id}`,
      userName: event.userAvatarObject.name,
      virtualUrl: event.virtual_url,
    }));
  });
};

const CONTENT_TYPE_IDS = {
  blog: 'cc3fcaa0dbd26600b1f6f78eaf96192e',
  event: '4c3a995ac302320012e45cb981d3aee0',
  questions: '5a2fcaa0dbd26600b1f6f78eaf9619a8',
};

const FORUM_IDS: Record<ForumOption, string> = {
  blog: 'a1c2eb6b1b313c10486a4083b24bcbba',
  contentManagement: '958bebd51b16f050486a4083b24bcbb0',
  contentOperations: '0c1ea35d1b16f050486a4083b24bcb28',
  customerDataManagement: '1b2e2f1d1b16f050486a4083b24bcbf1',
  digitalAssetManagement: 'd27d271d1b16f050486a4083b24bcbdf',
  events: '7a84272f1b313c10486a4083b24bcbd5',
  experiencePlatform: 'd78f61ab1bce7410486a4083b24bcb5c',
  marketingAutomation: '687ea39d1b16f050486a4083b24bcb3d',
  news: 'af85dddf1bf17810486a4083b24bcb00',
  orderManagement: '089ea39d1b16f050486a4083b24bcb45',
  personalizationAndTesting: '345ea39d1b16f050486a4083b24bcb35',
  searchAndMerchandizing: '4faeab9d1b16f050486a4083b24bcba4',
  storefrontsAndMarketplaces: '46ce63dd1b16f050486a4083b24bcb8f',
};

const getContent = async ({ contentType, maxResults, sort, forum }: SitecoreCommunityOptions): Promise<SitecoreCommunityContent[]> => {
  const params = [`sort=${sort}`, 'stFrom=0', `before=${new Date().toISOString()}`, `last=${maxResults}`];

  if (contentType) {
    params.push(`type=${CONTENT_TYPE_IDS[contentType]}`);
  }

  if (forum) {
    params.push(`forum=${FORUM_IDS[forum]}`);
  }

  return axios
    .get(`https://community.sitecore.com/api/sn_communities/v1/community/contents?${params.join('&')}`)
    .then((response) => {
      return response.data.result.contents.map((item: SitecoreCommunityContentResponse) => ({
        commentCount: item.comment_count,
        contentType: item.content_type.name,
        publishDate: item.published_date,
        title: item.title,
        url: `/community?id=${item.content_type.page}&sys_id=${item.sys_id}`,
        userName: item.userAvatarObject.name,
        viewCount: item.view_count,
      }));
    })
    .catch(Error);
};

const get = async ({ contentType = undefined, forum = undefined, maxResults = 3, sort = 'created' as SortOption }: SitecoreCommunityOptions): Promise<SitecoreCommunityEvent[] | SitecoreCommunityContent[]> => {
  // Prevent showing more than 5, its just too many
  const count = maxResults > 5 ? 5 : maxResults;
  if (contentType === 'event') {
    return getEvents(count);
  }

  return getContent({ contentType, maxResults: count, sort, forum });
};

export default {
  get,
};
