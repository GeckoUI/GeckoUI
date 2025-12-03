import type { ReactNode } from "react";
import { isValidElement } from "react";

/**
 * Check ReactNode is a valid element and has a specific displayName
 * Usage:
 * ```js
 * const isMyElement = hasDisplayName("MyElement");
 *
 * nodeArray.filter(isMyElement) // filter out all elements that are not MyElement
 * ```
 * */
export const hasDisplayName = (displayName: string) => (e: ReactNode) => {
  return (
    isValidElement(e) &&
    (e.type as unknown as { displayName?: string })?.displayName === displayName
  );
};
