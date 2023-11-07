import { Alert, BoxProps, HStack, Tag, TagLabel } from '@chakra-ui/react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = BoxProps & {
  loading?: boolean;
  item: ChangelogEntry;
};

export const ChangelogItemMeta = ({ item, ...rest }: ChangelogItemMetaProps) => {
  const colorScheme = (changeType: string) => {
    if (changeType.toLowerCase() == 'improvement') return 'primary';
    if (changeType.toLowerCase() == 'new feature') return 'success';
    if (changeType.toLowerCase() == 'resolved') return 'orange';

    return 'default';
  };

  return (
    <HStack {...rest} gap={4}>
      {item.products != null ? item.products.map((product, key) => <ProductIcon product={product} key={key} />) : <Alert status="error">No product defined</Alert>}

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
