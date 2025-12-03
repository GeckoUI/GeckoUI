export function isInsideShadowDOM(node: Node): boolean {
  if (!window || !window.ShadowRoot) return false;

  const rootNode = node?.getRootNode?.();
  return rootNode instanceof ShadowRoot;
}
