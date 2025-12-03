import type { CalendarActiveProps } from "../Calendar";
import type { CalendarHeaderProps } from "../CalendarHeader";

export interface MonthPickerProps extends CalendarHeaderProps, CalendarActiveProps {
  /**
   * Callback to handle month selection
   * */
  onSelectMonth?: (month: number) => void;
}
