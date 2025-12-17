import type { InputHTMLAttributes } from "react";

export interface CounterInputSizeMap {
  sm: unknown;
  md: unknown;
  lg: unknown;
}

export interface CounterInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  /** Current numeric value */
  value: number;

  /** Callback when value changes */
  onChange: (value: number) => void;

  /** Minimum allowed value */
  min?: number;

  /** Maximum allowed value */
  max?: number;

  /** Increment/decrement step (default: 1) */
  step?: number;

  /** Size variant (default: 'md') */
  size?: keyof CounterInputSizeMap;

  /** Disable the entire component */
  disabled?: boolean;

  /** Read-only mode - buttons and input are non-interactive */
  readOnly?: boolean;

  /** Allow typing in input field (default: false) */
  editable?: boolean;

  /** Class name for the input element */
  inputClassName?: string;

  /** Class name for the buttons */
  buttonClassName?: string;
}
