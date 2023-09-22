export enum Product {
  Default,
  Sitecore,
  OrderCloud,
  CDP,
  ContentHubOne,
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

const ProductLogos: ProductImage[] = [
  {
    Product: Product.Default,
    Variant: Variant.Dark,
    Name: 'Sitecore',
    logoFileName: 'e88a7e8526914d60a7ac09162207c4e5',
    iconFileName: '50dc07d1bb5f49438c60cd28f82ffbc5',
  },
  {
    Product: Product.Default,
    Variant: Variant.Light,
    Name: 'Sitecore',
    logoFileName: '01f247553f4b46498938733e41cb6ae4',
    iconFileName: 'eb75f6e802994a59bc4091428c75d336',
  },
  {
    Product: Product.Sitecore,
    Variant: Variant.Dark,
    Name: 'Sitecore',
    logoFileName: 'e88a7e8526914d60a7ac09162207c4e5',
    iconFileName: '50dc07d1bb5f49438c60cd28f82ffbc5',
  },
  {
    Product: Product.Sitecore,
    Variant: Variant.Light,
    Name: 'Sitecore',
    logoFileName: '01f247553f4b46498938733e41cb6ae4',
    iconFileName: 'eb75f6e802994a59bc4091428c75d336',
  },
  {
    Product: Product.OrderCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore OrderCloud',
    logoFileName: 'd56dd7978d0043918a9f50ba730ebf15',
    iconFileName: 'e6b858aa7d024284bf51398f3b3bd040',
  },
  {
    Product: Product.OrderCloud,
    Variant: Variant.Light,
    Name: 'Sitecore OrderCloud',
    logoFileName: '4fc742feffd14e7686e4820e55dbfbaa',
    iconFileName: '3eb03031027e456eb212d7c3ddf1295a',
  },
  {
    Product: Product.ContentHubOne,
    Variant: Variant.Dark,
    Name: 'Content Hub ONE',
    logoFileName: 'd5e8689d29cc4ef49a74b96e2149af13',
    iconFileName: '53e9b6a015764428894ab9817542b082',
  },
  {
    Product: Product.ContentHubOne,
    Variant: Variant.Light,
    Name: 'Content Hub ONE',
    logoFileName: '91c3d57209b042ff9aacfee56125ef0e',
    iconFileName: '7304d4a7dea04a5db702aaa8ca888117',
  },
  {
    Product: Product.CDP,
    Variant: Variant.Dark,
    Name: 'Sitecore CDP',
    logoFileName: '3e1c7709c0db447b81d6fc3bdcbbf341',
    iconFileName: 'b2cc3c5270c2464ebc922d4b4b788c55',
  },
  {
    Product: Product.CDP,
    Variant: Variant.Light,
    Name: 'Sitecore CDP',
    logoFileName: '57ec9e7efda34ffbb952a633a735e61f',
    iconFileName: '26469b42c25e4d7f91ef05c811bd601b',
  },
  {
    Product: Product.XMCloud,
    Variant: Variant.Dark,
    Name: 'XM Cloud',
    logoFileName: 'fd32489f9c954eb7a3663c8eadd6a84f',
    iconFileName: '1b8773a1ee1041dea31820d22a489a9f',
  },
  {
    Product: Product.XMCloud,
    Variant: Variant.Light,
    Name: 'XM Cloud',
    logoFileName: '539c69d50c3d4913a638624d418bcf61',
    iconFileName: '0f7f9565544a42c19371f215bd57cc0d',
  },
  {
    Product: Product.DAM,
    Variant: Variant.Dark,
    Name: 'Sitecore DAM',
    logoFileName: '423985893fdc40c2b642b6ff104c8021',
    iconFileName: '2f043bc102b740708071b4936a81a467',
  },
  {
    Product: Product.DAM,
    Variant: Variant.Light,
    Name: 'Sitecore DAM',
    logoFileName: 'db83a688366c4324a175120dd5dcab32',
    iconFileName: 'd4460059f7f74238bb65b760a8fa6859',
  },
  {
    Product: Product.Personalize,
    Variant: Variant.Dark,
    Name: 'Sitecore Personalize',
    logoFileName: 'a68ee4c1c3ad41449d27deaf46262805',
    iconFileName: 'd4d1ecb699dd40c6934988bc6f69023f',
  },
  {
    Product: Product.Personalize,
    Variant: Variant.Light,
    Name: 'Sitecore Personalize',
    logoFileName: 'a4cf37afeb8b4002b81e2de9c02a3220',
    iconFileName: 'e7010cd758d049f6ad9577e2824d5bea',
  },
  {
    Product: Product.CDP_Personalize,
    Variant: Variant.Dark,
    Name: 'Sitecore CDP/Personalize',
    logoFileName: 'c4240e635fa542859d3d569bbc763c71',
    iconFileName: 'c21783cc963e49a5a3aa7ff754e41e1c',
  },
  {
    Product: Product.CDP_Personalize,
    Variant: Variant.Light,
    Name: 'Sitecore CDP/Personalize',
    logoFileName: 'd1f911c1c9dd47b4ac839d838d0ec7b7',
    iconFileName: '4ca836540f984d5ab813c9ad0d6a0eb4',
  },
  {
    Product: Product.Send,
    Variant: Variant.Dark,
    Name: 'Sitecore Send',
    logoFileName: '9655e9c9551b4c6e932c6670a77984c8',
    iconFileName: '3241a593939a41c997dd49a13d641ebc',
  },
  {
    Product: Product.Send,
    Variant: Variant.Light,
    Name: 'Sitecore Send',
    logoFileName: 'a84cea01370e425788357ba9a05c40e3',
    iconFileName: 'e021e8eba3cd42d295458bb7fb064d77',
  },
  {
    Product: Product.ContentHub,
    Variant: Variant.Dark,
    Name: 'Sitecore Content Hub',
    logoFileName: '69a62943aa54409cb197bb6d5bf02dde',
    iconFileName: 'a6e5039f55b840e09b317df0b568631d',
  },
  {
    Product: Product.ContentHub,
    Variant: Variant.Light,
    Name: 'Sitecore Content Hub',
    logoFileName: '7f05f39330274f04875f939e179dd436',
    iconFileName: '031ab3def44c4a67bc5d77273d78163e',
  },
  {
    Product: Product.ContentOps,
    Variant: Variant.Dark,
    Name: 'Content Operations',
    logoFileName: '2f11a25fee384a08a0a9ffbd7e1d70c3',
    iconFileName: '3ab661c929f84cab9d88f351f20acb75',
  },
  {
    Product: Product.ContentOps,
    Variant: Variant.Light,
    Name: 'Content Operations',
    logoFileName: '2f11a25fee384a08a0a9ffbd7e1d70c3',
    iconFileName: 'd23e3e8b102746ed8b0a60758e2bd58c',
  },
  {
    Product: Product.Search,
    Variant: Variant.Dark,
    Name: 'Sitecore Search',
    logoFileName: '6f170dce369e4acb8342463d9bc229b6',
    iconFileName: '2c1a438a477d42f5b1ef92b16975c949',
  },
  {
    Product: Product.Search,
    Variant: Variant.Light,
    Name: 'Sitecore Search',
    logoFileName: '43e414bbc80143e2b21acd0808456e26',
    iconFileName: '7e75e5619d514d3893c4079d291e4776',
  },
  {
    Product: Product.Discover,
    Variant: Variant.Dark,
    Name: 'Sitecore Discover',
    logoFileName: '750c9f5fc71646be91cae4d1a8b006ba',
    iconFileName: '2ab14450250a4be0b2b7c522dd3e7f32',
  },
  {
    Product: Product.Discover,
    Variant: Variant.Light,
    Name: 'Sitecore Discover',
    logoFileName: '01af196281144e70a17e97f05354cfcc',
    iconFileName: '321e52cb1a654d6cbb4b741a36506548',
  },
  {
    Product: Product.Connect,
    Variant: Variant.Dark,
    Name: 'Sitecore Connect',
    logoFileName: '59fcea1f05574bd1af8a26fa492f4848',
    iconFileName: '033435b9dc37460098257f65a1a314b1',
  },
  {
    Product: Product.Connect,
    Variant: Variant.Light,
    Name: 'Sitecore Connect',
    logoFileName: '9dadcc0d3f03455dacddd71a8c21089b',
    iconFileName: '8ab39b3190204ee796622d8934d19f8b',
  },
  {
    Product: Product.ExperienceManager,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Manager',
    logoFileName: '81cb316d126d4585a21f983cbd4e8dc7',
    iconFileName: '9b6af42313574a70a329d07fb4c98e8e',
  },
  {
    Product: Product.ExperienceManager,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Manager',
    logoFileName: '9d2e82090a094839b58dae1647e2a115',
    iconFileName: '9421e34cd03c400fb70ba2a230a9b3cd',
  },
  {
    Product: Product.ExperiencePlatform,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Platform',
    logoFileName: 'c6e94f34595940888147c60ef3dacac9',
    iconFileName: 'c83209d517894c83826ac595fae28dd0',
  },
  {
    Product: Product.ExperiencePlatform,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Platform',
    logoFileName: '47b0e63dc8fc4f9ebe5de7d412b8d2cc',
    iconFileName: 'e1459709fb6f4aefa5b611eb36c52069',
  },
  {
    Product: Product.ExperienceCommerce,
    Variant: Variant.Dark,
    Name: 'Sitecore Experience Commerce',
    logoFileName: '1c2a9bfbfe1341b5b22b9461ac344468',
    iconFileName: 'ac19c11dbcc74d30ab6e4012ea2ec301',
  },
  {
    Product: Product.ExperienceCommerce,
    Variant: Variant.Light,
    Name: 'Sitecore Experience Commerce',
    logoFileName: 'd26665c0e4c342ec9931e5994aeca59d',
    iconFileName: '162eb4559de64e68b8a4bce57a2ba9dd',
  },
  {
    Product: Product.EngagementCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Engagement Cloud',
    logoFileName: 'f41d09d34df94f00bbfefad9c825ad22',
    iconFileName: '213ac39971df4ef78b81033a4ee943be',
  },
  {
    Product: Product.EngagementCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Engagement Cloud',
    logoFileName: '8c16dbb1cb0641ccb78e0d6cc15344aa',
    iconFileName: '2462b591693346ceaa54f757429093e7',
  },
  {
    Product: Product.ContentCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Content Cloud',
    logoFileName: 'ffb54c73fe774a70a9a44ef343fd2948',
    iconFileName: '9dddaae19d5f47e894059d22417cc3aa',
  },
  {
    Product: Product.ContentCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Content Cloud',
    logoFileName: '3d44a4a33a2140989db566b50554d32f',
    iconFileName: 'f87e895198254d0bbe122fd5e28e6a6f',
  },
  {
    Product: Product.CommerceCloud,
    Variant: Variant.Light,
    Name: 'Sitecore Commerce Cloud',
    logoFileName: '13cc7f7871434f14840e8bae5e00079c',
    iconFileName: '12bb4966355c4966bfa4e0d23e20bf01',
  },
  {
    Product: Product.CommerceCloud,
    Variant: Variant.Dark,
    Name: 'Sitecore Commerce Cloud',
    logoFileName: '32cf39e48f1b407a88c6c897701904fe',
    iconFileName: 'de3264544514496bb688d329a5890b10',
  },
  {
    Product: Product.SitecoreDevelopers,
    Variant: Variant.Dark,
    Name: 'Sitecore Developer Portal',
    logoFileName: 'f04ab6fe01f84ecf8af076728ac13709',
    iconFileName: '50dc07d1bb5f49438c60cd28f82ffbc5',
  },
  {
    Product: Product.SitecoreDevelopers,
    Variant: Variant.Light,
    Name: 'Sitecore Developer Portal',
    logoFileName: 'a87c9e14823345f5bafb4d4d8aeba1c2',
    iconFileName: 'eb75f6e802994a59bc4091428c75d336',
  },
];

export default ProductLogos;

export function GetProductInfo(product: Product): ProductInfo {
  const first = ProductLogos.find((obj) => {
    return obj.Product === product;
  });

  if (first == null) console.error('PRODUCT NAME NOT FOUND');

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

export function GetProductIcon(productName: Product, variant: Variant) {
  //const _product = Product[productName as keyof typeof Product];
  //const _variant = Variant[variant as keyof typeof Variant];

  return GetProductLogoByVariant(productName, variant, Type.IconOnly);
}

export function GetProductLogoByVariant(productName: Product, variant: Variant, type?: Type) {
  const baseUrl = 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/';

  const first = ProductLogos.find((obj) => {
    return obj.Product === productName && obj.Variant == variant;
  });
  if (type == Type.IconOnly) return baseUrl + first?.iconFileName;

  return baseUrl + first?.logoFileName;
}
