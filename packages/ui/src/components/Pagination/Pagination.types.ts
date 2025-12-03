export interface PaginationProps {
  /**
   * Current page number.
   */
  currentPage: number;

  /**
   * Total number of pages.
   */
  totalPages: number;

  /**
   * Callback function to handle the page change event.
   */
  onChange: (page: number) => void;

  /**
   * Custom styling(classname) to apply to the component.
   */
  className?: string;
}
