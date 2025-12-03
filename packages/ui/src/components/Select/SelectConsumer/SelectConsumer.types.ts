import type { ReactNode } from "react";

import type { SelectContextProps } from "../Select/Select.types";

export interface SelectConsumerProps<T> {
  render: (props: SelectContextProps<T>) => ReactNode;
}
