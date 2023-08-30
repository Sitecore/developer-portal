import { Card, CardBody, CardHeader, HStack, Heading, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from 'sc-changelog/types';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';
import useSWR, { Fetcher } from 'swr';
import { Option } from 'ui/components/dropdown/MultiSelect';

type ChangelogByMonthProps = {
  className?: string;
  product?: Product;
  selectedProducts?: Option[];
};

const ChangelogByMonth = ({ className, product, selectedProducts }: ChangelogByMonthProps): JSX.Element => {
  const fetcher: Fetcher<Record<string, ChangelogEntrySummary[]> | null, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const query: string[] = [];
  if (product) query.push(`product=${product.id}`);

  if (selectedProducts) {
    selectedProducts.map((p) => {
      query.push(`product=${p.value}`);
    });
  }

  const { data, error, isLoading } = useSWR<Record<string, ChangelogEntrySummary[]> | null>(`/api/changelog/v1/all?${query.join('&')}`, fetcher);

  if (error) {
    console.log(error);
  }
  const items = data || [];

  if (isLoading)
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );

  return (
    <div className={`${className}`}>
      {Object.entries(items).map(([month, changelogItems], i) => (
        <Card variant="unstyled">
          <CardHeader mt={8}>
            <Heading as="h3" size="sm" variant={'section'}>
              {month}
            </Heading>
          </CardHeader>
          <CardBody>
            {changelogItems.map((item, index) => (
              <HStack as="div" py={2} verticalAlign={'top'}>
                <Image src={useColorModeValue(item.lightIcon, item.darkIcon)} alt={item.productName ?? item.title} className="relative h-5 w-5" width={20} height={20} priority={true} />

                <Link className="text-violet dark:text-teal text-xs hover:underline" href={getChangelogEntryUrl(item)} title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}>
                  {item.title}
                </Link>
              </HStack>
            ))}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
ChangelogByMonth.defaultProps = {
  className: '',
};

export default ChangelogByMonth;

const Skeleton = (): JSX.Element => {
  const skeletonLoaderClasses = 'bg-theme-bg-alt animate-pulse text-transparent hover:text-transparent m-1';
  return (
    <div>
      <h3 className={`my-4 ${skeletonLoaderClasses} w-1/3`}>Loading</h3>
      <div className="flex-column items-center gap-5 py-2">
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
        <div className={`${skeletonLoaderClasses} block w-full `}>Entry title</div>
      </div>
    </div>
  );
};
