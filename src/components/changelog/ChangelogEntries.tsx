import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  chakra,
  Flex,
  Heading,
  Hide,
  HStack,
  IconButton,
  Link,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangelogEntry } from '@lib/changelog/types';
import { getChangelogEntryUrl, getSlug } from '@lib/utils';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { TextLink } from '@src/components/links';
import Image from 'next/image';

type ChangelogEntriesProps = CardProps & {
  entries: Array<ChangelogEntry>;
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

const ChangelogEntries = ({ entries, title = 'Sitecore Changelog', linkHref = '/changelog', linkText = 'See all changes', hideProductIcon, columns, ...rest }: ChangelogEntriesProps) => {
  if (entries.length === 0) {
    return <></>;
  }

  return (
    <Card {...rest} variant={'unstyled'}>
      <CardHeader justifyContent={{ base: 'left', sm: 'space-between' }} flexDirection={{ base: 'column', sm: 'row' }} display={'flex'} py={8} alignItems={'baseline'}>
        <Heading as={'h3'} size={'lg'}>
          {title}
          <Link href="/changelog/rss.xml" ml={1}>
            <IconButton icon={<Icon path={mdiRss} size={0.8} />} aria-label={'RSS'} colorScheme="neutral" variant="ghost" size={'xs'} />
          </Link>
        </Heading>

        <TextLink href={linkHref} text={linkText} hideBelow={'md'} />
      </CardHeader>
      <CardBody py={{ base: '2', md: '4' }}>
        <SimpleGrid columns={columns ? columns : 1} spacing={0}>
          {entries.map((entry, key) => {
            return (
              <Flex justifyContent={'items-start'} mb={4} key={key}>
                {!hideProductIcon && (
                  <Box display={{ base: 'none', sm: 'block' }} textAlign={'center'} mr={5} height={'43px'} width={'43px'}>
                    <CustomImage boxSize={3} src={useColorModeValue(entry.lightIcon, entry.darkIcon)} alt={entry.productName ? entry.productName : 'Product icon'} width={25} margin={'.5rem'} height={25} priority={true} maxWidth={'auto'} />
                  </Box>
                )}
                <Stack fontSize={'sm'}>
                  <Heading as={'h4'} size={'md'}>
                    <Link href={getChangelogEntryUrl(entry)} title={entry.title} color={'chakra-body-text'}>
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
                                <Text color={'chakra-body-text'}>{entry.products[0].productName}</Text>
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
                                      <Text color={'chakra-body-text'}>{product.productName}</Text>
                                    </Link>
                                  </HStack>
                                ))}
                            </Stack>
                          </PopoverContent>
                        </Popover>
                      </HStack>
                    ) : (
                      entry.products != null && (
                        <Link href={`/changelog/${getSlug(entry.products[0].productName)}`} key={key}>
                          <Text color={'chakra-body-text'}>{entry.products[0].productName}</Text>
                        </Link>
                      )
                    )}

                    {entry.changeTypeName != null ? (
                      <Tag size="sm" colorScheme={entry.changeTypeName == 'Resolved' ? 'yellow' : entry.changeTypeName == 'New feature' ? 'teal' : 'info'}>
                        {entry.changeTypeName}
                      </Tag>
                    ) : (
                      ''
                    )}
                    {entry.breakingChange && (
                      <Tag size="sm" colorScheme="danger">
                        Action required
                      </Tag>
                    )}
                  </HStack>
                </Stack>
              </Flex>
            );
          })}
        </SimpleGrid>
      </CardBody>
      <CardFooter hideFrom={'md'} py={0} alignSelf={'self-end'}>
        <TextLink href={linkHref} text={linkText} />
      </CardFooter>
    </Card>
  );
};

export default ChangelogEntries;
