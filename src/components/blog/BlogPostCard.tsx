import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import type { BlogListItem } from "@src/lib/blog/types";
import { format } from "date-fns";
import Link from "next/link";

type BlogPostCardProps = {
  post: BlogListItem;
  authorNameBySlug: Record<string, string>;
};

export function BlogPostCard({ post, authorNameBySlug }: BlogPostCardProps) {
  const authorLabel = post.authors
    .map((slug) => authorNameBySlug[slug] ?? slug)
    .join(", ");
  const dateLabel = format(new Date(post.date), "MMM d, yyyy");

  return (
    <Link href={post.href} className="group block h-full">
      <Card
        elevation="xs"
        style="outline"
        className="h-full overflow-hidden p-0 transition-shadow group-hover:shadow-md"
      >
        {/* <div className="relative aspect-[2/1] w-full border-b border-border-color bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div> */}
        <CardHeader className="px-5 pt-5">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription>
            {dateLabel} · {authorLabel}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 px-5 pb-5">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.description}
          </p>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <Badge key={t} colorScheme="neutral">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}
