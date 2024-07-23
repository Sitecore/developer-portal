import { CDP, Connect, ContentHub, ContentHubONE, Discover, OrderCloud, Personalize, ProductInfoType, Search, Send, XMCloud, XP } from '@/data/products';
import { GetProductLogoByVariant, Type, Variant } from '@/src/lib/assets';
import { Box, Card, CardBody, Flex, Heading, Image, SimpleGrid, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ButtonLink } from '../../links';

interface ProductListProps {
  // Define the props for your component here
}

interface ProductListItemProps {
  product: ProductInfoType;
}

interface ProductListTitleProps {
  title: string;
  description: string;
  children?: React.ReactNode | React.ReactNode[] | undefined;
}

export const ProductList: React.FC<ProductListProps> = () => {
  return (
    <Box my={4}>
      <ProductListTitle title="Experience Management" description="Be better to stand out. Deliver exceptional experiences that differentiate your brand." />

      <SimpleGrid columns={[1, 2, 3]} gap={4} my={4}>
        <ProductListItem product={XMCloud} />
        <ProductListItem product={Search} />
        <ProductListItem product={Personalize} />
        <ProductListItem product={CDP} />
        <ProductListItem product={Connect} />
        <ProductListItem product={XP} />
        <ProductListItem product={ContentHubONE} />
        <ProductListItem product={Discover} />
        <ProductListItem product={Send} />
      </SimpleGrid>

      <SimpleGrid columns={[1, 2, 2]} gap={4} my={4}>
        <ProductListTitle title="Content lifecycle" description="Take control of your global content lifecycle from strategy to delivery.">
          <ProductListItem product={ContentHub} />
        </ProductListTitle>
        <ProductListTitle title="Commerce" description="Harness commerce growth strategy solutions to grab and keep customer attention.">
          <ProductListItem product={OrderCloud} />
        </ProductListTitle>
      </SimpleGrid>
    </Box>
  );
};

export const ProductListTitle: React.FC<ProductListTitleProps> = ({ title, description, children }) => {
  return (
    <Box>
      <Heading as="h3" size={'xl'}>
        {title}
      </Heading>
      <Text variant={'large'} my={4}>
        {description}
      </Text>
      {children}
    </Box>
  );
};

export const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Card variant={'elevated'}>
      <CardBody>
        <Flex direction={'column'} gap={4} align={'flex-start'}>
          <Image src={useColorModeValue(GetProductLogoByVariant(product.type, Variant.Light, Type.Full), GetProductLogoByVariant(product.type, Variant.Dark, Type.Full))} alt={`${product.name} logo`} width={'auto'} height={'32px'} />
          <Heading as="h4" size="md">
            {product.subTitle}
          </Heading>
          <Text>{product.description}</Text>
          <Spacer />
          <ButtonLink href={product.linkHref} text={product.linkText} variant={'outline'} alignContent={'flex-end'} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductList;
