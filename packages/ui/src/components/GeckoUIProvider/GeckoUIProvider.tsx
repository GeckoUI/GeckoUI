import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Toaster } from "sonner";

import { useClickOutside, useEscListener } from "../../hooks";
import { classNames } from "../../utils/classNames";
import { Drawer } from "../Drawer";
import { DynamicComponentRenderer } from "../DynamicComponentRenderer";
import type { GeckoUIProviderProps } from "./GeckoUIProvider.types";
import type { DialogEntry, DrawerEntry, OverlayEntry } from "./overlay-store";
import { overlayStore } from "./overlay-store";

const emptySubscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

interface DialogEntryRendererProps extends DialogEntry {
  isTop: boolean;
}

function DialogEntryRenderer({ id, options, isTop }: DialogEntryRendererProps) {
  const {
    content,
    className,
    dismissOnEsc = true,
    dismissOnOutsideClick = true,
    ...rest
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<"entering" | "open" | "closing">("entering");

  const handleDismiss = useCallback(() => {
    setAnimationState("closing");
    setTimeout(() => overlayStore.remove(id), 300);
  }, [id]);

  useEffect(() => {
    const unregister = overlayStore.registerDismiss(id, handleDismiss);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimationState("open");
      });
    });
    return unregister;
  }, [id, handleDismiss]);

  useEscListener(dismissOnEsc && isTop ? handleDismiss : undefined);
  useClickOutside(dismissOnOutsideClick && isTop ? handleDismiss : undefined, [ref]);

  const dataAttributes = Object.keys(rest).reduce<Record<string, string>>((acc, key) => {
    if (key.startsWith("data-")) {
      acc[key] = rest[key as `data-${string}`];
    }
    return acc;
  }, {});

  return (
    <div className="GeckoUIDialog" data-state={animationState} {...dataAttributes}>
      <div className="GeckoUIDialog__backdrop">
        <div ref={ref} className={classNames("GeckoUIDialog__dialog", className)}>
          <DynamicComponentRenderer
            component={content}
            dismiss={() => overlayStore.dismiss(id)}
            isTop={isTop}
          />
        </div>
      </div>
    </div>
  );
}

interface DrawerEntryRendererProps extends DrawerEntry {
  isTop: boolean;
}

function DrawerEntryRenderer({ id, node, options, isTop }: DrawerEntryRendererProps) {
  const [open, setOpen] = useState(true);

  const handleDismiss = useCallback(() => {
    setOpen(false);
    setTimeout(() => overlayStore.remove(id), 300);
  }, [id]);

  useEffect(() => {
    return overlayStore.registerDismiss(id, handleDismiss);
  }, [id, handleDismiss]);

  return (
    <Drawer
      {...options}
      open={open}
      handleClose={handleDismiss}
      dismissOnEscape={options.dismissOnEscape !== false && isTop}
      allowClickOutside={!!(options.allowClickOutside && isTop)}>
      {node}
    </Drawer>
  );
}

/**
 * GeckoUIProvider must wrap your application tree (below your own context providers).
 *
 * It owns the overlay stack for `Dialog.show()` / `Drawer.show()` and renders each
 * open overlay via `ReactDOM.createPortal` so that React context flows into overlay
 * content. It also renders the sonner `<Toaster>`.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { GeckoUIProvider } from "@geckoui/geckoui";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <AuthProvider>
 *           <GeckoUIProvider>
 *             {children}
 *           </GeckoUIProvider>
 *         </AuthProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function GeckoUIProvider({ children, toastOptions = {} }: GeckoUIProviderProps) {
  const mounted = useIsMounted();
  const entries = useSyncExternalStore<OverlayEntry[]>(
    overlayStore.subscribe,
    overlayStore.getSnapshot,
    () => []
  );
  const topId = entries[entries.length - 1]?.id;
  const { style, ...restToastOptions } = toastOptions;

  return (
    <>
      {children}
      {mounted &&
        entries.map((entry) =>
          createPortal(
            entry.type === "dialog" ? (
              <DialogEntryRenderer key={entry.id} {...entry} isTop={entry.id === topId} />
            ) : (
              <DrawerEntryRenderer key={entry.id} {...entry} isTop={entry.id === topId} />
            ),
            document.body,
            entry.id
          )
        )}
      <Toaster
        position="bottom-right"
        style={
          {
            "--normal-bg": "var(--color-surface-primary)",
            "--normal-text": "var(--color-text-primary)",
            "--normal-border": "var(--color-border-primary)",
            ...style
          } as React.CSSProperties
        }
        {...restToastOptions}
      />
    </>
  );
}

export default GeckoUIProvider;
