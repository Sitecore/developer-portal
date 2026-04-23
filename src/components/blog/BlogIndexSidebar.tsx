import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";

const BLOG_SOURCE_TREE =
  "https://github.com/sitecore/developer-portal/tree/main/data/blog/posts";

/**
 * Right column on /blog — mirrors the density of changelog sidebar blocks (feeds / by month).
 */
export function BlogIndexSidebar() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold">Source</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Posts are Markdown in the repo under{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            data/blog/posts
          </code>
          . Builds fail on invalid frontmatter or broken author links so the
          feed stays trustworthy.
        </p>
        <a
          href={BLOG_SOURCE_TREE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <Icon path={mdiGithub} size={1} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
