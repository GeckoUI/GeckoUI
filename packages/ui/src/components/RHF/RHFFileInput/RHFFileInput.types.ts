import type { InputHTMLAttributes, ReactNode } from "react";
import type { ControllerProps } from "react-hook-form";

import type { RHFBaseProps } from "../RHF.types";

export type FileWithPreview = File & {
  preview?: string;
};

export interface RHFFileInputProps
  extends RHFBaseProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "multiple" | "children" | "name" | "type" | "onChange"
    > {
  /**
   * Class name actual input element.
   * `className` is used for the container div.
   * So if you want to style the input element, eg. placeholder, or even the input itself, use this prop.
   * */
  inputClassName?: string;

  /**
   * Callback fired when the value changes
   * This is the actual value of the file input not the event object
   * */
  onChange?: (data?: FileWithPreview | FileWithPreview[] | null) => void;

  /**
   * If true, the user can select multiple files(Default: false)
   * */
  multiple?: boolean;

  /**
   * Render custom component instead of the default input element
   * You also have access to the Controller renderProps object
   * So that you can access the field, fieldState, and formState objects and use accordingly
   *
   * If you pass render, the input element will be hidden using the `hidden` class
   * */
  render?: ReactNode | ControllerProps["render"];
}
