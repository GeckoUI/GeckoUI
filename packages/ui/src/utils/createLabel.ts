import { type ReactElement } from "react";

import isNil from "./isNil";

function createLabel(item: unknown) {
  if (typeof item === "function") {
    throw new Error("You cannot pass a function as an dropdown item");
  }

  if (Array.isArray(item)) {
    const value = item[0];

    if (isNil(value)) return value;

    if (typeof value === "object") {
      return createLabel(value);
    }

    return String(value);
  }

  if (typeof item === "object") {
    if (item && "label" in item) {
      return item.label as ReactElement;
    }

    const values = Object.values(item as Record<string, unknown>);

    if (!values.length) return String(item);
    const value = values[0];

    if (typeof value === "object") {
      return createLabel(value);
    }

    return String(value);
  }

  return String(item);
}

export default createLabel;
