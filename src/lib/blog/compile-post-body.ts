import { ParseContent } from "@src/lib/markdown/mdxParse";

export async function compilePostMarkdown(markdownBody: string): Promise<{
  compiledSource: string;
}> {
  const { result } = await ParseContent(Buffer.from(markdownBody, "utf-8"));
  return { compiledSource: result.compiledSource };
}
