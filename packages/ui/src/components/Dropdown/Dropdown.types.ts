import type { FC, PropsWithChildren, ReactNode } from "react";

import type { MenuItemsProps } from "../Menu";

export type DropdownClassName<T> = string | ((item: T, index: number) => string | undefined);

export interface DropdownItem {
  label: ReactNode | FC;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface DropdownProps extends PropsWithChildren {
  anchor?: MenuItemsProps<"button">["anchor"];
  /**
   * Items to be displayed in the dropdown
   * */
  items: DropdownItem[];

  /**
   * Additional class name for the dropdown button
   * */
  className?: string;

  /**
   * Additional class name for the dropdown menu
   * */
  menuClassName?: string;

  /**
   * Icon to be displayed on the dropdown button
   * If you want to hide the icon, pass `null`
   * */
  icon?: ReactNode | FC;

  /**
   * Hide the icon on the dropdown button
   * */
  iconClassName?: string;

  /**
   * Hide arrow icon on the dropdown button
   * */
  hideArrowIcon?: boolean;

  [key: `data-${string}`]: string;
}
