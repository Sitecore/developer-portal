/* eslint-disable turbo/no-undeclared-env-vars */
import { usePreview } from '@/src/context/PreviewContext';
import { Alert, Badge, BoxProps, Button, HStack, Icon, Link, Tooltip } from '@chakra-ui/react';
import { mdiSquareEditOutline } from '@mdi/js';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = BoxProps & {
  loading?: boolean;
  item: ChangelogEntry;
};

export const ChangelogItemMeta = ({ item, ...rest }: ChangelogItemMetaProps) => {
  const { isPreview } = usePreview();

  const organizationId = process.env.NEXT_PUBLIC_SITECORE_CHONE_ORGANIZATION as string;
  const tenantId = process.env.NEXT_PUBLIC_SITECORE_CHONE_TENANT as string;

  const colorScheme = (changeType: string) => {
    if (changeType.toLowerCase() == 'improvement') return 'primary';
    if (changeType.toLowerCase() == 'new feature') return 'success';
    if (changeType.toLowerCase() == 'resolved') return 'orange';

    return 'default';
  };

  const MetaInfo = (
    <HStack {...rest} gap={4}>
      {item.products != null ? item.products.map((product, key) => <ProductIcon product={product} key={key} />) : <Alert status="error">No product defined</Alert>}

      <time dateTime="2022-10-21T15:48:00.000Z">{item.releaseDate}</time>

      {item.changeTypeName != null ? <Badge colorScheme={colorScheme(item.changeTypeName)}>{item.changeTypeName}</Badge> : <Badge>No changetype defined</Badge>}
      {item.breakingChange && <Badge colorScheme="danger">Breaking change</Badge>}
    </HStack>
  );

  if (!isPreview) return MetaInfo;

  return (
    <HStack justifyContent={'space-between'}>
      {MetaInfo}
      {isPreview && (
        <Tooltip label="Edit in Sitecore Content Hub ONE" aria-label="Edit in Sitecore Content Hub">
          <Button
            variant={'ghost'}
            size="sm"
            leftIcon={
              <Icon>
                <path d={mdiSquareEditOutline} />
              </Icon>
            }
          >
            <Link href={`https://content.sitecorecloud.io/content/${item.id}?organization=${organizationId}&tenantName=${tenantId}`} target="_blank">
              Edit
            </Link>
          </Button>
        </Tooltip>
      )}
    </HStack>
  );
};
