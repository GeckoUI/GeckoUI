import type { ChangeEvent, ReactNode } from "react";

import type { SelectContextProps } from "../Select/Select.types";
import type { SelectOptionConfig } from "../SelectOption/SelectOption.types";

export interface SelectTriggerBaseRenderProps<T>
  extends Pick<
    SelectContextProps<T>,
    "toggleMenu" | "open" | "openMenu" | "closeMenu" | "placeholder" | "handleChange" | "keyword"
  > {
  /**
   * Select has a value or not, use this prop to display placeholder or something.
   * */
  hasValue: boolean;

  /**
   * Filtered options
   * */
  filteredOptions: SelectOptionConfig<T>[];

  /**
   * All options that are available
   * */
  options: SelectOptionConfig<T>[];

  /**
   * Pre defined function to update the filtered options
   * */
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Pre defined function to update the focused option or menu state
   * like open or close,
   * */
  handleKeyboardInteraction: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface SingleSelectTriggerRenderProps<T> extends SelectTriggerBaseRenderProps<T> {
  selectedOptions: Pick<SelectOptionConfig<T>, "label" | "value">;
}

export interface MultiSelectTriggerRenderProps<T> extends SelectTriggerBaseRenderProps<T> {
  selectedOptions: Pick<SelectOptionConfig<T>, "label" | "value">[];
}

export interface SingleSelectTriggerProps<T> {
  multiple?: false;
  children: (childrenProps: SingleSelectTriggerRenderProps<T>) => ReactNode;
}

export interface MultiSelectTriggerProps<T> {
  multiple: true;
  children: (childrenProps: MultiSelectTriggerRenderProps<T>) => ReactNode;
}

export interface SelectTriggerProps<T> {
  multiple?: boolean;
  children: SingleSelectTriggerProps<T>["children"] | MultiSelectTriggerProps<T>["children"];
}

export interface SelectTriggerOverload {
  <T>(props: SingleSelectTriggerProps<T>): ReactNode;
  <T>(props: MultiSelectTriggerProps<T>): ReactNode;
  <T>(props: SelectTriggerProps<T>): ReactNode;
  displayName: string;
}
