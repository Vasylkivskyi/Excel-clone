import { ExcelComponent } from '@core/ExcelComponent';

class Toolbar extends ExcelComponent {
  constructor() {
    super();
    this.toHTML = this.toHTML.bind(this.toHTML);
  }

  toHTML() {
    return '<h1>Toolbar</h1>';
  }
}

export default Toolbar;
