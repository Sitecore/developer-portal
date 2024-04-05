import remarkEmbedder, { TransformerInfo } from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';
import { s } from 'hastscript';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import styles from '../../components/markdown/MarkdownContent.module.css';
import { ContentHeading } from '../interfaces/contentheading';
import rehypeExtractHeadings from './rehype/extractHeadings';

export async function ParseContent(stream: Buffer) {
  const headings: ContentHeading[] = [];
  const result = await serialize(stream.toString(), {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [
          remarkEmbedder,
          {
            transformers: [oembedTransformer],
            handleHTML,
          },
        ],
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
              title: 'Quick link to category',
            },
            behavior: `append`,
            content: s(
              `svg`,
              { width: 16, height: 16, viewBox: `0 0 16 16`, display: 'inline', className: styles.anchor },
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

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (transformer.name === '@remark-embedder/transformer-oembed') {
    if (url.includes('www.youtube.com')) {
      return `<div class="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
    }
    if (url.includes('twitter.com')) {
      return `<div class="embed-twitter h-full">${html}</div>`;
    }
  }

  return html;
}
