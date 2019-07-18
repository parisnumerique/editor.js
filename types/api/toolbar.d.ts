/**
 * Describes Toolbar API methods
 */
export interface Toolbar {
  /**
   * Closes Toolbar
   */
  close(): void;

  /**
   * Opens Toolbar
   */
  open(): void;

  /**
   * Show Plus button
   */
  showPlus(): void;
}
