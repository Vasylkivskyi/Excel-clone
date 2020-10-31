import { ExcelComponent } from '@core/ExcelComponent';
import { resize } from '@core/utils';
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
    resize(event, this.$root);
  }
}

export default Table;
