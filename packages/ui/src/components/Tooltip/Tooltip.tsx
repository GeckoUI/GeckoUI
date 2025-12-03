import * as RTooltip from "@radix-ui/react-tooltip";
import type { FC } from "react";

import { classNames } from "../../utils/classNames";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import type { TooltipProps } from "./Tooltip.types";

/**
 * Tooltip displays contextual information in a floating overlay when users hover over or focus on an element.
 * Built on Radix UI, it provides accessible tooltips with customizable positioning, delays, and styling.
 * Returns children unchanged if no content is provided.
 *
 * @example
 * Icon button with helpful hint:
 *
 * ```tsx
 * <Tooltip content="Add new item" side="right" delayDuration={300}>
 *   <button className="p-2">
 *     <PlusIcon />
 *   </button>
 * </Tooltip>
 * ```
 *
 * @example
 * Complex tooltip content:
 *
 * ```tsx
 * <Tooltip
 *   content={
 *     <div>
 *       <strong>Premium Feature</strong>
 *       <p>Upgrade to access this feature</p>
 *     </div>
 *   }
 *   backgroundColor="#1f2937"
 *   sideOffset={10}
 * >
 *   <LockIcon />
 * </Tooltip>
 * ```
 *
 * @example
 * Bottom-positioned with custom delay:
 *
 * ```tsx
 * <Tooltip
 *   content="Last updated: 2 hours ago"
 *   side="bottom"
 *   delayDuration={500}
 * >
 *   <span>Status: Active</span>
 * </Tooltip>
 * ```
 */
const Tooltip: FC<TooltipProps> = ({
  children,
  delayDuration = 700,
  content,
  className,
  triggerClassName,
  triggerAsChild = false,
  backgroundColor = "#4b5563",
  side = "top",
  sideOffset = 5
}) => {
  if (!content) return children;

  return (
    <RTooltip.Provider delayDuration={delayDuration}>
      <RTooltip.Root>
        <RTooltip.Trigger
          asChild={triggerAsChild}
          className={classNames(!triggerAsChild && "GeckoUITooltip__trigger", triggerClassName)}
          role="tooltip"
          type="button">
          {children}
        </RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            side={side}
            className={classNames("GeckoUITooltip", className)}
            sideOffset={sideOffset}
            role="tooltip"
            style={{ backgroundColor }}>
            <DynamicComponentRenderer component={content} />
            {(side === "top" || side === "bottom") && (
              <RTooltip.Arrow fill={backgroundColor} className="GeckoUITooltip__arrow" />
            )}
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
};

export default Tooltip;
