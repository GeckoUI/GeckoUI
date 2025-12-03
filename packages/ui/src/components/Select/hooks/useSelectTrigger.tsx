import isEqual from "lodash.isequal";
import { useMemo } from "react";

import isTextIncludes from "../../../utils/isTextIncludes";
import { isHideSelectOption } from "../Select.utils";
import { useSelect } from "../useSelect";

export const useSelectTrigger = <T,>() => {
  const {
    value,
    options,
    keyword,
    focusedOption,
    setFocusedOption,
    setKeyword,
    openMenu,
    closeMenu,
    open,
    multiple,
    isEmpty,
    handleChange
  } = useSelect<T>();

  const filteredOptions = options.filter(
    ({ label, visibility }) => !isHideSelectOption({ keyword, label, visibility, isEmpty })
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(() => e.target.value);

    let focusedValue = options.find(({ label }) => isTextIncludes(label, e.target.value));

    if (!focusedValue && filteredOptions.length) {
      focusedValue = filteredOptions[0];
    }

    if (focusedValue) {
      setFocusedOption({ ...focusedValue, focusType: "keyboard" });
    }
  };

  const handleKeyboardInteraction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.currentTarget.blur();
      closeMenu();
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab") {
      e.preventDefault();
      let currentIndex = filteredOptions.findIndex((e) => isEqual(e.value, focusedOption?.value));

      currentIndex = currentIndex === -1 ? 0 : currentIndex;

      let isDown = e.key === "ArrowDown" || e.key === "Tab";

      if (e.key === "Tab" && e.shiftKey) {
        isDown = false;
      }

      let nextIndex = isDown ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex < 0) {
        nextIndex = filteredOptions.length - 1;
      } else if (nextIndex >= filteredOptions.length) {
        nextIndex = 0;
      }

      const option = filteredOptions[nextIndex];
      setFocusedOption({ ...option, focusType: "keyboard" });

      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (open) {
        if (focusedOption && !isEmpty) {
          handleChange(focusedOption.value);
        }

        if (!multiple) {
          closeMenu();
          e.currentTarget.blur();
        }
      } else {
        openMenu();
      }

      return;
    }

    if (e.key === "Backspace" && !keyword && multiple && Array.isArray(value) && value.length > 0) {
      handleChange(value.at(-1) as T);
    }
  };

  const hasValue = useMemo(() => {
    if (multiple) {
      return Array.isArray(value) && !!value?.length;
    }

    if (value === "" || value === null) {
      return !!options.find((opt) => isEqual(opt.value, value));
    }

    return value !== undefined;
  }, [options, multiple, value]);

  return {
    hasValue,
    filteredOptions,
    handleInputChange,
    handleKeyboardInteraction
  };
};
