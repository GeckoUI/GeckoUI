import mermaid from "mermaid";
import { type FC, useEffect } from "react";
import { Toaster } from "sonner";

import { DialogContainer } from "../Dialog/DialogContainer";
import { DrawerContainer } from "../Drawer/DrawerContainer";
import type { GeckoUIPortalProps } from "./GeckoUIPortal.types";

/**
 * GeckoUIPortal is a container component that wraps the Toast, ConfirmDialog, and other components that need to mount at the top level of the application.
 *
 * Please refer to [MermaidOptions](https://mermaid.js.org/config/schema-docs/config.html#mermaid-config-schema) to see the available options for the `mermaidOptions` prop.
 * @example
 *
 * ```js
 * import { GeckoUIPortal } from '@geckoui/geckoui';
 *
 * renderApp(
 *  <>
 *   <App />
 *   <GeckoUIPortal
 *      toastOptions={{
 *        position: 'bottom-right',
 *        ... other options
 *      }},
 *      mermaidConfig={{
 *        startOnLoad: true,
 *      }}
 *   />
 *  </>
 * )
 * ```
 * */
const GeckoUIPortal: FC<GeckoUIPortalProps> = ({ toastOptions = {}, mermaidConfig = {} }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      suppressErrorRendering: true,
      ...mermaidConfig
    });
  }, [mermaidConfig]);

  const { style, ...restToastOptions } = toastOptions;

  return (
    <>
      <Toaster
        position="bottom-right"
        style={
          {
            "--normal-bg": "rgb(var(--gecko-ui-surface-primary))",
            "--normal-text": "rgb(var(--gecko-ui-text-primary))",
            "--normal-border": "rgb(var(--gecko-ui-border-primary))",
            ...style
          } as React.CSSProperties
        }
        {...restToastOptions}
      />
      <DrawerContainer />
      <DialogContainer />
    </>
  );
};

export default GeckoUIPortal;
