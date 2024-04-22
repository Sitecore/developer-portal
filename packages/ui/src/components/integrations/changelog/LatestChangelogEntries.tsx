import { Badge, Box, Card, CardBody, CardHeader, CardProps, Flex, Grid, HStack, Heading, Link, Stack, Text, chakra, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { ChangelogEntry } from '@scdp/changelog/types';
import { getSlug } from '@scdp/changelog/utils';
import { getChangelogEntryUrl } from '@scdp/changelog/utils';
import { TextLink } from '../../links/TextLink';


type ChangelogEntriesProps = CardProps & {
  entries: ChangelogEntry[];
  className?: string;
  title?: string;
  subtitle?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
  columns: number;
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

const ChangelogEntries = ({ entries, title, subtitle, linkHref, linkText, hideProductIcon, columns, ...rest }: ChangelogEntriesProps): JSX.Element => {
  if (entries.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} background={'transparent'}>
      <CardHeader justifyContent={'space-between'} display={{ base: 'inline', md: 'flex' }} px={0}>
        <Heading as={'h3'} size={'xl'}>
          {title}
        </Heading>
        {subtitle && (
          <Heading as="h3" size={'sm'} pb={6} mb={8}>
            {subtitle}
          </Heading>
        )}
        <TextLink href={linkHref != null ? linkHref : '/changelog'} text={linkText != null ? linkText : 'See all changes'} />
      </CardHeader>
      <CardBody paddingLeft={0} paddingRight={0} paddingBottom={0}>
        <Grid templateColumns={{ base: `repeat(2}, 1fr)`, md: `repeat(${columns / 2}, 1fr)`, lg: `repeat(${columns}, 1fr)` }} rowGap={2} alignItems={'items-stretch'}>
          {entries.map((entry, key) => {
            return (
              <Flex justifyContent={'items-start'} mb={5} key={key}>
                {!hideProductIcon && (
                  <Box display={{ base: 'none', sm: 'block' }} textAlign={'center'} mr={2} height={'43px'} width={'43px'}>
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
        </Grid>
      </CardBody>
    </Card>
  );
};

ChangelogEntries.defaultProps = {
  className: '',
};

export default ChangelogEntries;
