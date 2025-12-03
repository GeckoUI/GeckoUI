import mermaid from "mermaid";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";

import { type MermaidDiagramBaseProps } from "../components/MermaidDiagram/MermaidDiagram.types";
import { classNames } from "../utils/classNames";

/**
 * useMermaidDiagram is a hook that takes a mermaid template and returns a React component that renders the diagram.
 * It also handle `loading` and `error` states. You rarely need to use this hook directly, use `MermaidDiagram` component instead.
 *
 * @example
 *
 * ```js
 * const template = `
 * graph TD;
 *    A-->B;
 *    A-->C;
 *    B-->D;
 *    C-->D;
 * `;
 *
 * const { loading, error, Diagram } = useMermaidDiagram(template);
 *
 * if (loading) return <p>Loading...</p>;
 *
 * if (error) return <p>Error: {error}</p>;
 *
 * return <Diagram />;
 * ```
 * */
const useMermaidDiagram = (template: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [diagram, setDiagram] = useState<React.FC<MermaidDiagramBaseProps> | null>(null);

  useEffect(() => {
    const hiddenEl = document.createElement("div");

    (async () => {
      setLoading(true);
      setError("");

      // hiddenEl.style.display = 'none';
      hiddenEl.innerHTML = template;

      try {
        // Validate the template
        // This will automatically throw an error if the template is invalid
        await mermaid.parse(template);

        document.body.appendChild(hiddenEl);

        // Because `mermaid.render` currently not support template headers
        // For now let's append the template to a hidden div and render it
        // then get the SVG and render it in a React component
        await mermaid.run({
          nodes: [hiddenEl]
        });

        const node = hiddenEl.children[0];

        const Diagram = MermaidSVGBuilder({
          data: node.innerHTML,
          id: node.getAttribute("id") || "",
          className: node.getAttribute("class") || "",
          viewBox: node.getAttribute("viewBox") || "",
          width: node.getAttribute("width") || "",
          height: node.getAttribute("height") || ""
        });

        setDiagram(() => Diagram);
      } catch (err) {
        setError(() => (err as Error).message);
      } finally {
        setLoading(false);
        document.body.removeChild(hiddenEl);
      }
    })();
  }, [template]);

  return { loading, error, Diagram: diagram };
};

export default useMermaidDiagram;

function MermaidSVGBuilder({
  data,
  id,
  className: originalClassName,
  width: originalWidth,
  height: originalHeight,
  viewBox
}: MermaidSVGBuilderProps) {
  const Diagram = ({ className, ...rest }: MermaidDiagramBaseProps) => {
    const width = rest.width ?? originalWidth;
    const height = rest.height ?? originalHeight;

    return (
      <svg
        {...rest}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
        id={id}
        viewBox={viewBox}
        className={classNames(originalClassName, className)}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    );
  };

  return Diagram;
}

interface MermaidSVGBuilderProps extends SVGProps<SVGSVGElement> {
  data: string;
}
