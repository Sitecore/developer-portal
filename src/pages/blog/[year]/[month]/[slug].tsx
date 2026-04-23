import Layout from "@src/layouts/Layout";
import type { BlogAuthorCard, BlogListItem } from "@src/lib/blog/types";
import { format } from "date-fns";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import UseWithAI from "@/src/components/integrations/ai/useWithAI";
import { DecoratedMarkdown } from "@/src/components/markdown/MarkdownContent";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@/src/components/ui/sections";

type BlogPostParams = {
  year: string;
  month: string;
  slug: string;
};

type BlogPostPageProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraphImage: string;
  formattedDate: string;
  formattedUpdated?: string;
  tags: Array<string>;
  authorsResolved: Array<BlogAuthorCard>;
  compiledSource: string;
  related: Array<BlogListItem>;
  markdownSourceFileName: string;
};

const GITHUB_EDIT_BASE =
  "https://github.com/sitecore/developer-portal/edit/main";

export const getStaticPaths: GetStaticPaths<BlogPostParams> = async () => {
  const { getPublishedStaticPathParams } = await import("@src/lib/blog/load");
  return {
    paths: getPublishedStaticPathParams(),
    // In production, every post is prebuilt at build time. In dev, use blocking
    // fallback so new markdown files work without restarting the server (paths
    // can lag behind the filesystem when paired with fresh scans in load.ts).
    fallback: process.env.NODE_ENV === "production" ? false : "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  BlogPostPageProps,
  BlogPostParams
> = async (ctx) => {
  const year = ctx.params?.year;
  const month = ctx.params?.month;
  const slug = ctx.params?.slug;
  if (!year || !month || !slug) {
    return { notFound: true };
  }

  const { loadBlogPostPageData } = await import("@src/lib/blog/load");
  const data = await loadBlogPostPageData(year, month, slug);
  if (!data) {
    return { notFound: true };
  }

  const { frontmatter: fm } = data;
  const formattedDate = format(new Date(fm.date), "MMMM d, yyyy");
  const formattedUpdated = fm.updated
    ? format(new Date(fm.updated), "MMMM d, yyyy")
    : undefined;
  const markdownSourceFileName = `${GITHUB_EDIT_BASE}/data/blog/posts/${year}/${month}/${slug}.md`;

  return {
    props: {
      title: fm.title,
      description: fm.description,
      canonicalUrl: fm.canonical,
      openGraphImage: fm.image,
      formattedDate,
      ...(formattedUpdated ? { formattedUpdated } : {}),
      tags: fm.tags,
      authorsResolved: data.authorsResolved,
      compiledSource: data.compiledSource,
      related: data.related,
      markdownSourceFileName,
    },
    revalidate: 600,
  };
};

function RelatedPostsCompact({ related }: { related: Array<BlogListItem> }) {
  if (related.length === 0) {
    return null;
  }
  return (
    <nav aria-label="Related posts" className="border-t border-border pt-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Related
      </p>
      <ul className="flex flex-col gap-3">
        {related.map((p) => (
          <li key={`${p.year}/${p.month}/${p.slug}`}>
            <Link
              href={p.href}
              className="block text-xs font-medium leading-snug text-foreground hover:text-primary"
            >
              <span className="line-clamp-2">{p.title}</span>
              <span className="mt-0.5 block text-[11px] font-normal text-muted-foreground">
                {format(new Date(p.date), "MMM d, yyyy")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PostMetaColumn({
  formattedDate,
  formattedUpdated,
  tags,
  related,
  markdownSourceFileName,
}: {
  formattedDate: string;
  formattedUpdated?: string;
  tags: Array<string>;
  related: Array<BlogListItem>;
  markdownSourceFileName: string;
}) {
  return (
    <aside className="flex flex-col gap-6 text-sm">
      <div className="border-b border-border pb-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Use with AI
        </h2>
        <UseWithAI markdownSourceFileName={markdownSourceFileName} />
      </div>
      <div>
        <p className="mb-1 font-medium text-muted-foreground">Published</p>
        <p className="text-foreground">{formattedDate}</p>
        {formattedUpdated ? (
          <p className="mt-2 text-muted-foreground">
            Updated {formattedUpdated}
          </p>
        ) : null}
      </div>
      {tags.length > 0 ? (
        <div>
          <p className="mb-2 font-medium text-muted-foreground">Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Badge key={t} colorScheme="neutral" size="sm">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      <RelatedPostsCompact related={related} />
    </aside>
  );
}

function AuthorsColumn({
  authorsResolved,
}: {
  authorsResolved: Array<BlogAuthorCard>;
}) {
  return (
    <aside className="flex flex-col gap-8">
      <Link href="/blog" className="font-medium text-primary hover:underline">
        ← All posts
      </Link>
      <div>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Authors
        </h2>
        <ul className="flex flex-col gap-4">
          {authorsResolved.map((a) => (
            <li key={a.slug}>
              <Card
                elevation="sm"
                style="outline"
                padding="md"
                className="overflow-hidden"
              >
                <div className="flex gap-3">
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-border-color bg-muted">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold leading-tight">
                      {a.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {a.jobTitle}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  title,
  description,
  canonicalUrl,
  openGraphImage,
  formattedDate,
  formattedUpdated,
  tags,
  authorsResolved,
  compiledSource,
  related,
  markdownSourceFileName,
}) => {
  return (
    <Layout
      title={title}
      description={description}
      openGraphImage={openGraphImage}
      canonicalUrl={canonicalUrl}
    >
      <Hero title={title} image={openGraphImage}>
        <h2 className="text-sm font-normal tracking-wide text-muted-foreground md:text-base">
          {description}
        </h2>
      </Hero>

      <VerticalGroup className="bg-white dark:bg-body-bg">
        <CenteredContent className="gap-8 py-8">
          <div className="mb-8 flex flex-col gap-8 md:hidden">
            <AuthorsColumn authorsResolved={authorsResolved} />
            <PostMetaColumn
              formattedDate={formattedDate}
              formattedUpdated={formattedUpdated}
              tags={tags}
              related={related}
              markdownSourceFileName={markdownSourceFileName}
            />
          </div>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-14">
            <aside className="hidden min-w-0 md:col-span-1 md:block md:sticky md:top-24">
              <AuthorsColumn authorsResolved={authorsResolved} />
            </aside>

            <article
              id="main-content"
              className="col-span-1 min-w-0 space-y-8 md:col-span-3"
            >
              <DecoratedMarkdown>{compiledSource}</DecoratedMarkdown>
            </article>

            <aside className="hidden min-w-0 md:col-span-1 md:block md:sticky md:top-24">
              <PostMetaColumn
                formattedDate={formattedDate}
                formattedUpdated={formattedUpdated}
                tags={tags}
                related={related}
                markdownSourceFileName={markdownSourceFileName}
              />
            </aside>
          </div>
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default BlogPostPage;
