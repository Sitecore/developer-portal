import { BoxProps, HStack, Tag, TagLabel } from '@chakra-ui/react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { Message, Type } from 'ui/components/common/Message';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = BoxProps & {
  loading?: boolean;
  item: ChangelogEntry;
};

export const ChangelogItemMeta = ({ item, loading, ...rest }: ChangelogItemMetaProps) => {
  const colorScheme = (changeType: string) => {
    if (changeType == 'Improvement') return 'purple';
    if (changeType == 'New Feature') return 'teal';
    if (changeType == 'Resolved') return 'yellow';

    return 'default';
  };

  return (
    <HStack {...rest} gap={4}>
      {item.products != null ? item.products.map((product, key) => <ProductIcon product={product} isLoading={loading} key={key} />) : <Message type={Type.Error} plain={true} message="No product defined" />}

      <time dateTime="2022-10-21T15:48:00.000Z">{item.releaseDate}</time>

      {item.changeTypeName != null ? <Tag colorScheme={colorScheme(item.changeTypeName)}>{item.changeTypeName}</Tag> : <Tag>No changetype defined</Tag>}

      {item.breakingChange && (
        <Tag colorScheme="danger">
          <TagLabel>Breaking change</TagLabel>
        </Tag>
      )}
    </HStack>
  );
};
