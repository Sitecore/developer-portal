"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");
const contenthub_one_api = require("@sitecore/contenthub-one-api")
require('dotenv').config();;
console.log('START');

//var clientId = process.env.SITECORE_CLIENT_ID;
const clientId = 'A5cLWiOrk5F1h8YH8X00pwaSmazwyOb7';
//var clientSecret = process.env.SITECORE_CLIENT_SECRET;
const clientSecret = 'q72ZsJ4Y1ed6HW6lg_XUWY1EB4zcmfd-JO59CvQqP2JdSSKvkFurWX7-Z4nl5QcX';

//use SDK & Connect
var credentials = new contenthub_one_sdk.ClientCredentialsScheme(clientId, clientSecret);
var client = contenthub_one_sdk.ContentHubOneClientFactory.create(credentials);


//
start();

async function start() {

  //var z = await client.contentItems.singleAsync('rWTKtOWSIEmz5fQQSxoeOA');
  //console.log('Content Item:');
  //console.log(z);

  //TODO: setup data
  var entityId = generateItemId();
  var releaseDate = generateRandomDate();
  var version = '123.456.7';
  var readMoreLink = 'https://docs.sitecore.com';
  var media = getMediaItem(); //TODO
  var changeType = ''; //TODO
  var description = ''; //TODO
  var changeType = getRandomChangeType();
  var product = getRandomProduct();

  console.log('Values:');
  console.log('EntityId: ' + entityId);
  console.log('ReleaseDate: ' + releaseDate);
  console.log('Version: ' + version);
  console.log('Read More Link: ' + readMoreLink);
  console.log('Media: ' + media);
  console.log('Product: ' + product);
  console.log(product);
  console.log('ChangeType: ' + changeType);
  console.log(changeType);

  //TODO: create Content Item
  const contentItem = new contenthub_one_sdk.ContentItem(
    entityId, {
      name: entityId,
      fields: {
        title: new contenthub_one_sdk.ShortTextField('Scaled Test: ' + entityId),
        version: new contenthub_one_sdk.ShortTextField(version),
        releaseDate: new contenthub_one_sdk.DateTimeField(releaseDate),
        breakingChange: new contenthub_one_sdk.BooleanField(false),
        readMoreLink: new contenthub_one_sdk.ShortTextField(readMoreLink),
        //image: new contenthub_one_sdk.MediaField(media),
        changeType: new contenthub_one_sdk.ReferenceField(changeType),
        sitecoreProduct: new contenthub_one_sdk.ReferenceField(product),

      },
    }
  );
  //create new Content item
  var newContentItem = await client.contentItems.createAsync("changelog", contentItem);

  console.log('Content Item created ' + newContentItem.id)


  //TODO: Publish Item
}


function generateItemId() {
  var randomstring = require("randomstring");
  return 'SEBW-TEST-chlog-' + randomstring.generate();;
}

function getRandomProduct() { //TODO

  var productId = '';

  var randomnumber = Math.floor(Math.random() * (11 - 1 + 1) + 1); //TODO:

  console.log('random product: ' + randomnumber);

  switch (randomnumber) {
    case 1:
      productId = 'KBtlU-ZzYkeYcafWoxyuNQ'; //Sitecore Connect
      break;
    case 2:
      productId = 'uAwJlln4BUqyOtpExq1O5g'; //Sitecore Personalize
      break;
    case 3:
      productId = 'S3Nt7UJGiUcKRji3ERDpNEA'; //Sitecore CDP
      break;
    case 4:
      productId = 'i_EBHSPyF0WvLmpKn99Byw'; //Sitecore Send
      break;
    case 5:
      productId = 'u-geEE0EVkiusuAZ1D0EeQ'; //Sitecore Commerce Order Cloud
      break;
    case 6:
      productId = 'L24AbSEPSUKkDQTpPT7uoA'; //Sitecore Discover
      break;
    case 7:
      productId = '4U7YVAy4V0mH0fA7foawJw'; //Sitecore Search
      break;
    case 8:
      productId = 'ZagATPres0mB9V0eVoqk2A'; //Content Hub Operations
      break;
    case 9:
      productId = 'K1VyMQaExUGe-OD6eoSvdA'; //Content Hub DAM
      break;
    case 10:
      productId = 'n47NXxNFxUqPttUxoFaRyA'; //Content Hub ONE
      break;
    case 11:
      productId = 'av_GqshF5U2kL8XMGjf-Xw'; //XM Cloud
      break;

  }

  /*var product = new ReferenceField([ 
    <EntityLink> {
      id: "<content item id>",
      relatedType: "Content",
    },
  ])*/

  var product = [{
    id: productId,
    relatedType: "Content",
  }, ]


  return product;
}

function getRandomChangeType() { //TODO

  var changeTypeId = '';
  var randomnumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomnumber) {
    case 1:
      changeTypeId = 'jNZQWrssyEaU7gwlIYpJnQ'; //Bugfix
      break;
    case 2:
      changeTypeId = 'bPCLEiNA4kmJspgn4lmizA'; //New Feature
      break;
    case 3:
      changeTypeId = 'UKvjuaa7QEC3ipciF1O_ag'; //Improvement
      break;
  }
  var changeType = [{
    id: changeTypeId,
    relatedType: "Content",
  }, ]

  return changeType;
}

function generateRandomDate() { //TODO

  var year = Math.floor(Math.random() * (2023 - 2022 + 1) + 2022);
  var month = Math.floor(Math.random() * (9 - 3 + 1) + 3);
  var day = Math.floor(Math.random() * (30 - 1 + 1) + 1);
  console.log('Date: ' + year + '-' + month + '-' + day);
  var dateString = year + '-0' + month + '-' + day + 'T10:20:30Z';
  console.log(dateString);

  return new Date(dateString);
}

function getMediaItem() {
  //var mediaItem = await client.mediaItem.getMediaItem('dkjRFDWSN0KnHk1VvnDZLw');
  var media = [{
    id: "dkjRFDWSN0KnHk1VvnDZLw",
    relatedType: "Media",
  }, ];

  return media;
}