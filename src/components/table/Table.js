import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { resize } from './table.resize';
import { createTable } from './table.template';
import {
  shouldResize, isACell, selectGroup, matrix,
} from './table.functions';
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
      const $target = $(event.target);
      if (selectGroup(event)) {
        const $cells = matrix($target, this.selection.current).map((id) => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($(event.target));
      }
    }
  }
}

export default Table;
