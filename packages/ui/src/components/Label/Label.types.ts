import type { FC, LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * If true, adds a red asterisk to the label to indicate that the input is required
   * ---
   * **Note**: This is just a visual indicator and does not enforce any validation
   * */
  required?: boolean;

  /**
   * If you pass a string, exclamation icon will be displayed next to the label
   * and the string will be displayed as a tooltip when hovered over the icon
   * */
  tooltip?: string;

  /**
   * Custom icon to display as a tooltip
   * */
  tooltipIcon?: FC | ReactNode;

  /**
   * Background color of the tooltip
   * */
  tooltipBackgroundColor?: string;

  /**
   * Class name for the tooltip
   * */
  tooltipClassName?: string;
}
