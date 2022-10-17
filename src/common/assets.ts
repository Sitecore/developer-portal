export enum Product {
  OrderCloud,
  CDP,
  ContentHubOne,
  XMCloud,
}
export enum Variant {
  Light,
  Dark,
}

export type ProductImage = {
  Product: Product;
  Type: Variant;
  fileName: string;
};

const ProductLogos: ProductImage[] = [
  {
    Product: Product.OrderCloud,
    Type: Variant.Dark,
    fileName: 'd56dd7978d0043918a9f50ba730ebf15?v=78709ea6',
  },
  {
    Product: Product.OrderCloud,
    Type: Variant.Light,
    fileName: '4fc742feffd14e7686e4820e55dbfbaa?v=88f0916a',
  },
  {
    Product: Product.ContentHubOne,
    Type: Variant.Dark,
    fileName: 'd5e8689d29cc4ef49a74b96e2149af13?v=b8e2c73d',
  },
  {
    Product: Product.ContentHubOne,
    Type: Variant.Light,
    fileName: '91c3d57209b042ff9aacfee56125ef0e?v=2ec1f115',
  },
  {
    Product: Product.CDP,
    Type: Variant.Dark,
    fileName: '3e1c7709c0db447b81d6fc3bdcbbf341?v=e2170478',
  },
  {
    Product: Product.CDP,
    Type: Variant.Light,
    fileName: '57ec9e7efda34ffbb952a633a735e61f?v=4bcbe72',
  },
  {
    Product: Product.XMCloud,
    Type: Variant.Dark,
    fileName: 'fd32489f9c954eb7a3663c8eadd6a84f?v=18e00a2e',
  },
  {
    Product: Product.XMCloud,
    Type: Variant.Light,
    fileName: '539c69d50c3d4913a638624d418bcf61?v=ff20c465',
  },
];

export default ProductLogos;

export function GetProductLogo(productName: string, variant: string) {
  const product = productName as keyof typeof Product;
  const variantType = variant as keyof typeof Variant;
  const productEnum = Product[product];
  const logoType = Variant[variantType];

  return GetProductLogoByType(productEnum, logoType);
}

export function GetProductLogoByType(productName: Product, variant: Variant) {
  const baseUrl = 'https://sitecorecontenthub.stylelabs.cloud/api/public/content/';

  const first = ProductLogos.find((obj) => {
    return obj.Product === productName && obj.Type == variant;
  });

  return baseUrl + first?.fileName;
}
