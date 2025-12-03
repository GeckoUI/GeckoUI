import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export interface MarkdownProcessorOptions {
  /**
   * Enable HTML sanitization to prevent XSS attacks.
   * Only set to false when you 100% trust the source.
   * @default true
   */
  sanitize?: boolean;
}

export const createMarkdownProcessor = (options?: MarkdownProcessorOptions) => {
  const { sanitize = true } = options || {};

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(remarkDirective)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkMath)
    .use(rehypeFormat)
    .use(rehypeStringify);

  if (sanitize) {
    processor.use(rehypeSanitize);
  }

  return processor.use(rehypeStringify);
};
