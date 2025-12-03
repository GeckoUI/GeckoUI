import type { ButtonProps } from "../Button/Button.types";

export interface LoadingButtonProps extends ButtonProps {
  /**
   * If `true`, the button will be displayed in a loading state.
   * */
  loading?: boolean;

  /**
   * The position of the loading spinner.
   * */
  spinnerPosition?: "start" | "end";

  /**
   * The text to display when the button is in the loading state.
   * */
  loadingText?: string;
}
