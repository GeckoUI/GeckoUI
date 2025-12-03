import type { FC } from "react";

import { classNames } from "../../utils/classNames";
import type { InputErrorProps } from "./InputError.types";

/**
 * A component for displaying error messages below input fields.
 *
 * This is a simple div with default error styling, typically used to show
 * validation errors or other feedback related to form inputs.
 *
 * @example
 * ```tsx
 * // Basic error message
 * <InputError>This field is required</InputError>
 *
 * // With form validation
 * <div>
 *   <Input type="email" />
 *   {errors.email && (
 *     <InputError>{errors.email.message}</InputError>
 *   )}
 * </div>
 *
 * // Multiple errors
 * <div>
 *   <Input type="password" />
 *   {errors.password && (
 *     <InputError>
 *       {errors.password.type === 'required'
 *         ? 'Password is required'
 *         : 'Password must be at least 8 characters'
 *       }
 *     </InputError>
 *   )}
 * </div>
 *
 * // Custom styling
 * <InputError className="text-red-600 font-semibold">
 *   Custom styled error
 * </InputError>
 * ```
 */
const InputError: FC<InputErrorProps> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("GeckoUIInputError", className)} {...rest}>
      {children}
    </div>
  );
};

export default InputError;
