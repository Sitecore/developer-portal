'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@components/ui/badge';
import { Card, CardContent, CardHeader } from '@components/ui/card';
import { ChangelogEntry } from '@lib/changelog/types';
import { getSlug } from '@/src/lib/utils/stringUtil';
import { getChangelogEntryUrl } from '@/src/lib/utils/urlUtil';
import { TextLink } from '@components/links/TextLink';
import { cn } from '@lib/utils';

type ChangelogEntriesProps = {
  entries: Array<ChangelogEntry>;
  className?: string;
  title?: string;
  subtitle?: string;
  linkHref?: string;
  linkText?: string;
  hideProductIcon?: boolean;
  columns: number;
};

const ChangelogEntries = ({ entries, title, subtitle, linkHref, linkText, hideProductIcon, columns, className }: ChangelogEntriesProps) => {
  const { theme } = useTheme();

  if (entries.length === 0) {
    return <></>;
  }

  return (
    <Card className={cn('shadow-none bg-transparent', className)}>
      <CardHeader className="flex flex-col md:flex-row justify-between px-0">
        <div>
          <h3 className="text-2xl font-heading">
            {title}
          </h3>
          {subtitle && (
            <h3 className="text-sm font-heading pb-6 mb-8">
              {subtitle}
            </h3>
          )}
        </div>
        <TextLink href={linkHref != null ? linkHref : '/changelog'} text={linkText != null ? linkText : 'See all changes'} />
      </CardHeader>
      <CardContent className="pl-0 pr-0 pb-0">
        <div className={cn('grid row-gap-2 items-stretch', `grid-cols-2 md:grid-cols-${columns / 2} lg:grid-cols-${columns}`)}>
          {entries.map((entry, key) => {
            const iconSrc = theme === 'dark' ? entry.darkIcon : entry.lightIcon;
            return (
              <div className="flex items-start mb-5" key={key}>
                {!hideProductIcon && (
                  <div className="hidden sm:block text-center mr-2 h-[43px] w-[43px]">
                    <Image
                      src={iconSrc}
                      alt={entry.productName ? entry.productName : 'Product icon'}
                      width={25}
                      height={25}
                      priority
                      className="m-2"
                    />
                  </div>
                )}
                <div className="text-sm">
                  <h4 className="text-base font-heading">
                    <Link href={getChangelogEntryUrl(entry)} title={entry.title} className="text-foreground hover:underline">
                      {entry.title}
                    </Link>
                  </h4>

                  <div className="flex items-center gap-6">
                    <p>{new Date(entry.releaseDate).toLocaleString('en-US', { dateStyle: 'medium' })}</p>

                    {entry.products != null
                      ? entry.products.map((product, key) => (
                          <Link href={`/changelog/${getSlug(product.productName)}`} key={key} className="text-foreground hover:underline">
                            {product.productName}
                          </Link>
                        ))
                      : ''}

                    {entry.changeTypeName != null && (
                      <Badge variant={entry.changeTypeName == 'Resolved' ? 'secondary' : entry.changeTypeName == 'New feature' ? 'default' : 'outline'}>
                        {entry.changeTypeName}
                      </Badge>
                    )}
                    {entry.breakingChange && <Badge variant="destructive">Breaking change</Badge>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

ChangelogEntries.defaultProps = {
  className: '',
};

export default ChangelogEntries;
