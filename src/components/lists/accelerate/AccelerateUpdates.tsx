import { AccelerateRecipe } from '@/src/lib/accelerate/types/recipe';
import { Product, Variant } from '@/src/lib/assets';
import { Box, Card, CardBody, CardHeader, CardProps, chakra, Flex, Heading, HStack, IconButton, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { TextLink } from '@src/components/links';
import Image from 'next/image';
import { GetProductIcon } from '../../../lib/assets';

type AccelerateUpdatesProps = CardProps & {
  recipes: AccelerateRecipe[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
  columns?: number;
  url: string;
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

const AccelerateUpdates = ({ title = 'Sitecore Accelerate updates', linkHref = '/learn/accelerate', linkText = 'See all recipes', recipes, hideProductIcon, columns }: AccelerateUpdatesProps) => {
  return (
    <Card variant={'unstyled'}>
      <CardHeader justifyContent={'space-between'} display={'flex'} py={8}>
        <Heading as={'h3'} size={'md'}>
          {title}
          <Link href="/learn/accelerate/xm-cloud/updates" ml="1">
            <IconButton icon={<Icon path={mdiRss} size={0.8} />} aria-label={'RSS'} colorScheme="primary" variant="ghost" size={'xs'} />
          </Link>
        </Heading>
        <TextLink href={linkHref} text={linkText} />
      </CardHeader>
      <CardBody py={{ base: '2', md: '4' }}>
        <SimpleGrid columns={columns ? columns : 1} spacing={0}>
          {recipes.map((entry, key) => {
            return (
              <Flex justifyContent={'items-start'} mb={5} key={key}>
                {!hideProductIcon && (
                  <Box display={{ base: 'none', sm: 'block' }} textAlign={'center'} mr={5} height={'43px'} width={'43px'}>
                    <CustomImage
                      boxSize={3}
                      src={useColorModeValue(GetProductIcon(Product.XMCloud, Variant.Light), GetProductIcon(Product.XMCloud, Variant.Dark))}
                      alt={'XM CLoud'}
                      width={25}
                      margin={'.5rem'}
                      height={25}
                      priority={true}
                      maxWidth={'auto'}
                    />
                  </Box>
                )}
                <Stack fontSize={'sm'}>
                  <Heading as={'h4'} size="sm">
                    <Link href={entry.url} title={entry.title} color={'chakra-body-text'}>
                      {entry.title}
                    </Link>
                  </Heading>

                  <HStack spacing={'24px'}>
                    <Text>{new Date(entry.lastUpdated).toLocaleString('en-US', { dateStyle: 'medium' })}</Text>
                  </HStack>
                </Stack>
              </Flex>
            );
          })}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default AccelerateUpdates;
