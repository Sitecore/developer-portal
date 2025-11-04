/* eslint-disable no-unused-vars */
export enum Product {
  Default,
  Sitecore,
  OrderCloud,
  CDP,
  ContentHubOne,
  SitecoreAI,
  XMCloud,
  Personalize,
  CDP_Personalize,
  Send,
  ContentOps,
  ContentHub,
  Search,
  DAM,
  Discover,
  Connect,
  CloudPortal,
  ExperienceCommerce,
  ExperienceManager,
  ExperiencePlatform,
  ManagedCloud,
  EngagementCloud,
  ContentCloud,
  CommerceCloud,
  SitecoreDevelopers,
}
export enum Variant {
  Light,
  Dark,
}
export enum Type {
  Full,
  IconOnly,
}

export type ProductImage = {
  Product: Product;
  Variant: Variant;
  Name: string;
  logoFileName: string;
  iconFileName: string;
};

export type ProductInfo = {
  name: string;
  darkLogo: string;
  darkIcon: string;
  lightLogo: string;
  lightIcon: string;
};

const ProductLogos: Array<ProductImage> = [
  {
    Product: Product.Default,
    Variant: Variant.Dark,
    Name: 'Sitecore',
    logoFileName: 'logo-sitecore-white',
    iconFileName: 'mark-sitecore-white',
  },
  {
    Product: Product.Default,
    Variant: Variant.Light,
    Name: 'Sitecore',
    logoFileName: 'logo-sitecore',
    iconFileName: 'mark-sitecore',
  },
  {
    Product: Product.Sitecore,
    Variant: Variant.Dark,
    Name: 'Sitecore',
    logoFileName: 'logo-sitecore-white',
    iconFileName: 'mark-sitecore-white',
  },
  {
    Product: Product.Sitecore,
    Variant: Variant.Light,
    Name: 'Sitecore',
    logoFileName: 'logo-sitecore',
    iconFileName: 'mark-sitecore',
  },
  {
    Product: Product.SitecoreAI,
    Variant: Variant.Light,
    Name: 'SitecoreAI',
    logoFileName: 'mark-sitecoreai',
    iconFileName: 'mark-sitecoreai',
  },  
  {
    Product: Product.OrderCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore OrderCloud',
    logoFileName: 'logo-ordercloud-white',
    iconFileName: 'mark-ordercloud-white',
  },
  {
    Product: Product.OrderCloud,
    Variant: Variant.Light,
    Name: 'Sitecore OrderCloud',
    logoFileName: 'logo-ordercloud',
    iconFileName: 'mark-ordercloud',
  },
  {
    Product: Product.ContentHubOne,
    Variant: Variant.Dark,
    Name: 'Content Hub ONE',
    logoFileName: 'logo-content_hub_one-white',
    iconFileName: 'mark-content_hub_one-white',
  },
  {
    Product: Product.ContentHubOne,
    Variant: Variant.Light,
    Name: 'Content Hub ONE',
    logoFileName: 'logo-content_hub_one',
    iconFileName: 'mark-content_hub_one',
  },
  {
    Product: Product.CDP,
    Variant: Variant.Dark,
    Name: 'Sitecore CDP',
    logoFileName: 'logo-cdp-white',
    iconFileName: 'mark-cdp-white',
  },
  {
    Product: Product.CDP,
    Variant: Variant.Light,
    Name: 'Sitecore CDP',
    logoFileName: 'logo-cdp',
    iconFileName: 'mark-cdp',
  },
  {
    Product: Product.XMCloud,
    Variant: Variant.Dark,
    Name: 'XM Cloud',
    logoFileName: 'logo-xm_cloud-white',
    iconFileName: 'mark-xm_cloud-white',
  },
  {
    Product: Product.XMCloud,
    Variant: Variant.Light,
    Name: 'XM Cloud',
    logoFileName: 'logo-xm_cloud',
    iconFileName: 'mark-xm_cloud',
  },
  {
    Product: Product.DAM,
    Variant: Variant.Dark,
    Name: 'Sitecore DAM',
    logoFileName: 'logo-content_hub_dam-white',
    iconFileName: 'mark-content_hub_dam-white',
  },
  {
    Product: Product.DAM,
    Variant: Variant.Light,
    Name: 'Sitecore DAM',
    logoFileName: 'logo-content_hub_dam',
    iconFileName: 'mark-content_hub_dam',
  },
  {
    Product: Product.Personalize,
    Variant: Variant.Dark,
    Name: 'Sitecore Personalize',
    logoFileName: 'logo-personalize-white',
    iconFileName: 'mark-personalize-white',
  },
  {
    Product: Product.Personalize,
    Variant: Variant.Light,
    Name: 'Sitecore Personalize',
    logoFileName: 'logo-personalize',
    iconFileName: 'mark-personalize',
  },
  {
    Product: Product.CDP_Personalize,
    Variant: Variant.Dark,
    Name: 'Sitecore CDP/Personalize',
    logoFileName: 'logo-cdp_personalize-white',
    iconFileName: 'mark-cdp_personalize-white',
  },
  {
    Product: Product.CDP_Personalize,
    Variant: Variant.Light,
    Name: 'Sitecore CDP/Personalize',
    logoFileName: 'logo-cdp_personalize',
    iconFileName: 'mark-cdp_personalize',
  },
  {
    Product: Product.Send,
    Variant: Variant.Dark,
    Name: 'Sitecore Send',
    logoFileName: 'logo-send-white',
    iconFileName: 'mark-send-white',
  },
  {
    Product: Product.Send,
    Variant: Variant.Light,
    Name: 'Sitecore Send',
    logoFileName: 'logo-send',
    iconFileName: 'mark-send',
  },
  {
    Product: Product.ContentHub,
    Variant: Variant.Dark,
    Name: 'Sitecore Content Hub',
    logoFileName: 'logo-content_hub-white',
    iconFileName: 'mark-content_hub-white',
  },
  {
    Product: Product.ContentHub,
    Variant: Variant.Light,
    Name: 'Sitecore Content Hub',
    logoFileName: 'logo-content_hub',
    iconFileName: 'mark-content_hub',
  },
  {
    Product: Product.ContentOps,
    Variant: Variant.Dark,
    Name: 'Content Operations',
    logoFileName: 'logo-content_hub_ops-white',
    iconFileName: 'mark-content_hub_ops-white',
  },
  {
    Product: Product.ContentOps,
    Variant: Variant.Light,
    Name: 'Content Operations',
    logoFileName: 'logo-content_hub_ops',
    iconFileName: 'mark-content_hub_ops',
  },
  {
    Product: Product.Search,
    Variant: Variant.Dark,
    Name: 'Sitecore Search',
    logoFileName: 'logo-search-white',
    iconFileName: 'mark-search-white',
  },
  {
    Product: Product.Search,
    Variant: Variant.Light,
    Name: 'Sitecore Search',
    logoFileName: 'logo-search',
    iconFileName: 'mark-search',
  },
  {
    Product: Product.Discover,
    Variant: Variant.Dark,
    Name: 'Sitecore Discover',
    logoFileName: 'logo-discover-white',
    iconFileName: 'mark-discover-white',
  },
  {
    Product: Product.Discover,
    Variant: Variant.Light,
    Name: 'Sitecore Discover',
    logoFileName: 'logo-discover',
    iconFileName: 'mark-discover',
  },
  {
    Product: Product.Connect,
    Variant: Variant.Dark,
    Name: 'Sitecore Connect',
    logoFileName: 'logo-connect-white',
    iconFileName: 'mark-connect-white',
  },
  {
    Product: Product.Connect,
    Variant: Variant.Light,
    Name: 'Sitecore Connect',
    logoFileName: 'logo-connect',
    iconFileName: 'mark-connect',
  },
  {
    Product: Product.ExperienceManager,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Manager',
    logoFileName: 'logo-xm-white',
    iconFileName: 'mark-xm-white',
  },
  {
    Product: Product.ExperienceManager,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Manager',
    logoFileName: 'logo-xm',
    iconFileName: 'mark-xm',
  },
  {
    Product: Product.ExperiencePlatform,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Platform',
    logoFileName: 'logo-xp-white',
    iconFileName: 'mark-xp-white',
  },
  {
    Product: Product.ExperiencePlatform,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Platform',
    logoFileName: 'logo-xp',
    iconFileName: 'mark-xp',
  },
  {
    Product: Product.ExperienceCommerce,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Commerce',
    logoFileName: 'logo-xc-white',
    iconFileName: 'mark-xc-white',
  },
  {
    Product: Product.ExperienceCommerce,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Commerce',
    logoFileName: 'logo-xc',
    iconFileName: 'mark-xc',
  },
  {
    Product: Product.ManagedCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Managed Cloud',
    logoFileName: 'logo-managed_cloud-white',
    iconFileName: 'mark-managed_cloud-white',
  },
  {
    Product: Product.ManagedCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Managed Cloud',
    logoFileName: 'logo-managed_cloud',
    iconFileName: 'mark-managed_cloud',
  },
  {
    Product: Product.EngagementCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Engagement Cloud',
    logoFileName: 'logo-engagement_cloud',
    iconFileName: 'mark-engagement_cloud',
  },
  {
    Product: Product.EngagementCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Engagement Cloud',
    logoFileName: 'logo-engagement_cloud-white',
    iconFileName: 'mark-engagement_cloud-white',
  },
  {
    Product: Product.ContentCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Content Cloud',
    logoFileName: 'logo-content_cloud',
    iconFileName: 'mark-content_cloud',
  },
  {
    Product: Product.ContentCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Content Cloud',
    logoFileName: 'logo-content_cloud-white',
    iconFileName: 'mark-content_cloud-white',
  },
  {
    Product: Product.CommerceCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Commerce Cloud',
    logoFileName: 'logo-commerce_cloud',
    iconFileName: 'mark-commerce_cloud',
  },
  {
    Product: Product.CommerceCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Commerce Cloud',
    logoFileName: 'logo-commerce_cloud-white',
    iconFileName: 'mark-commerce_cloud-white',
  },
  {
    Product: Product.SitecoreDevelopers,
    Variant: Variant.Dark,
    Name: 'Sitecore Developer Portal',
    logoFileName: 'logo-sc_developers-white',
    iconFileName: 'mark-sitecore-white',
  },
  {
    Product: Product.SitecoreDevelopers,
    Variant: Variant.Light,
    Name: 'Sitecore Developer Portal',
    logoFileName: 'logo-sc_developers',
    iconFileName: 'mark-sitecore',
  },
];

export default ProductLogos;

export function GetProductInfo(product: Product): ProductInfo {
  const first = ProductLogos.find((obj) => {
    return obj.Product === product;
  });

  if (first == null) {
    console.error('PRODUCT NAME NOT FOUND');
  }

  const productInfo: ProductInfo = {
    name: first?.Name ?? 'PRODUCT NAME NOT FOUND',
    darkIcon: GetProductLogoByVariant(product, Variant.Dark, Type.IconOnly),
    lightIcon: GetProductLogoByVariant(product, Variant.Light, Type.IconOnly),
    darkLogo: GetProductLogoByVariant(product, Variant.Dark, Type.Full),
    lightLogo: GetProductLogoByVariant(product, Variant.Light, Type.Full),
  };

  return productInfo;
}

export function GetProductLogo(productName: string, variant: string) {
  const _product = Product[productName as keyof typeof Product];
  const _variant = Variant[variant as keyof typeof Variant];

  return GetProductLogoByVariant(_product, _variant);
}

export function GetProductIcon(productName: Product | string, variant: Variant) {
  if (typeof productName === 'string') {
    productName = Product[productName as keyof typeof Product];
  }
  return GetProductLogoByVariant(productName, variant, Type.IconOnly);
}

export function GetProductLogoByVariant(productName: Product, variant: Variant, type?: Type) {
  const first = ProductLogos.find((obj) => {
    return obj.Product === productName && obj.Variant == variant;
  });

  const fileName = type == Type.IconOnly ? first?.iconFileName : first?.logoFileName;
  const baseUrl = 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/';

  return baseUrl + fileName;
}

