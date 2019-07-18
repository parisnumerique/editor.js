import Module from '../../__module';
import {Toolbar} from '../../../../types/api';

/**
 * @class ToolbarAPI
 * Provides methods for working with the Toolbar
 */
export default class ToolbarAPI extends Module {
  /**
   * Available methods
   * @return {Toolbar}
   */
  get methods(): Toolbar {
    return {
      close: () => this.close(),
      open: () => this.open(),
      showPlus: () => this.showPlus(),
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
