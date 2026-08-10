export function isAsyncFn(fn: unknown): boolean {
  if (typeof fn !== "function") return false;

  return fn.constructor?.name === "AsyncFunction";
}
