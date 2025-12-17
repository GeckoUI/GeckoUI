import { forwardRef, useEffect, useState } from "react";

import { classNames } from "../../utils/classNames";
import "./CounterInput.scss";
import type { CounterInputProps } from "./CounterInput.types";

/**
 * A numeric input component with increment/decrement buttons.
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * <CounterInput value={count} onChange={setCount} min={0} max={10} />
 * ```
 */
const CounterInput = forwardRef<HTMLInputElement, CounterInputProps>(
  (
    {
      value,
      onChange,
      min = -Infinity,
      max = Infinity,
      step = 1,
      size = "md",
      className,
      inputClassName,
      buttonClassName,
      disabled,
      readOnly,
      editable = false,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(String(value));

    useEffect(() => {
      setInputValue(String(value));
    }, [value]);

    const clamp = (val: number) => Math.min(Math.max(val, min), max);

    const handleDecrement = () => {
      onChange(clamp(value - step));
    };

    const handleIncrement = () => {
      onChange(clamp(value + step));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      if (raw !== "" && !/^-?\d*\.?\d*$/.test(raw)) {
        return;
      }

      setInputValue(raw);

      const parsed = parseFloat(raw);
      if (!isNaN(parsed)) {
        onChange(clamp(parsed));
      }
    };

    const handleBlur = () => {
      setInputValue(String(value));
    };

    const isAtMin = value <= min;
    const isAtMax = value >= max;

    return (
      <div
        className={classNames(
          "GeckoUICounterInput",
          `GeckoUICounterInput--size-${size}`,
          disabled && "GeckoUICounterInput--disabled",
          readOnly && "GeckoUICounterInput--readonly",
          className
        )}>
        <button
          type="button"
          className={classNames(
            "GeckoUICounterInput__button",
            "GeckoUICounterInput__button--decrement",
            buttonClassName
          )}
          onClick={handleDecrement}
          disabled={disabled || readOnly || isAtMin}
          aria-label="Decrement">
          <span className="GeckoUICounterInput__icon GeckoUICounterInput__icon--minus" />
        </button>

        <input
          ref={ref}
          type="text"
          inputMode="numeric"
          className={classNames("GeckoUICounterInput__input", inputClassName)}
          value={editable ? inputValue : value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readOnly || !editable}
          {...rest}
          tabIndex={editable ? 0 : -1}
        />

        <button
          type="button"
          className={classNames(
            "GeckoUICounterInput__button",
            "GeckoUICounterInput__button--increment",
            buttonClassName
          )}
          onClick={handleIncrement}
          disabled={disabled || readOnly || isAtMax}
          aria-label="Increment">
          <span className="GeckoUICounterInput__icon GeckoUICounterInput__icon--plus" />
        </button>
      </div>
    );
  }
);

CounterInput.displayName = "CounterInput";

export default CounterInput;
