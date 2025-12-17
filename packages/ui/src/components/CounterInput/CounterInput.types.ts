import type { InputHTMLAttributes } from "react";

export interface CounterInputSizeMap {
  sm: unknown;
  md: unknown;
  lg: unknown;
}

export interface CounterInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: keyof CounterInputSizeMap;
  disabled?: boolean;
  readOnly?: boolean;
  editable?: boolean;
  inputClassName?: string;
  buttonClassName?: string;
}
