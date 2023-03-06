import { SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET } from './constants';
import { authenticate } from './lib/auth';
import { deleteItem, getItems } from './lib/items';
import { isPublished } from './lib/publishing';

const client = authenticate(SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET);

//get all items of type changelog

  start();

async function start() {
  console.log('DELETE - Start');

  const items = await getItems(client, 'changelog',20,1);
  console.log('Count: ' + items.totalCount);
  console.log('PageSize: ' + items.pageSize);
  console.log('PageNumber: ' + items.pageNumber);
  //console.log(items);

  //iterate the differnet pages
  var totalCount = 0;
  var pageSize = 0;
  var totalPages = 0;
  var countDeleted = 0;
  var countPublished = 0;
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
      const published = isPublished(item);
      //console.log("Published: " + published);
      if (!published) {
        console.log(item.id);
        await deleteItem(client, item.id);
        console.log('Item deleted');
        console.log('-------');
        countDeleted ++;
      } else {
        //console.log('Item is published');
        countPublished++;
      }
    } else {
      countNotRelevant ++;
      //console.log('Do not delete me please, I am not the one you were searching for');
    }

    
    });
    
  }

  console.log(countDeleted + ' Items deleted.');
  console.log(countPublished + ' Items not deleted as they are publised.');
  console.log(countNotRelevant + ' Items not deleted as they are not based on testdata creation.');
  console.log('DELETE - end');
}
