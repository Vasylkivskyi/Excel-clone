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
      const $target = $(event.target);
      if (selectGroup(event)) {
        const target = $target.id(true);
        const current = this.selection.current.id(true);
        // eslint-disable-next-line no-use-before-define
        const cols = range(target.col, current.col);
        // eslint-disable-next-line no-use-before-define
        const rows = range(target.row, current.row);
        const ids = cols.reduce((acc, col) => {
          rows.forEach((row) => acc.push(`${row}:${col}`));
          return acc;
        }, []);
        console.log(ids);
      } else {
        this.selection.select($(event.target));
      }
    }
  }
}

export default Table;

function range(start, end) {
  if (start > end) {
    // eslint-disable-next-line no-param-reassign
    [end, start] = [start, end];
  }
  // eslint-disable-next-line no-array-constructor
  return new Array(end - start + 1)
    .fill('')
    .map((_, index) => start + index);
}
