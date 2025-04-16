import { useGetEntriesByProducts } from '@/src/hooks/useGetEntriesByProducts';
import { Card, CardBody, CardHeader, Heading, HStack, Image, Skeleton, SkeletonText } from '@chakra-ui/react';

import { Option } from '@/src/components/ui/dropdown';
import { ChangelogEntrySummary, Product } from '@lib/changelog/types';
import { getChangelogEntryUrl } from '@lib/utils';
import Link from 'next/link';

type ChangelogByMonthProps = {
  product?: Product;
  selectedProducts?: Array<Option>;
};

const ChangelogByMonth = ({ product, selectedProducts }: ChangelogByMonthProps) => {
  const { entries, isLoading } = useGetEntriesByProducts(product, selectedProducts);

  const items = entries || [];

  if (isLoading) {
    return (
      <>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </>
    );
  }

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

const Placeholder = () => {
  return (
    <>
      <Skeleton mb={8}>Loading...</Skeleton>
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
