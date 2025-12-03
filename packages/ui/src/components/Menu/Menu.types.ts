import type {
  MenuButtonProps as HeadlessMenuButtonProps,
  MenuItemProps as HeadlessMenuItemProps,
  MenuItemsProps as HeadlessMenuItemsProps
} from "@headlessui/react";
import type { JSX, JSXElementConstructor } from "react";

export type ReactTag =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- skip
  | JSXElementConstructor<any>;

export type MenuButtonProps<T extends ReactTag> = HeadlessMenuButtonProps<T>;
export type MenuItemsProps<T extends ReactTag> = HeadlessMenuItemsProps<T>;
export type MenuItemProps<T extends ReactTag> = HeadlessMenuItemProps<T>;
