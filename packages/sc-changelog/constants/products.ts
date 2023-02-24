import { ProductConfig } from '../configuration';
import { Product } from '../types';
import { getSlug } from '../utils/stringUtils';

const Products: ProductConfig[] = [
  {
    type: Product.CDP,
    name: 'Sitecore CDP',
    entityId: 'S3Nt7UJGiUKRji3ERDpNEA',
    entityName: 'Sitecore CDP',
    imageId: 'CDP',
  },
  {
    type: Product.CLOUDPORTAL,
    name: 'Sitecore Cloud Portal',
    entityId: 'ZTMYkjzXSkaOwpB95ZujrQ',
    entityName: 'Sitecore Cloud Portal',
    imageId: '',
  },
  {
    type: Product.CONNECT,
    name: 'Sitecore Connect',
    entityId: 'KBtlU-ZzYkeYcafWoxyuNQ',
    entityName: 'Sitecore Connect',
    imageId: 'Connect',
  },
  {
    type: Product.CONTENTHUBDAM,
    name: 'Content Hub DAM',
    entityId: 'K1VyMQaExUGe-OD6eoSvdA',
    entityName: 'Content Hub DAM',
    imageId: 'ContentHub',
  },
  {
    type: Product.CONTENTHUBONE,
    name: 'Content Hub ONE',
    entityId: 'n47NXxNFxUqPttUxoFaRyA',
    entityName: 'Content Hub ONE',
    imageId: 'ContentHubOne',
  },
  {
    type: Product.CONTENTHUBOPS,
    name: 'Content Hub Operations',
    entityId: 'ZagATPres0mB9V0eVoqk2A',
    entityName: 'Content Hub Operations',
    imageId: 'ContentOps',
  },
  {
    type: Product.DISCOVER,
    name: 'Sitecore Discover',
    entityId: 'L24AbSEPSUKkDQTpPT7uoA',
    entityName: 'Sitecore Discover',
    imageId: 'Discover',
  },
  {
    type: Product.ORDERCLOUD,
    name: 'Sitecore Order Cloud',
    entityId: 'u-geEE0EVkiusuAZ1D0EeQ',
    entityName: 'Sitecore Commerce Order Cloud',
    imageId: 'OrderCloud',
  },
  {
    type: Product.PERSONALIZE,
    name: 'Sitecore Personalize',
    entityId: 'uAwJlln4BUqyOtpExq1O5g',
    entityName: 'Sitecore Personalize',
    imageId: 'Personalize',
  },
  {
    type: Product.SEARCH,
    name: 'Sitecore Search',
    entityId: '4U7YVAy4V0mH0fA7foawJw',
    entityName: 'Sitecore Search',
    imageId: 'Search',
  },
  {
    type: Product.SEND,
    name: 'Sitecore Send',
    entityId: 'i_EBHSPyF0WvLmpKn99Byw',
    entityName: 'Sitecore Send',
    imageId: 'Send',
  },
  {
    type: Product.XMCLOUD,
    name: 'XM Cloud',
    entityId: 'av_GqshF5U2kL8XMGjf-Xw',
    entityName: 'XM Cloud',
    imageId: 'XMCloud',
  },
  
  {
    type: Product.XC,
    name: 'Sitecore Experience Commerce',
    entityId: 'PkvScP8fAkiFWEO6NP8Phg',
    entityName: 'Sitecore Experience Commerce (XC)',
    imageId: '',
  },
  {
    type: Product.XM,
    name: 'Sitecore Experience Manager',
    entityId: 'vPOnXOc9b0y6j7GHh2H0fQ',
    entityName: 'Sitecore Experience Manager (XM)',
    imageId: '',
  },
  {
    type: Product.XP,
    name: 'Sitecore Experience Platform',
    entityId: 'iGmv6cKHOkioGhVF13yo1g',
    entityName: 'Sitecore Experience Platform (XP)',
    imageId: '',
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
