"use client";

import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import type { Option } from "@src/components/ui/dropdown";
import { Skeleton } from "@src/components/ui/skeleton";
import { useGetEntriesByProducts } from "@src/hooks/useGetEntriesByProducts";
import type { ChangelogEntrySummary, Product } from "@src/lib/changelog/types";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getChangelogEntryUrl } from "@/src/lib/util/urlUtil";

type ChangelogByMonthProps = {
  product?: Product;
  selectedProducts?: Array<Option>;
};

const ChangelogByMonth = ({
  product,
  selectedProducts,
}: ChangelogByMonthProps) => {
  const { theme } = useTheme();
  const { entries, isLoading } = useGetEntriesByProducts(
    product,
    selectedProducts,
  );

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
        <Card key={month} className="border-0 shadow-none">
          <CardHeader className="mt-8">
            <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
              {month}
            </h3>
          </CardHeader>
          <CardContent>
            {changelogItems.map((item: ChangelogEntrySummary) => {
              const iconSrc = theme === "dark" ? item.darkIcon : item.lightIcon;
              const itemKey = `${item.id || item.title}-${item.releaseDate || ""}`;
              return (
                <div className="flex items-start py-2" key={itemKey}>
                  <Image
                    src={iconSrc}
                    alt={item.productName ?? item.title}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Link
                    className="text-xs text-violet dark:text-teal hover:underline"
                    href={getChangelogEntryUrl(item)}
                    title={`(${item.releaseDate}) ${item.productName} - ${item.title}`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </CardContent>
        </Card>
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
