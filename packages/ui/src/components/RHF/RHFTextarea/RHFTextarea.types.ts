import type { TextareaProps } from "../../Textarea";
import type { RHFBaseProps } from "../RHF.types";

export interface RHFTextareaProps
  extends RHFBaseProps,
    Omit<TextareaProps, "name" | "onChange" | "onBlur"> {
  /**
   * Callback fired when the value changes
   * This is the actual value of the textarea not the event object
   * */
  onChange?: (value: string | null) => void;

  /**
   * Callback fired when the input is blurred
   * ```
   * */
  onBlur?: (value: string) => void;
}
