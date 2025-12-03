import type { FC, ForwardedRef, ReactNode } from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /**
   * Class name actual input element.
   * `className` is used for the container div.
   * So if you want to style the input element, eg. placeholder, or even the input itself, use this prop.
   * */
  inputClassName?: string;
  /**
   * Component to render before the input element.
   */
  prefix?: FC<{ inputRef: ForwardedRef<HTMLInputElement> }> | ReactNode;

  /**
   * Component to render after the input element.
   */
  suffix?: FC<{ inputRef: ForwardedRef<HTMLInputElement> }> | ReactNode;
}
