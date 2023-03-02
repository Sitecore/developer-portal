"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");
const contenthub_one_api = require("@sitecore/contenthub-one-api");
require('dotenv').config();
const clTest = require('./lib/scripts/changelog-test');
console.log('START');


const client = clTest.authenticate(process.env.SITECORE_CLIENT_ID,process.env.SITECORE_CLIENT_SECRET);

//start(); //create single Changelog item
//get(); //just a get changelog item example
iterate(10); //create numerous Changelog items


async function get() {
  var z = await client.contentItems.singleAsync('SEBW-TEST-chlog-1lLEaGl4pAxi8zBUYSMdkF8sMppMOcqh');
  console.log('Content Item:');
  console.log(z);

}
async function iterate (numberOfIterations) {
  console.log('Start interation');
  for (let index = 0; index < numberOfIterations; index++) {
    await start();
  }
  console.log('End interation');
}

async function start() {

  //setup data
  var entityId = clTest.generateItemId();
  var releaseDate = clTest.generateRandomDate();
  var version = '123.456.7';
  var readMoreLink = 'https://docs.sitecore.com';
  var media = clTest.getMediaItem(); 
  var description = clTest.getRichText();
  var changeType = clTest.getRandomChangeType();
  var product = clTest.getRandomProduct();

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

  
  const contentItem = new contenthub_one_sdk.ContentItem(
    entityId, {
      name: entityId,
      fields: {
        title: new contenthub_one_sdk.ShortTextField('Scaled Test: ' + entityId),
        version: new contenthub_one_sdk.ShortTextField(version),
        releaseDate: new contenthub_one_sdk.DateTimeField(releaseDate),
        breakingChange: new contenthub_one_sdk.BooleanField(false),
        readMoreLink: new contenthub_one_sdk.ShortTextField(readMoreLink),
        image: new contenthub_one_sdk.MediaField(media),
        changeType: new contenthub_one_sdk.ReferenceField(changeType),
        sitecoreProduct: new contenthub_one_sdk.ReferenceField(product),
        description: new contenthub_one_sdk.RichTextField(description),  
      },
    }
  );

  //create new Content item
  var newContentItem = await clTest.createItem(client,"changelog",contentItem);

  console.log('Content Item created ' + newContentItem.id)

}


