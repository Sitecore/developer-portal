"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");
const contenthub_one_api = require("@sitecore/contenthub-one-api");
require('dotenv').config();
const clTest = require('./lib/scripts/changelog-test');
console.log('START');

const client = clTest.authenticate(process.env.SITECORE_CLIENT_ID,process.env.SITECORE_CLIENT_SECRET);

//get all items of type changelog 


start();

async function start(){
    console.log('DELETE - Start');
    
    var items = await clTest.getItems(client,"changelog");
    console.log('Count: ' + items.totalCount);
    console.log('PageSize: ' + items.pageSize);
    console.log('PageNumber: ' + items.pageNumber);
    //console.log(items);

    items.data.forEach( async (item) => {
        console.log(item.name);
        //console.log(item.system);
        if (item.name.startsWith('SEBW-TEST-chlog-')) {
            console.log('Detected candidate...');

            var published = clTest.isPublished(item);
            //console.log("Published: " + published);
            if (!published) {
                await clTest.deleteItem(client,item.id);
                console.log('Item deleted');
            } else {
                console.log ('Item is published');
            }
            
            
        } else {
            console.log('Do not delete me please, I am not the one you were searching for');
        }

        console.log(item.fields.title.value);
        console.log('-------');

    })
    
 
    console.log('DELETE - end');
}