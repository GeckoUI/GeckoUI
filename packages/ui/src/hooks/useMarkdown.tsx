import { useEffect, useState } from "react";

import { type MarkdownProcessorOptions, createMarkdownProcessor } from "../utils/markdownProcessor";

export interface UseMarkdownOptions extends MarkdownProcessorOptions {
  /**
   * Render the markdown asynchronously for large markdown content.
   * Not intended for network requests - use for processing large markdown strings.
   * @default false
   * */
  async?: boolean;
}

const useMarkdown = (str: string, options?: UseMarkdownOptions) => {
  const markdownData = (str || "").replaceAll("$", "\\$");
  const { async = false, sanitize } = options || {};
  const [loading, setLoading] = useState(async);
  const [error, setError] = useState("");
  const [content, setContent] = useState("");

  const processor = createMarkdownProcessor({ sanitize });

  useEffect(() => {
    if (!async) return;

    (async () => {
      try {
        const result = await processor.process(markdownData);

        setContent(() => result.toString());
      } catch (e) {
        console.error(e);
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, [async, options, processor, markdownData]);

  if (!async) {
    try {
      return { content: processor.processSync(markdownData).toString() };
    } catch (e) {
      return { error: (e as Error).message };
    }
  }

  return { loading, error, content };
};

export default useMarkdown;
