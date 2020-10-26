import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';
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
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      console.log($parent.data);
      const coordinates = $parent.getCoordinates();
      document.onmousemove = (e) => {
        const delta = e.pageX - coordinates.right;
        const value = coordinates.width + delta;
        $parent.$el.style.width = `${value}px`;

        // TODO need to make optimization
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
          // eslint-disable-next-line no-param-reassign
          .forEach((el) => { el.style.width = `${value}px`; });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}

export default Table;
