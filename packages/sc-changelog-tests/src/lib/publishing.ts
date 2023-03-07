import { ContentItem, IContentHubOneClient } from '@sitecore/contenthub-one-sdk';

export async function unpublishItem(client: IContentHubOneClient, id: string) {
  console.log('Unpublish: ' + client + ' ### ' + id);
  await client.contentItems.unPublishAsync(id);
  console.log('Unpublished item: ' + id);
}

export async function publishItem(client: IContentHubOneClient, id: string) {
  await client.contentItems.publishAsync(id);
  console.log('Published item: ' + id);
}

export function isPublished(item: ContentItem) {
  if (item.system.lastPublishProgress != null) {
    if (item.system.lastPublishProgress.type == 'Publish') {
      //is published
      return true;
    } else if (item.system.lastPublishProgress.type == 'Unpublish') {
      //is unpublished
      return false;
    }
  } else {
    //not published yet
    return false;
  }

  return false;
}

export function isUnPublished(item: ContentItem) {
  if (item.system.lastPublishProgress != null) {
    if (item.system.lastPublishProgress.type == 'Publish') {
      //is published
      return false;
    } else if (item.system.lastPublishProgress.type == 'Unpublish') {
      //is unpublished
      return true;
    }
  } else {
    //not published yet
    return false;
  }

  return false;
}
