class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector) : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html = '';
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    let element = node;
    if (element instanceof Dom) {
      element = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(element);
    } else {
      this.$el.appendChild(element);
    }
    return this;
  }

  closest(selector) {
    // eslint-disable-next-line no-use-before-define
    return $(this.$el.closest(selector));
  }

  getCoordinates() {
    return this.$el.getBoundingClientRect();
  }

  get data() {
    return this.$el.dataset;
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.assign(this.$el.style, styles);
  }
}

// Function to use in other files to create Dom class instances and
// to call Dom class methods
export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  // creates new div with css class
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  // returns new instance of Dom class, now it can use append, clear & html methods
  return $(el);
};
