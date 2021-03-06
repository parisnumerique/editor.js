import { Toolbar } from '../../../../types/api';
import Module from '../../__module';

/**
 * @class ToolbarAPI
 * Provides methods for working with the Toolbar
 */
export default class ToolbarAPI extends Module {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  public get methods(): Toolbar {
    return {
      close: (): void => this.close(),
      open: (): void => this.open(),
      showPlus: (): void => this.showPlus(),
    };
  }

  /**
   * Open toolbar
   */
  public open(): void {
    this.Editor.Toolbar.open();
  }

  /**
   * Close toolbar and all included elements
   */
  public close(): void {
    this.Editor.Toolbar.close();
  }

  /**
   * Show plus button on current block
   */
  public showPlus(): void {
    this.Editor.BlockManager.highlightCurrentNode();
    this.Editor.Toolbar.move();
    this.Editor.Toolbar.plusButton.show();
  }
}
