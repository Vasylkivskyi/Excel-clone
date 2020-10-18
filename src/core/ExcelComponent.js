import { DOMListener } from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  // returns component layout
  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }
}
