'use client';

import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/src/components/ui/card';
import { Icon } from '@/src/lib/icon';
import { mdiArrowRight } from '@mdi/js';
import { BLOG_PAGE_SIZE } from '@src/lib/blog/constants';
import { filterPosts, paginate } from '@src/lib/blog/query';
import type { BlogListItem } from '@src/lib/blog/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SocialShare } from '../ui/socialShare';

function BlogOverviewListItem({ post, authorNameBySlug }: { post: BlogListItem; authorNameBySlug: Record<string, string> }) {
  const authorLabel = post.authors.map((slug) => authorNameBySlug[slug] ?? slug).join(', ');
  const dateLabel = format(new Date(post.date), 'MMMM d, yyyy');
  const hasImage = Boolean(post.image?.trim());

  return (
    <Card style="flat" elevation="none" padding="sm">
      <CardHeader className="space-y-3">
        <h2 className="text-xl font-medium font-heading">
          <Link href={post.href} className="hover:underline" title={post.title}>
            {post.title}
          </Link>
        </h2>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{dateLabel}</span>
          <span aria-hidden>·</span>
          <span>{authorLabel}</span>

          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.map((t) => (
                <Badge key={t} colorScheme="neutral" size="sm">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
        {hasImage ? (
          <Link href={post.href} className="relative block aspect-2/1 w-full max-w-2xl overflow-hidden rounded-lg border border-border-color bg-muted" aria-label={`View post: ${post.title}`}>
            <Image src={post.image} alt={post.title} fill className="object-cover transition-opacity hover:opacity-95" sizes="(max-width: 768px) 100vw, 42rem" />
          </Link>
        ) : null}
      </CardHeader>
      <CardContent className="py-0">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.description}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" colorScheme="primary" asChild>
          <Link href={post.href}>
            Read more <Icon path={mdiArrowRight} size={0.8} />
          </Link>
        </Button>
        <SocialShare url={post.href} title={post.title} />
      </CardFooter>
    </Card>
  );
}

type BlogOverviewClientProps = {
  posts: Array<BlogListItem>;
  authorNameBySlug: Record<string, string>;
};

function toStringQuery(q: Record<string, string | string[] | undefined>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(q)) {
    if (typeof v === 'string' && v.length > 0) {
      out[k] = v;
    } else if (Array.isArray(v) && typeof v[0] === 'string' && v[0].length > 0) {
      out[k] = v[0];
    }
  }
  return out;
}

// Note: Tag/author filter UI lives in BlogFiltersPanel; this component
// shares state with it via the URL query string (shallow routing).
export function BlogOverviewClient({ posts, authorNameBySlug }: BlogOverviewClientProps) {
  const router = useRouter();
  const tag = router.isReady && typeof router.query.tag === 'string' ? router.query.tag : '';
  const authorSlug = router.isReady && typeof router.query.author === 'string' ? router.query.author : '';
  const pageRaw = router.isReady && typeof router.query.page === 'string' ? Number.parseInt(router.query.page, 10) : 1;
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;

  const filtered = useMemo(
    () =>
      filterPosts(posts, {
        tag: tag || undefined,
        authorSlug: authorSlug || undefined,
      }),
    [posts, tag, authorSlug]
  );

  const { pageItems, totalPages, totalItems } = useMemo(() => paginate(filtered, page, BLOG_PAGE_SIZE), [filtered, page]);

  const setQuery = (patch: Partial<Record<'tag' | 'author' | 'page', string | null>>) => {
    const merged: Record<string, string | string[] | undefined> = {
      ...(router.query as Record<string, string | string[] | undefined>),
    };
    for (const [k, v] of Object.entries(patch)) {
      if (v === null || v === undefined || v === '') {
        delete merged[k];
      } else {
        merged[k] = v;
      }
    }
    const out = toStringQuery(merged);
    if (out.page === '1') {
      delete out.page;
    }
    void router.replace({ pathname: '/blog', query: out }, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <p className="text-sm text-muted-foreground">
        {totalItems} post{totalItems === 1 ? '' : 's'}
        {totalPages > 1 ? ` · Page ${page} of ${totalPages}` : ''}
      </p>

      {pageItems.length === 0 ? (
        <p className="text-muted-foreground">No posts match these filters.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {pageItems.map((p) => (
            <BlogOverviewListItem key={`${p.year}/${p.month}/${p.slug}`} post={p} authorNameBySlug={authorNameBySlug} />
          ))}
        </div>
      )}

      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" disabled={page <= 1} onClick={() => setQuery({ page: String(page - 1) })}>
            Previous
          </Button>
          <Button variant="outline" disabled={page >= totalPages} onClick={() => setQuery({ page: String(page + 1) })}>
            Next
          </Button>
        </div>
      ) : null}
    </div>
  );
}
