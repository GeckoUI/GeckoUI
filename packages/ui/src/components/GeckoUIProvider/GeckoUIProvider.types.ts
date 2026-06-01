import type { ReactNode } from "react";
import type { ToasterProps } from "sonner";

export interface GeckoUIProviderProps {
  /**
   * The app's component tree.
   *
   * Place `GeckoUIProvider` below your own context providers so overlays opened via
   * `Dialog.show()` / `Drawer.show()` can read those contexts.
   *
   * @example
   * ```tsx
   * <AuthProvider>
   *   <GeckoUIProvider>
   *     <App />
   *   </GeckoUIProvider>
   * </AuthProvider>
   * ```
   */
  children: ReactNode;

  /**
   * Options forwarded to sonner's `<Toaster>`.
   *
   * @example
   * ```tsx
   * <GeckoUIProvider toastOptions={{ duration: 3000 }}>
   *   <App />
   * </GeckoUIProvider>
   * ```
   */
  toastOptions?: ToasterProps;
}
