import { $ } from '@core/dom';

class Excel {
  constructor(selector, options) {
    this.$el = $(selector); // main div with id #app
    this.components = options.components || []; // array of Header, Table, Toolbar, Formula
  }

  getRoot() {
    const $root = $.create('div', 'excel'); // creates main excel page div with class excel
    this.components.forEach((Component) => {
      // creates root div for excel component (<div class="header"></>)
      const $el = $.create('div', Component.className);
      // creates component html (<button></button>)
      const component = new Component($el);
      // append component html to root div (<div class="header"><button>click</button></div>)
      $el.html(component.toHTML());
      // append component (header with all inner html) to root div with class excell
      $root.append($el);
    });
    // returns whole excel component
    return $root;
  }

  // inserts excel component in div with class 'app'
  render() {
    this.$el.append(this.getRoot());
  }
}

export default Excel;
