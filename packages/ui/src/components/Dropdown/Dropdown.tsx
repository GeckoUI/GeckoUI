import { type Key } from "react";

import { classNames } from "../../utils/classNames";
import createLabel from "../../utils/createLabel";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import { Menu, MenuButton, MenuItem, MenuItems } from "../Menu";
import type { DropdownProps } from "./Dropdown.types";

/**
 * Fast and easy dropdown component extended from `Menu` and `Button` components.
 * So this won't have much customization options like the `Menu` component.
 * If you think this component is not enough for your use case, you can use the `Menu` component directly.
 *
 * @example
 *
 * ```js
 * import { Dropdown } from "@geckoui/geckoui";
 *
 * const items = [
 *  { label: "Item 1", onClick: () => console.log("Item 1 clicked") },
 *  { label: "Item 2", onClick: () => console.log("Item 2 clicked") },
 *  { label: "Item 3", onClick: () => console.log("Item 3 clicked") },
 * ];
 *
 * <Dropdown items={items} />
 * ```
 * */
function Dropdown({
  items,
  anchor,
  icon,
  className,
  menuClassName,
  iconClassName,
  children,
  hideArrowIcon,
  ...rest
}: DropdownProps) {
  const dataAttributes = Object.keys(rest).reduce<Record<string, string>>((acc, key) => {
    if (key.startsWith("data-")) {
      acc[key] = rest[key as `data-${string}`];
    }

    return acc;
  }, {});

  return (
    <Menu>
      <MenuButton
        {...dataAttributes}
        onClick={(e) => {
          e.stopPropagation();

          setTimeout(() => (document.activeElement as HTMLElement)?.blur(), 0);
        }}
        type="button"
        as="button"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTimeout(() => (document.activeElement as HTMLElement)?.blur(), 0);
          }
        }}
        className={classNames(`GeckoUIDropdown__button`, className)}>
        {children}
        {!hideArrowIcon && <span className={classNames("GeckoUIDropdown__icon", iconClassName)} />}
      </MenuButton>
      <MenuItems
        className={classNames("GeckoUIDropdown__menu", menuClassName)}
        anchor={anchor || "bottom start"}>
        {() => {
          return (
            <>
              {items.map((item, index) => {
                const label = createLabel(item);

                return (
                  <MenuItem
                    key={index as Key}
                    {...dataAttributes}
                    className={classNames("GeckoUIDropdown__menu-item", item.className)}
                    onClick={item.onClick}>
                    <DynamicComponentRenderer component={label} />
                  </MenuItem>
                );
              })}
            </>
          );
        }}
      </MenuItems>
    </Menu>
  );
}

Dropdown.displayName = "Dropdown";

export default Dropdown;
