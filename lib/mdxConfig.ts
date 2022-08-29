import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { s } from 'hastscript';
import rehypeExtractHeadings, { ContentHeading } from './rehype/extractHeadings';
import { serialize } from 'next-mdx-remote/serialize';

export async function ParseContent(stream: string) {
  const headings: ContentHeading[] = [];
  const result = await serialize(stream, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
            behavior: `append`,
            content: s(
              `svg`,
              { width: 16, height: 16, viewBox: `0 0 16 16`, display: 'inline' },
              // symbol #link-icon defined in _document.tsx
              s(`use`, { 'xlink:href': `#link-icon`, href: `#link-icon` })
            ),
          },
        ],
        [rehypeExtractHeadings, { rank: 2, headings: headings }],
      ],
    },
  });

  return {
    result,
    headings,
  };
}
