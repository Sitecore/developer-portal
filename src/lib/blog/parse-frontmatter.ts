import matter from "gray-matter";
import type { ZodType } from "zod";

export function parseFrontmatterWithSchema<T>(
  filePath: string,
  raw: string,
  schema: ZodType<T>,
): { data: T; body: string } {
  const { data: rawData, content } = matter(raw);
  const parsed = schema.safeParse(rawData);
  if (!parsed.success) {
    const msg = parsed.error.issues
      .map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("; ");
    throw new Error(`Invalid frontmatter in ${filePath}: ${msg}`);
  }
  return { data: parsed.data, body: content };
}
