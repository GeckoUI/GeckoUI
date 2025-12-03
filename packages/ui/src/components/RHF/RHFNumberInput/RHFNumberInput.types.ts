import type { RHFInputProps } from "../RHFInput";

export interface RHFNumberInputProps extends RHFInputProps {
  /**
   * If true, the input will only accept positive numbers
   * i.e numbers cannot start with a negative sign (-)
   * Default: false
   * */
  positiveOnly?: boolean;

  /**
   * If true, the input will only accept valid numbers
   * i.e numbers cannot start with zero except for zero and decimal numbers
   *
   * Example: 000123.45 is invalid
   * Example: 123.45 or 0.45 is valid
   * */
  strict?: boolean;

  /**
   * Max number of decimal places
   * Example: 123.45 has 2 decimal places
   * */
  maxFractionDigits?: number;

  /**
   * Max number of whole digit places
   * Example: 123.45 has 3 whole digit places
   * */
  maxWholeDigitPlaces?: number;
}
