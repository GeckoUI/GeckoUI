import { classNames } from "../../../utils/classNames";
import { useSelect } from "../useSelect";
import type { SelectEmptyProps } from "./SelectEmpty.types";

/**
 * Displays a placeholder message when no options match the search filter in a Select component.
 *
 * This component only renders when the Select is in an empty state (no matching options).
 * Use it inside a Select component to provide feedback when search/filter returns no results.
 *
 * @example
 * ```tsx
 * // Basic usage with default message
 * <Select value={value} onChange={setValue}>
 *   <SelectDropdownSearch />
 *   <SelectOption value="apple" label="Apple" />
 *   <SelectOption value="banana" label="Banana" />
 *   <SelectEmpty />
 * </Select>
 *
 * // Custom empty message
 * <Select value={value} onChange={setValue}>
 *   <SelectDropdownSearch />
 *   <SelectOption value="react" label="React" />
 *   <SelectOption value="vue" label="Vue" />
 *   <SelectEmpty>
 *     No frameworks found. Try a different search.
 *   </SelectEmpty>
 * </Select>
 *
 * // With custom styling
 * <Select value={value} onChange={setValue}>
 *   <SelectDropdownSearch />
 *   <SelectOption value="opt1" label="Option 1" />
 *   <SelectEmpty className="text-red-500 italic">
 *     ⚠️ No results found
 *   </SelectEmpty>
 * </Select>
 * ```
 */
const SelectEmpty = ({ children, className, ...rest }: SelectEmptyProps) => {
  const { isEmpty } = useSelect();

  if (!isEmpty) return null;

  return (
    <div className={classNames("GeckoUISelectEmpty", className)} {...rest}>
      {children || "No options"}
    </div>
  );
};

SelectEmpty.displayName = "SelectEmpty";

export default SelectEmpty;
