import type { DateRange } from "../../Calendar";
import type { DateRangeInputProps } from "../../DateRangeInput";
import type { RHFBaseProps } from "../RHF.types";

export interface RHFDateRangeInputProps
  extends RHFBaseProps,
    Omit<DateRangeInputProps, "hasError" | "value" | "onChange"> {
  disabled?: boolean;
  onChange?: (value: DateRange | null) => void;
}
