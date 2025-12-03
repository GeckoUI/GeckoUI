import { useEffect, useRef, useState } from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";

import { useClickOutside, useEscListener } from "../../hooks";
import { classNames } from "../../utils/classNames";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import type { DialogOptions } from "./Dialog.types";
import { DIALOG_CONTAINER_ID } from "./DialogContainer";

let root: Root | null = null;
let dismissCallback: (() => void) | null = null;

const dismiss = () => {
  if (!root) {
    console.warn("Dialog is not mounted.");
    return;
  }

  if (dismissCallback) {
    dismissCallback();
  }
};

const show = (options: DialogOptions) => {
  const el = document.getElementById(DIALOG_CONTAINER_ID);

  if (!el) {
    throw new Error("Confirm Dialog container not found. Ensure `<GeckoUIPortal />` is mounted.");
  }

  root = createRoot(el);

  (document.activeElement as HTMLElement)?.blur();

  root.render(<DialogContent {...options} />);
};

function DialogContent({
  content,
  className,
  dismissOnEsc = true,
  dismissOnOutsideClick = true,
  ...rest
}: DialogOptions) {
  const dataAttributes = Object.keys(rest).reduce<Record<string, string>>((acc, key) => {
    if (key.startsWith("data-")) {
      acc[key] = rest[key as `data-${string}`];
    }

    return acc;
  }, {});

  const ref = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<"entering" | "open" | "closing">("entering");

  const handleDismiss = () => {
    setAnimationState("closing");
    setTimeout(() => {
      if (root) {
        root.unmount();
        root = null;
        dismissCallback = null;
      }
    }, 300);
  };

  useEffect(() => {
    dismissCallback = handleDismiss;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimationState("open");
      });
    });

    return () => {
      dismissCallback = null;
    };
  }, []);

  useEscListener(dismissOnEsc ? dismiss : undefined);

  useClickOutside(dismissOnOutsideClick ? dismiss : undefined, [ref]);

  return (
    <div className="GeckoUIDialog" data-state={animationState} {...dataAttributes}>
      <div className="GeckoUIDialog__backdrop">
        <div ref={ref} className={classNames("GeckoUIDialog__dialog", className)}>
          <DynamicComponentRenderer component={content} dismiss={dismiss} />
        </div>
      </div>
    </div>
  );
}

/**
 * Dialog is a lightweight, imperative modal component that renders content in a centered overlay.
 * It serves as the foundational layer for more complex dialog patterns like ConfirmDialog.
 *
 * The component automatically handles focus management, escape key dismissal, and click-outside
 * behavior. Content can be provided as a React component or render function that receives
 * a dismiss callback for programmatic control.
 *
 * @example
 * Image lightbox with custom controls:
 *
 * ```tsx
 * const openImageViewer = (imageUrl: string) => {
 *   Dialog.show({
 *     content: ({ dismiss }) => (
 *       <div className="relative">
 *         <img src={imageUrl} alt="Preview" className="max-w-4xl" />
 *         <button
 *           onClick={dismiss}
 *           className="absolute top-4 right-4"
 *         >
 *           ✕
 *         </button>
 *       </div>
 *     ),
 *     className: "bg-transparent shadow-none",
 *     dismissOnEsc: true,
 *     dismissOnOutsideClick: true
 *   });
 * };
 * ```
 *
 * @example
 * Form modal with data submission:
 *
 * ```tsx
 * const showUserForm = (userId?: string) => {
 *   Dialog.show({
 *     content: ({ dismiss }) => {
 *       const [formData, setFormData] = useState({});
 *
 *       const handleSubmit = async () => {
 *         await saveUser(userId, formData);
 *         dismiss();
 *         showSuccessToast("User saved");
 *       };
 *
 *       return (
 *         <UserForm
 *           data={formData}
 *           onChange={setFormData}
 *           onSubmit={handleSubmit}
 *           onCancel={dismiss}
 *         />
 *       );
 *     },
 *     className: "max-w-2xl p-6",
 *     dismissOnEsc: false,
 *     dismissOnOutsideClick: false
 *   });
 * };
 * ```
 *
 * @example
 * Video player modal with tracking:
 *
 * ```tsx
 * Dialog.show({
 *   content: () => (
 *     <VideoPlayer
 *       src="/tutorial.mp4"
 *       autoPlay
 *       onEnded={() => {
 *         trackAnalytics("video_completed");
 *         Dialog.dismiss();
 *       }}
 *     />
 *   ),
 *   className: "w-screen h-screen max-w-none",
 *   dismissOnEsc: true,
 *   "data-video-modal": "true"
 * });
 * ```
 *
 * @example
 * Loading state with external dismissal:
 *
 * ```tsx
 * // Show loading dialog
 * Dialog.show({
 *   content: () => <LoadingSpinner text="Processing payment..." />,
 *   className: "w-64",
 *   dismissOnEsc: false,
 *   dismissOnOutsideClick: false
 * });
 *
 * // Dismiss from anywhere after async operation
 * await processPayment();
 * Dialog.dismiss();
 * ```
 *
 * @note
 * For dialogs requiring user confirmation with standardized action buttons,
 * consider using the `ConfirmDialog` component instead, which provides a
 * more opinionated interface for confirmation workflows.
 */
const Dialog = { show, dismiss };

export default Dialog;
