export interface CalendarHeaderProps {
  /** Callback to handle left arrow click */
  onClickLeftArrow?: () => void;

  /** Callback to handle right arrow click */
  onClickRightArrow?: () => void;

  /** Header text */
  header?: string;

  /** Callback to handle header click */
  onClickHeader?: () => void;
}
