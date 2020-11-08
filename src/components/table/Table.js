import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
import { resize } from './table.resize';
import { createTable } from './table.template';
import {
  shouldResize, isACell, selectGroup, matrix, nextSelector,
} from './table.functions';
import TableSelection from './TableSelection';

class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options,
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
    this.emitter.subscribe('test', (text) => {
      this.selection.current.text(text);
    });
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

  onKeydown(event) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Tab'];
    const { key } = event;
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();

      const id = this.selection.current.id(true);
      // eslint-disable-next-line no-use-before-define
      const $next = this.$root.find(nextSelector(key, id));
      this.selection.select($next);
    }
  }
}

export default Table;
