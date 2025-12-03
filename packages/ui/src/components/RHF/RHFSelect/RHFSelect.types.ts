import type { JSX } from "react";

import type { MultiSelectProps, SingleSelectProps } from "../../Select";
import type { RHFBaseProps } from "../RHF.types";

interface RHFSingleSelectProps<T>
  extends Omit<SingleSelectProps<T>, "value" | "onChange">,
    RHFBaseProps {
  onChange?: (value: T) => void;
}
interface RHFMultiSelectProps<T>
  extends Omit<MultiSelectProps<T>, "value" | "onChange">,
    RHFBaseProps {
  onChange?: (value: T[]) => void;
}

export type RHFSelectProps<T> = RHFSingleSelectProps<T> | RHFMultiSelectProps<T>;

export interface RHFSelectOverload {
  displayName: string;
  <T>(props: RHFSingleSelectProps<T>): JSX.Element;
  <T>(props: RHFMultiSelectProps<T>): JSX.Element;
}
