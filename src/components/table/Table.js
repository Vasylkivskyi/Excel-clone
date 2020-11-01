import { ExcelComponent } from '@core/ExcelComponent';
import { resize } from './table.resize';
import { createTable } from './table.template';
import { shouldResize } from './table.functions';
import TableSelection from './TableSelection';

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

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resize(this.$root, event);
    }
  }
}

export default Table;
