import { overlayStore } from "../GeckoUIProvider/overlay-store";
import type { DialogOptions } from "./Dialog.types";

const show = (options: DialogOptions): string => {
  (document.activeElement as HTMLElement)?.blur();
  return overlayStore.pushDialog(options);
};

const dismiss = (id?: string): void => {
  overlayStore.dismiss(id);
};

/**
 * Dialog is a lightweight, imperative modal component that renders content in a centered overlay.
 * It serves as the foundational layer for more complex dialog patterns like ConfirmDialog.
 *
 * The component automatically handles focus management, escape key dismissal, and click-outside
 * behavior. Multiple dialogs can be stacked — each `show()` call returns an id you can pass to
 * `dismiss(id)` to close a specific dialog; calling `dismiss()` with no argument closes the
 * topmost overlay.
 *
 * Requires `<GeckoUIProvider>` to wrap your app so that context flows into overlay content.
 *
 * @example
 * Basic dialog:
 *
 * ```tsx
 * Dialog.show({
 *   content: ({ dismiss }) => (
 *     <div>
 *       <h3>Hello</h3>
 *       <Button onClick={dismiss}>Close</Button>
 *     </div>
 *   )
 * });
 * ```
 *
 * @example
 * Stacking two dialogs:
 *
 * ```tsx
 * const id = Dialog.show({
 *   content: ({ dismiss }) => (
 *     <div>
 *       <p>First dialog</p>
 *       <Button onClick={() => Dialog.show({ content: () => <p>Second dialog</p> })}>
 *         Open another
 *       </Button>
 *       <Button onClick={dismiss}>Close this</Button>
 *     </div>
 *   )
 * });
 *
 * // Close the first dialog specifically:
 * Dialog.dismiss(id);
 * ```
 *
 * @example
 * Loading state with external dismissal:
 *
 * ```tsx
 * Dialog.show({
 *   content: () => <LoadingSpinner text="Processing payment..." />,
 *   dismissOnEsc: false,
 *   dismissOnOutsideClick: false
 * });
 *
 * await processPayment();
 * Dialog.dismiss();
 * ```
 *
 * @note
 * For dialogs requiring user confirmation with standardized action buttons,
 * consider using the `ConfirmDialog` component instead.
 */
const Dialog = { show, dismiss };

export default Dialog;
