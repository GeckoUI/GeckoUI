import type { FC } from "react";

import { classNames } from "../../utils/classNames";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import { Tooltip } from "../Tooltip";
import type { LabelProps } from "./Label.types";

/**
 * A label component for input fields with support for required indicators and tooltips.
 *
 * When the `required` prop is true, displays a red asterisk (*) after the label text.
 * When the `tooltip` prop is provided, displays a tooltip icon with the specified content.
 * You can customize the tooltip icon using the `tooltipIcon` prop.
 *
 * @example
 * ```tsx
 * // Basic label
 * <Label htmlFor="username">Username</Label>
 *
 * // Required field
 * <Label htmlFor="email" required>
 *   Email Address
 * </Label>
 *
 * // With tooltip
 * <Label
 *   htmlFor="password"
 *   tooltip="Password must be at least 8 characters long"
 * >
 *   Password
 * </Label>
 *
 * // Required with tooltip
 * <Label
 *   htmlFor="apiKey"
 *   required
 *   tooltip="You can find your API key in the settings page"
 * >
 *   API Key
 * </Label>
 *
 * // Custom tooltip icon and styling
 * <Label
 *   htmlFor="info"
 *   tooltip="Additional information"
 *   tooltipIcon={InfoIcon}
 *   tooltipBackgroundColor="blue"
 *   tooltipClassName="custom-tooltip"
 * >
 *   Information
 * </Label>
 * ```
 */
const Label: FC<LabelProps> = ({
  className,
  required,
  tooltip,
  tooltipIcon,
  tooltipBackgroundColor,
  tooltipClassName,
  children,
  ...rest
}) => {
  return (
    <label className={classNames("GeckoUILabel", className)} {...rest}>
      {children}
      {required ? <span className="GeckoUILabel__required-indicator">*</span> : null}
      {tooltip ? (
        <Tooltip
          backgroundColor={tooltipBackgroundColor}
          className={classNames("GeckoUILabel__tooltip", tooltipClassName)}
          content={tooltip}
          delayDuration={0}>
          {tooltipIcon ? (
            <DynamicComponentRenderer component={tooltipIcon} />
          ) : (
            <div className="GeckoUILabel__tooltip-icon" />
          )}
        </Tooltip>
      ) : null}
    </label>
  );
};

export default Label;
