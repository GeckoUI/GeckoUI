import { forwardRef, useId } from "react";

import { CheckIcon, IndeterminateIcon } from "../../icons";
import { classNames } from "../../utils/classNames";
import type { CheckboxProps } from "./Checkbox.types";

/**
 * A customizable checkbox component with support for indeterminate state.
 *
 * Renders a checkbox with custom styling and icons. By default, displays a check icon
 * when checked. Set `indeterminate` to show the indeterminate icon instead, useful for
 * "select all" scenarios where only some items are selected.
 *
 * @example
 * ```tsx
 * // Basic usage
 * const [checked, setChecked] = useState(false);
 * <Checkbox
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * />
 *
 * // Indeterminate state
 * <Checkbox
 *   checked={someSelected}
 *   indeterminate={someSelected && !allSelected}
 *   onChange={handleSelectAll}
 * />
 *
 * // With label
 * <label className="flex items-center gap-2">
 *   <Checkbox
 *     checked={agreed}
 *     onChange={(e) => setAgreed(e.target.checked)}
 *   />
 *   <span>I agree to the terms</span>
 * </label>
 *
 * // Disabled state
 * <Checkbox checked disabled />
 * ```
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, disabled, className, checked, indeterminate, ...rest }, ref) => {
    const _id = useId();

    const Icon = indeterminate ? IndeterminateIcon : CheckIcon;

    return (
      <div className="GeckoUICheckbox group">
        <input
          checked={checked}
          className={classNames("GeckoUICheckbox__input", className)}
          disabled={disabled}
          id={id ?? _id}
          ref={ref}
          {...rest}
          type="checkbox"
        />
        <Icon className="GeckoUICheckbox__icon" />
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
