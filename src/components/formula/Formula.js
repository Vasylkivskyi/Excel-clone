import { ExcelComponent } from '@core/ExcelComponent';

class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    // eslint-disable-next-line
    console.log('Formula onInput: ', event.target.innerText);
    const text = event.target.innerText;
    this.emitter.emit('test', text);
  }

  onClick() {}
}
export default Formula;
