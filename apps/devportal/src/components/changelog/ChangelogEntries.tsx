import { Badge, Box, Button, Card, CardBody, CardHeader, CardProps, Flex, HStack, Heading, Hide, Link, Popover, PopoverAnchor, PopoverArrow, PopoverContent, PopoverTrigger, SimpleGrid, Stack, Text, chakra, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { ChangelogEntry } from '@scdp/changelog/types';
import { getSlug, getChangelogEntryUrl } from '@scdp/changelog/utils';
import { TextLink } from '@scdp/ui/components';

type ChangelogEntriesProps = CardProps & {
  entries: ChangelogEntry[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
  columns?: number;
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

const ChangelogEntries = ({ entries, title, linkHref, linkText, hideProductIcon, columns, ...rest }: ChangelogEntriesProps): JSX.Element => {
  if (entries.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} size={{ base: 'xs', md: 'md' }}>
      <CardHeader justifyContent={'space-between'} display={'flex'} py={8}>
        <Heading as={'h3'} size={'md'}>
          {title != null ? title : 'Sitecore Changelog'}
        </Heading>
        <TextLink href={linkHref != null ? linkHref : '/changelog'} text={linkText != null ? linkText : 'See all changes'} />
      </CardHeader>
      <CardBody py={{ base: '2', md: '4' }}>
        <SimpleGrid columns={columns ? columns : 1} spacing={0}>
          {entries.map((entry, key) => {
            return (
              <Flex justifyContent={'items-start'} mb={5} key={key}>
                {!hideProductIcon && (
                  <Box display={{ base: 'none', sm: 'block' }} textAlign={'center'} mr={5} height={'43px'} width={'43px'}>
                    <CustomImage boxSize={3} src={useColorModeValue(entry.lightIcon, entry.darkIcon)} alt={entry.productName ? entry.productName : 'Product icon'} width={25} margin={'.5rem'} height={25} priority={true} maxWidth={'auto'} />
                  </Box>
                )}
                <Stack fontSize={'sm'}>
                  <Heading as={'h4'} size="sm">
                    <Link href={getChangelogEntryUrl(entry)} title={entry.title} color={useColorModeValue('black', 'white')}>
                      {entry.title}
                    </Link>
                  </Heading>

                  <HStack spacing={'24px'}>
                    <Text>{new Date(entry.releaseDate).toLocaleString('en-US', { dateStyle: 'medium' })}</Text>

                    {entry.products != null && entry.products?.length > 1 ? (
                      <HStack spacing={0}>
                        <Popover placement="bottom-start" trigger="click">
                          <PopoverAnchor>
                            {entry.products != null && (
                              <Link href={`/changelog/${getSlug(entry.products[0].productName)}`} className="">
                                <Text color={useColorModeValue('black', 'white')}>{entry.products[0].productName}</Text>
                              </Link>
                            )}
                          </PopoverAnchor>
                          <PopoverTrigger>
                            <Button variant="unstyled" size={'sm'} hideBelow={'sm'}>
                              + {entry.products.length - 1} <Hide below="md">{entry.products.length == 1 ? 'other' : 'others'}</Hide>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent p={2} maxW={'3xs'}>
                            <PopoverArrow />
                            <Stack>
                              {entry.products &&
                                entry.products.slice(1).map((product, key) => (
                                  <HStack key={key}>
                                    <CustomImage boxSize={3} src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName ? product.productName : 'Product icon'} width={15} height={15} priority={true} maxWidth={'auto'} />
                                    <Link href={`/changelog/${getSlug(product.productName)}`} className="" key={key}>
                                      <Text color={useColorModeValue('black', 'white')}>{product.productName}</Text>
                                    </Link>
                                  </HStack>
                                ))}
                            </Stack>
                          </PopoverContent>
                        </Popover>
                      </HStack>
                    ) : (
                      entry.products != null && (
                        <Link href={`/changelog/${getSlug(entry.products[0].productName)}`} className="" key={key}>
                          <Text color={useColorModeValue('black', 'white')}>{entry.products[0].productName}</Text>
                        </Link>
                      )
                    )}

                    {entry.changeTypeName != null ? <Badge colorScheme={entry.changeTypeName == 'Resolved' ? 'yellow' : entry.changeTypeName == 'New Feature' ? 'teal' : 'info'}>{entry.changeTypeName}</Badge> : ''}
                    {entry.breakingChange && <Badge colorScheme="danger">Breaking change</Badge>}
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

ChangelogEntries.defaultProps = {
  className: '',
};

export default ChangelogEntries;
