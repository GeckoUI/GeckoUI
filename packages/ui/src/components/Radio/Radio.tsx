import { forwardRef } from "react";

import { classNames } from "../../utils/classNames";
import type { RadioProps } from "./Radio.types";

/**
 * A styled radio button input component that extends the native HTML radio input.
 *
 * This component provides consistent styling and focus states for radio buttons
 * throughout your application. It accepts all standard input props.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Radio name="option" value="1" />
 *
 * // With label
 * <label className="flex items-center gap-2">
 *   <Radio name="choice" value="yes" />
 *   <span>Yes</span>
 * </label>
 *
 * // Radio group
 * <div>
 *   <label>
 *     <Radio name="size" value="small" defaultChecked />
 *     Small
 *   </label>
 *   <label>
 *     <Radio name="size" value="medium" />
 *     Medium
 *   </label>
 *   <label>
 *     <Radio name="size" value="large" />
 *     Large
 *   </label>
 * </div>
 *
 * // Controlled component
 * <Radio
 *   name="plan"
 *   value="pro"
 *   checked={selectedPlan === 'pro'}
 *   onChange={(e) => setSelectedPlan(e.target.value)}
 * />
 * ```
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, ...rest }, ref) => {
  return (
    <input className={classNames("GeckoUIRadio", className)} ref={ref} {...rest} type="radio" />
  );
});

Radio.displayName = "Radio";

export default Radio;
