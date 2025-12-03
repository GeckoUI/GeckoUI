import type { FC } from "react";

import { BaseIconProps } from "../../icons/Icon.types";
import { classNames } from "../../utils/classNames";

/**
 * A loading spinner icon component that displays an animated circular indicator.
 *
 * The spinner uses the current text color (via `currentColor`) for its stroke,
 * making it easy to theme by changing the text color of its parent element.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Spinner />
 *
 * // With custom color
 * <Spinner className="stroke-red-500" />
 * <Spinner stroke="green" />
 *
 * // Custom size
 * <Spinner className="w-8 h-8" />
 * ```
 */
export const Spinner: FC<BaseIconProps> = ({ className, stroke = "currentColor", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="status"
      aria-label="Loading"
      stroke={stroke}
      className={classNames("GeckoUISpinnerIcon", className)}
      {...rest}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
  );
};

export default Spinner;
