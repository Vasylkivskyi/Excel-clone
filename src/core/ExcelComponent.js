import { DOMListener } from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // returns component layout
  toHTML() {
    return '';
  }

  init() {
    // Current method is from DomListener parent class
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
