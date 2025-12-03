import type { FC, ReactNode, SVGProps } from "react";

export type MermaidDiagramBaseProps = Omit<
  SVGProps<SVGSVGElement>,
  "id" | "viewBox" | "dangerouslySetInnerHTML"
>;

export interface MermaidDiagramProps extends MermaidDiagramBaseProps {
  /**
   * Placeholder component to show when the diagram is loading.
   * */
  placeholder?: ReactNode | FC;

  /**
   * Error component to show when the diagram fails to render.
   * If not provided, a simple error message will be shown.
   *
   * ```js
   * <MermaidDiagram error={({ message }) => ...}>
   *  ...
   * </MermaidDiagram>
   * ```
   * */
  renderError?: ReactNode | FC<{ message: string }>;

  /**
   * Mermaid template to render the diagram.
   * */
  children: string;
}
