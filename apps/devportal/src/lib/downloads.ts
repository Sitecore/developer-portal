import downloads, { DownloadItem, PUBLIC_DOWNLOAD_HOST } from '@/data/data-downloads';

export function getDownloadItemByUid(uid: string | null): DownloadItem | undefined {
  if (uid === null) return undefined;
  uid = uid.split('.')[0];
  return downloads.find((item) => item.uid === uid);
}

export function getDownloadUrl(uid: string | null): string | undefined {
  const item = getDownloadItemByUid(uid);
  return item ? PUBLIC_DOWNLOAD_HOST.concat(item.fileLocation) : undefined;
}
