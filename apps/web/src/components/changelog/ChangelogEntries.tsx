import { Badge, Box, Card, CardBody, CardHeader, CardProps, Flex, HStack, Heading, Link, Stack, Text, chakra, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
import { TextLink } from '../ui/TextLink';

type ChangelogEntriesProps = CardProps & {
  entries: ChangelogEntry[];
  className?: string;
  title?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

const ChangelogEntries = ({ entries, title, linkHref, linkText, hideProductIcon, ...rest }: ChangelogEntriesProps): JSX.Element => {
  if (entries.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest}>
      <CardHeader justifyContent={'space-between'} display={'flex'}>
        <Heading as={'h3'} size={'md'}>
          {title != null ? title : 'Sitecore Changelog'}
        </Heading>

        <TextLink href={linkHref != null ? linkHref : '/changelog'} text={linkText != null ? linkText : 'See all changes'} />
      </CardHeader>
      <CardBody>
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

                  {entry.products != null
                    ? entry.products.map((product, key) => (
                        <Link href={`/changelog/${getSlug(product.productName)}`} className="" key={key}>
                          <Text color={useColorModeValue('black', 'white')}>{product.productName}</Text>
                        </Link>
                      ))
                    : ''}

                  {entry.changeTypeName != null ? <Badge colorScheme={entry.changeTypeName == 'Resolved' ? 'yellow' : entry.changeTypeName == 'New Feature' ? 'teal' : 'info'}>{entry.changeTypeName}</Badge> : ''}
                  {entry.breakingChange && <Badge colorScheme="danger">Breaking change</Badge>}
                </HStack>
              </Stack>
            </Flex>
          );
        })}
      </CardBody>
    </Card>
  );
};

ChangelogEntries.defaultProps = {
  className: '',
};

export default ChangelogEntries;
