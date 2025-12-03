/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Control,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn
} from "react-hook-form";

export interface RHFBaseProps {
  /**
   * Name of the input field.(required)
   * This will injected into the RHF Controller.
   * */
  name: string;

  rules?: ControllerProps["rules"];

  /**
   * React Hook Form control object.
   * By default it will use the useFormContext() hook to get the control object.
   * In case you want to use a custom control object, you can pass it here.
   *
   * Eg. You have multiple `FormProvider` in your app and you want to use a specific control object.
   * */
  control?: Control<any>;
}

export interface RHFRenderArgs<T extends FieldValues> {
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
}
