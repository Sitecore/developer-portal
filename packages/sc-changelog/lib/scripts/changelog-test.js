"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");

module.exports.authenticate =  function(clientId, clientSecret) {

    //use SDK & Connect
    var credentials = new contenthub_one_sdk.ClientCredentialsScheme(clientId, clientSecret);
    var client = contenthub_one_sdk.ContentHubOneClientFactory.create(credentials);

    return client;
}

module.exports.getItems =  async function (client,contenttype) {
    var items = await client.contentItems.getAsync(new contenthub_one_sdk.ContentItemSearchRequest().withFieldQuery(
        contenthub_one_sdk.ContentItemSearchField.contentType,
        contenthub_one_sdk.Equality.Equals,
        contenttype
    ));
    return items;
}

module.exports.deleteItem = async function (client, id) {
    var a = await client.contentItems.deleteAsync(id);
}

module.exports.createItem = async function (client,contentType,contentItem) {
    var newContentItem = await client.contentItems.createAsync(contentType, contentItem);
    return newContentItem;
}

module.exports.generateItemId = function () {
    var randomstring = require("randomstring");
    return 'SEBW-TEST-chlog-' + randomstring.generate();;
  }
  
module.exports.getRandomProduct = function () { 
  
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
  
    var product = [{
      id: productId,
      relatedType: "Content",
    }, ]
  
  
    return product;
  }
  
module.exports.getRandomChangeType = function () { 
  
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
  
module.exports.generateRandomDate = function () { 
  
    var year = Math.floor(Math.random() * (2023 - 2022 + 1) + 2022);
    var month = Math.floor(Math.random() * (9 - 3 + 1) + 3);
    var day = Math.floor(Math.random() * (30 - 10 + 1) + 10);

    console.log('Date: ' + year + '-' + month + '-' + day);
    
    var dateString = year + '-0' + month + '-' + day + 'T10:20:30Z';
    
    console.log(dateString);
  
    return new Date(dateString);
}
  
module.exports.getMediaItem = function() {
    //var mediaItem = await client.mediaItem.getMediaItem('dkjRFDWSN0KnHk1VvnDZLw');
    var media = [{
      id: "dkjRFDWSN0KnHk1VvnDZLw",
      relatedType: "Media",
    }, ];
  
    return media;
  }
  
  
module.exports.getRichText =  function (){
  
    var richText = {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "SEBW-Test Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            }
          ]
        }
      ]
    };
    return richText;
  }

module.exports.unpublishItem = async function (client,id){
    console.log('Unpublish: ' + client + ' ### ' + id);
    await client.contentItems.unPublishAsync(id)
    console.log('Unpublished item: ' + id); 

}
module.exports.publishItem =  async function (client,id){

    await client.contentItems.publishAsync(id)
    console.log('Published item: ' + id);    
}