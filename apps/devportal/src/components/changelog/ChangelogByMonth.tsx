import { Card, CardBody, CardHeader, HStack, Heading, Image, Skeleton, SkeletonText } from '@chakra-ui/react';
import { useGetEntriesByProducts } from '@lib/changelog/hooks/useGetEntriesByProducts';
import Link from 'next/link';
import { Product } from '@scdp/changelog/types';
import { ChangelogEntrySummary } from '@scdp/changelog/types';
import { getChangelogEntryUrl } from '@scdp/changelog/utils';
import { Option } from '@scdp/ui/components';

type ChangelogByMonthProps = {
  product?: Product;
  selectedProducts?: Option[];
};

const ChangelogByMonth = ({ product, selectedProducts }: ChangelogByMonthProps): JSX.Element => {
  const { entries, isLoading } = useGetEntriesByProducts(product, selectedProducts);

  const items = entries || [];

  if (isLoading)
    return (
      <>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </>
    );

  return (
    <>
      {Object.entries(items).map(([month, changelogItems], i) => (
        <Card variant="unstyled" key={i}>
          <CardHeader mt={8}>
            <Heading as="h3" size="sm" variant={'section'}>
              {month}
            </Heading>
          </CardHeader>
          <CardBody>
            {changelogItems.map((item: ChangelogEntrySummary, index) => (
              <HStack as="div" py={2} verticalAlign={'top'} key={index}>
                <Image src={item.lightIcon} alt={item.productName ?? item.title} width={'20px'} height={'20px'} _dark={{ display: 'none' }} />
                <Image src={item.darkIcon} alt={item.productName ?? item.title} display={'none'} width={'20px'} height={'20px'} _dark={{ display: 'block' }} />
                <Link className="text-xs text-violet dark:text-teal hover:underline" href={getChangelogEntryUrl(item)} title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}>
                  {item.title}
                </Link>
              </HStack>
            ))}
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ChangelogByMonth;

const Placeholder = (): JSX.Element => {
  return (
    <>
      <Skeleton mb={8}>Loading...</Skeleton>
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
