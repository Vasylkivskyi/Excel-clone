import { capitalize } from './utils';

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`;
}

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root element provided to DOMListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      const name = this.name || '';
      if (!this[method]) {
        throw new Error(`Method ${method} is not defined for ${name} component`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
