import type { PropsWithChildren } from "react";

import type { LabelProps } from "../../Label";

export interface RHFInputGroupProps extends LabelProps, PropsWithChildren {
  /**
   * Label for the input group
   * */
  label?: string;

  /**
   * Class name for the label element
   * */
  labelClassName?: string;

  /**
   * Class name for the input group that wraps the label, children, and error message
   * */
  className?: string;

  /**
   * Error message class name
   * */
  errorClassName?: string;
}
