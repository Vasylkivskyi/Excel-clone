export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No root element provided to DOMListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    // eslint-disable-next-line no-console
    console.log('Listeners: ', this.listeners);
  }

  removeDomListeners() {

  }
}
