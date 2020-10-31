import { ExcelComponent } from '@core/ExcelComponent';
import { resize } from './table.resize';
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
      resize(event, this.$root);
    }
  }
}

export default Table;
