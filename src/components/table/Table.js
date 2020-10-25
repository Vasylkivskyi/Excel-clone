import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';

class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  onClick() {
    console.log('click');
  }

  onMousedown() {
    console.log('mousedown');
  }

  onMousemove() {
    console.log('mousemove');
  }

  onMouseup() {
    console.log('mouseup');
  }

  toHTML() {
    return createTable(25);
  }
}

export default Table;
