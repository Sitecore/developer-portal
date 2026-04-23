import { BlogFiltersPanel } from "@/src/components/blog/BlogFiltersPanel";
import { BlogIndexSidebar } from "@/src/components/blog/BlogIndexSidebar";
import { BlogOverviewClient } from "@/src/components/blog/BlogOverviewClient";
import {
  CenteredContent,
  Hero,
  VerticalGroup,
} from "@/src/components/ui/sections";
import Layout from "@src/layouts/Layout";
import type { BlogListItem } from "@src/lib/blog/types";
import type { GetStaticProps, NextPage } from "next";

type BlogIndexProps = {
  posts: Array<BlogListItem>;
  authorNameBySlug: Record<string, string>;
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const {
    assertBlogBuildIntegrity,
    getAuthorSlugToDisplayName,
    getPublishedListItems,
  } = await import("@src/lib/blog/load");
  assertBlogBuildIntegrity();
  const posts = getPublishedListItems();
  const authorNameBySlug = getAuthorSlugToDisplayName();

  return {
    props: {
      posts,
      authorNameBySlug,
    },
    revalidate: 600,
  };
};

const BlogIndexPage: NextPage<BlogIndexProps> = ({
  posts,
  authorNameBySlug,
}) => {
  return (
    <Layout
      title="Blog"
      description="Technical articles, release notes, and guides from the Sitecore developer portal."
    >
      <Hero title="Blog">
        <h2 className="text-base font-sans font-normal text-neutral-600 dark:text-neutral-400">
          Git-backed articles with static generation, full metadata validation,
          and filters by tag or author. Content lives in the repository—no
          separate CMS.
        </h2>
      </Hero>

      <VerticalGroup className="bg-white dark:bg-body-bg">
        <CenteredContent className="gap-8 py-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[220px_1fr_220px]">
            <div className="hidden md:block">
              <BlogFiltersPanel
                posts={posts}
                authorNameBySlug={authorNameBySlug}
              />
            </div>
            <div id="main-content">
              <BlogOverviewClient
                posts={posts}
                authorNameBySlug={authorNameBySlug}
              />
            </div>
            <div className="hidden md:block">
              <BlogIndexSidebar />
            </div>
          </div>
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
};

export default BlogIndexPage;
