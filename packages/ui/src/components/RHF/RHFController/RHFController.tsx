import type { FC } from "react";
import type { ControllerProps } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";

/**
 * A wrapper around React Hook Form's Controller component that auto-injects the control prop.
 *
 * Automatically retrieves the `control` prop from `useFormContext`, eliminating the need to
 * pass it manually. This simplifies usage with FormProvider and reduces boilerplate code.
 *
 * **When to pass `control` explicitly:**
 * Only pass the `control` prop when you have nested FormProviders and need to connect to a
 * specific form instance. For example, when one form is rendered inside another FormProvider,
 * you'll need to pass the parent form's control explicitly to avoid using the inner form's context.
 *
 * @example
 * ```tsx
 * // Basic usage - control auto-injected from FormProvider
 * <FormProvider {...methods}>
 *   <RHFController
 *     name="email"
 *     render={({ field }) => (
 *       <input
 *         {...field}
 *         type="email"
 *         placeholder="Enter email"
 *       />
 *     )}
 *   />
 * </FormProvider>
 *
 * // With validation rules
 * <RHFController
 *   name="username"
 *   rules={{ required: 'Username is required' }}
 *   render={({ field, fieldState }) => (
 *     <div>
 *       <input {...field} />
 *       {fieldState.error && <span>{fieldState.error.message}</span>}
 *     </div>
 *   )}
 * />
 *
 * // Custom component integration
 * <RHFController
 *   name="customField"
 *   render={({ field, fieldState, formState }) => (
 *     <CustomComponent
 *       value={field.value}
 *       onChange={field.onChange}
 *       error={fieldState.error}
 *       isDirty={formState.isDirty}
 *     />
 *   )}
 * />
 *
 * // Nested FormProviders - explicit control needed
 * <FormProvider {...outerForm}>
 *   <FormProvider {...innerForm}>
 *     // This will use innerForm's control by default
 *     <RHFController name="innerField" render={...} />
 *
 *     // Pass control explicitly to use outerForm
 *     <RHFController
 *       name="outerField"
 *       control={outerForm.control}
 *       render={({ field }) => <input {...field} />}
 *     />
 *   </FormProvider>
 * </FormProvider>
 * ```
 */
const RHFController: FC<ControllerProps> = ({ control: customControl, ...rest }) => {
  const formContext = useFormContext();
  const { control } = formContext || {};

  if (!formContext && !customControl) {
    throw new Error(
      "RHFController should be wrapped with FormProvider or provide control prop explicitly."
    );
  }

  return <Controller control={customControl ?? control} {...rest} />;
};

RHFController.displayName = "RHFController";

export default RHFController;
