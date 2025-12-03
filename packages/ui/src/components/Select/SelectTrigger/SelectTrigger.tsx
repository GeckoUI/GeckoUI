import { useSelectTrigger } from "../hooks/useSelectTrigger";
import { useSelect } from "../useSelect";
import type { SelectTriggerOverload, SelectTriggerProps } from "./SelectTrigger.types";

/**
 * Custom trigger component for the Select component.
 *
 * Example usage:
 * ```js
  <RHFSelect multiple name="select">
    <SelectTrigger multiple>
      {({
        openMenu,
        keyword,
        selectedOptions,
        handleChange,
        handleInputChange,
        handleKeyboardInteraction,
      }) => {
        return (
          <div>
            <Input
              placeholder="Search......"
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyboardInteraction}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              onFocus={openMenu}
              spellCheck={false}
            />

            {!!selectedOptions.length && (
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                {selectedOptions.map((option) => {
                  return (
                    <Button
                      className="flex gap-2"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(option.value);
                      }}>
                      <span>{option.label}</span>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    </SelectTrigger>

    {Array.from({ length: 12 }, (_, i) => (
      <SelectOption
        key={i}
        value={i}
        label={new Date(0, i).toLocaleString("default", { month: "long" })}
      />
    ))}
  </RHFSelect>
 *
 * ---
 * ```
 * */
const SelectTrigger: SelectTriggerOverload = <T,>({
  multiple,
  children
}: SelectTriggerProps<T>) => {
  const { keyword, toggleMenu, open, openMenu, options, closeMenu, isSelected, handleChange } =
    useSelect<T>();

  const { filteredOptions, hasValue, handleInputChange, handleKeyboardInteraction } =
    useSelectTrigger<T>();

  const selectedOptions = options
    .filter((option) => isSelected(option.value))
    .map((e) => {
      return { label: e.label, value: e.value };
    }) as never;

  return children({
    keyword,
    selectedOptions: multiple ? selectedOptions : selectedOptions[0],
    handleChange,
    options,
    toggleMenu,
    open,
    openMenu,
    closeMenu,
    hasValue,
    filteredOptions,
    handleInputChange,
    handleKeyboardInteraction
  });
};

SelectTrigger.displayName = "SelectTrigger";

export default SelectTrigger;
