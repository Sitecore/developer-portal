import { Card, CardHeader, Heading, Link } from '@chakra-ui/react';
import { useRef } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { getChangelogEntryUrl } from 'sc-changelog/utils/urlBuilder';

interface ChangeLogSearchItemType {
  item: ChangelogEntry;
  index: number;
}

export const ChangeLogSearchItem = ({ item }: ChangeLogSearchItemType) => {
  const entryRef = useRef(null);
  return (
    <>
      <Card ref={entryRef} variant={'unstyled'} mt={2} mb={8}>
        <CardHeader pb={4}>
          <Heading as="h2" fontSize={'1.25rem'} id={getSlug(item.title)} mb={4}>
            <Link href={getChangelogEntryUrl(item)} title={item.title}>
              {item.title}
            </Link>
          </Heading>
          {/* <ChangelogItemMeta item={item} loading={loading} /> */}
        </CardHeader>
      </Card>
    </>
  );
};
