import { Card, CardBody, CardHeader, HStack, Heading, Image, Skeleton, SkeletonText } from '@chakra-ui/react';
import Link from 'next/link';
import { ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';

type ChangelogSearchByMonthProps = {
  entriesByMonth: ChangelogEntrySummary[];
  isLoading: boolean;
};

const ChangelogSearchByMonth = ({ entriesByMonth, isLoading }: ChangelogSearchByMonthProps): JSX.Element => {
  const entriesGrouped = entriesByMonth.reduce<Record<string, ChangelogEntrySummary[]>>((group, entry) => {
    const month = new Date(entry.releaseDate).toLocaleString('default', { month: 'short', year: 'numeric' });
    group[month] = group[month] ?? [];
    group[month].push(entry);
    return group;
  }, {});

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
      {Object.entries(entriesGrouped).map(([month, changelogItems]: [string, ChangelogEntrySummary[]], i: number) => (
        <Card variant="unstyled" key={i}>
          <CardHeader mt={8}>
            <Heading as="h3" size="sm" variant={'section'}>
              {month}
            </Heading>
          </CardHeader>
          <CardBody>
            {changelogItems.map((item: ChangelogEntrySummary, index: number) => (
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

export default ChangelogSearchByMonth;

const Placeholder = (): JSX.Element => {
  return (
    <>
      <Skeleton mb={8}>Loading...</Skeleton>
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
