import type { FC } from "react";
import { Fragment } from "react";

import { classNames } from "../../../utils/classNames";
import { InputError } from "../../InputError";
import RHFController from "../RHFController/RHFController";
import type { RHFErrorProps } from "./RHFError.types";

/**
 * A component for displaying form field error messages with React Hook Form.
 *
 * Automatically shows validation error messages for the specified field.
 * Supports custom rendering and styling of error messages.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <RHFError name="email" />
 *
 * // With custom styling
 * <RHFError name="email" className="font-bold text-red-700" />
 *
 * // Custom error rendering with icon
 * <RHFError
 *   name="email"
 *   render={({ error }) => {
 *     return (
 *       <div className="flex items-center space-x-2">
 *         <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
 *         <span className="text-sm font-normal text-red-600">
 *           {error?.message}
 *         </span>
 *       </div>
 *     );
 *   }}
 * />
 *
 * // Multiple fields with errors
 * <div>
 *   <Input name="username" />
 *   <RHFError name="username" />
 *
 *   <Input name="email" />
 *   <RHFError name="email" />
 * </div>
 * ```
 */
const RHFError: FC<RHFErrorProps> = ({ name, control, className, render }) => {
  return (
    <RHFController
      control={control}
      name={name}
      render={({ fieldState }) => {
        const { error } = fieldState;
        if (!error?.message) return <Fragment key="rhf-error" />;

        if (typeof render === "function") {
          return render(fieldState);
        }

        return (
          <InputError className={classNames("GeckoUIRHFError", className)}>
            {error.message}
          </InputError>
        );
      }}
    />
  );
};

RHFError.displayName = "RHFError";

export default RHFError;
