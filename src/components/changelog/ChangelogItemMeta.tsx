'use client';

import { usePreview } from '@/src/context/PreviewContext';
import { getSlug } from '@/src/lib/utils/stringUtil';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { ChangelogEntry } from '@lib/changelog/types';
import { cn } from '@lib/utils';
import { mdiSquareEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { ProductIcon } from './ProductIcon';

type ChangelogItemMetaProps = {
  item: ChangelogEntry;
  className?: string;
};

export function getStatusBadgeVariant(status: string): 'default' | 'bold' {
  switch (status) {
    case 'available':
      return 'default';
    case 'inprogress':
      return 'default';
    case 'scheduled':
      return 'default';
    default:
      return 'default';
  }
}

export const ChangelogItemMeta = ({ item, className }: ChangelogItemMetaProps) => {
  const { isPreview } = usePreview();
  const { theme } = useTheme();

  const organizationId = process.env.NEXT_PUBLIC_SITECORE_CHONE_ORGANIZATION as string;
  const tenantId = process.env.NEXT_PUBLIC_SITECORE_CHONE_TENANT as string;

  const getBadgeVariant = (changeType: string): 'default' | 'bold' => {
    if (changeType?.toLowerCase() == 'improvement') {
      return 'default';
    }
    if (changeType?.toLowerCase() == 'new feature') {
      return 'default';
    }
    if (changeType?.toLowerCase() == 'resolved') {
      return 'bold';
    }
    return 'default';
  };

  const MetaInfo = (
    <div className={cn('flex flex-col sm:flex-row gap-4', className)}>
      <div className="flex flex-wrap items-center gap-2">
        {item.products != null && item.products?.length > 1 ? (
          <div className="flex items-center gap-0">
            <Popover>
              <div className="flex items-center gap-2">
                {item.products != null && <ProductIcon product={item.products[0]} />}
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex ml-2">
                    + {item.products.length - 1} <span className="hidden md:inline">{item.products.length == 1 ? 'other' : 'others'}</span>
                  </Button>
                </PopoverTrigger>
              </div>
              <PopoverContent className="p-2 max-w-xs">
                <div className="flex flex-col gap-2">
                  {item.products &&
                    item.products.slice(1).map((product, key) => {
                      const iconSrc = theme === 'dark' ? product.darkIcon : product.lightIcon;
                      return (
                        <div key={key} className="flex items-center gap-2">
                          <Image src={iconSrc} alt={product.productName ? product.productName : 'Product icon'} width={15} height={15} priority />
                          <Link href={`/changelog/${getSlug(product.productName)}`} className="text-foreground hover:underline">
                            {product.productName}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          item.products != null && <ProductIcon product={item.products[0]} />
        )}
        <time dateTime={item.releaseDate}>{item.releaseDate}</time>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {item.changeType.length > 0 &&
          item.changeType.map((changeTypeItem, key) => (
            <Badge variant={getBadgeVariant(changeTypeItem.name)} key={key}>
              {changeTypeItem.name}
            </Badge>
          ))}

        {item.breakingChange && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="bold">Action required</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>This change could require manual updates</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {item.scheduled && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="default">Scheduled</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>This functionality is scheduled and not yet released</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {!item.scheduled && item.status != null && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant={getStatusBadgeVariant(item.status.identifier)}>{item.status.name}</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.status.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );

  if (!isPreview) {
    return MetaInfo;
  }

  return (
    <div className="flex justify-between items-center">
      {MetaInfo}
      {isPreview && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" asChild>
                <Link href={`https://content.sitecorecloud.io/content/${item.id}?organization=${organizationId}&tenantName=${tenantId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Icon path={mdiSquareEditOutline} size={1} />
                  Edit
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit in Sitecore Content Hub ONE</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};
