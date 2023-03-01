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


//TODO: find all changelog items with prefix that are not published yet
