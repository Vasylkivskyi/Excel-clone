import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { resize } from './table.resize';
import { createTable } from './table.template';
import { shouldResize, isACell, selectGroup } from './table.functions';
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
    } else if (isACell(event)) {
      if (selectGroup(event)) {
        console.log('id', this.selection.current.id());
        // this.selection.selectGroup($(event.target));
      } else {
        this.selection.select($(event.target));
      }
    }
  }
}

export default Table;
