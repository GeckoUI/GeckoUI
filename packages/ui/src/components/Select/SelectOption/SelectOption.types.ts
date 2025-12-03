import type { DetailedHTMLProps, ReactElement, ReactNode } from "react";

type HtmlButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface SelectOptionConfig<T> {
  /**
   * Value of the option
   * */
  value: T;

  /**
   * Used to identify the option in the list and filtering
   * If you don't pass anything, children textContent will be used as label
   * */
  label: string;

  visibility?: SelectOptionProps<T>["visibility"];

  /**
   * This is just a placeholder for the rest of the props in case we might need them in the future
   * */
  props: Omit<SelectOptionProps<T>, "children">;
}

export interface CustomSelectOptionBaseArgs<T> extends Pick<SelectOptionConfig<T>, "value"> {
  /**
   * Whether the option is selected or not
   * */
  selected: boolean;

  /**
   * Whether the option has focus or not
   * */
  focused: boolean;
}

export interface CustomSelectOptionArgs<T> extends CustomSelectOptionBaseArgs<T> {
  /**
   * Function to prevent the default onClick function
   * If you call this function, You need to handle the onClick function yourself
   * You can use `selectCurrentOption` to trigger the default onClick function
   * or you can write your own onClick function according to your needs
   * */
  preventDefault: () => void;

  /**
   * Default onClick function that is called when the option is clicked
   * It will select or deselect the option and close the menu if it's a single select
   * */
  selectCurrentOption: () => void;

  /**
   * Callback to close the select menu
   * */
  closeMenu: () => void;

  /**
   * Filtered keyword that is currently being used to filter the options
   * */
  filteredKeyword: string;
}

export interface SelectOptionProps<T>
  extends Omit<SelectOptionConfig<T>, "props">,
    Omit<HtmlButtonProps, "children" | "value" | "className" | "onClick"> {
  /**
   * If you want to hide default check icon
   * */
  hideCheckIcon?: boolean;

  className?: string | ((props: CustomSelectOptionBaseArgs<T>) => string);

  children?: ReactNode | ((props: Omit<CustomSelectOptionArgs<T>, "preventDefault">) => ReactNode);

  onClick?: (args: CustomSelectOptionArgs<T>) => void;

  /**
   * This will only be called when the option is selected and multiple is true
   * */
  onRemove?: (args: CustomSelectOptionArgs<T>) => void;

  /**
   * If you want to display the option always, even if it's empty
   * i.e. when the user is filtering the options and no option is found
   *
   * if you want to display the option only when the options are empty
   * then you can pass "empty" as value and if you want to display the option always
   * then you can pass "always" as value
   *
   * If you want to display the option only when the options are empty and the user is filtering
   * and that filter matches the option then you can pass "filtered-and-empty" as value
   *
   * Default: "default"
   * */
  visibility?: "default" | "always" | "empty" | "filtered-and-empty";
}

export type SelectOptionElement<T = unknown> = ReactElement<SelectOptionProps<T>>;
