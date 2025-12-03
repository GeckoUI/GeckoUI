import type { PropsWithChildren, ReactElement } from "react";

export interface SelectMenuProps
  extends PropsWithChildren,
    Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "style"> {}

export type SelectMenuElement = ReactElement<SelectMenuProps>;
