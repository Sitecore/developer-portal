import { SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET } from './constants';
import { authenticate } from './lib/auth';
import { getItems } from './lib/items';
import { isPublished, unpublishItem } from './lib/publishing';

const client = authenticate(SITECORE_CLIENT_ID, SITECORE_CLIENT_SECRET);
//find all changelog items with prefix that are published

start();

async function start() {
  console.log('Unpublish - Start');

  const items = await getItems(client, 'changelog',20,1);
  console.log('Count: ' + items.totalCount);
  console.log('PageSize: ' + items.pageSize);
  console.log('PageNumber: ' + items.pageNumber);
  //console.log(items);

  //iterate trough pages
  var totalCount = 0;
  var pageSize = 0;
  var totalPages = 0;
  var countUnPublished = 0;
  var countNotPublished= 0;
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
        if (published) {
          console.log(item.name);
          await unpublishItem(client, item.id);
          console.log('Item got unpublished!');
          console.log('-------');
          countUnPublished++;
        } else {
          //console.log('Item is not published');
          countNotPublished++;
        }
      } else {
        //console.log('Ignore me please, I am not the one you were searching for');
        countNotRelevant++;
      }

      //console.log(item.fields.title);
      
    });
  }
  console.log(countUnPublished + ' Items unpublished.');
  console.log(countNotPublished + 'Items are currently not published' );
  console.log(countNotRelevant + ' Items not unpublished as they are not based on testdata creation.');
  console.log('unpublish - end');
}
