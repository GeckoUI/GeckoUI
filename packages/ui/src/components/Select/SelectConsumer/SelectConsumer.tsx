import type { ReactNode } from "react";

import { useSelect } from "../useSelect";
import type { SelectConsumerProps } from "./SelectConsumer.types";

export const SelectConsumer = <T,>({ render }: SelectConsumerProps<T>): ReactNode => {
  const value = useSelect<T>();

  return render(value);
};

SelectConsumer.displayName = "SelectConsumer";
