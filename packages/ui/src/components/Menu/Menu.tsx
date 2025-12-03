import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuHeading as HeadlessMenuHeading,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
  MenuSection as HeadlessMenuSection,
  MenuSeparator as HeadlessMenuSeparator
} from "@headlessui/react";

import { classNames } from "../../utils/classNames";
import type { MenuButtonProps, MenuItemProps, MenuItemsProps, ReactTag } from "./Menu.types";

/**
 * Menu is a styled wrapper around HeadlessUI's Menu for creating dropdown menus and action lists.
 * Provides pre-styled components for building accessible, keyboard-navigable menus.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const Menu = HeadlessMenu;

/**
 * MenuButton triggers the menu dropdown when clicked or activated.
 * Supports polymorphic rendering via the `as` prop.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuButton = <T extends ReactTag>({ as, ...rest }: MenuButtonProps<T>) => {
  return (
    <HeadlessMenuButton
      as={(as ?? "button") as "button" as "button"}
      {...rest}
      className={(args) => {
        const className = (rest as Record<string, unknown>).className as
          | string
          | ((args: unknown) => string);

        return classNames(
          "GeckoUIMenu__button",
          typeof className === "function" ? className(args) : className
        );
      }}
    />
  );
};

/**
 * MenuItems contains the dropdown panel with all menu options.
 * Automatically handles positioning, animations, and focus management.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuItems = <T extends ReactTag>({ as, ...rest }: MenuItemsProps<T>) => {
  return (
    <HeadlessMenuItems
      as={(as ?? "div") as "div" as "div"}
      {...rest}
      className={(args) => {
        const className = (rest as Record<string, unknown>).className as
          | string
          | ((args: unknown) => string);

        return classNames(
          "GeckoUIMenu__items",
          typeof className === "function" ? className(args) : className
        );
      }}
    />
  );
};

/**
 * MenuItem represents an individual selectable option within the menu.
 * Receives active and disabled states for conditional styling.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuItem = <T extends ReactTag>({ children, as, ...rest }: MenuItemProps<T>) => {
  return (
    <HeadlessMenuItem
      {...rest}
      className={(args) => {
        const className = (rest as Record<string, unknown>).className as
          | string
          | ((args: unknown) => string);

        return classNames(
          "GeckoUIMenu__item",
          typeof className === "function" ? className(args) : className
        );
      }}
      as={(as ?? "button") as "unknown" as "button"}
      type="button">
      {children}
    </HeadlessMenuItem>
  );
};

/**
 * MenuHeading displays a non-interactive header within menu sections.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuHeading = HeadlessMenuHeading;

/**
 * MenuSection groups related menu items together under a heading.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuSection = HeadlessMenuSection;

/**
 * MenuSeparator provides a visual divider between menu groups or items.
 * @see https://headlessui.com/react/menu for complete API documentation
 */
export const MenuSeparator = HeadlessMenuSeparator;
