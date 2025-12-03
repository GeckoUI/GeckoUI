import type { FC } from "react";

import { useMermaidDiagram } from "../../hooks";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import { InputError } from "../InputError";
import type { MermaidDiagramProps } from "./MermaidDiagram.types";

/**
 * MermaidDiagram renders diagrams from Mermaid syntax with automatic loading and error state management.
 * Supports flowcharts, sequence diagrams, class diagrams, and all other Mermaid diagram types.
 * Provides custom placeholder and error rendering options.
 *
 * @example
 * Flowchart for user workflow:
 *
 * ```tsx
 * <MermaidDiagram>
 *   {`
 *     flowchart LR
 *       Start[User Login] --> Auth{Authenticated?}
 *       Auth -->|Yes| Dashboard[Show Dashboard]
 *       Auth -->|No| Login[Login Page]
 *       Login --> Auth
 *   `}
 * </MermaidDiagram>
 * ```
 *
 * @example
 * Sequence diagram with custom loading:
 *
 * ```tsx
 * <MermaidDiagram
 *   placeholder={<div className="animate-pulse">Loading diagram...</div>}
 *   renderError={(props) => <ErrorBoundary message={props.message} />}
 * >
 *   {`
 *     sequenceDiagram
 *       participant Client
 *       participant API
 *       participant Database
 *       Client->>API: Request Data
 *       API->>Database: Query
 *       Database-->>API: Results
 *       API-->>Client: Response
 *   `}
 * </MermaidDiagram>
 * ```
 *
 * @example
 * Class diagram for documentation:
 *
 * ```tsx
 * <MermaidDiagram className="border rounded-lg p-4">
 *   {`
 *     classDiagram
 *       class User {
 *         +String email
 *         +String name
 *         +login()
 *         +logout()
 *       }
 *       class Admin {
 *         +manageUsers()
 *       }
 *       User <|-- Admin
 *   `}
 * </MermaidDiagram>
 * ```
 *
 * @see https://mermaid.js.org/ for diagram syntax reference
 */
const MermaidDiagram: FC<MermaidDiagramProps> = ({
  children,
  placeholder,
  renderError,
  ...rest
}) => {
  if (typeof children !== "string") {
    throw new Error("Children must be a string of mermaid template");
  }

  const { loading, error: mermaidError, Diagram } = useMermaidDiagram(children);

  if (loading) {
    return <DynamicComponentRenderer component={placeholder} />;
  }

  if (mermaidError) {
    if (!renderError) return <InputError>{mermaidError}</InputError>;

    return <DynamicComponentRenderer component={renderError} message={mermaidError} />;
  }

  if (!Diagram) return null;

  return <Diagram {...rest} />;
};

export default MermaidDiagram;
