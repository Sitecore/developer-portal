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

//TODO: get all items of type change log with id-prefix 'SEBW-TEST-chlog-'
//if they are published they need to be unpublished first
start();

async function start(){
    console.log('DELETE - Start');
    
    var items = await getItems();
    console.log('Count: ' + items.totalCount);
    console.log('PageSize: ' + items.pageSize);
    console.log('PageNumber: ' + items.pageNumber);
    //console.log(items);

    items.data.forEach( async (item) => {
        console.log(item.name);
        //console.log(item.system);
        if (item.name.startsWith('SEBW-TEST-chlog-')) {
            console.log('DELETE this guy');
            if (item.system.lastPublishProgress != null) {
                
                
                if (item.system.lastPublishProgress.type == 'Publish') {
                    console.log('Published - do not delete!!! Status:' + item.system.lastPublishProgress.status);
                } else if (item.system.lastPublishProgress.type = 'Unpublish') {
                    console.log('Unpublished - can be deleted!!! Status:' + item.system.lastPublishProgress.status);
                    deleteItem(item.id);
                }

                


            } else {
                console.log('Not Published!!!');
                deleteItem(item.id);
            }

            
        } else {
            console.log('Dont delete me please');
        }

        //console.log(item.fields);
        console.log(item.fields.title.value);
        console.log('-------');

    })
    

    //items.forEach()

    console.log('DELETE - end');
}
async function getItems() {
    var items = await client.contentItems.getAsync(new contenthub_one_sdk.ContentItemSearchRequest().withFieldQuery(
        contenthub_one_sdk.ContentItemSearchField.contentType,
        contenthub_one_sdk.Equality.Equals,
        "changelog"
    ));
    return items;
}

async function deleteItem(id) {
    var a = client.contentItems.deleteAsync(id);
}