/* eslint-disable turbo/no-undeclared-env-vars */
import { usePreview } from '@/src/context/PreviewContext';
import { BoxProps, Button, HStack, Hide, Icon, Link, Popover, PopoverAnchor, PopoverArrow, PopoverContent, PopoverTrigger, Stack, Tag, Text, Tooltip, chakra, useColorModeValue } from '@chakra-ui/react';
import { ChangelogEntry } from '@lib/changelog/types';
import { getSlug } from '@lib/utils';
import { mdiSquareEditOutline } from '@mdi/js';
import Image from 'next/image';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = BoxProps & {
  item: ChangelogEntry;
};

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

export function getStatusBadgeColor(status: string): string {
  switch (status) {
    case 'available':
      return 'success';
    case 'inprogress':
      return 'info';
    case 'scheduled':
      return 'orange';
    default:
      return 'primary';
  }
}


export const ChangelogItemMeta = ({ item }: ChangelogItemMetaProps) => {
  const { isPreview } = usePreview();

  const organizationId = process.env.NEXT_PUBLIC_SITECORE_CHONE_ORGANIZATION as string;
  const tenantId = process.env.NEXT_PUBLIC_SITECORE_CHONE_TENANT as string;

  const colorScheme = (changeType: string) => {
    if (changeType?.toLowerCase() == 'improvement') return 'primary';
    if (changeType?.toLowerCase() == 'new feature') return 'success';
    if (changeType?.toLowerCase() == 'resolved') return 'orange';

    return 'default';
  };

  const MetaInfo = (
    <HStack gap={4}>
      {item.products != null && item.products?.length > 1 ? (
        <HStack spacing={0}>
          <Popover placement="bottom-start" trigger="click">
            <PopoverAnchor>{item.products != null && <ProductIcon product={item.products[0]} />}</PopoverAnchor>
            <PopoverTrigger>
              <Button variant="unstyled" size={'sm'} hideBelow={'sm'} ml={2}>
                + {item.products.length - 1} <Hide below="md">{item.products.length == 1 ? 'other' : 'others'}</Hide>
              </Button>
            </PopoverTrigger>
            <PopoverContent p={2} maxW={'3xs'}>
              <PopoverArrow />
              <Stack>
                {item.products &&
                  item.products.slice(1).map((product, key) => (
                    <HStack key={key}>
                      <CustomImage boxSize={3} src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName ? product.productName : 'Product icon'} width={15} height={15} priority={true} maxWidth={'auto'} />
                      <Link href={`/changelog/${getSlug(product.productName)}`} className="" key={key}>
                        <Text color={useColorModeValue('black', 'white')}>{product.productName}</Text>
                      </Link>
                    </HStack>
                  ))}
              </Stack>
            </PopoverContent>
          </Popover>
        </HStack>
      ) : (
        item.products != null && <ProductIcon product={item.products[0]} />
      )}

      <time dateTime="2022-10-21T15:48:00.000Z">{item.releaseDate}</time>

      {item.changeType.length > 0 &&
        item.changeType.map((changeTypeItem, key) => (
          <Tag colorScheme={colorScheme(changeTypeItem.name)} size="sm" key={key}>
            {changeTypeItem.name}
          </Tag>
        ))}
      {item.breakingChange && (
        <Tag size="sm" colorScheme="warning">
          Breaking change
        </Tag>
      )}
      {item.scheduled && (
        <Tooltip label="This functionality is scheduled" aria-label="This functionality is scheduled">
          <Tag size="sm">Scheduled</Tag>
        </Tooltip>
      )}
      {!item.scheduled && item.status && item.status.identifier == 'in-progress' && (
        <Tooltip label={item.status.description} aria-label={item.status.description}>
          <Tag size="sm" colorScheme={getStatusBadgeColor(item.status.identifier)} variant="outline">
            {item.status.name}
          </Tag>
        </Tooltip>
      )}
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
