import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';

class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(25);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      // TODO
    }
  }
}

export default Table;
