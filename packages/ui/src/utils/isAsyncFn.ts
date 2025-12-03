export function isAsyncFn(fn: unknown): boolean {
  try {
    if (typeof fn !== "function") return false;

    if (fn.constructor.name === "AsyncFunction") return true;

    const result = fn();
    return result instanceof Promise;
  } catch {
    return false;
  }
}
