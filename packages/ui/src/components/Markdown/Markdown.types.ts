import type { FC, JSX, ReactNode } from "react";

import { type UseMarkdownOptions } from "../../hooks/useMarkdown";

export interface MarkdownBaseProps<T extends keyof JSX.IntrinsicElements>
  extends UseMarkdownOptions {
  /**
   * HTML tag to render the markdown content.
   * @default "div"
   */
  as?: T;

  /**
   * Placeholder component to show while async rendering is in progress.
   * Will be ignored if async is false.
   */
  renderPlaceholder?: ReactNode | FC;

  /**
   * Error component to show when the markdown fails to render.
   * If not provided, a simple error message will be shown.
   */
  renderError?: ReactNode | FC<{ message: string }>;

  /**
   * Markdown content to render.
   */
  children: string;
}

type InferredProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  className?: string;
};

export type MarkdownProps<T extends keyof JSX.IntrinsicElements = "div"> = MarkdownBaseProps<T> &
  Omit<InferredProps<T>, "children">;
