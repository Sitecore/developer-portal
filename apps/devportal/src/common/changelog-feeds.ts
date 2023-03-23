import { ChangelogEntry } from '@/../../packages/sc-changelog/types/changeLogEntry';
import { Feed } from 'feed';
import { getChangelogEntryUrl } from './changelog';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';

export function CreateFeed(changelogEntryList: ChangelogEntryList<ChangelogEntry[]>): Feed {
  const feed = new Feed({
    title: 'Sitecore Changelog',
    description: 'Learn more about new versions, changes and improvements!',
    id: 'https://developers.sitecore.com/changelog',
    link: 'https://developers.sitecore.com/changelog',
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'http://example.com/image.png',
    favicon: 'http://example.com/favicon.ico',
    copyright: 'All rights reserved 2023, Sitecore',
    generator: 'Feed for Node.js',
    feedLinks: {
      json: 'https://example.com/json',
      atom: 'https://example.com/atom',
    },
    author: {
      name: 'Sitecore',
      email: 'no-reply@sitecore.com',
      link: 'https://developers.sitecore.com',
    },
  });

  changelogEntryList.entries.forEach((changelogEntry: ChangelogEntry) => {
    feed.addItem({
      guid: changelogEntry.id,
      title: changelogEntry.title,
      description: changelogEntry.description,
      link: getChangelogEntryUrl(changelogEntry),
      date: new Date(changelogEntry.releaseDate),
      //      image: changelogEntry.image[0].fileUrl,
    });
  });

  return feed;
}
