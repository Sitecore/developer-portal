import { ChangeTypeConfig, ProductConfig } from '../configuration';
import { ProductName } from '../types';
import { getSlug } from '../utils/stringUtils';
import ChangeTypes from './changeTypes';

const Products: ProductConfig[] = [
  {
    type: ProductName.CDP,
    name: 'Sitecore CDP',
    entityId: 'S3Nt7UJGiUKRji3ERDpNEA',
    entityName: 'Sitecore CDP',
    imageId: 'CDP',
  },
  {
    type: ProductName.CLOUDPORTAL,
    name: 'Sitecore Cloud Portal',
    entityId: 'ZTMYkjzXSkaOwpB95ZujrQ',
    entityName: 'Sitecore Cloud Portal',
    imageId: '',
  },
  {
    type: ProductName.CONNECT,
    name: 'Sitecore Connect',
    entityId: 'KBtlU-ZzYkeYcafWoxyuNQ',
    entityName: 'Sitecore Connect',
    imageId: 'Connect',
  },
  {
    type: ProductName.CONTENTHUBDAM,
    name: 'Content Hub DAM',
    entityId: 'K1VyMQaExUGe-OD6eoSvdA',
    entityName: 'Content Hub DAM',
    imageId: 'ContentHub',
  },
  {
    type: ProductName.CONTENTHUBONE,
    name: 'Content Hub ONE',
    entityId: 'n47NXxNFxUqPttUxoFaRyA',
    entityName: 'Content Hub ONE',
    imageId: 'ContentHubOne',
  },
  {
    type: ProductName.CONTENTHUBOPS,
    name: 'Content Hub Operations',
    entityId: 'ZagATPres0mB9V0eVoqk2A',
    entityName: 'Content Hub Operations',
    imageId: 'ContentOps',
  },
  {
    type: ProductName.DISCOVER,
    name: 'Sitecore Discover',
    entityId: 'L24AbSEPSUKkDQTpPT7uoA',
    entityName: 'Sitecore Discover',
    imageId: 'Discover',
  },
  {
    type: ProductName.ORDERCLOUD,
    name: 'Sitecore Order Cloud',
    entityId: 'u-geEE0EVkiusuAZ1D0EeQ',
    entityName: 'Sitecore Commerce Order Cloud',
    imageId: 'OrderCloud',
  },
  {
    type: ProductName.PERSONALIZE,
    name: 'Sitecore Personalize',
    entityId: 'uAwJlln4BUqyOtpExq1O5g',
    entityName: 'Sitecore Personalize',
    imageId: 'Personalize',
  },
  {
    type: ProductName.SEARCH,
    name: 'Sitecore Search',
    entityId: '4U7YVAy4V0mH0fA7foawJw',
    entityName: 'Sitecore Search',
    imageId: 'Search',
  },
  {
    type: ProductName.SEND,
    name: 'Sitecore Send',
    entityId: 'i_EBHSPyF0WvLmpKn99Byw',
    entityName: 'Sitecore Send',
    imageId: 'Send',
  },
  {
    type: ProductName.XMCLOUD,
    name: 'XM Cloud',
    entityId: 'av_GqshF5U2kL8XMGjf-Xw',
    entityName: 'XM Cloud',
    imageId: 'XMCloud',
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

export function GetProductByProductId(productId: string): ProductConfig | undefined {
  const first = Products.find((obj) => {
    return obj.entityId === productId;
  });

  return first;
}

export function GetChangeTypeById(changeTypeId: string): ChangeTypeConfig | undefined {
  const first = ChangeTypes.find((obj) => {
    return obj.entityId === changeTypeId;
  });

  return first;
}
