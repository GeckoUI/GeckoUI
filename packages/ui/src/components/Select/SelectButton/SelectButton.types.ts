import type { FC, ReactNode } from "react";

export interface SelectButtonProps {
  /**
   * Additional class name for the select button
   * */
  className?: string;

  /**
   * Prefix for the select button
   * */
  prefix?: FC | ReactNode;

  /**
   * Suffix for the select button
   * */
  suffix?: FC | ReactNode;
}
