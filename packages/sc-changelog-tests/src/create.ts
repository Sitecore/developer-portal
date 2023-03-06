import { BooleanField, ContentItem, DateTimeField, MediaField, ReferenceField, RichTextField, ShortTextField } from '@sitecore/contenthub-one-sdk';
import { SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET } from './constants';
import { authenticate } from './lib/auth';
import { getRandomChangeType, getRandomProduct } from './lib/changelog';
import { createItem } from './lib/items';
import { getMediaItem } from './lib/media';
import { generateItemId, generateRandomDate } from './lib/random';
import { getRichText } from './lib/richText';

console.log('START');

const client = authenticate(SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET);

//start(); //create single Changelog item
//get(); //just a get changelog item example
iterate(33); //create numerous Changelog items

async function get() {
  const z = await client.contentItems.singleAsync('SEBW-TEST-chlog-1lLEaGl4pAxi8zBUYSMdkF8sMppMOcqh');
  console.log('Content Item:');
  console.log(z);
}
async function iterate(numberOfIterations: number) {
  console.log('Start interation');
  for (let index = 0; index < numberOfIterations; index++) {
    await start();
  }
  console.log('End interation');
}

async function start() {
  //setup data
  const entityId = generateItemId(8);
  const releaseDate = generateRandomDate();
  const version = '123.456.7';
  const readMoreLink = 'https://docs.sitecore.com';
  const media = getMediaItem();
  const description = getRichText();
  const changeType = getRandomChangeType();
  const product = getRandomProduct();

  console.log('Values:');
  console.log('EntityId: ' + entityId);
  console.log('ReleaseDate: ' + releaseDate);
  console.log('Version: ' + version);
  console.log('Read More Link: ' + readMoreLink);
  console.log('Media: ' + media);
  console.log(media);
  console.log('Product: ' + product);
  console.log(product);
  console.log('ChangeType: ' + changeType);
  console.log(changeType);
  console.log('Description: ');
  console.log(description);

  const contentItem = new ContentItem(entityId, {
    name: entityId,
    fields: {
      title: new ShortTextField('Scaled Test: ' + entityId),
      version: new ShortTextField(version),
      releaseDate: new DateTimeField(releaseDate),
      breakingChange: new BooleanField(false),
      readMoreLink: new ShortTextField(readMoreLink),
      image: new MediaField(media),
      changeType: new ReferenceField(changeType),
      sitecoreProduct: new ReferenceField(product),
      description: new RichTextField(description),
    },
  });

  //create new Content item
  const newContentItem = await createItem(client, 'changelog', contentItem);

  console.log('Content Item created ' + newContentItem?.id);
}
