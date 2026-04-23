import { describe, expect, it } from "vitest";
import { getRelatedPosts } from "@src/lib/blog/query";
import type { BlogListItem } from "@src/lib/blog/types";

function item(
  partial: Pick<BlogListItem, "year" | "month" | "slug" | "tags" | "date"> &
    Partial<Omit<BlogListItem, "year" | "month" | "slug" | "tags" | "date">>,
): BlogListItem {
  return {
    title: partial.slug,
    description: "d",
    canonical: "https://example.com/blog",
    image: "/x.png",
    authors: ["a"],
    href: `/blog/${partial.year}/${partial.month}/${partial.slug}`,
    ...partial,
  };
}

describe("getRelatedPosts", () => {
  it("excludes the current post", () => {
    const current = item({
      year: "2026",
      month: "04",
      slug: "a",
      tags: ["AI"],
      date: "2026-04-01T00:00:00.000Z",
    });
    const pool = [
      current,
      item({
        year: "2026",
        month: "04",
        slug: "b",
        tags: ["AI"],
        date: "2026-04-02T00:00:00.000Z",
      }),
    ];
    const out = getRelatedPosts(current, pool, 3);
    expect(out.map((p) => p.slug)).toEqual(["b"]);
  });

  it("ranks higher when more tags overlap and primary tag matches", () => {
    const current = item({
      year: "2026",
      month: "04",
      slug: "current",
      tags: ["AI", "Engineering"],
      date: "2026-04-01T00:00:00.000Z",
    });
    const strong = item({
      year: "2026",
      month: "04",
      slug: "strong",
      tags: ["AI", "Engineering"],
      date: "2026-04-02T00:00:00.000Z",
    });
    const weak = item({
      year: "2026",
      month: "04",
      slug: "weak",
      tags: ["AI", "Platform"],
      date: "2026-04-10T00:00:00.000Z",
    });
    const none = item({
      year: "2026",
      month: "04",
      slug: "none",
      tags: ["Docs"],
      date: "2026-04-20T00:00:00.000Z",
    });
    const pool = [current, strong, weak, none];
    const out = getRelatedPosts(current, pool, 3);
    expect(out.map((p) => p.slug)).toEqual(["strong", "weak", "none"]);
  });

  it("breaks ties with newer date then slug", () => {
    const current = item({
      year: "2026",
      month: "04",
      slug: "c",
      tags: ["T"],
      date: "2026-04-01T00:00:00.000Z",
    });
    const a = item({
      year: "2026",
      month: "04",
      slug: "a",
      tags: ["T"],
      date: "2026-04-03T00:00:00.000Z",
    });
    const b = item({
      year: "2026",
      month: "04",
      slug: "b",
      tags: ["T"],
      date: "2026-04-03T00:00:00.000Z",
    });
    const out = getRelatedPosts(current, [current, a, b], 2);
    expect(out.map((p) => p.slug)).toEqual(["a", "b"]);
  });
});
