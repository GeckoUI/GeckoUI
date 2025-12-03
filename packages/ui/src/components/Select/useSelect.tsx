import { createContext, useContext } from "react";

import type { SelectContextProps } from "./Select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- disable
export const SelectContext = createContext<SelectContextProps<any> | undefined>(undefined);

export const useSelect = <T = unknown,>() => {
  const context = useContext<SelectContextProps<T> | undefined>(SelectContext);

  if (context === undefined) {
    throw new Error("SelectContext must be used within a SelectProvider");
  }

  return context;
};
