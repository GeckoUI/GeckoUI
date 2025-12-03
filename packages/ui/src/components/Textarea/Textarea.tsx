import { forwardRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

import { classNames } from "../../utils/classNames";
import type { TextareaProps } from "./Textarea.types";

/**
 * A textarea component with optional auto-resizing functionality.
 *
 * Built on top of react-textarea-autosize, this component can automatically
 * adjust its height based on content. Control the minimum and maximum number
 * of rows displayed.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Textarea placeholder="Type something..." />
 *
 * // Auto-resizing textarea
 * <Textarea autoResize placeholder="Type something..." />
 *
 * // With row constraints
 * <Textarea rows={3} placeholder="Minimum 3 rows" />
 *
 * // Auto-resize with max rows
 * <Textarea
 *   autoResize
 *   rows={2}
 *   maxRows={10}
 *   placeholder="Grows from 2 to 10 rows"
 * />
 *
 * // Controlled component
 * <Textarea
 *   value={text}
 *   onChange={(e) => setText(e.target.value)}
 *   placeholder="Enter description"
 * />
 * ```
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ autoResize, className, rows = 2, maxRows, ...rest }, ref) => {
    return (
      <>
        <ReactTextareaAutosize
          className={classNames("GeckoUITextarea", className)}
          maxRows={autoResize ? maxRows : rows}
          minRows={rows}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
