import type { TextareaAutosizeProps } from "react-textarea-autosize";

export interface TextareaProps extends TextareaAutosizeProps {
  /**
   * Enable auto resizing of the textarea
   * @default false
   * */
  autoResize?: boolean;
}
