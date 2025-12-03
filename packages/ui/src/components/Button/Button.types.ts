import type { ButtonHTMLAttributes } from "react";

/** Extensible variant map - To allow module augmentation */
export interface ButtonVariantMap {
  filled: unknown;
  outlined: unknown;
  ghost: unknown;
  icon: unknown;
}

/** Extensible color map - To allow module augmentation */
export interface ButtonColorMap {
  primary: unknown;
}

/** Extensible size map - To allow module augmentation */
export interface ButtonSizeMap {
  xs: unknown;
  sm: unknown;
  md: unknown;
  lg: unknown;
  xl: unknown;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant to display.(Default: 'filled')
   * */
  variant?: keyof ButtonVariantMap;

  /**
   * Button color to display.(Default: 'primary')
   * */
  color?: keyof ButtonColorMap;

  /**
   * Button size to display.(Default: 'md')
   * */
  size?: keyof ButtonSizeMap;
}
