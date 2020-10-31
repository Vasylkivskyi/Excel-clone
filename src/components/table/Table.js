import { ExcelComponent } from '@core/ExcelComponent';
import { resize } from './table.resize';
import { createTable } from './table.template';
import { shouldResize } from './table.functions';

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
    if (shouldResize(event)) {
      resize(this.$root, event);
    }
  }
}

export default Table;
