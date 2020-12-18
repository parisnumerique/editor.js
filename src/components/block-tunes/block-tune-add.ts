/**
 * @class AddTune
 * @classdesc Editor's default tune - Add new block after highlighted one
 */

import $ from '../dom';
import { API, BlockTune } from '../../../types';

/**
 *
 */
export default class AddTune implements BlockTune {
  /**
   * Property that contains Editor.js API methods
   *
   * @see {@link docs/api.md}
   */
  private readonly api: API;

  /**
   * Styles
   *
   * @type {{wrapper: string}}
   */
  private CSS = {
    button: 'ce-settings__button',
    wrapper: 'ce-tune-add',
  };

  /**
   * AddTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api }) {
    this.api = api;
  }

  /**
   * Return 'add' button
   *
   * @returns {HTMLElement}
   */
  public render(): HTMLElement {
    const addButton = $.make('div', [this.CSS.button, this.CSS.wrapper], {});

    addButton.appendChild($.svg('plus', 14, 14));
    this.api.listeners.on(
      addButton,
      'click',
      (event) => this.handleClick(event as MouseEvent, addButton),
      false
    );

    /**
     * Enable tooltip module on button
     */
    this.api.tooltip.onHover(addButton, this.api.i18n.t('Add'));

    return addButton;
  }

  /**
   * Handle clicks on 'add' button
   *
   * @param {MouseEvent} event - click event
   * @param {HTMLElement} button - clicked button
   */
  public handleClick(event: MouseEvent, button: HTMLElement): void {
    // insert new block after highlighted one
    this.api.blocks.insert();
    // set focus to inserted one
    this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
    // show Plus button
    this.api.toolbar.showPlus();
    // hide tooltip
    this.api.tooltip.hide();
  }
}
