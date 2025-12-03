import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * If true, the checkbox will be checked with a IndeterminateIcon.
   * */
  partial?: boolean;
}
