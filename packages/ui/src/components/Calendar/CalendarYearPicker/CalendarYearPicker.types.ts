import type { CalendarActiveProps } from "../Calendar";
import type { CalendarHeaderProps } from "../CalendarHeader";

export interface CalendarYearPickerProps
  extends CalendarHeaderProps,
    Omit<CalendarActiveProps, "activeMonth"> {
  /**
   * Callback to handle year selection
   * */
  onSelectYear?: (year: number) => void;
}
