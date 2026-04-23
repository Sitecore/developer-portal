import { z } from "zod";

const rootRelativeOrUrl = z.union([
  z.string().url(),
  z
    .string()
    .min(1)
    .refine((v) => v.startsWith("/"), {
      message:
        "Must be an absolute URL or a root-relative path starting with /",
    }),
]);

const isoDateString = z
  .string()
  .min(1)
  .refine((s) => !Number.isNaN(Date.parse(s)), {
    message: "Invalid ISO date",
  });

/** Blog post YAML frontmatter (validated at build). */
export const blogPostFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: isoDateString,
  authors: z.array(z.string().min(1)).min(1),
  tags: z.array(z.string()),
  canonical: z.string().url(),
  image: rootRelativeOrUrl,
  draft: z.boolean().optional(),
  updated: isoDateString.optional(),
});

export type BlogPostFrontmatter = z.infer<typeof blogPostFrontmatterSchema>;

/** Author file YAML frontmatter */
export const authorFrontmatterSchema = z.object({
  name: z.string().min(1),
  jobTitle: z.string().min(1),
  image: rootRelativeOrUrl,
});

export type AuthorFrontmatter = z.infer<typeof authorFrontmatterSchema>;
