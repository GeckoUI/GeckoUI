import { type FC } from "react";
import { Toaster } from "sonner";

import { DialogContainer } from "../Dialog/DialogContainer";
import { DrawerContainer } from "../Drawer/DrawerContainer";
import type { GeckoUIPortalProps } from "./GeckoUIPortal.types";

const GeckoUIPortal: FC<GeckoUIPortalProps> = ({ toastOptions = {} }) => {
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
