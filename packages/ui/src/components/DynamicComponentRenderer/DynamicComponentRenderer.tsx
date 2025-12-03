import type { FC, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- it's a generic type
type DynamicComponentRendererProps<T = any> = Record<string, T> & {
  component?: FC<T> | ReactNode;
};

/**
 * A utility component that dynamically renders different types of content.
 *
 * This component can handle:
 * - Function components (renders with props)
 * - Strings and numbers (wrapped in a span)
 * - React nodes (rendered directly)
 * - null/undefined/empty strings (renders nothing)
 *
 * @example
 * ```tsx
 * // Render a component
 * <DynamicComponentRenderer
 *   component={MyIcon}
 *   className="icon-class"
 * />
 *
 * // Render a string
 * <DynamicComponentRenderer component="Hello" />
 *
 * // Render a React node
 * <DynamicComponentRenderer component={<span>Custom</span>} />
 *
 * // Renders nothing
 * <DynamicComponentRenderer component={null} />
 * ```
 */
function DynamicComponentRenderer({
  component,
  ...props
}: DynamicComponentRendererProps): ReactNode {
  if (component === null || component === undefined || component === "") return null;

  if (typeof component === "function") {
    const Component = component;
    return <Component {...props} />;
  }

  if (["string", "number"].includes(typeof component)) {
    return <span className={props?.className}>{component}</span>;
  }

  return component;
}

export default DynamicComponentRenderer;
