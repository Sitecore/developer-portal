"use client";

import { getChangelogEntryUrl } from '@/src/lib/util/urlUtil';
import type { Option } from '@src/components/ui/dropdown';
import { Skeleton } from '@src/components/ui/skeleton';
import { useGetEntriesByProducts } from '@src/hooks/useGetEntriesByProducts';
import type { ChangelogEntrySummary, Product } from '@src/lib/changelog/types';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from '../ui/item';

type ChangelogByMonthProps = {
  product?: Product;
  selectedProducts?: Array<Option>;
};

const ChangelogByMonth = ({ product, selectedProducts }: ChangelogByMonthProps) => {
  const { theme } = useTheme();
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
      {Object.entries(items).map(([month, changelogItems]) => (
        <ItemGroup key={month} className="mb-4">
          <ItemTitle>
            <h3 className="text-sm font-medium font-heading uppercase tracking-wide text-muted-foreground">{month}</h3>
          </ItemTitle>

          {changelogItems.map((item: ChangelogEntrySummary) => {
            const iconSrc = theme === 'dark' ? item.darkIcon : item.lightIcon;
            const itemKey = `${item.id || item.title}-${item.releaseDate || ''}`;
            return (
              <Item key={itemKey} size="sm" className="px-0">
                <ItemMedia variant={'default'}>
                  <Image src={iconSrc} alt={item.productName ?? item.title} width={20} height={20} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    <Link className="text-base font-normal hover:underline" href={getChangelogEntryUrl(item)} title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}>
                      {item.title}
                    </Link>
                  </ItemTitle>
                </ItemContent>
              </Item>
            );
          })}
        </ItemGroup>
      ))}
    </>
  );
};

export default ChangelogByMonth;

const Placeholder = () => {
  return (
    <div className="mb-8">
      <Skeleton className="h-6 mb-4">Loading...</Skeleton>
      <div className="space-y-2">
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
      </div>
    </div>
  );
};
