import { forwardRef, useId } from "react";

import { CheckIcon, IndeterminateIcon } from "../../icons";
import { classNames } from "../../utils/classNames";
import type { CheckboxProps } from "./Checkbox.types";

/**
 * A customizable checkbox component with support for indeterminate state.
 *
 * Renders a checkbox with custom styling and icons. By default, displays a check icon
 * when checked. Use the `partial` prop to display an indeterminate icon, useful for
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
 *   partial={someSelected && !allSelected}
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
  ({ id, disabled, className, checked, partial, style, ...rest }, ref) => {
    const _id = useId();

    const Icon = partial ? IndeterminateIcon : CheckIcon;

    return (
      <div className="GeckoUICheckbox group">
        <button
          aria-checked={checked}
          className="GeckoUICheckbox__button"
          disabled={disabled}
          role="checkbox"
          type="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              const el = e.currentTarget.querySelector("input");

              if (!el) return;

              el.click();
            }
          }}>
          <label style={{ display: "contents" }} aria-label="checkbox-label" htmlFor={id ?? _id}>
            <div className={classNames("GeckoUICheckbox__box", className)} style={{ margin: 0 }}>
              <input
                checked={checked}
                className="GeckoUICheckbox__input"
                disabled={disabled}
                id={id ?? _id}
                ref={ref}
                style={{ display: "none", ...style }}
                {...rest}
                type="checkbox"
              />
            </div>
          </label>
          <Icon className="GeckoUICheckbox__icon" />
        </button>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
