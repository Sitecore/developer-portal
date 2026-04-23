import type { BlogListItem } from "@src/lib/blog/types";
import Link from "next/link";
import { BlogPostCard } from "@/src/components/blog/BlogPostCard";

type BlogLatestPostsProps = {
  posts: Array<BlogListItem>;
  authorNameBySlug: Record<string, string>;
};

export function BlogLatestPosts({
  posts,
  authorNameBySlug,
}: BlogLatestPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-heading font-semibold">Latest blog</h2>
          <p className="text-sm text-muted-foreground">
            Product and engineering updates from the developer portal.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-primary hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <BlogPostCard
            key={`${p.year}/${p.month}/${p.slug}`}
            post={p}
            authorNameBySlug={authorNameBySlug}
          />
        ))}
      </div>
    </div>
  );
}
