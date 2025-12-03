import type { FC } from "react";

import { toThousandsSeparatorFormat } from "../../../utils";
import { classNames } from "../../../utils/classNames";
import { RHFNumberInput } from "../RHFNumberInput";
import type { RHFCurrencyInputProps } from "./RHFCurrencyInput.types";

/**
 * An enhanced number input component for currency values with React Hook Form.
 *
 * Displays currency symbols and codes, and automatically formats values with
 * thousands separators (e.g., 1,234,567.89). Built on top of RHFNumberInput
 * with strict mode enabled by default.
 *
 * @example
 * ```tsx
 * // Basic usage with currency symbol and code
 * <RHFCurrencyInput
 *   name="price"
 *   currency={{ symbol: '$', code: 'USD' }}
 * />
 *
 * // With only symbol
 * <RHFCurrencyInput
 *   name="amount"
 *   currency={{ symbol: '€' }}
 * />
 *
 * // With custom decimal places
 * <RHFCurrencyInput
 *   name="cost"
 *   currency={{ symbol: '¥', code: 'JPY' }}
 *   maxFractionDigits={0}
 * />
 *
 * // Different currencies
 * <RHFCurrencyInput
 *   name="gbpAmount"
 *   currency={{ symbol: '£', code: 'GBP' }}
 * />
 * ```
 */
const RHFCurrencyInput: FC<RHFCurrencyInputProps> = ({ className, currency, ...rest }) => {
  return (
    <RHFNumberInput
      className={classNames("GeckoUIRHFCurrencyInput", className)}
      prefix={
        currency?.symbol ? (
          <span className="GeckoUIRHFCurrencyInput__currency-symbol">{currency.symbol}</span>
        ) : null
      }
      suffix={
        currency?.code ? (
          <span className="GeckoUIRHFCurrencyInput__currency-code">{currency.code}</span>
        ) : null
      }
      transform={{ input: toThousandsSeparatorFormat }}
      {...rest}
      strict
    />
  );
};

RHFCurrencyInput.displayName = "RHFCurrencyInput";

export default RHFCurrencyInput;
