"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import {
    extractAllAuthorSlugs,
    extractAllTags,
} from "@src/lib/blog/query";
import type { BlogListItem } from "@src/lib/blog/types";
import { useRouter } from "next/router";
import { useMemo } from "react";

const ALL = "__all__";

function toStringQuery(
  q: Record<string, string | string[] | undefined>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(q)) {
    if (typeof v === "string" && v.length > 0) {
      out[k] = v;
    } else if (
      Array.isArray(v) &&
      typeof v[0] === "string" &&
      v[0].length > 0
    ) {
      out[k] = v[0];
    }
  }
  return out;
}

type BlogFiltersPanelProps = {
  posts: Array<BlogListItem>;
  authorNameBySlug: Record<string, string>;
};

export function BlogFiltersPanel({
  posts,
  authorNameBySlug,
}: BlogFiltersPanelProps) {
  const router = useRouter();
  const tag =
    router.isReady && typeof router.query.tag === "string"
      ? router.query.tag
      : "";
  const authorSlug =
    router.isReady && typeof router.query.author === "string"
      ? router.query.author
      : "";

  const tagOptions = useMemo(() => extractAllTags(posts), [posts]);
  const authorOptions = useMemo(() => extractAllAuthorSlugs(posts), [posts]);

  const setQuery = (
    patch: Partial<Record<"tag" | "author" | "page", string | null>>,
  ) => {
    const merged: Record<string, string | string[] | undefined> = {
      ...(router.query as Record<string, string | string[] | undefined>),
    };
    for (const [k, v] of Object.entries(patch)) {
      if (v === null || v === undefined || v === "") {
        delete merged[k];
      } else {
        merged[k] = v;
      }
    }
    const out = toStringQuery(merged);
    if (out.page === "1") {
      delete out.page;
    }
    void router.replace({ pathname: "/blog", query: out }, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold">Filter</h3>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-muted-foreground">Tag</span>
        <Select
          value={tag || ALL}
          onValueChange={(v) =>
            setQuery({ tag: v === ALL ? null : v, page: "1" })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All tags</SelectItem>
            {tagOptions.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-muted-foreground">
          Author
        </span>
        <Select
          value={authorSlug || ALL}
          onValueChange={(v) =>
            setQuery({ author: v === ALL ? null : v, page: "1" })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All authors" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All authors</SelectItem>
            {authorOptions.map((slug) => (
              <SelectItem key={slug} value={slug}>
                {authorNameBySlug[slug] ?? slug}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
