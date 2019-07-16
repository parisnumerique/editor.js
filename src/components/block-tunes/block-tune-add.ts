/**
 * @class AddTune
 * @classdesc Editor's default tune that moves up selected block
 */
import $ from '../dom';
import {API, BlockTune} from '../../../types';

export default class AddTune implements BlockTune {

  /**
   * Property that contains Editor.js API methods
   * @see {api.md}
   */
  private readonly api: API;

  /**
   * Styles
   * @type {{wrapper: string}}
   */
  private CSS = {
    button: 'ce-settings__button',
    wrapper: 'ce-tune-add',
  };

  /**
   * AddTune constructor
   *
   * @param {{api: API}} api
   */
  public constructor({api}) {
    this.api = api;
  }

  /**
   * Create "Add" button and add click event listener
   * @returns [HTMLElement}
   */
  public render(): HTMLElement {
    const addButton = $.make('div', [this.CSS.button, this.CSS.wrapper], {});
    addButton.appendChild($.svg('plus', 14, 14));
    this.api.listeners.on(
      addButton,
      'click',
      (event) => this.handleClick(event as MouseEvent, addButton),
      false,
      );
    return addButton;
  }

  /**
   * Add empty block after current block
   * @param {MouseEvent} event
   * @param {HTMLElement} button
   */
  public handleClick(event: MouseEvent, button: HTMLElement): void {
    this.api.blocks.insert();

    this.api.toolbar.close();

    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
    this.api.caret.setToBlock(currentBlockIndex);
  }
}
