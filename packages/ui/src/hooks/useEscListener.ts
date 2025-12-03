import { useEffect } from "react";

/**
 * Reuseable that listens to the `Escape` key press event on the document and calls the callback function when the event is triggered.
 * This hooks won't trigger the callback if the focus is on an input or textarea element.
 * This hooks will also take care of removing the event listener when the component is unmounted.
 *
 * Usage:
 * ```js
 * const MyDrawer = () => {
 *  const closeDrawer = () => console.log("Drawer closed");
 *
 *  useDocumentEscListener(closeDrawer);
 * }
 * ```
 * */
const useEscListener = (callback?: () => void) => {
  useEffect(() => {
    if (!callback) return;

    const dismissListener = (e: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- To handle the event target as any
      const node = e.target as any;
      if (node.nodeName === "INPUT" || node.nodeName === "TEXTAREA") return;
      if (node.isContentEditable) return;

      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", dismissListener);

    return () => {
      document.removeEventListener("keydown", dismissListener);
    };
  }, [callback]);
};

export default useEscListener;
