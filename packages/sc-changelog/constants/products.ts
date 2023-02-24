import { Product } from '../../ui/common/assets';
import { ProductConfig } from '../configuration';
import { ProductName } from '../types';
import { getSlug } from '../utils/stringUtils';

const Products: ProductConfig[] = [
  {
    type: ProductName.CDP,
    name: 'Sitecore CDP',
    entityId: 'S3Nt7UJGiUKRji3ERDpNEA',
    entityName: 'Sitecore CDP',
    imageId: Product.CDP,
  },
  {
    type: ProductName.CLOUDPORTAL,
    name: 'Sitecore Cloud Portal',
    entityId: 'ZTMYkjzXSkaOwpB95ZujrQ',
    entityName: 'Sitecore Cloud Portal',
    imageId: Product.CloudPortal,
  },
  {
    type: ProductName.CONNECT,
    name: 'Sitecore Connect',
    entityId: 'KBtlU-ZzYkeYcafWoxyuNQ',
    entityName: 'Sitecore Connect',
    imageId: Product.Connect,
  },
  {
    type: ProductName.CONTENTHUBDAM,
    name: 'Content Hub DAM',
    entityId: 'K1VyMQaExUGe-OD6eoSvdA',
    entityName: 'Content Hub DAM',
    imageId: Product.ContentHub,
  },
  {
    type: ProductName.CONTENTHUBONE,
    name: 'Content Hub ONE',
    entityId: 'n47NXxNFxUqPttUxoFaRyA',
    entityName: 'Content Hub ONE',
    imageId: Product.ContentHubOne,
  },
  {
    type: ProductName.CONTENTHUBOPS,
    name: 'Content Hub Operations',
    entityId: 'ZagATPres0mB9V0eVoqk2A',
    entityName: 'Content Hub Operations',
    imageId: Product.ContentOps,
  },
  {
    type: ProductName.DISCOVER,
    name: 'Sitecore Discover',
    entityId: 'L24AbSEPSUKkDQTpPT7uoA',
    entityName: 'Sitecore Discover',
    imageId: Product.Discover,
  },
  {
    type: ProductName.ORDERCLOUD,
    name: 'Sitecore Order Cloud',
    entityId: 'u-geEE0EVkiusuAZ1D0EeQ',
    entityName: 'Sitecore Commerce Order Cloud',
    imageId: Product.OrderCloud,
  },
  {
    type: ProductName.PERSONALIZE,
    name: 'Sitecore Personalize',
    entityId: 'uAwJlln4BUqyOtpExq1O5g',
    entityName: 'Sitecore Personalize',
    imageId: Product.Personalize,
  },
  {
    type: ProductName.SEARCH,
    name: 'Sitecore Search',
    entityId: '4U7YVAy4V0mH0fA7foawJw',
    entityName: 'Sitecore Search',
    imageId: Product.Search,
  },
  {
    type: ProductName.SEND,
    name: 'Sitecore Send',
    entityId: 'i_EBHSPyF0WvLmpKn99Byw',
    entityName: 'Sitecore Send',
    imageId: Product.Send,
  },
  {
    type: ProductName.XMCLOUD,
    name: 'XM Cloud',
    entityId: 'av_GqshF5U2kL8XMGjf-Xw',
    entityName: 'XM Cloud',
    imageId: Product.XMCloud,
  },
  
  {
    type: ProductName.XC,
    name: 'Sitecore Experience Commerce',
    entityId: 'PkvScP8fAkiFWEO6NP8Phg',
    entityName: 'Sitecore Experience Commerce (XC)',
    imageId: Product.ExperienceCommerce,
  },
  {
    type: ProductName.XM,
    name: 'Sitecore Experience Manager',
    entityId: 'vPOnXOc9b0y6j7GHh2H0fQ',
    entityName: 'Sitecore Experience Manager (XM)',
    imageId: Product.ExperienceManager,
  },
  {
    type: ProductName.XP,
    name: 'Sitecore Experience Platform',
    entityId: 'iGmv6cKHOkioGhVF13yo1g',
    entityName: 'Sitecore Experience Platform (XP)',
    imageId: Product.ExperiencePlatform,
  },
];

export default Products;

export function GetProductBySlug(productName: string): ProductConfig | undefined {
  //const _product = Product[productName as keyof typeof Product];
  const first = Products.find((obj) => {
    return getSlug(obj.name) === productName;
  });

  return first;
}
