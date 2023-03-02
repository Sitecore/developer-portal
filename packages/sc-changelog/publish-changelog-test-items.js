"use strict";
exports.__esModule = true;
const contenthub_one_sdk = require("@sitecore/contenthub-one-sdk");
const contenthub_one_api = require("@sitecore/contenthub-one-api");
require('dotenv').config();
const clTest = require('./lib/scripts/changelog-test');
console.log('START');

const client = clTest.authenticate(process.env.SITECORE_CLIENT_ID,process.env.SITECORE_CLIENT_SECRET);

//find all changelog items with prefix that are not published yet

start();

async function start () {
    console.log('Publish - Start');
    
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
            if (item.system.lastPublishProgress != null) {
                if (item.system.lastPublishProgress.type == 'Publish') {
                    //if they are published they need to be unpublished first
                    console.log('Published - no action required!!! Status:' + item.system.lastPublishProgress.status);
                    

                } else if (item.system.lastPublishProgress.type = 'Unpublish') {
                    console.log('Unpublished - publish again!!! Status:' + item.system.lastPublishProgress.status);
                    await clTest.publishItem(client,item.id);
                }

            } else {
                console.log('Not Published yet - go for it!!!');
                await clTest.publishItem(client,item.id);

            }

            
        } else {
            console.log('Ignore me please, I am not the one you were searching for');
        }

        console.log(item.fields.title.value);
        console.log('-------');

    })

    console.log('publish - end');
}

