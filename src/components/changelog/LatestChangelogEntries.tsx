"use client";

import { TextLink } from "@src/components/links/TextLink";
import { Badge } from "@src/components/ui/badge";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import type { ChangelogEntry } from "@src/lib/changelog/types";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/src/lib/util";
import { getSlug } from "@/src/lib/util/stringUtil";
import { getChangelogEntryUrl } from "@/src/lib/util/urlUtil";

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

const ChangelogEntries = ({
  entries,
  title,
  subtitle,
  linkHref,
  linkText,
  hideProductIcon,
  columns,
  className,
}: ChangelogEntriesProps) => {
  const { theme } = useTheme();

  if (entries.length === 0) {
    return null;
  }

  return (
    <Card className={cn("shadow-none bg-transparent", className)}>
      <CardHeader className="flex flex-col md:flex-row justify-between px-0">
        <div>
          <h3 className="text-2xl font-heading">{title}</h3>
          {subtitle && (
            <h3 className="text-sm font-heading pb-6 mb-8">{subtitle}</h3>
          )}
        </div>
        <TextLink
          href={linkHref != null ? linkHref : "/changelog"}
          text={linkText != null ? linkText : "See all changes"}
        />
      </CardHeader>
      <CardContent className="pl-0 pr-0 pb-0">
        <div
          className={cn(
            "grid row-gap-2 items-stretch",
            `grid-cols-2 md:grid-cols-${columns / 2} lg:grid-cols-${columns}`,
          )}
        >
          {entries.map((entry) => {
            const iconSrc = theme === "dark" ? entry.darkIcon : entry.lightIcon;
            return (
              <div className="flex items-start mb-5" key={entry.id}>
                {!hideProductIcon && (
                  <div className="hidden sm:block text-center mr-2 h-[43px] w-[43px]">
                    <Image
                      src={iconSrc}
                      alt={
                        entry.productName ? entry.productName : "Product icon"
                      }
                      width={25}
                      height={25}
                      priority
                      className="m-2"
                    />
                  </div>
                )}
                <div className="text-sm">
                  <h4 className="text-base font-heading">
                    <Link
                      href={getChangelogEntryUrl(entry)}
                      title={entry.title}
                      className="text-foreground hover:underline"
                    >
                      {entry.title}
                    </Link>
                  </h4>

                  <div className="flex items-center gap-6">
                    <p>
                      {new Date(entry.releaseDate).toLocaleString("en-US", {
                        dateStyle: "medium",
                      })}
                    </p>

                    {entry.products != null
                      ? entry.products.map((product) => (
                          <Link
                            href={`/changelog/${getSlug(product.productName)}`}
                            key={product.id || product.productName}
                            className="text-foreground hover:underline"
                          >
                            {product.productName}
                          </Link>
                        ))
                      : ""}

                    {entry.changeTypeName != null && (
                      <Badge
                        variant="default"
                        colorScheme={
                          entry.changeTypeName === "Resolved"
                            ? "neutral"
                            : entry.changeTypeName === "New feature"
                              ? "primary"
                              : "neutral"
                        }
                      >
                        {entry.changeTypeName}
                      </Badge>
                    )}
                    {entry.breakingChange && (
                      <Badge variant="default" colorScheme="danger">
                        Breaking change
                      </Badge>
                    )}
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
  className: "",
};

export default ChangelogEntries;
