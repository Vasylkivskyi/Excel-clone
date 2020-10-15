import { DOMListener } from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  // returns component layout
  toHTML() {
    return '<h1>toolbar</h1>';
  }
}
