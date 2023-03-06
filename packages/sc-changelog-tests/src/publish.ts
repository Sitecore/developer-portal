import { SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET } from './constants';
import { authenticate } from './lib/auth';
import { getItems } from './lib/items';
import { isPublished, publishItem } from './lib/publishing';

const client = authenticate(SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET);

//find all changelog items with prefix that are not published yet

start();

async function start() {
  console.log('Publish - Start');

  const items = await getItems(client, 'changelog',20,1);
  console.log('Count: ' + items.totalCount);
  console.log('PageSize: ' + items.pageSize);
  console.log('PageNumber: ' + items.pageNumber);
  //console.log(items);

  //iterate through pages

  var totalCount = 0;
  var pageSize = 0;
  var totalPages = 0;
  var countPublished = 0;
  var countAlreadyPublished= 0;
  var countNotRelevant = 0;


  if (items != null) {
    totalCount = items.totalCount as number;
    pageSize =  items.pageSize as number;
  }

  if (totalCount > 0) {
    totalPages = Math.ceil(totalCount/pageSize);
  }

  console.log('Total pages: ' + totalPages);
  console.log('---------------------');

  for (let i = totalPages; i > 0 ; i--) {
    var itemsPartial = await getItems(client, 'changelog',20,i);
    
    console.log('PageNumber: ' + itemsPartial.pageNumber);
    console.log('********');
    itemsPartial.data.forEach(async (item) => {
      
      //console.log(item.system);
      if (item.name?.startsWith('SEBW-TEST-chlog-')) {
        //console.log('Detected candidate...');

        const published = isPublished(item);
        if (!published) {
          console.log(item.name);
          await publishItem(client, item.id);
          console.log('Item got published!');
          console.log('-------');
          countPublished++;
        } else {
          //console.log('Item is already published');
          countAlreadyPublished++;
        }
      } else {
        //console.log('Ignore me please, I am not the one you were searching for');
        countNotRelevant++;
      }
      
    });
  }
  console.log(countPublished + ' Items published.');
  console.log(countAlreadyPublished + 'Items were already published' );
  console.log(countNotRelevant + ' Items not published as they are not based on testdata creation.');
  console.log('publish - end');
}
