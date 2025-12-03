import { type JSX, createElement } from "react";

import { useMarkdown } from "../../hooks";
import { classNames } from "../../utils/classNames";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import { InputError } from "../InputError";
import type { MarkdownProps } from "./Markdown.types";

/**
 * Markdown renders formatted markdown text as HTML with support for both synchronous
 * and asynchronous rendering. Includes built-in loading states, error handling, and
 * HTML sanitization enabled by default for security.
 *
 * @example
 * Basic usage (synchronous rendering with sanitization enabled by default):
 *
 * ```tsx
 * <Markdown className="prose">{docs}</Markdown>
 * ```
 *
 * @example
 * Async rendering for large markdown content (not for network requests):
 *
 * ```tsx
 * const [largeContent, setLargeContent] = useState('');
 *
 * <Markdown
 *   async
 *   renderPlaceholder={<Spinner />}
 *   renderError={(props) => <Alert variant="error">{props.message}</Alert>}
 * >
 *   {largeContent}
 * </Markdown>
 * ```
 *
 * @example
 * Disabling HTML sanitization (⚠️ WARNING: Only use when you 100% trust the source):
 *
 * ```tsx
 * <Markdown sanitize={false} as="article">
 *   {trustedMarkdown}
 * </Markdown>
 * ```
 *
 * @example
 * Using with anchor tag and href prop:
 *
 * ```tsx
 * <Markdown as="a" href="https://example.com" target="_blank">
 *   {linkMarkdown}
 * </Markdown>
 * ```
 */
function Markdown<T extends keyof JSX.IntrinsicElements = "div">({
  children,
  renderError,
  renderPlaceholder,
  as = "div" as T,
  async,
  className,
  sanitize = true,
  ...props
}: MarkdownProps<T>) {
  const { loading, error, content = "" } = useMarkdown(children, { async, sanitize });

  if (loading) {
    return <DynamicComponentRenderer component={renderPlaceholder} />;
  }

  if (error) {
    if (!renderError) return <InputError>{error}</InputError>;

    return <DynamicComponentRenderer component={renderError} message={error} />;
  }

  return createElement(as, {
    ...props,
    dangerouslySetInnerHTML: { __html: content },
    className: classNames("GeckoUIMarkdown", className)
  });
}

Markdown.displayName = "Markdown";

export default Markdown;
