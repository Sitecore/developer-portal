import { SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET } from './constants';
import { authenticate } from './lib/auth';
import { deleteItem, getItems } from './lib/items';
import { isPublished } from './lib/publishing';

console.log('START');

const client = authenticate(SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET);

//get all items of type changelog

start();

async function start() {
  console.log('DELETE - Start');

  const items = await getItems(client, 'changelog');
  console.log('Count: ' + items.totalCount);
  console.log('PageSize: ' + items.pageSize);
  console.log('PageNumber: ' + items.pageNumber);
  //console.log(items);

  items.data.forEach(async (item) => {
    console.log(item.name);
    //console.log(item.system);
    if (item.name?.startsWith('SEBW-TEST-chlog-')) {
      console.log('Detected candidate...');

      const published = isPublished(item);
      //console.log("Published: " + published);
      if (!published) {
        await deleteItem(client, item.id);
        console.log('Item deleted');
      } else {
        console.log('Item is published');
      }
    } else {
      console.log('Do not delete me please, I am not the one you were searching for');
    }

    console.log(item.fields.title);
    console.log('-------');
  });

  console.log('DELETE - end');
}
