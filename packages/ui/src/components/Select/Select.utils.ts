import { hasDisplayName } from "../../utils";
import isNil from "../../utils/isNil";
import isTextIncludes from "../../utils/isTextIncludes";
import type { SelectOptionElement } from "./SelectOption";
import type { SelectOptionConfig } from "./SelectOption/SelectOption.types";

/**
 * Check`SelectOption` element has a label that includes the keyword
 *
 * then compare the extracted text with the keyword
 * */
export const optionIncludes =
  <T>(keyword: string) =>
  (e: SelectOptionElement<T>) => {
    if ((e.type as unknown as { displayName: string })?.displayName !== "SelectOption") {
      return false;
    }

    if (isNil(e.props.label)) {
      throw new Error("SelectOption element must have a label prop");
    }

    return isTextIncludes(e.props.label, keyword);
  };

export const isSelect = hasDisplayName("Select");
export const isSelectMenu = hasDisplayName("SelectMenu");
export const isSelectOption = hasDisplayName("SelectOption");
export const isSelectEmpty = hasDisplayName("SelectEmpty");
export const isSelectTrigger = hasDisplayName("SelectTrigger");

export const isHideSelectOption = ({
  keyword,
  label,
  visibility = "default",
  isEmpty
}: {
  keyword: string;
  label: string;
  visibility?: string;
  isEmpty: boolean;
}): boolean => {
  const isInclude = keyword && !isTextIncludes(label, keyword);

  if (visibility === "default" && isInclude) {
    return true;
  }

  if (visibility === "empty" && !isEmpty) {
    return true;
  }

  if (visibility === "filtered-and-empty" && !isEmpty && isInclude) {
    return true;
  }

  return false;
};

/**
 * Recursively find the `SelectOption` components in the children
 */
export function findSelectOptions<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to be able to call prototype methods
  el: any
): SelectOptionConfig<T> | SelectOptionConfig<T>[] | null {
  if (typeof el === "string" || typeof el === "number" || typeof el === "boolean") {
    return null;
  }

  if (isSelectOption(el)) {
    const {
      props: { children: _, ...rest }
    } = el as SelectOptionElement<T>;

    return {
      value: rest.value,
      label: rest.label,
      visibility: rest.visibility,
      props: rest ?? {}
    };
  }

  if (el.props?.children) {
    return findSelectOptions(el.props.children);
  }

  if (Array.isArray(el)) {
    const options: SelectOptionConfig<T>[] = [];

    for (const child of el) {
      const option = findSelectOptions<T>(child);

      if (option) {
        if (Array.isArray(option)) {
          options.push(...option);
          continue;
        }

        options.push(option);
      }
    }

    return options;
  }

  return null;
}
