export function $(selector) {
  // eslint-disable-next-line no-use-before-define
  return new Dom(selector);
}

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

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        row: +parsed[0],
        col: +parsed[1],
      };
    }
    return this.data.id;
  }

  clear() {
    this.html = '';
    return this;
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  focus() {
    this.$el.focus();
    return this;
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

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
  }
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
